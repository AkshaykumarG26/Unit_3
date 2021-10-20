function GPandRecurion(n, r){

    
}

function formulae(num, rec){
    if (num === 0){
        return 1
    }
    // console.log(num)
    var res = 1/(rec**num-1)
    var sum = 0
    sum += res;
    formulae(num-1, rec)

    return sum
}

console.log(formulae(4,10))