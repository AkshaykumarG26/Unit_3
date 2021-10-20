function nickAndHacks(current, target){
    if(current === target){
        return "Yes"
    }

    if(current > target)
        return "No"
    

    if(nickAndHacks((10 * current), target) === true || nickAndHacks((20 * current), target) === true){

        return "Yes"
    }
    

    return "No"
}

console.log(nickAndHacks(1,10))


function runProgram(input) {
    // Write code here
    console.log(input)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(``);
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