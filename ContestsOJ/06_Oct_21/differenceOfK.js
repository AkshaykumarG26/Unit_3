//Enter code here

function diffofK(n,k,arr){
    var flag = false
    for (var i = 0; i < n; i++){
        for (var j = i+1; j < n; j++){
            // console.log(arr.slice(i,j))
            // console.log("I: ", arr[i])
            // console.log("J: ", arr[j])
            if (arr[j]-arr[i] == k){
                // console.log("Yes")
                flag = true
                break
            }
        }
    }
if (flag){
    console.log("Yes")
}else{
    console.log("No")
}
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    // console.log(input)
    var testCases = +input[0];
    var line = 1;
    for (var i = 0; i < testCases; i++){
        var [n,k] = input[line++].trim().split(" ").map(Number);
        // console.log(n,k)
        var arr = input[line++].trim().split(" ").map(Number);
        // console.log(arr)
        diffofK(n,k,arr)
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    5 3
    1 2 3 4 5
    5 8
    1 2 3 4 5 `);
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