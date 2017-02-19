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

(function(exports){

	exports.data = {
	        "meta": {
	            "description": "Default sort array performance test. Sorting randomly generated array of floats. Min size 10000, max 100000, step 10000"
	          },
	          "constantParams": [
	            {
	              "name": "upperBoundary",
	              "units": "float number",
	              "value": 1
	            },
	            {
	              "name": "lowerBoundary",
	              "units": "float number",
	              "value": 0
	            },
	            {
	              "name": "passNumber",
	              "units": "number",
	              "value": 6
	            }
	          ],
	          "changedParams": [
	            {
	              "name": "arraySize",
	              "units": "natural number"
	            }
	          ],
	          "measuredParams": [
	            {
	              "name": "duration",
	              "units": "millis"
	            }
	          ],
	          "measures": {
	            "10000_0": {
	              "measureKey": '10000_0',
	              "passId": 0,
	              "arraySize": 10000,
	              "duration": 18,
	              "raw": {
	                "start": [
	                  375264,
	                  242689788
	                ],
	                "delta": [
	                  0,
	                  17711889
	                ]
	              }
	            },
	            "10000_1": {
	              "measureKey": '10000_1',
	              "passId": 1,
	              "arraySize": 10000,
	              "duration": 14,
	              "raw": {
	                "start": [
	                  375264,
	                  273297847
	                ],
	                "delta": [
	                  0,
	                  13508757
	                ]
	              }
	            },
	            "10000_2": {
	              "measureKey": '10000_2',
	              "passId": 2,
	              "arraySize": 10000,
	              "duration": 13,
	              "raw": {
	                "start": [
	                  375264,
	                  287622787
	                ],
	                "delta": [
	                  0,
	                  12787166
	                ]
	              }
	            },
	            "10000_3": {
	              "measureKey": '10000_3',
	              "passId": 3,
	              "arraySize": 10000,
	              "duration": 12,
	              "raw": {
	                "start": [
	                  375264,
	                  300509949
	                ],
	                "delta": [
	                  0,
	                  11958070
	                ]
	              }
	            },
	            "10000_4": {
	              "measureKey": '10000_4',
	              "passId": 4,
	              "arraySize": 10000,
	              "duration": 11,
	              "raw": {
	                "start": [
	                  375264,
	                  312559006
	                ],
	                "delta": [
	                  0,
	                  10707671
	                ]
	              }
	            },
	            "10000_5": {
	              "measureKey": '10000_5',
	              "passId": 5,
	              "arraySize": 10000,
	              "duration": 11,
	              "raw": {
	                "start": [
	                  375264,
	                  323360067
	                ],
	                "delta": [
	                  0,
	                  10908263
	                ]
	              }
	            },
	            "20000_0": {
	              "measureKey": '20000_0',
	              "passId": 0,
	              "arraySize": 20000,
	              "duration": 30,
	              "raw": {
	                "start": [
	                  375264,
	                  334362320
	                ],
	                "delta": [
	                  0,
	                  30434493
	                ]
	              }
	            },
	            "20000_1": {
	              "measureKey": '20000_1',
	              "passId": 1,
	              "arraySize": 20000,
	              "duration": 30,
	              "raw": {
	                "start": [
	                  375264,
	                  364891704
	                ],
	                "delta": [
	                  0,
	                  29999675
	                ]
	              }
	            },
	            "20000_2": {
	              "measureKey": '20000_2',
	              "passId": 2,
	              "arraySize": 20000,
	              "duration": 29,
	              "raw": {
	                "start": [
	                  375264,
	                  394988072
	                ],
	                "delta": [
	                  0,
	                  28947467
	                ]
	              }
	            },
	            "20000_3": {
	              "measureKey": '20000_3',
	              "passId": 3,
	              "arraySize": 20000,
	              "duration": 29,
	              "raw": {
	                "start": [
	                  375264,
	                  424032832
	                ],
	                "delta": [
	                  0,
	                  29324027
	                ]
	              }
	            },
	            "20000_4": {
	              "measureKey": '20000_4',
	              "passId": 4,
	              "arraySize": 20000,
	              "duration": 33,
	              "raw": {
	                "start": [
	                  375264,
	                  453452651
	                ],
	                "delta": [
	                  0,
	                  33304346
	                ]
	              }
	            },
	            "20000_5": {
	              "measureKey": '20000_5',
	              "passId": 5,
	              "arraySize": 20000,
	              "duration": 33,
	              "raw": {
	                "start": [
	                  375264,
	                  486854891
	                ],
	                "delta": [
	                  0,
	                  33298940
	                ]
	              }
	            },
	            "30000_0": {
	              "measureKey": '30000_0',
	              "passId": 0,
	              "arraySize": 30000,
	              "duration": 59,
	              "raw": {
	                "start": [
	                  375264,
	                  520259532
	                ],
	                "delta": [
	                  0,
	                  58685291
	                ]
	              }
	            },
	            "30000_1": {
	              "measureKey": '30000_1',
	              "passId": 1,
	              "arraySize": 30000,
	              "duration": 78,
	              "raw": {
	                "start": [
	                  375264,
	                  579043918
	                ],
	                "delta": [
	                  0,
	                  78108822
	                ]
	              }
	            },
	            "30000_2": {
	              "measureKey": '30000_2',
	              "passId": 2,
	              "arraySize": 30000,
	              "duration": 69,
	              "raw": {
	                "start": [
	                  375264,
	                  657248532
	                ],
	                "delta": [
	                  0,
	                  69027211
	                ]
	              }
	            },
	            "30000_3": {
	              "measureKey": '30000_3',
	              "passId": 3,
	              "arraySize": 30000,
	              "duration": 73,
	              "raw": {
	                "start": [
	                  375264,
	                  726373637
	                ],
	                "delta": [
	                  0,
	                  72833362
	                ]
	              }
	            },
	            "30000_4": {
	              "measureKey": '30000_4',
	              "passId": 4,
	              "arraySize": 30000,
	              "duration": 58,
	              "raw": {
	                "start": [
	                  375264,
	                  799303992
	                ],
	                "delta": [
	                  0,
	                  57650498
	                ]
	              }
	            },
	            "30000_5": {
	              "measureKey": '30000_5',
	              "passId": 5,
	              "arraySize": 30000,
	              "duration": 51,
	              "raw": {
	                "start": [
	                  375264,
	                  857050883
	                ],
	                "delta": [
	                  0,
	                  50770299
	                ]
	              }
	            },
	            "40000_0": {
	              "measureKey": '40000_0',
	              "passId": 0,
	              "arraySize": 40000,
	              "duration": 74,
	              "raw": {
	                "start": [
	                  375264,
	                  907919976
	                ],
	                "delta": [
	                  0,
	                  73501203
	                ]
	              }
	            },
	            "40000_1": {
	              "measureKey": '40000_1',
	              "passId": 1,
	              "arraySize": 40000,
	              "duration": 94,
	              "raw": {
	                "start": [
	                  375264,
	                  981517871
	                ],
	                "delta": [
	                  0,
	                  93666445
	                ]
	              }
	            },
	            "40000_2": {
	              "measureKey": '40000_2',
	              "passId": 2,
	              "arraySize": 40000,
	              "duration": 103,
	              "raw": {
	                "start": [
	                  375265,
	                  75300828
	                ],
	                "delta": [
	                  0,
	                  103287674
	                ]
	              }
	            },
	            "40000_3": {
	              "measureKey": '40000_3',
	              "passId": 3,
	              "arraySize": 40000,
	              "duration": 85,
	              "raw": {
	                "start": [
	                  375265,
	                  178677387
	                ],
	                "delta": [
	                  0,
	                  84924760
	                ]
	              }
	            },
	            "40000_4": {
	              "measureKey": '40000_4',
	              "passId": 4,
	              "arraySize": 40000,
	              "duration": 71,
	              "raw": {
	                "start": [
	                  375265,
	                  263689230
	                ],
	                "delta": [
	                  0,
	                  70826237
	                ]
	              }
	            },
	            "40000_5": {
	              "measureKey": '40000_5',
	              "passId": 5,
	              "arraySize": 40000,
	              "duration": 73,
	              "raw": {
	                "start": [
	                  375265,
	                  334604652
	                ],
	                "delta": [
	                  0,
	                  73248961
	                ]
	              }
	            },
	            "50000_0": {
	              "measureKey": '50000_0',
	              "passId": 0,
	              "arraySize": 50000,
	              "duration": 103,
	              "raw": {
	                "start": [
	                  375265,
	                  407943699
	                ],
	                "delta": [
	                  0,
	                  103096390
	                ]
	              }
	            },
	            "50000_1": {
	              "measureKey": '50000_1',
	              "passId": 1,
	              "arraySize": 50000,
	              "duration": 112,
	              "raw": {
	                "start": [
	                  375265,
	                  511132578
	                ],
	                "delta": [
	                  0,
	                  111500851
	                ]
	              }
	            },
	            "50000_2": {
	              "measureKey": '50000_2',
	              "passId": 2,
	              "arraySize": 50000,
	              "duration": 122,
	              "raw": {
	                "start": [
	                  375265,
	                  622738230
	                ],
	                "delta": [
	                  0,
	                  122247260
	                ]
	              }
	            },
	            "50000_3": {
	              "measureKey": '50000_3',
	              "passId": 3,
	              "arraySize": 50000,
	              "duration": 105,
	              "raw": {
	                "start": [
	                  375265,
	                  745073774
	                ],
	                "delta": [
	                  0,
	                  105088201
	                ]
	              }
	            },
	            "50000_4": {
	              "measureKey": '50000_4',
	              "passId": 4,
	              "arraySize": 50000,
	              "duration": 110,
	              "raw": {
	                "start": [
	                  375265,
	                  850252962
	                ],
	                "delta": [
	                  0,
	                  109988301
	                ]
	              }
	            },
	            "50000_5": {
	              "measureKey": '50000_5',
	              "passId": 5,
	              "arraySize": 50000,
	              "duration": 111,
	              "raw": {
	                "start": [
	                  375265,
	                  960327746
	                ],
	                "delta": [
	                  0,
	                  111015586
	                ]
	              }
	            },
	            "60000_0": {
	              "measureKey": '60000_0',
	              "passId": 0,
	              "arraySize": 60000,
	              "duration": 136,
	              "raw": {
	                "start": [
	                  375266,
	                  71439124
	                ],
	                "delta": [
	                  0,
	                  136222364
	                ]
	              }
	            },
	            "60000_1": {
	              "measureKey": '60000_1',
	              "passId": 1,
	              "arraySize": 60000,
	              "duration": 126,
	              "raw": {
	                "start": [
	                  375266,
	                  207754578
	                ],
	                "delta": [
	                  0,
	                  126329675
	                ]
	              }
	            },
	            "60000_2": {
	              "measureKey": '60000_2',
	              "passId": 2,
	              "arraySize": 60000,
	              "duration": 139,
	              "raw": {
	                "start": [
	                  375266,
	                  334172238
	                ],
	                "delta": [
	                  0,
	                  139421933
	                ]
	              }
	            },
	            "60000_3": {
	              "measureKey": '60000_3',
	              "passId": 3,
	              "arraySize": 60000,
	              "duration": 162,
	              "raw": {
	                "start": [
	                  375266,
	                  473689963
	                ],
	                "delta": [
	                  0,
	                  161908402
	                ]
	              }
	            },
	            "60000_4": {
	              "measureKey": '60000_4',
	              "passId": 4,
	              "arraySize": 60000,
	              "duration": 169,
	              "raw": {
	                "start": [
	                  375266,
	                  635684848
	                ],
	                "delta": [
	                  0,
	                  169355847
	                ]
	              }
	            },
	            "60000_5": {
	              "measureKey": '60000_5',
	              "passId": 5,
	              "arraySize": 60000,
	              "duration": 153,
	              "raw": {
	                "start": [
	                  375266,
	                  805128979
	                ],
	                "delta": [
	                  0,
	                  153170021
	                ]
	              }
	            },
	            "70000_0": {
	              "measureKey": '70000_0',
	              "passId": 0,
	              "arraySize": 70000,
	              "duration": 182,
	              "raw": {
	                "start": [
	                  375266,
	                  958393591
	                ],
	                "delta": [
	                  0,
	                  182228593
	                ]
	              }
	            },
	            "70000_1": {
	              "measureKey": '70000_1',
	              "passId": 1,
	              "arraySize": 70000,
	              "duration": 206,
	              "raw": {
	                "start": [
	                  375267,
	                  140708968
	                ],
	                "delta": [
	                  0,
	                  206226112
	                ]
	              }
	            },
	            "70000_2": {
	              "measureKey": '70000_2',
	              "passId": 2,
	              "arraySize": 70000,
	              "duration": 222,
	              "raw": {
	                "start": [
	                  375267,
	                  347032373
	                ],
	                "delta": [
	                  0,
	                  221725179
	                ]
	              }
	            },
	            "70000_3": {
	              "measureKey": '70000_3',
	              "passId": 3,
	              "arraySize": 70000,
	              "duration": 212,
	              "raw": {
	                "start": [
	                  375267,
	                  568847638
	                ],
	                "delta": [
	                  0,
	                  211914769
	                ]
	              }
	            },
	            "70000_4": {
	              "measureKey": '70000_4',
	              "passId": 4,
	              "arraySize": 70000,
	              "duration": 200,
	              "raw": {
	                "start": [
	                  375267,
	                  780849791
	                ],
	                "delta": [
	                  0,
	                  200213144
	                ]
	              }
	            },
	            "70000_5": {
	              "measureKey": '70000_5',
	              "passId": 5,
	              "arraySize": 70000,
	              "duration": 215,
	              "raw": {
	                "start": [
	                  375267,
	                  981164132
	                ],
	                "delta": [
	                  0,
	                  215228447
	                ]
	              }
	            },
	            "80000_0": {
	              "measureKey": '80000_0',
	              "passId": 0,
	              "arraySize": 80000,
	              "duration": 237,
	              "raw": {
	                "start": [
	                  375268,
	                  196488972
	                ],
	                "delta": [
	                  0,
	                  237049778
	                ]
	              }
	            },
	            "80000_1": {
	              "measureKey": '80000_1',
	              "passId": 1,
	              "arraySize": 80000,
	              "duration": 249,
	              "raw": {
	                "start": [
	                  375268,
	                  433626134
	                ],
	                "delta": [
	                  0,
	                  249288317
	                ]
	              }
	            },
	            "80000_2": {
	              "measureKey": '80000_2',
	              "passId": 2,
	              "arraySize": 80000,
	              "duration": 305,
	              "raw": {
	                "start": [
	                  375268,
	                  683027660
	                ],
	                "delta": [
	                  0,
	                  305463801
	                ]
	              }
	            },
	            "80000_3": {
	              "measureKey": '80000_3',
	              "passId": 3,
	              "arraySize": 80000,
	              "duration": 247,
	              "raw": {
	                "start": [
	                  375268,
	                  988577643
	                ],
	                "delta": [
	                  0,
	                  246677313
	                ]
	              }
	            },
	            "80000_4": {
	              "measureKey": '80000_4',
	              "passId": 4,
	              "arraySize": 80000,
	              "duration": 270,
	              "raw": {
	                "start": [
	                  375269,
	                  235341739
	                ],
	                "delta": [
	                  0,
	                  270290763
	                ]
	              }
	            },
	            "80000_5": {
	              "measureKey": '80000_5',
	              "passId": 5,
	              "arraySize": 80000,
	              "duration": 252,
	              "raw": {
	                "start": [
	                  375269,
	                  505737002
	                ],
	                "delta": [
	                  0,
	                  251681613
	                ]
	              }
	            },
	            "90000_0": {
	              "measureKey": '90000_0',
	              "passId": 0,
	              "arraySize": 90000,
	              "duration": 276,
	              "raw": {
	                "start": [
	                  375269,
	                  757506900
	                ],
	                "delta": [
	                  0,
	                  276402225
	                ]
	              }
	            },
	            "90000_1": {
	              "measureKey": '90000_1',
	              "passId": 1,
	              "arraySize": 90000,
	              "duration": 329,
	              "raw": {
	                "start": [
	                  375270,
	                  33999212
	                ],
	                "delta": [
	                  0,
	                  329460418
	                ]
	              }
	            },
	            "90000_2": {
	              "measureKey": '90000_2',
	              "passId": 2,
	              "arraySize": 90000,
	              "duration": 262,
	              "raw": {
	                "start": [
	                  375270,
	                  363550918
	                ],
	                "delta": [
	                  0,
	                  262194997
	                ]
	              }
	            },
	            "90000_3": {
	              "measureKey": '90000_3',
	              "passId": 3,
	              "arraySize": 90000,
	              "duration": 287,
	              "raw": {
	                "start": [
	                  375270,
	                  625834200
	                ],
	                "delta": [
	                  0,
	                  286607213
	                ]
	              }
	            },
	            "90000_4": {
	              "measureKey": '90000_4',
	              "passId": 4,
	              "arraySize": 90000,
	              "duration": 271,
	              "raw": {
	                "start": [
	                  375270,
	                  912554922
	                ],
	                "delta": [
	                  0,
	                  271115354
	                ]
	              }
	            },
	            "90000_5": {
	              "measureKey": '90000_5',
	              "passId": 5,
	              "arraySize": 90000,
	              "duration": 305,
	              "raw": {
	                "start": [
	                  375271,
	                  183758260
	                ],
	                "delta": [
	                  0,
	                  304880041
	                ]
	              }
	            },
	            "100000_0": {
	              "measureKey": '100000_0',
	              "passId": 0,
	              "arraySize": 100000,
	              "duration": 309,
	              "raw": {
	                "start": [
	                  375271,
	                  488737997
	                ],
	                "delta": [
	                  0,
	                  308938734
	                ]
	              }
	            },
	            "100000_1": {
	              "measureKey": '100000_1',
	              "passId": 1,
	              "arraySize": 100000,
	              "duration": 333,
	              "raw": {
	                "start": [
	                  375271,
	                  797762914
	                ],
	                "delta": [
	                  0,
	                  333176483
	                ]
	              }
	            },
	            "100000_2": {
	              "measureKey": '100000_2',
	              "passId": 2,
	              "arraySize": 100000,
	              "duration": 356,
	              "raw": {
	                "start": [
	                  375272,
	                  131037290
	                ],
	                "delta": [
	                  0,
	                  355929008
	                ]
	              }
	            },
	            "100000_3": {
	              "measureKey": '100000_3',
	              "passId": 3,
	              "arraySize": 100000,
	              "duration": 321,
	              "raw": {
	                "start": [
	                  375272,
	                  487056985
	                ],
	                "delta": [
	                  0,
	                  320809120
	                ]
	              }
	            },
	            "100000_4": {
	              "measureKey": '100000_4',
	              "passId": 4,
	              "arraySize": 100000,
	              "duration": 312,
	              "raw": {
	                "start": [
	                  375272,
	                  807959795
	                ],
	                "delta": [
	                  0,
	                  312079146
	                ]
	              }
	            },
	            "100000_5": {
	              "measureKey": '100000_5',
	              "passId": 5,
	              "arraySize": 100000,
	              "duration": 353,
	              "raw": {
	                "start": [
	                  375273,
	                  120128126
	                ],
	                "delta": [
	                  0,
	                  353122215
	                ]
	              }
	            }
	          }
	        }
;

})(typeof exports === 'undefined'? this['BaseExample']={}: exports);