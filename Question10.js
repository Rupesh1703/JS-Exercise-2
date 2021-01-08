today = new Date()
past = new Date(2021,05,01) 

function calcDate(date1,date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);
    var years = Math.floor(months/12);

    var message = date2.toDateString();
    message += " was "
    message += days + " days " 
    message += months + " months "
    message += years + " years ago \n"

    return message
    }


let data = calcDate(today,past)
console.log(data)