function twoSortedArray(size, arr1, arr2){
    var a = 0;
    var b = size-1;
    var count = 0;
    while(a <= size-1 && b >= 0){
        if(arr1[a] == arr2[b]){
            a++;
            b--;
            count++;
        }else if(arr1[a] < arr2[b]){
            a++;
        }else{
            b--;
        }
    }
console.log(count)
}


// twoSortedArray(size, arr1,arr2)
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    // console.log(input)
    var testCases = +input[0];
    var line = 1;
    for (var i = 0; i < testCases; i++){
        var size = +input[line++];
        // console.log(size)
        var arr1 = input[line++].trim().split(" ").map(Number);
        var arr2 = input[line++].trim().split(" ").map(Number);

        twoSortedArray(size,arr1,arr2)
    }
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`1
    6
    1 2 2 3 4 5
    4 4 3 2 1 1`);
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