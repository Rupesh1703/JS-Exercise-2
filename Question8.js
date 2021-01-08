
function dateDiffInDays(date1, date2) {
    // round to the nearest whole number
    return Math.round((date2-date1)/(1000*60*60*24));
}
var daysDiff=dateDiffInDays(new Date('December 21, 2020 03:24:00'), new Date('December 25, 2021 03:24:00'));
console.log(daysDiff)