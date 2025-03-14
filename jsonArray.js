const txt = '{"name":"John", "age":30, "city":"New York"}'
const obj = JSON.parse(txt);
document.getElementById("JsonArray").innerHTML = obj.name + ", " + obj.age;

// Parsing from JSON array
const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(text);
document.getElementById("JsonArray").innerHTML = myArr[0];

console.log(myArr[0]);