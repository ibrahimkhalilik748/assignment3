// kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
var toMeter = kilometerToMeter(10);
 console.log(toMeter);



//   budgetCalculator
function budgetCalculator(handwatch, mobile, laptop){
    var watch = handwatch * 50;
    var phone = mobile * 100;
    var mimiPc = laptop * 500;
    var tutalPrice = watch + phone + mimiPc;
    return tutalPrice;
}
var calculator = budgetCalculator(10,10,10)
console.log(calculator);



//  hotelCost
function hotelCost (){
    var days = 21;
    var price = 0;
    if (days <= 10) {
        price = days * 100;
    }
    else if (days <= 20){
        var firstTenDay = 10 * 100;
        var remaining = days - 10;
        var secondTenDay = remaining * 80;
        price = firstTenDay + secondTenDay;
    }
    else {
        var firstTenDay = 10 * 100;
        var secondTenDay  = 10 * 80;
        var remaining = days - 20;
        var thirdTenDay = remaining * 50;
        price = firstTenDay + secondTenDay + thirdTenDay;
    }
    console.log(price);
    }