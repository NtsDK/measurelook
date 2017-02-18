/*Copyright 2016 Timofey Rechkalov <ntsdk@yandex.ru>
 * 
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

var ElectionComparator = {};

var headerInfo = [ {
    displayName : 'Участок',
    value : 'name'
}, {
    displayName : 'Ответственный',
    value : 'answerable'
}, {
    displayName : 'Явка на текущих выборах, %',
    value : 'electors1'
}, {
    displayName : 'Явка на прошедших выборах, %',
    value : 'electors2'
}, {
    displayName : 'Абсолютная разница, чел',
    value : 'diff'
}, {
    displayName : 'Относительная разница, %',
    value : 'ratio'
}, ];

ElectionComparator.init = function() {
    listen(getEl('election1'), 'change', ElectionComparator.rebuild);
    listen(getEl('election2'), 'change', ElectionComparator.rebuild);
    listen(getEl('timeSelector'), 'change', ElectionComparator.rebuild);
    listen(getEl('showScatterChartCheckbox'), 'change', function(){
        toggleClass(getEl('chartContainer'),'hidden');
    });
    
    var head = getEl('electionComparatorHead');
    
    addEls(head, headerInfo.map(function(item){
        var td = makeEl("th");
        addEl(td, makeText(item.displayName));
        addEl(td, makeEl("span"));
        td.info = item.value;
        listen(td, "click", ElectionComparator.onSortChange);
        return td;
    }));

    ElectionComparator.content = getEl('electionComparatorDiv');
};

ElectionComparator.refresh = function() {
    ElectionComparator.sortKey = "name";
    ElectionComparator.sortDir = "asc";
    
    var election1 = clearEl(getEl('election1'));
    var election2 = clearEl(getEl('election2'));
    var timeSelector = clearEl(getEl('timeSelector'));
    
    Constants.timeMarks.forEach(function(item){
        var opt = makeOpt("Явка на " + item);
        opt.value = item;
        addEl(timeSelector, opt);
    });
    
    PermissionInformer.getStoryNamesArray(false, function(err, allStoryNames){
        if(err) {Utils.handleError(err); return;}
        allStoryNames.forEach(function(item){
            var opt = makeOpt(item.displayName);
            opt.value = item.value;
            addEl(election1, opt);
            var opt = makeOpt(item.displayName);
            opt.value = item.value;
            addEl(election2, opt);
        });
        clearEl(getEl('electionComparatorData'));
    });
    
    getEl('showScatterChartCheckbox').checked = false;
    addClass(getEl('chartContainer'), 'hidden');
    
//    getEl('logPageSelector').selectedIndex = 0;
//    DBMS.getLog(0, LogViewer.dataRecieved);
};

ElectionComparator.customCharOrdAFactory = function(prepare, mul){
    "use strict";
    return function(a, b) {
        mul = mul || 1;
        
        a = prepare(a);
        b = prepare(b);
        var sortA = a.disp == 'Н/Д';
        var sortB = b.disp == 'Н/Д';
        if(sortA || sortB){
            if(sortA === sortB){
                return 0;
            } else if(sortA === true){
//                return 1 * mul;
                return 1;
            } else {
//                return -1 * mul;
                return -1;
            }
        }
        if (a.val > b.val)
            return 1 * mul;
        if (a.val < b.val)
            return -1 * mul;
        return 0;
    };
};

ElectionComparator.makeRowData = function(electors1, electors2, votingStation, timeMark, profiles){
    var man1 = Number(electors1[votingStation][timeMark]);
    var man2 = Number(electors2[votingStation][timeMark])
    var total1 = Number(electors1[votingStation].total);
    var total2 = Number(electors2[votingStation].total);
    var man1Abs = Number(electors1[votingStation][timeMark]);
    var man2Abs = Number(electors2[votingStation][timeMark]);
    
    if(man1 > 0){
        if(total1 > 0){
            man1 = Math.round(man1/total1 * 1000)/10;
        } else {
            man1 = -1;
        }
    }
    if(man2 > 0 && total2 > 0){
        if(total2 > 0){
            man2 = Math.round(man2/total2 * 1000)/10;
        } else {
            man2 = -1;
        }
    }
    var ratio = 0; 
    if(man1 > 0 && man2 > 0 && total1 > 0 && total2 > 0){
        var ratio = Math.round((man1Abs/total1 - man2Abs/total2) * 1000)/10;
    }
    var display;
    if(man1 < 0 || man2 < 0){
        display = {
            electors1:man1 == -1 ? 'Н/Д' : man1,
            electors2:man2 == -1 ? 'Н/Д' : man2,
            diff: 'Н/Д',
            ratio: 'Н/Д' 
        }
    } else {
        display = {
            electors1:man1,
            electors2:man2,
            diff:man1Abs - man2Abs,
            ratio:ratio
        }
    }
    return {
        name:votingStation,
        electors1:man1,
        electors2:man2,
        diff:man1Abs - man2Abs,
        ratio:ratio,
        display: display,
        answerable: profiles[votingStation]["Ответственный"]
    };
};

ElectionComparator.rebuild = function(){
    DBMS.getAllProfiles(function(err, profiles){
        if(err) {Utils.handleError(err); return;}
        DBMS.getStoryElectors(getEl('election1').value, function(err, electors1){
            if(err) {Utils.handleError(err); return;}
            DBMS.getStoryElectors(getEl('election2').value, function(err, electors2){
                if(err) {Utils.handleError(err); return;}
                var timeMark = getEl('timeSelector').value;
                
                var data = Object.keys(electors1).map(function(votingStation){
                    return ElectionComparator.makeRowData(electors1, electors2, votingStation, timeMark, profiles);
                });
                
                var direction = ElectionComparator.sortDir === "asc" ? 1 : -1;
                if(ElectionComparator.sortKey === 'name' || ElectionComparator.sortKey === 'answerable'){
                    data.sort(CommonUtils.charOrdAFactory(function(a){
                        return a[ElectionComparator.sortKey].toLowerCase();
                    }, direction));
                } else {
                    data.sort(ElectionComparator.customCharOrdAFactory(function(a){
                        return {
                            val: a[ElectionComparator.sortKey], 
                            disp: a.display[ElectionComparator.sortKey]
                        };
                    }, direction));
                }
                
                ElectionComparator.drawChart(data);
                addEls(clearEl(getEl('electionComparatorData')), data.map(ElectionComparator.makeRow));
            });
        });
    });
};

ElectionComparator.drawChart = function (data) {
    var dataPoints = data.filter(function(item){
        return item.electors1 >= 0 && item.electors2 >= 0;
    }).map(function(item){
        return {
            x: item.electors2,
            y: item.electors1,
//            color: 'red',
//            color: 'rgb(0,255,0)',
//            color: 'rgba(255,0,255,0.5)',
            color: ElectionComparator.ratio2color(item.ratio),
            toolTipContent: strFormat('Участок: {0}<br/>Текущая явка: {1}<br/>Прошедшая явка: {2}',[item.name, item.electors1, item.electors2])
        }
    });
    
    var chart = new CanvasJS.Chart("chartContainer", {
        axisX: {
            title: "Прошедшие выборы, %",
            titleFontSize: 18

        },
        axisY: {
            title: "Текущие выборы, %",
            titleFontSize: 16
        },
        legend: {
            verticalAlign: 'bottom',
            horizontalAlign: "center"
        },

        data: [
        {
            type: "scatter",
            markerType: "circle",
            markerBorderColor : "black",
            markerSize: 15,
            markerBorderThickness: 1,
            dataPoints:dataPoints 
        },
        ],
    });

    chart.render();
};

ElectionComparator.onSortChange = function(event){
    var target = event.target;
    if(target.tagName.toLowerCase() === "span"){
        target = target.parentElement;
    }
    
    if (ElectionComparator.sortKey === target.info) {
        ElectionComparator.sortDir = ElectionComparator.sortDir === "asc" ? "desc" : "asc";
        if(ElectionComparator.sortDir === "desc"){
            addClass(target, "sortDesc");
            removeClass(target, "sortAsc");
        } else {
            addClass(target, "sortAsc");
            removeClass(target, "sortDesc");
        }
    } else {
        var filterHead = getEl("electionComparatorHead");
        var elems = filterHead.getElementsByClassName("sortAsc");
        var i;
        for (i = 0; i < elems.length; i++) {
            removeClass(elems[i], "sortAsc");
        }
        elems = filterHead.getElementsByClassName("sortDesc");
        for (i = 0; i < elems.length; i++) {
            removeClass(elems[i], "sortDesc");
        }
        
        ElectionComparator.sortKey = target.info;
        ElectionComparator.sortDir = "asc";
        addClass(target, "sortAsc");
        
    }
    ElectionComparator.rebuild();
};

ElectionComparator.ratio2color = function(ratio){
    var color;
    var baseColor = 255;
    var opacity = 1;
//    var val = baseColor-Math.round(baseColor*ratio/100);
    if(ratio > 0){
//      tr.style.backgroundColor = strFormat('rgba(255,{0},255,0.5)',[Math.round(255*data.ratio/100)]);
        var val = baseColor-10*Math.round(baseColor*ratio/100);
      color = strFormat('rgba({0},{1},{2},{3})',[val,baseColor, val, opacity]);
//      tr.style.backgroundColor = strFormat('rgba(0,{0},0,1)',[Math.round(255*data.ratio/100)]);
//      addClass(tr, 'positiveVisits');
  } else if(ratio < 0){
//      var val = baseColor-Math.round(-baseColor*ratio/100);
      var val = baseColor-10*Math.round(-baseColor*ratio/100);
      color = strFormat('rgba({0},{1},{2},{3})',[baseColor, val, val, opacity]);
//      tr.style.backgroundColor = strFormat('rgba({0},255,255,0.5)',[Math.round(-255*data.ratio/100)]);
//      tr.style.backgroundColor = strFormat('rgba({0},0,0,1)',[Math.round(-255*data.ratio/100)]);
//      addClass(tr, 'negativeVisits');
  } else {
      color = strFormat('rgba({0},{1},{2},{3})',[baseColor, baseColor, baseColor, opacity]);
  }
//    if(ratio > 0){
////      tr.style.backgroundColor = strFormat('rgba(255,{0},255,0.5)',[Math.round(255*data.ratio/100)]);
//        var val = 255-Math.round(255*ratio/100);
//        color = strFormat('rgba({0},255,{1},0.5)',[val, val]);
////      tr.style.backgroundColor = strFormat('rgba(0,{0},0,1)',[Math.round(255*data.ratio/100)]);
////      addClass(tr, 'positiveVisits');
//    } else if(ratio < 0){
//        var val = 255-Math.round(-255*ratio/100);
//        color = strFormat('rgba(255,{0},{1},0.5)',[val, val]);
////      tr.style.backgroundColor = strFormat('rgba({0},255,255,0.5)',[Math.round(-255*data.ratio/100)]);
////      tr.style.backgroundColor = strFormat('rgba({0},0,0,1)',[Math.round(-255*data.ratio/100)]);
////      addClass(tr, 'negativeVisits');
//    } else {
//        color = 'rgba(255,255,255,0.5)';
//    }
    return color;
};

ElectionComparator.makeRow = function(data){
    var tr = makeEl('tr');
    var addText = function(text){
        addEl(tr, addEl(makeEl('td'), makeText(text)));
    }
//    if(data.ratio > 0){
////        tr.style.backgroundColor = strFormat('rgba(255,{0},255,0.5)',[Math.round(255*data.ratio/100)]);
//        var val = 255-Math.round(255*data.ratio/100);
//        tr.style.backgroundColor = strFormat('rgba({0},255,{1},0.5)',[val, val]);
////        tr.style.backgroundColor = strFormat('rgba(0,{0},0,1)',[Math.round(255*data.ratio/100)]);
////        addClass(tr, 'positiveVisits');
//    } else if(data.ratio < 0){
//        var val = 255-Math.round(-255*data.ratio/100);
//        tr.style.backgroundColor = strFormat('rgba(255,{0},{1},0.5)',[val, val]);
////        tr.style.backgroundColor = strFormat('rgba({0},255,255,0.5)',[Math.round(-255*data.ratio/100)]);
////        tr.style.backgroundColor = strFormat('rgba({0},0,0,1)',[Math.round(-255*data.ratio/100)]);
////        addClass(tr, 'negativeVisits');
//    } else {
//        tr.style.backgroundColor = 'rgba(255,255,255,0.5)';
//    }
    
    tr.style.backgroundColor = ElectionComparator.ratio2color(data.ratio);
    addText(data.name);
    addText(data.answerable);
    addText(data.display.electors1);
    addText(data.display.electors2);
    addText(data.display.diff);
    addText(data.display.ratio);
    return tr;
};