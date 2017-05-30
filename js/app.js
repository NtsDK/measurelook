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
PageManager, Utils, Overview, Characters, Stories, Events, Briefings, Timeline, SocialNetwork, FileUtils
 */

"use strict";

((exports)=>{

    var PageManager = {};
    
    var state = {};
    
    exports.init = function () {
        L10n.localizeStatic();
        UI.initSelectorFilters();
        UI.initPanelTogglers();
        window.DBMS = new LocalDBMS();
        DBMS.setDatabase(BaseExample.data, function(err){
            if(err) {Utils.handleError(err); return;}
            PageManager.consistencyCheck(PageManager.onDatabaseLoad);
        });
    };
    
    PageManager.consistencyCheck = function(callback){
        DBMS.getConsistencyCheckResult(function(err, consistencyErrors){
            if(err) {Utils.handleError(err); return;}
            consistencyErrors.forEach(CommonUtils.consoleLog);
            if(consistencyErrors.length > 0){
                Utils.alert(getL10n('overview-consistency-problem-detected'));
            }
            callback();
        });
    };
    
    PageManager.onDatabaseLoad = function () {
        state.views = {};
        var nav = "navigation";
        var content = "contentArea";
        var button;
        var navigation = getEl(nav);
        var containers = {
                root: state,
                navigation: navigation,
                content: getEl(content)
        };
        Utils.addView(containers, "performance", Performance, {mainPage:true});
        
        addEl(navigation, addClass(makeEl("div"), "nav-separator"));
        
        Utils.addView(containers, "about", About);
        
        var btnOpts = {
            tooltip : true,
            className : 'mainNavButton'
        }
        
        addEl(navigation, PageManager.makeButton("testButton", "test", PageManager.runTests, btnOpts));
        
        var button = PageManager.makeButton("dataLoadButton", "open-database", null, btnOpts);
        button.addEventListener('change', FileUtils.readSingleFile, false);
        
        var input = makeEl("input");
        input.type = "file";
//        addClass(input, 'hidden');
        button.appendChild(input);
        addEl(navigation, button);
        
        addEl(navigation, PageManager.makeButton("dataSaveButton", "save-database", FileUtils.saveFile, btnOpts));
//        addEl(navigation, PageManager.makeButton("newBaseButton", "create-database", FileUtils.makeNewBase, btnOpts));
        
        FileUtils.init(function(err){
            if(err) {Utils.handleError(err); return;}
            PageManager.consistencyCheck(state.currentView.refresh);
        });
        
        state.currentView.refresh();
        
    };
    
    PageManager.runTests = function(){
//        window.RunTests();
        PageManager.consistencyCheck(function(err, checkRes){
            if(err) {Utils.handleError(err); return;}
            if(checkRes === undefined || checkRes.length === 0){
                Utils.alert(getL10n('overview-consistency-is-ok'));
            } else {
                Utils.alert(getL10n('overview-consistency-problem-detected'));
            }
        });
    };
    
    PageManager.postLogout = function(){
        document.querySelector('#logoutForm button').click();
    };
    
    PageManager.makeButton = function(id, name, callback, opts){
        var button = makeEl("div");
        button.id = id;
        if(opts.tooltip){
            var delegate = function(){
                $(button).attr('data-original-title', L10n.getValue("header-" + name));
            };
            L10n.onL10nChange(delegate);
            $(button).tooltip({
                title : L10n.getValue("header-" + name),
                placement : "bottom"
            });
        }
        addClass(button, "action-button");
        if(opts.className){
            addClass(button, opts.className);
        }
        if(callback){
            listen(button, 'click', callback);
        }
        return button;
    };
    
    window.onbeforeunload = function (evt) {
        var message = getL10n("utils-close-page-warning");
        if (typeof evt == "undefined") {
            evt = window.event;
        }
        if (evt) {
            evt.returnValue = message;
        }
        return message;
    };
    
    listen(window, 'paste', function (evt) {
        FileUtils.setDatabase(evt.clipboardData.getData("text")) 
    });

})(this['app']={});