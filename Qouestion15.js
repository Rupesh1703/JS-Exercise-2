var data =  [  {name:  "Jack" , age : 23}, {name:  "Sam" , age : 12},  {name:  "Max" , age : 20} ];
  var del = data.slice(1, 3);
  console.log("Deleted"+del);


function myFunction() {
 var ins=  data.push({name:  "Max" , age : 20});
  console.log("Inserted"+ins);
}