function makeitunnique(str){

    str = str.split(' ')
    str = str.join('')
    // console.log(str)

    if (str.length === 0){
        return 0
    }

    var obj = {}

    for (var i = 0; i < str.length; i++){
        obj[str[i]] = i;
    }

    var res = "";

    for (key in obj){
        res += key;
    }

    return res
}

// console.log(makeitunnique('my name is ankush'))

function runProgram(input) {
    // Write code here
    // console.log(input)
    console.log(makeitunnique(input))
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`my name is ankush`);
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