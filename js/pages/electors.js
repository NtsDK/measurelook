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

var Electors = {};

Electors.init = function() {
    "use strict";
    Electors.content = getEl('electorsDiv');
};

Electors.refresh = function() {
    "use strict";
    var tableHead = getEl("electorsTableHead");
    var table = getEl("electorsTable");
    
    if(Stories.CurrentStoryName == undefined){
        clearEl(tableHead);
        clearEl(table);
        return;
    }
    
    PermissionInformer.getCharacterNamesArray(false, function(err, votingStations){
        if(err) {Utils.handleError(err); return;}
        
        DBMS.getStoryElectors(Stories.CurrentStoryName, function(err, electors){
            if(err) {Utils.handleError(err); return;}
            
            clearEl(tableHead);
            clearEl(table);
            addEl(tableHead, Electors.getTableHeader());
            
            R.ap([addEl(table)], Electors.getTableContents(votingStations, electors));
        });
    });
};

Electors.getTableContents = function(votingStations, electors){
    "use strict";
    var tr, input, trs = [];
    votingStations.forEach(function(votingStation){
        tr = makeEl("tr");
        addEl(tr, addEl(makeEl("td"), makeText(votingStation.displayName)));
        
        function makeInput(mark, showValue){
            var input = setProps(makeEl('input'), {
                'type' : 'number',
                'value' : showValue,
                'dataKey' : JSON.stringify({
                    storyName: Stories.CurrentStoryName,
                    votingStation: votingStation.displayName,
                    mark: mark
                }),
                'className' : 'timeMarkInput'
            });
            listen(input, "change", Electors.updateData);
            return input;
        };
        
        addEl(tr, addEl(makeEl('td'), makeInput('total', electors[votingStation.displayName].total === -1 ? "" : electors[votingStation.displayName].total)));

        Constants.timeMarks.forEach(function(timeMark, i) {
            addEl(tr, addEl(makeEl('td'), makeInput(timeMark, electors[votingStation.displayName][timeMark] === -1 ? "" : electors[votingStation.displayName][timeMark])));
        });
        trs.push(tr);
    });
    return trs;
};

Electors.updateData = function(event){
    "use strict";
    DBMS.updateElectorsInfo(JSON.parse(event.target.dataKey), event.target.value, Utils.processError());
};

Electors.getTableHeader = function(){
    "use strict";
    var tr = makeEl("tr");

    rAddEl(rAddEl(makeText('Участок'), makeEl("th")), tr);
    rAddEl(rAddEl(makeText('Общая численность'), makeEl("th")), tr);
    Constants.timeMarks.forEach(function(timeMark, i) {
        rAddEl(rAddEl(makeText('Явка на ' + timeMark), rAddClass(i + "-dependent", makeEl("th"))), tr);
    });
    return tr;
};