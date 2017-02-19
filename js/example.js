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
    exports.init = () => {
        UI.initPanelTogglers();
        listen(queryEl('.settings-panel .run-example-button'), 'click', runExample);
    };
    
    var runExample = ()=>{
        clearEl(queryEl('.execution-panel .panel-body'));
        var checked = queryEl('input[name="experimentRadios"]:checked');
        sortExample.run(checked.value, progressCallback, function(info){
            FileUtils.json2File(info, 'measurelook-base.json');
        });
    };
    
    var progressCallback = (text) => {
        var el = addEl(makeEl('div'),makeText(text));
        addEl(queryEl('.execution-panel .panel-body'), el);
    }
    
})(this['example']={});