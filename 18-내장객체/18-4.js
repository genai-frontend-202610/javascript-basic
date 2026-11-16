let map = new Map()

map.set("name","Alice")
map.set("age",25)

console.log(map.get("name"));
console.log(map.has("age"));
console.log(map.size);
console.log(map);

for(const [key, value] of map){
    console.log(key,value)
}