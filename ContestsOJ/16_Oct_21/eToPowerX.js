function eTOPowerX(x, n){

    if(n === 0){
        console.log(1)
    }

    function Power(x, n){
        return x**n
    }

    function factorial(n){
        if (n == 0 || n == 1){
            return 1
        }
        return n * factorial(n-1)
    }
    

    var ans = Power/factorial(n) + eTOPowerX(x, n-1)

    console.log(ans)
}



eTOPowerX(4,2)

