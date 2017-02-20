/*Copyright 2016 Timofey Rechkalov <ntsdk@yandex.ru>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
   limitations under the License. */

/*global
 Utils, DBMS
 */

"use strict";

(function(exports){

    exports.init = function() {
        listen(getEl('chartDataSelector'), 'change', onSettingsChange);
        listen(getEl('showRawData'), 'change', onSettingsChange);
        listen(getEl('showAvgData'), 'change', onSettingsChange);
        getEl('showRawData').checked = true;
        getEl('showAvgData').checked = true;
        
        exports.content = getEl('performance');
    };
    
    function paramTitle(param){
        return param.name + ", " + param.units;
    }
    
    var makeRow = R.curry(function(title, getName, getValue, key, i, arr){
        var els = [addEl(makeEl('td'), makeText(getName(key))), addEl(makeEl('td'), makeText(getValue(key)))];
        if(i==0){
            var el = addEl(makeEl('th'), makeText(title));
            setAttr(el, 'rowspan', arr.length);
            els = [el].concat(els);
        }
        return addEls(makeEl('tr'), els);
    });
    
    exports.refresh = function() {
        var table = clearEl(queryEl('#benchmark-description tbody'));
        
        DBMS.getDatabase(function(err, database){
            if(err) {Utils.handleError(err); return;}
            addEls(table, Object.keys(database.meta).sort().map(makeRow('Метаинформация', key => key, key => database.meta[key])));
            addEls(table, database.constantParams.map(makeRow('Константы', item => paramTitle(item), item => item.value)));
            addEls(table, database.changedParams.map(makeRow('Изменяемые параметры', item => paramTitle(item), item => '')));
            addEls(table, database.measuredParams.map(makeRow('Измеряемые параметры', item => paramTitle(item), item => '')));
            
            fillSelector(clearEl(getEl('chartDataSelector')), database.measuredParams.map(function(val){
                return {
                    name: val.name,
                    value: val.name,
                    selected: true
                };
            }));
            setAttr(getEl('chartDataSelector'), 'size', database.measuredParams.length);
            
            onSettingsChange();
        });
    };
    
    var onSettingsChange = function(){
        
        var measuredParamsList = nl2array(getEl('chartDataSelector').selectedOptions).map(function(item){
            return item.value;
        });
        
        DBMS.getDatabase(function(err, database){
            drawChart(database, measuredParamsList, {
                drawRaw: getEl('showRawData').checked,
                drawAvg: getEl('showAvgData').checked,
            });
        });
    };
    
    var drawChart = function (database, measuredParamsList, opts) {
        var changedParam = database.changedParams[0];
//        var measuredParam = database.measuredParams[0];
        var data = [];
        
        if(opts.drawRaw){
            var rawData = R.flatten(database.measuredParams
                    .filter(R.compose(R.contains(R.__, measuredParamsList), R.prop('name')))
                    .map(makeRawDataLines(database, changedParam)));
            data = data.concat(rawData);
        }
        
        if(opts.drawAvg){
            var avgData = R.flatten(database.measuredParams
                    .filter(R.compose(R.contains(R.__, measuredParamsList), R.prop('name')))
                    .map(makeAvgDataLines(database, changedParam)));
            data = data.concat(avgData);
        }
        
        var chart = new CanvasJS.Chart("chartContainer", {
            axisX: {
                title: paramTitle(changedParam),
                titleFontSize: 18
            },
            axisY: {
                title: paramTitle(database.measuredParams[0]),
                titleFontSize: 16
            },
            legend: {
                verticalAlign: 'bottom',
                horizontalAlign: "center"
            },

            data: data
        });

        chart.render();
    };
    
    var makeRawDataLines = R.curry(function(database, changedParam, measuredParam){
        
        var passes = R.groupBy(function(item){
            return item.passId;
        }, R.values(database.measures));
        
        var dataPoints = R.map(function(passArray){
            return passArray.map(function(item){
                return {
                    x: item[changedParam.name],
                    y: item[measuredParam.name],
                    toolTipContent: strFormat('Проход: {0}<br/> {1}: {2}<br/>{3}: {4}',[item.passId, paramTitle(changedParam), item[changedParam.name], paramTitle(measuredParam), item[measuredParam.name]])
                }
            })
        }, passes);
        
        return R.values(R.mapObjIndexed(function(array, key){
            return {
                showInLegend: true,
                legendText: measuredParam.name + " " + key,
                type: "line",
                markerType: "circle",
                markerBorderColor : "black",
                markerSize: 15,
                markerBorderThickness: 1,
                dataPoints:array 
            };
        }, dataPoints));
    });
    
    var makeAvgDataLines = R.curry(function(database, changedParam, measuredParam){
        var pointed = R.groupBy(function(item){
            return item[changedParam.name];
        }, R.values(database.measures));
        
        var avg = R.map(function(value){
            var clone = R.clone(value[0]);
            clone[measuredParam.name] = R.sum(R.ap([R.prop(measuredParam.name)], value))/value.length;
            return clone;
        }, pointed)
        
        avg = R.values(avg).map(function(item){
            return {
                x: item[changedParam.name],
                y: item[measuredParam.name],
                toolTipContent: strFormat('{0}: {1}<br/>{2}: {3}',[paramTitle(changedParam), item[changedParam.name], paramTitle(measuredParam), item[measuredParam.name]])
            }
        });
        
        return {
            showInLegend: true,
            legendText: measuredParam.name + " avg",
            type: "line",
            markerType: "circle",
            markerBorderColor : "black",
            markerSize: 30,
            markerBorderThickness: 1,
            dataPoints:avg 
        };
    });

})(this['Performance']={});