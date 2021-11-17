var num = 4;
var sum = 0
for (var i = 1; i <= num; i++){
    // console.log(i)
    sum += i
}
console.log(sum)



function addd(num){
    var sum = 0;
    for (var i = 0; i <= num; i++){
        sum += i
    }
    return sum
}
console.log(addd(4))


function strchallenge(str){

    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            count++
        }
    }
    return count
}
console.log(ctrchallenge("hello"))