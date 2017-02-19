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
	            "max": 120000,
	            "min": 20000,
	            "step": 20000,
	            "repeatNum": 5,
	            "description": "Experiment type standard-sort"
	          },
	          "constantParams": [
	            {
	              "name": "number upperBoundary",
	              "units": "float number",
	              "value": 1
	            },
	            {
	              "name": "number lowerBoundary",
	              "units": "float number",
	              "value": 0
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
	              "name": "duration_defaultSort",
	              "units": "millis"
	            }
	          ],
	          "measures": {
	            "20000_0": {
	              "measureKey": "20000_0",
	              "passId": 0,
	              "arraySize": 20000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2355.42,
	                  "end": 2387.67
	                }
	              },
	              "duration_defaultSort": 32.25
	            },
	            "20000_1": {
	              "measureKey": "20000_1",
	              "passId": 1,
	              "arraySize": 20000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2394.795,
	                  "end": 2411.86
	                }
	              },
	              "duration_defaultSort": 17.065000000000055
	            },
	            "20000_2": {
	              "measureKey": "20000_2",
	              "passId": 2,
	              "arraySize": 20000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2417.755,
	                  "end": 2434.925
	                }
	              },
	              "duration_defaultSort": 17.170000000000073
	            },
	            "20000_3": {
	              "measureKey": "20000_3",
	              "passId": 3,
	              "arraySize": 20000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2441.465,
	                  "end": 2458.29
	                }
	              },
	              "duration_defaultSort": 16.824999999999818
	            },
	            "20000_4": {
	              "measureKey": "20000_4",
	              "passId": 4,
	              "arraySize": 20000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2465.37,
	                  "end": 2482.535
	                }
	              },
	              "duration_defaultSort": 17.164999999999964
	            },
	            "40000_0": {
	              "measureKey": "40000_0",
	              "passId": 0,
	              "arraySize": 40000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2490.08,
	                  "end": 2526.035
	                }
	              },
	              "duration_defaultSort": 35.95499999999993
	            },
	            "40000_1": {
	              "measureKey": "40000_1",
	              "passId": 1,
	              "arraySize": 40000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2533.11,
	                  "end": 2568.18
	                }
	              },
	              "duration_defaultSort": 35.06999999999971
	            },
	            "40000_2": {
	              "measureKey": "40000_2",
	              "passId": 2,
	              "arraySize": 40000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2575.5950000000003,
	                  "end": 2610.1
	                }
	              },
	              "duration_defaultSort": 34.504999999999654
	            },
	            "40000_3": {
	              "measureKey": "40000_3",
	              "passId": 3,
	              "arraySize": 40000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2617.55,
	                  "end": 2652.23
	                }
	              },
	              "duration_defaultSort": 34.679999999999836
	            },
	            "40000_4": {
	              "measureKey": "40000_4",
	              "passId": 4,
	              "arraySize": 40000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2658.07,
	                  "end": 2692.355
	                }
	              },
	              "duration_defaultSort": 34.284999999999854
	            },
	            "60000_0": {
	              "measureKey": "60000_0",
	              "passId": 0,
	              "arraySize": 60000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2700.525,
	                  "end": 2754.65
	                }
	              },
	              "duration_defaultSort": 54.125
	            },
	            "60000_1": {
	              "measureKey": "60000_1",
	              "passId": 1,
	              "arraySize": 60000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2761.695,
	                  "end": 2814.835
	                }
	              },
	              "duration_defaultSort": 53.13999999999987
	            },
	            "60000_2": {
	              "measureKey": "60000_2",
	              "passId": 2,
	              "arraySize": 60000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2822.415,
	                  "end": 2876.35
	                }
	              },
	              "duration_defaultSort": 53.934999999999945
	            },
	            "60000_3": {
	              "measureKey": "60000_3",
	              "passId": 3,
	              "arraySize": 60000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2886.32,
	                  "end": 2941.85
	                }
	              },
	              "duration_defaultSort": 55.529999999999745
	            },
	            "60000_4": {
	              "measureKey": "60000_4",
	              "passId": 4,
	              "arraySize": 60000,
	              "raw": {
	                "defaultSort": {
	                  "start": 2949.59,
	                  "end": 3002.985
	                }
	              },
	              "duration_defaultSort": 53.39499999999998
	            },
	            "80000_0": {
	              "measureKey": "80000_0",
	              "passId": 0,
	              "arraySize": 80000,
	              "raw": {
	                "defaultSort": {
	                  "start": 3009.915,
	                  "end": 3085.62
	                }
	              },
	              "duration_defaultSort": 75.70499999999993
	            },
	            "80000_1": {
	              "measureKey": "80000_1",
	              "passId": 1,
	              "arraySize": 80000,
	              "raw": {
	                "defaultSort": {
	                  "start": 3093.735,
	                  "end": 3167.065
	                }
	              },
	              "duration_defaultSort": 73.32999999999993
	            },
	            "80000_2": {
	              "measureKey": "80000_2",
	              "passId": 2,
	              "arraySize": 80000,
	              "raw": {
	                "defaultSort": {
	                  "start": 3174.54,
	                  "end": 3247.855
	                }
	              },
	              "duration_defaultSort": 73.31500000000005
	            },
	            "80000_3": {
	              "measureKey": "80000_3",
	              "passId": 3,
	              "arraySize": 80000,
	              "raw": {
	                "defaultSort": {
	                  "start": 3255.545,
	                  "end": 3328.695
	                }
	              },
	              "duration_defaultSort": 73.15000000000009
	            },
	            "80000_4": {
	              "measureKey": "80000_4",
	              "passId": 4,
	              "arraySize": 80000,
	              "raw": {
	                "defaultSort": {
	                  "start": 3337.7000000000003,
	                  "end": 3410.705
	                }
	              },
	              "duration_defaultSort": 73.00499999999965
	            },
	            "100000_0": {
	              "measureKey": "100000_0",
	              "passId": 0,
	              "arraySize": 100000,
	              "raw": {
	                "defaultSort": {
	                  "start": 3423.0950000000003,
	                  "end": 3518.0750000000003
	                }
	              },
	              "duration_defaultSort": 94.98000000000002
	            },
	            "100000_1": {
	              "measureKey": "100000_1",
	              "passId": 1,
	              "arraySize": 100000,
	              "raw": {
	                "defaultSort": {
	                  "start": 3528.895,
	                  "end": 3625.035
	                }
	              },
	              "duration_defaultSort": 96.13999999999987
	            },
	            "100000_2": {
	              "measureKey": "100000_2",
	              "passId": 2,
	              "arraySize": 100000,
	              "raw": {
	                "defaultSort": {
	                  "start": 3634.255,
	                  "end": 3729.21
	                }
	              },
	              "duration_defaultSort": 94.95499999999993
	            },
	            "100000_3": {
	              "measureKey": "100000_3",
	              "passId": 3,
	              "arraySize": 100000,
	              "raw": {
	                "defaultSort": {
	                  "start": 3736.915,
	                  "end": 3831.11
	                }
	              },
	              "duration_defaultSort": 94.19500000000016
	            },
	            "100000_4": {
	              "measureKey": "100000_4",
	              "passId": 4,
	              "arraySize": 100000,
	              "raw": {
	                "defaultSort": {
	                  "start": 3839.51,
	                  "end": 3935.375
	                }
	              },
	              "duration_defaultSort": 95.86499999999978
	            },
	            "120000_0": {
	              "measureKey": "120000_0",
	              "passId": 0,
	              "arraySize": 120000,
	              "raw": {
	                "defaultSort": {
	                  "start": 3943.885,
	                  "end": 4062.1800000000003
	                }
	              },
	              "duration_defaultSort": 118.29500000000007
	            },
	            "120000_1": {
	              "measureKey": "120000_1",
	              "passId": 1,
	              "arraySize": 120000,
	              "raw": {
	                "defaultSort": {
	                  "start": 4070.015,
	                  "end": 4186.145
	                }
	              },
	              "duration_defaultSort": 116.13000000000056
	            },
	            "120000_2": {
	              "measureKey": "120000_2",
	              "passId": 2,
	              "arraySize": 120000,
	              "raw": {
	                "defaultSort": {
	                  "start": 4192.135,
	                  "end": 4311.43
	                }
	              },
	              "duration_defaultSort": 119.29500000000007
	            },
	            "120000_3": {
	              "measureKey": "120000_3",
	              "passId": 3,
	              "arraySize": 120000,
	              "raw": {
	                "defaultSort": {
	                  "start": 4320.13,
	                  "end": 4433.915
	                }
	              },
	              "duration_defaultSort": 113.78499999999985
	            },
	            "120000_4": {
	              "measureKey": "120000_4",
	              "passId": 4,
	              "arraySize": 120000,
	              "raw": {
	                "defaultSort": {
	                  "start": 4447.14,
	                  "end": 4566.835
	                }
	              },
	              "duration_defaultSort": 119.69499999999971
	            }
	          },
	          "version": "0.1.0"
	        }
;

})(typeof exports === 'undefined'? this['BaseExample']={}: exports);