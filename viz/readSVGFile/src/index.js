const dscc = require('@google/dscc');
const $ = require('jquery');

export const LOCAL = false;

function drawViz(data) {
  let mainDiv = $('<div>');
  const svg = data.style.customText.value;

  $(document).ready(function() {
    if ($('body').hasClass('container')) {
      $('body').empty();
      loadData();
    } else {
      loadData();
    }

    function loadData() {
      if (svg != undefined && svg != '0') {
        mainDiv.append(svg);
        $('body')
          .addClass('container')
          .append(mainDiv);
        const width = $('svg').attr('width');
        const height = $('svg').attr('height');
        let y = dscc.getHeight();
        if (width != undefined && height != undefined) {
          $('svg').attr('viewBox', '0 0' + ' ' + width + ' ' + height);
        } else {
          $('svg').attr('viewBox', '0 0 150 150');
        }
        $('svg').css('width', '100%');
        $('svg').css('height', y - 3.8 + 'px');
      }
    }
  });
}

dscc.subscribeToData(drawViz, {transform: dscc.objectTransform});
