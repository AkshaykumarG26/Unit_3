function t(matrix, row, column){
    for (var i = 0; i < row; i++){
        // var emptyArr = [];
        var str = ''
        for (var j = 0; j < column; j++){
            if (matrix[i][j] === 0)
                // matrix[i][j] = 1;
                str += '1' + ' ';
            else
                str += '0' + ' '
            
            }
            console.log(str)
    }
    // return matrix
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n")
    // console.log(input)
    var [n,m] = input[0].trim().split(" ").map(Number);
    var line = 1;
    var matrix = []
    for (var i = 0; i < n; i++){
        matrix.push(input[line++].trim().split(' ').map(Number));
    }
    t(matrix,n,m)

   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3 2
    1 0
    0 1
    1 1`);
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