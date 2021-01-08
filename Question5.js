function union(arra1, arra2) {
  
    if ((arra1 == null) || (arra2==null)) 
      return void 0;
    
    var obj = {};
   
    for (var i = arra1.length-1; i >= 0; -- i)
       obj[arra1[i]] = arra1[i];
   
    for (var i = arra2.length-1; i >= 0; -- i)
       obj[arra2[i]] = arra2[i];
   
    var res = [];
   
    for (var n in obj)
    {
    
      if (obj.hasOwnProperty(n)) 
        res.push(obj[n]);
    }
   
    return res;
  }
  console.log("Union no are array1 U array2 "+union([0,1, 2, 3], [3,4,5]));


  function differenceOf2Arrays (array1, array2) {
    var temp = [];
    array1 = array1.toString().split(',').map(Number);
    array2 = array2.toString().split(',').map(Number);
    
    for (var i in array1) {
    if(array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
    }
    for(i in array2) {
    if(array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
    }
    return temp.sort((a,b) => a-b);
    }
    console.log("Array diffrence Array1 - Array2 "+differenceOf2Arrays([0,1, 2, 3], [3,4,5]));


    function intersect(a, b) {
        return a.filter(Set.prototype.has, new Set(b));
      }
      
      
      console.log("Array of intersection is "+intersect([0,1,2,3], [3,4,5]));