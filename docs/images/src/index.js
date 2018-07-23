// get the data
dscc.subscribeToData(function(data) {
  // clear the body of the iframe
  document.body.innerHTML = '';

  // filter fields by IMAGE type
  var imageId = data.fields.find(function(field) {
    return field.type === 'IMAGE';
  }).id;

  // get the image url from the single row of data
  var row = data.rows[0];
  var img = document.createElement('img');

  // assign the image src and alt text
  img.src = row[imageId].proxiedUrl;
  img.alt = row[imageId].altText;

  // append the image to the iframe body
  document.body.appendChild(img);
});
