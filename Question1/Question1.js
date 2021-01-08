let y=prompt();
let Satic_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function data(n) {
  var data3 = [];
  for (let i = 0; i < n; i++) {
    data3.push(Satic_array[i]);
    // data3 = [...data3, data2[i]]
  }
  console.log("First " + n + " number= [" + data3 + "]");
  data3 = [];
  for (let j = Satic_array.length - n; j < Satic_array.length; j++) {
    data3.push(Satic_array[j]);
  }
  console.log("last " + n + " number= [" + data3 + "]");
}

data(y);