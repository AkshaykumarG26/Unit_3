function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    var p = arr[0]
    var start = []
    var end = []

    for (var i = 1; i < arr.length; i++){
        arr[i] > p ? start.push(arr[i]):end.push(arr[i])
    }

    return quickSort(start).concat(p,quickSort(end))
}

// console.log(quickSort([2,3,3,2,4,4,32,2]))

function runProgram(input) {
    // Write code here
    // console.log(input)
    input = input.split("\n")
    var n = +input[0]
    var arr = input[1].trim().split(" ").map(Number)
    // console.log(arr)
    console.log(quickSort(arr).join(" "))
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`5
    2 3 1 4 5`);
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