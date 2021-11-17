function sneRight(n, arr){

    var count = 0
    for (var i = 0; i < n; i++){
        if(arr[i+1] > arr[i-1]){

            console.log(arr[i])
            count++
        }
    }   
    console.log(count)
}


function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    // console.log(arr)
    sneRight(n,arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5
4 2 1 3 7`);
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