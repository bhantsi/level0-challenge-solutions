function celsiusToFahrenheit(celsius) 
{
  const celsiusTemprature = celsius;
  // celsius to fahrenheit conversion 
  const celsiusToFahrenheit = celsiusTemprature * 9 / 5 + 32;
  // Using tempalate litreals to output the message
  const temprature = `${celsiusTemprature} degrees Celsius is eqivalent to ${celsiusToFahrenheit} degrees in Fahrenheit`;
    console.log(temprature);
}

function fahrenheitToCelsius(fahrenheit){
  const fahrenheitTemprature = fahrenheit;
  //  fahrenheit to celsius conversion 
  const fahrenheitToCelsius = (fahrenheitTemprature - 32) * 5 / 9;
  // Using tempalate litreals to output the message
  const temprature = `${fahrenheitTemprature} degrees Fahrenheit is eqivalent to ${fahrenheitToCelsius} degrees in Celsius.`;
    console.log(temprature);
} 
celsiusToFahrenheit(31);
fahrenheitToCelsius(82);

 

