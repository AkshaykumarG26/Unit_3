var arr = [1,2,2];

function strange(n, arr){
    
    var subArr = [];
    for (var i = 0; i < n; i++){
        
        for (var j = i; j <= n; j++){
            
            subArr.push(arr.slice(i,j))
            
    }   
}


for (var k = 0; k < subArr.length-1; k++){

  if(subArr[k].length != 0){

    console.log(subArr[k].join(' '))
  }
}

}
function runProgram(input) {
    // Write code here
    // console.log(input)

    input = input.trim().split("\n")
    var n = +input[0]

    var arr = input[1].trim().split(" ").map(Number)

    strange(n, arr)
   
  }
  if (process.env.USERNAME === "akshra") {
    runProgram(`3
    1 2 2`);
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



