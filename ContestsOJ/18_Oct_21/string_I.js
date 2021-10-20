function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split("\n");
    // console.log(input)
    console.log(input[1])

   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`4\naman`);
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