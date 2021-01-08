var month_name = function(date1){
    monthlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return monthlist[date1.getMonth()];
    };
    console.log(month_name(new Date("10/11/2021")));