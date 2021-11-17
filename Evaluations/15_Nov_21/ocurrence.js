var n = 21321
// console.log(n.toString())
n = n.toString()
// console.log(n.split(""))
var arr = n.split("").map(Number)
var obj = {}
for (var i = 0; i < arr.length; i++){
    if(obj[i] === undefined){
        obj[i] = arr[i]
    }
}
console.log(obj)