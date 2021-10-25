function allTwiceExceptOne(n, arr){
    var uniqueObj = {};

    for (var i = 0; i < n; i++){
        var character = arr[i];

        if (uniqueObj[character] == undefined){
            uniqueObj[character] = 1
        }else{

            var x = uniqueObj[character]
            uniqueObj[character] = x+1;
        }
    }

    for (var value in uniqueObj){
        if(uniqueObj[value] == 1){
            console.log(value)
        }
    }
}

// allTwiceExceptOne(1,[2])

function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.trim().split("\n");

    var testCases = +input[0]
    var line = 1;

    for (var i = 0; i < testCases; i++){

        var n = +input[line++];
        var arr = input[line++].trim().split(" ").map(Number)

        allTwiceExceptOne(n, arr)
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`2
    1
    5
    5
    1 2 1 3 2`);
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