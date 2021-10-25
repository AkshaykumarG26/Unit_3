var flag = false;

function solve(arr, k, sum, cur){

    if (sum == k){
        flag = true;
    }

    if (cur == arr.length){
        return
    }

    for (var i = cur; i < arr.length; i++){
        solve(arr, k, sum, i+1);
        solve(arr, k, sum+arr[i], i+1);
    }

    if (flag == true){
        return "yes"
    }else{
        return "no"
    }
}

// console.log(solve([1,2,3,4,5,6,7,8,9], 5, 0, 0))


function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.trim().split('\n');
    // console.log(input)
    var n = +input[0]
    // console.log(n)
    var arr = input[1].trim().split(" ").map(Number)
    // console.log(arr)
    var k = +input[2].trim()
    // console.log(k)
    console.log(solve(arr, k, 0, 0))
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`9
    1 2 3 4 5 6 7 8 9
    5`);
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