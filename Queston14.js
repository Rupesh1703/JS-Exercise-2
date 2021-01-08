var homes = [
    {
        "_id": "3",
        "Name": "Rupesh",
        "Age": "23"
    }, {
        "h_id": "4",
        "Name": "Rahul",
        "Age": "24"
    }, {
        "h_id": "5",
        "Name": "Ashish",
        "Age": "25"
    }
];

console.log("To sort descending/highest first, use operator '<'");

homes.sort(function(a,b) { return a.Name.valueOf() < b.Name.valueOf();});

console.log(homes);

console.log("To sort ascending/lowest first, use operator '>'");

homes.sort(function(a,b) { return a.Age.valueOf() > b.Age.valueOf();});

console.log(homes);