export const dim4Message = {
  "tables": {
    "DEFAULT": [
      {
        "dimension": [
          "c",
          "f",
          "i",
          "l"
        ],
        "metric": [
          3
        ]
      },
      {
        "dimension": [
          "b",
          "e",
          "h",
          "k"
        ],
        "metric": [
          2
        ]
      },
      {
        "dimension": [
          "a",
          "d",
          "g",
          "j"
        ],
        "metric": [
          1
        ]
      }
    ]
  },
  "fields": {
    "dimension": [
      {
        "id": "qt_uit7yti3xb",
        "name": "d1",
        "type": "TEXT",
        "concept": "DIMENSION"
      },
      {
        "id": "qt_1hvcckj3xb",
        "name": "d2",
        "type": "TEXT",
        "concept": "DIMENSION"
      },
      {
        "id": "qt_yv5ndkj3xb",
        "name": "d3",
        "type": "TEXT",
        "concept": "DIMENSION"
      },
      {
        "id": "qt_nicugkj3xb",
        "name": "d4",
        "type": "TEXT",
        "concept": "DIMENSION"
      }
    ],
    "metric": [
      {
        "id": "qt_vit7yti3xb",
        "name": "m",
        "type": "NUMBER",
        "concept": "METRIC"
      }
    ]
  },
  "style": {},
  "theme": {
    "themeFillColor": {
      "color": "#fff",
      "opacity": 1
    },
    "themeFontColor": {
      "color": "#616161",
      "opacity": 1
    },
    "themeFontFamily": "Roboto",
    "themeAccentFillColor": {
      "color": "#4285F4",
      "opacity": 1
    },
    "themeAccentFontColor": {
      "color": "#EFEFEF",
      "opacity": 1
    },
    "themeAccentFontFamily": "Roboto",
    "themeSeriesColor": [
      {
        "color": "#4285F4",
        "opacity": 1
      },
      {
        "color": "#DB4437",
        "opacity": 1
      },
      {
        "color": "#F4B400",
        "opacity": 1
      },
      {
        "color": "#0F9D58",
        "opacity": 1
      },
      {
        "color": "#AB47BC",
        "opacity": 1
      },
      {
        "color": "#00ACC1",
        "opacity": 1
      },
      {
        "color": "#FF7043",
        "opacity": 1
      },
      {
        "color": "#9E9D24",
        "opacity": 1
      },
      {
        "color": "#5C6BC0",
        "opacity": 1
      },
      {
        "color": "#F06292",
        "opacity": 1
      },
      {
        "color": "#00796b",
        "opacity": 1
      },
      {
        "color": "#c2185b",
        "opacity": 1
      },
      {
        "color": "#7e57c2",
        "opacity": 1
      },
      {
        "color": "#03a9f4",
        "opacity": 1
      },
      {
        "color": "#8bc34a",
        "opacity": 1
      },
      {
        "color": "#fdd835",
        "opacity": 1
      },
      {
        "color": "#fb8c00",
        "opacity": 1
      },
      {
        "color": "#8d6e63",
        "opacity": 1
      },
      {
        "color": "#9e9e9e",
        "opacity": 1
      },
      {
        "color": "#607d8b",
        "opacity": 1
      }
    ],
    "themeIncreaseColor": {
      "color": "#388e3c",
      "opacity": 1
    },
    "themeDecreaseColor": {
      "color": "#f44336",
      "opacity": 1
    },
    "themeGridColor": {
      "color": "#e9e9e9",
      "opacity": 1
    }
  },
  "interactions": {
    "onClick": {
      "value": {},
      "supportedActions": [
        "FILTER"
      ]
    }
  }
};

export const d4createRoot = {
  "children": [
    {
      "name": "c",
      "children": [
        {
          "name": "f",
          "dimId": "qt_1hvcckj3xb",
          "children": [
            {
              "name": "i",
              "dimId": "qt_yv5ndkj3xb",
              "children": [
                {
                  "name": "l",
                  "dimId": "qt_nicugkj3xb",
                  "value": 3
                }
              ]
            }
          ]
        }
      ],
      "dimId": "qt_uit7yti3xb"
    },
    {
      "name": "b",
      "children": [
        {
          "name": "e",
          "dimId": "qt_1hvcckj3xb",
          "children": [
            {
              "name": "h",
              "dimId": "qt_yv5ndkj3xb",
              "children": [
                {
                  "name": "k",
                  "dimId": "qt_nicugkj3xb",
                  "value": 2
                }
              ]
            }
          ]
        }
      ],
      "dimId": "qt_uit7yti3xb"
    },
    {
      "name": "a",
      "children": [
        {
          "name": "d",
          "dimId": "qt_1hvcckj3xb",
          "children": [
            {
              "name": "g",
              "dimId": "qt_yv5ndkj3xb",
              "children": [
                {
                  "name": "j",
                  "dimId": "qt_nicugkj3xb",
                  "value": 1
                }
              ]
            }
          ]
        }
      ],
      "dimId": "qt_uit7yti3xb"
    }
  ]
}
