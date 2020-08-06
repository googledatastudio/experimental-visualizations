/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as common from './common'
import { ObjectFormat, FieldType, ConceptType } from '@google/dscc'

export const sampleInputData: ObjectFormat = {
    "tables": {
        "DEFAULT": [
            {
                "dimID": [
                    "Facebook"
                ],
                "dateID": [
                    "20010101"
                ],
                "metricID": [
                    50
                ]
            },
            {
                "dimID": [
                    "Facebook"
                ],
                "dateID": [
                    "20020101"
                ],
                "metricID": [
                    150
                ]
            },
            {
                "dimID": [
                    "Amazon"
                ],
                "dateID": [
                    "20010101"
                ],
                "metricID": [
                    100
                ]
            },
            {
                "dimID": [
                    "Amazon"
                ],
                "dateID": [
                    "20020101"
                ],
                "metricID": [
                    200
                ]
            },
            {
                "dimID": [
                    "Google"
                ],
                "dateID": [
                    "20010101"
                ],
                "metricID": [
                    150
                ]
            },
            {
                "dimID": [
                    "Google"
                ],
                "dateID": [
                    "20020101"
                ],
                "metricID": [
                    250
                ]
            },
            {
                "dimID": [
                    "Apple"
                ],
                "dateID": [
                    "20010101"
                ],
                "metricID": [
                    200
                ]
            },
            {
                "dimID": [
                    "Apple"
                ],
                "dateID": [
                    "20020101"
                ],
                "metricID": [
                    300
                ]
            },
        ]
    },
    "fields": {
        "dimID": [
            {
                "id": "qt_p5zekn099b",
                "name": "name",
                "type": FieldType.TEXT,
                "concept": ConceptType.DIMENSION
            }
        ],
        "dateID": [
            {
                "id": "qt_8ksfm6kaac",
                "name": "date",
                "type": FieldType.YEAR_MONTH_DAY,
                "concept": ConceptType.DIMENSION
            }
        ],
        "metricID": [
            {
                "id": "qt_55nson099b",
                "name": "value",
                "type": FieldType.NUMBER,
                "concept": ConceptType.METRIC
            }
        ]
    },
    "style": {
        "bars": {
            "value": 8,
            "defaultValue": 5
        },
        "keyframes": {
            "value": 2,
            "defaultValue": 10
        },
        "dataGranularity": {
            "value": "d",
            "defaultValue": "y"
        },
        "duration": {
            "value": 0.25,
            "defaultValue": 0.25
        },
        "colorOption": {
            "value": "theme",
            "defaultValue": "theme"
        },
        "selectedColor": {
            "value": {
                "color": "#E64A19"
            },
            "defaultValue": {
                "color": "#4682b4"
            }
        }
    },
    "theme": {
        "themeFillColor": {
            "color": "#ffffff",
            "themeRef": {
                "index": 0
            }
        },
        "themeFontColor": {
            "color": "#000000",
            "themeRef": {
                "index": 1
            }
        },
        "themeFontFamily": "Roboto",
        "themeAccentFillColor": {
            "color": "#e0e0e0",
            "themeRef": {
                "index": 2
            }
        },
        "themeAccentFontColor": {
            "color": "#000000",
            "themeRef": {
                "index": 3
            }
        },
        "themeAccentFontFamily": "Roboto",
        "themeSeriesColor": [
            {
                "color": "#0072f0",
                "seriesRef": {
                    "index": 0
                },
                "themeRef": {
                    "index": 4
                }
            },
            {
                "color": "#00b6cb",
                "seriesRef": {
                    "index": 1
                },
                "themeRef": {
                    "index": 5
                }
            },
            {
                "color": "#f10096",
                "seriesRef": {
                    "index": 2
                },
                "themeRef": {
                    "index": 6
                }
            },
            {
                "color": "#f66d00",
                "seriesRef": {
                    "index": 3
                },
                "themeRef": {
                    "index": 7
                }
            },
            {
                "color": "#ffa800",
                "seriesRef": {
                    "index": 4
                },
                "themeRef": {
                    "index": 8
                }
            },
            {
                "color": "#7cb342",
                "seriesRef": {
                    "index": 5
                },
                "themeRef": {
                    "index": 9
                }
            },
            {
                "color": "#5e35b1",
                "seriesRef": {
                    "index": 6
                }
            },
            {
                "color": "#03a9f4",
                "seriesRef": {
                    "index": 7
                }
            },
            {
                "color": "#ec407a",
                "seriesRef": {
                    "index": 8
                }
            },
            {
                "color": "#ff7043",
                "seriesRef": {
                    "index": 9
                }
            },
            {
                "color": "#737373",
                "seriesRef": {
                    "index": 10
                }
            },
            {
                "color": "#f15a60",
                "seriesRef": {
                    "index": 11
                }
            },
            {
                "color": "#7ac36a",
                "seriesRef": {
                    "index": 12
                }
            },
            {
                "color": "#5a9bd4",
                "seriesRef": {
                    "index": 13
                }
            },
            {
                "color": "#faa75a",
                "seriesRef": {
                    "index": 14
                }
            },
            {
                "color": "#9e67ab",
                "seriesRef": {
                    "index": 15
                }
            },
            {
                "color": "#ce7058",
                "seriesRef": {
                    "index": 16
                }
            },
            {
                "color": "#d77fb3",
                "seriesRef": {
                    "index": 17
                }
            },
            {
                "color": "#81d4fa",
                "seriesRef": {
                    "index": 18
                }
            },
            {
                "color": "#f48fb1",
                "seriesRef": {
                    "index": 19
                }
            }
        ],
        "themeIncreaseColor": {
            "color": "#388e3c"
        },
        "themeDecreaseColor": {
            "color": "#f44336"
        },
        "themeGridColor": {
            "color": "#d1d1d1"
        }
    },
    "interactions": {}
};
export const motionChartDataArr1: common.MotionChartData[] = [
    {
        name: 'Facebook',
        value: 50,
        rank: 0
    },
    {
        name: 'Amazon',
        value: 100,
        rank: 1
    },
    {
        name: 'Google',
        value: 150,
        rank: 2
    },
    {
        name: 'Apple',
        value: 200,
        rank: 3
    }
];
export const motionChartDataArr2: common.MotionChartData[] = [
    {
        name: 'Facebook',
        value: 150,
        rank: 0
    },
    {
        name: 'Amazon',
        value: 200,
        rank: 1
    },
    {
        name: 'Google',
        value: 250,
        rank: 2
    },
    {
        name: 'Apple',
        value: 300,
        rank: 3
    }
];
export const expectedInterpolatedArr: common.MotionChartData[] = [
    {
        name: 'Facebook',
        value: 100,
        rank: 0
    },
    {
        name: 'Amazon',
        value: 150,
        rank: 1
    },
    {
        name: 'Google',
        value: 200,
        rank: 2
    },
    {
        name: 'Apple',
        value: 250,
        rank: 3
    }
];
export const expectedKeyFrame: Map<number, common.MotionChartData[]> = new Map();
expectedKeyFrame.set(20010101, motionChartDataArr1);
expectedKeyFrame.set(20010702, expectedInterpolatedArr);
expectedKeyFrame.set(20020101, motionChartDataArr2);


