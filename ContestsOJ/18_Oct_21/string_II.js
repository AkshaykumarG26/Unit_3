function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split("\n");
    // console.log(input)
    // console.log(input[1])

    var testCases = +input[0];
    var line = 1;

    for (var i = 0; i < testCases; i++){
        var n = input[line++].trim()
        var name = input[line++].trim()

        console.log(name)
    }

   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    4
    aman
    6
    rutwik`);
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