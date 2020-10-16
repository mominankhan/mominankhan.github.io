function toFahrenheit(celsius){
    return celcius * 1.8 + 32;
}

function toCelcius(fahrenheit){
    return (fahrenheit - 32) * (5/9);
}

console.log(toFahrenheit(0));
console.log(toFahrenheit(12));
console.log(toCelcius(32));
console.log(toCelcius(58));
