/* 11. Unit converter
A local weather station needs to convert temperature data collected in Celsius to Fahrenheit before displaying it on its website. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The function should take input in Celsius and return output in Fahrenheit. This function will help the weather station to providd temperature readings that are easily understandable to a wider audience.*/

function CelsiusToFahrenheit(){
    let Celsius=document.getElementById("celsius").value;
    let Fahrenheit=(Celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value=Fahrenheit.toFixed(2);
}