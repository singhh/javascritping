const kelvin = prompt('What is the Kelvin tempreature today?'); //a prompt to get user to input kelvin value of temprature and assigned to variable kelvin
const celsius = kelvin - 273; //celsius is similar to Kelvin - the only difference is that Celsius is 273 degree less than kelvin
let fahrenheit = celsius * (9/5) + 32; //equation to calculate Fahrenheit, then store the answer in a variable names fahrenhiet
fahrenheit = Math.floor(fahrenheit);
console.log(`The temprature is ${fahrenheit} degrees fahrenheit.`); //console the stored value in fahrenheit
