let y=1023165454197
function toCommas(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


console.log(toCommas(y))