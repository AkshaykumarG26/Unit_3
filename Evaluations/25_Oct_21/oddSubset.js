function oddSubset(n, arr){

    var x = 0;

    for(var i = 0; i < n; i++){
        var oddSum = 0;

        for (var j = i; j <= n-1; j++){
            oddSum += arr[j]

            if(oddSum % 2 == 1){
                x++
            }
            
        }
    }

    console.log(x)
}

// oddSubset(2,[2,4])

function runProgram(input) {
    // Write code here
    // console.log(input)

    input = input.trim().split("\n")
    var n = +input[0];
    var arr = input[1].trim().split(" ").map(Number);

    oddSubset(n,arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3
    1 2 3`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }



//   second approch


// var arr = [1,2,3];

function oddSum(n, arr){

    
    var subArr = [];
    for (var i = 0; i <= arr.length; i++){
        
        for (var j = i; j <= arr.length; j++){
            
            subArr.push(arr.slice(i,j))
            
    }   
}

var x= []

for (var k = 0; k < subArr.length; k++){
    x.push(subArr[k])
}

var s = []
for (var j = 0; j < x.length; j++){
    s.push(x[j])
}

var sum = []
for (var i = 0; i < s.length; i++){
    if (s[i].length !== 0){
        // console.log(s[i])
        // sum += s[i]
        sum.push(s[i])
    }
}
var count = 0
// console.log(sum)
for (var i = 0; i < sum.length; i++){
    var s = 0;
    for (j = 0; j < sum[i].length; j++){

        s += sum[i][j]
    }

    // console.log(s)
    if (s % 2 == 1){
        count++
    }
}

console.log(count)

}


function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.trim().split("\n");
    var n = +input[0];

    var arr = input[1].trim().split(" ").map(Number)

    oddSum(n, arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    2 4`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }