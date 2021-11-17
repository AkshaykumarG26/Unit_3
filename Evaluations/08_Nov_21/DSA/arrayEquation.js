// var arr = [1,2,3,4,5];
function arrayEquation(n,arr){

    var evenSum = 0;
    var oddSum = 0;
    for (var i = 0; i < n; i++){
        if (arr[i] % 2 == 0){
            evenSum += arr[i]
        }else if(arr[i] % 2 == 1){
            oddSum += arr[i]
        }
    }
    var z = (evenSum * 2) + (oddSum * 3)
    console.log(z)
}
