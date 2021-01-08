function Unix_timestamp(t)
{
var date1 = new Date(t*1000);
var hr = date1.getHours();
var m = "0" + date1.getMinutes();
var s = "0" + date1.getSeconds();
return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
}

console.log(Unix_timestamp(1607518718));