function waysToSumN(n){
    var arr = [1,2,5]
    let count = new Array(n+1);
    count.fill(0)
    // console.log(count)
    count[0] = 1

    for(var i = 1; i <= n; i++)
        for (var j = 0; j < arr.length; j++)
            if(i >= arr[j])
                count[i] += count[i - arr[j]]
            

    return count[n]
        
    
}

// waysToSumN(5)

// console.log(waysToSumN(5))


function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split("\n")
    var testCases = +input[0];
    var line = 1;
    for (var i = 0; i < testCases; i++){
        var n = +input[line++]
        console.log(waysToSumN(n))
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`1
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