const dscc = require('@google/dscc');
const $ = require('jquery');

export const LOCAL = false;

function drawViz(data) {
  const nameData = data.fields.chartDimension;
  const rowData = data.tables.DEFAULT;

  const style = data.style.pageStyle.value;

  let dimensionData = null;

  let mainDiv = $('<div>');
  let fieldArray = [];
  let fieldData = '';
  let styleTag = $("<style id='styleId'>");

  $(document).ready(function() {
    if ($('body').hasClass('container')) {
      $('body').empty();
      $('style').remove('#styleId');
      loadData();
    } else {
      loadData();
    }
    function loadData() {
      $.each(nameData, function(i, row) {
        fieldData = row.name;
        fieldArray.push(fieldData);
      });
      $.each(rowData, function(j, row) {
        dimensionData = row['chartDimension'];
        let rowDiv = $("<div class='row'>");
        for (const k in dimensionData) {
          const finalData = $('<div class="field">');
          const fieldElement =
            '<span class="' +
            fieldArray[k] +
            '"' +
            '>' +
            fieldArray[k] +
            ' - ' +
            '</div>';
          let data =
            '<span class="' +
            dimensionData[k] +
            '"' +
            '>' +
            dimensionData[k] +
            '</div>';
          finalData.append(fieldElement + data);
          rowDiv.append(finalData);
        }
        mainDiv.append(rowDiv);
      });
      $('body')
        .addClass('container')
        .append(mainDiv);
    }
    if (style !== undefined && style !== '') {
      styleTag.append(style);
      $('head').append(styleTag);
    } else {
      if ($('head').has('style')) {
        $('style').remove('#styleId');
      }
    }
  });
}

dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
