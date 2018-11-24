/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */

// Create a Map
let map = new Map().set('1','HTML')
                   .set('2','CSS')
                   .set('3','JavaScript')
                   .set('4','JQuery')
                   .set('5','AJAX')
                   .set('6','Bootstrap')
                   .set('6','NAVEEN');
console.log(map);

// map.get(key)
let value1 = map.get('1');
console.log(value1);

// map.has(key)
let key1 = map.has('6');
console.log(`Has a key 6 : ${key1}`);

// get all the keys
let output = '';
for(let key of map.keys()){
    output += key + ' ';
}
console.log(output);

// get all the values
output = '';
for(let value of map.values()){
    output += value.toUpperCase() + ' ';
}
console.log(output);

// get all the entries
output = '';
for(let entry of map.entries()){
    output += entry + ' ';
}
console.log(output);

// size of a map
console.log(map.size);

// clear the map
map.clear();
console.log(map);

/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

// Create a Set
let technologies = new Set().add('HTML').add('HTML').add('CSS').add('CSS')
    .add('JavaScript').add('Bootstrap');
console.log(technologies);

// size
console.log(technologies.size);

// has()
let value = technologies.has('HTML');
console.log('Has a HTML ? : ' + value);

// print the values of a map
output = '';
for(let value of technologies){
    output += value.toUpperCase() + ' ';
}
console.log(output);





