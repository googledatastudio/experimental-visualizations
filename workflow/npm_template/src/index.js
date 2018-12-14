const dscc = require('@google/dscc');

const printData(message){
  console.log(message);
}

dscc.subscribeToData(printData, {transform: dscc.objectTransform});


