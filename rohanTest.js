function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split("\n")
    var n = +input[0]
    console.log(n)
    var arr = input[1].split(" ")
    console.log(arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`4
    -2 0 8 4`);
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