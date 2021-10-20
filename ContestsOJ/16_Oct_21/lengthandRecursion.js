function lenOfStr(str){
    if (str == ''){
        return 0
    }
    // console.log(str.substring(1))
    return lenOfStr(str.substring(1))+1

}


function runProgram(input) {
    // Write code here
    // console.log(input)
    var str  = input
    console.log(lenOfStr(str))

   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`masaischool`);
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