/*Copyright 2017 Timofey Rechkalov <ntsdk@yandex.ru>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
   limitations under the License. */

"use strict";

((exports)=>{

    var arr = [];

    //var max = 100000;
    //var min = 10000;
    //var step = 10000;
    //var repeatNum = 6;
    var max = 120000;
    var min = 20000;
    var step = 20000;
    var repeatNum = 5;
    
    for (var i = 0; i < max; i++) {
        arr.push(Math.random());
    }
    
    function copy(arr, size){
        var arr2 = [];
        for (var i = 0; i < size; i++) {
            arr2.push(arr[i]);
        }
        return arr2;
    }
    
    var result = {
        meta: {
            max : max,
            min : min,
            step : step,
            repeatNum : repeatNum
        },
        constantParams: [{
            name: 'number upperBoundary',
            units: 'float number',
            value: 1
        },{
            name: 'number lowerBoundary',
            units: 'float number',
            value: 0
        }],
        changedParams: [],
        measuredParams: [],
        measures: {},
        version: '0.1.0'
    };
    
    exports.run = (type, progressCallback, callback)=>{
        var newRes = R.clone(result);
        newRes.meta.description = 'Experiment type ' + type;
        var measures;
        switch(type){
        case 'standard-sort':
            newRes.changedParams.push(makeParam('arraySize', 'natural number'));
            newRes.measuredParams.push(makeParam('duration_defaultSort', 'millis'));
            measures = makeMeasures(progressCallback, newRes, callback);
            break;
        case 'bubble-sort':
            newRes.changedParams.push(makeParam('arraySize', 'natural number'));
            newRes.measuredParams.push(makeParam('duration_defaultSort', 'millis'));
            newRes.measuredParams.push(makeParam('duration_bubbleSort', 'millis'));
            measures = makeMeasures(progressCallback, newRes, callback, true);
            break;
        default:
            throw new Error('Unexpected experiment type: ' + type);
        }
    }
    
    var measureSort = function(func){
        var start = performance.now();
        func();
        var end = performance.now();
        var duration = end - start; 
        return {
            duration: duration,
            raw: {
                start: start,
                end: end
            }
        }
    };
    
    function bubbleSortImpl(a){
        var swapped;
        do {
            swapped = false;
            for (var i=0; i < a.length-1; i++) {
                if (a[i] > a[i+1]) {
                    var temp = a[i];
                    a[i] = a[i+1];
                    a[i+1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
    };
    
    var makeMeasures = (progressCallback, newRes, callback, enableBubble) => {
        var measures = {};
        var i = min;
        var passId = 0;
        function nextIter(){
            if(i > max){
                newRes.measures = measures;
                setTimeout( () => callback(newRes), 0 );
                return;
            }
            
            var measureKey = i + "_" + passId;
            var measure = {
                    measureKey: measureKey,
                    passId: passId,
                    arraySize: i,
                    raw: {}
            };
            var localArr = copy(arr, i);
            var sortRes = measureSort(()=>localArr.sort());
            measure.duration_defaultSort = sortRes.duration;
            measure.raw.defaultSort = sortRes.raw;
            if(enableBubble){
                localArr = copy(arr, i);
                sortRes = measureSort(()=>bubbleSortImpl(localArr));
                measure.duration_bubbleSort = sortRes.duration;
                measure.raw.bubbleSort = sortRes.raw;
            }
            measures[measureKey] = measure;
            console.log(JSON.stringify(measure));
            progressCallback(JSON.stringify(measure));
            
            
            if(passId !== repeatNum-1){
                passId++;
            } else {
                passId = 0;
                i+=step;
            }
            setTimeout( nextIter, 0 );
        }
        setTimeout( nextIter, 0 );
    };
    
    var makeParam = (name, units) => {
        return {
            name: name,
            units: units
        }
    };
    
})(this['sortExample']={});