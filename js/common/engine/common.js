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
"use strict";

(function(callback){
	
	function commonAPI(LocalDBMS, Migrator, CommonUtils) {
	
		LocalDBMS.prototype.getDatabase = function(callback){
		    callback(null, this.database);
		};
	
		LocalDBMS.prototype.setDatabase = function(database, callback){
		    this.database = Migrator.migrate(database);
		    populateIndirectParams(this.database);
		    if(callback) callback();
		};
		
		var populateIndirectParams = (base) => {
		    var indirectParams = base.measuredParams.filter(param => param.type === 'indirect');
		    R.values(base.measures).forEach(measure => {
		        indirectParams.forEach( indirectParam => {
		            measure[indirectParam.name] = R.sum(R.values(R.pick(indirectParam.sumOf, measure)));
		        });
		    });
		    
		};
	
	};
  
	callback(commonAPI);

})(function(api){
	typeof exports === 'undefined'? this['commonAPI'] = api: module.exports = api;
}.bind(this));