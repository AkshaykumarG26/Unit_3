var arr = [2,3,6,10];
var s = 4;
var sum = 0;
var flag = false
for (var i = 0; i < arr.length; i++){
    for (var j = i; j < arr.length; j++){
        sum = arr[i] + arr[j];
        // console.log(sum)
        console.log("arr[i]: ",arr[i])
        console.log("arr[j]: ",arr[j])
        // console.log(arr[j])
        if (sum == s){
            // console.log("Yes");
            flag = true
        }
    }
}

if (flag){
    console.log("Yes")
}else{
    console.log("No")
}