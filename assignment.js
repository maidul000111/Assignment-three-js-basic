// 1. Kilometer To Meter Convert---

function kilometerToMeter(kilometer) {
    const meter = kilometer * 1000;
    return meter;
}

// 2. budget Calculator---
var calculator = 50;
var phone = 100;
var laptop = 500;

// Calculator 

function budgetCalculator (numbers){
    var budget = calculator * numbers;
    return budget;
   
}
var totalCalculator = budgetCalculator(10);
console.log(totalCalculator);

// Phone

function budgetPhone (numbers){
    var budget2 = phone * numbers;
    return budget2;
}

var totalphone = budgetPhone(10);
console.log(totalphone);

// Laptop

function budgetLaptop (numbers){
    var budget3 = laptop *numbers;
    return budget3

}

// 3. Hotel Cost---

function hotelCost(stayingDay) {
    var money = 0;
    if (stayingDay <= 10) {
        money = stayingDay * 100;
    }
    else if (stayingDay <= 20) {
        var firstStep = 10 * 100;
        var left = stayingDay - 10;
        var secondStep = left * 80;
        money = firstStep + secondStep;
    }
    else {
        var firstStep = 10 * 100;
        var secondStep = 10 * 80;
        var left = stayingDay - 20;
        var thirdStep = left * 50;
        money = firstStep + secondStep + thirdStep;
    }
    return money;
}


// 4. Mega Friend---

var friendsName = ["Emon", "Robiul", "Rana", "Kamruzzamn"];

function megaFriend(friendsName) {

    var maxWord = friendsName[0];
    for(var i = 0; i < friendsName.length; i++){
        var element = friendsName[i];
    
        if(element > maxWord){
            maxWord = element;
        }
    }
    return element;
  
}
