function famousSum(str){

    if(str.length == 0){
        return 0
    }

    if (str.length == 1){
        return 1
    }

    var temp = 0;

    for (var i = 0; i < str.length; i++){

        temp += Number(str[i])

        // console.log(temp)
    }

    var updated_str = "" + temp;
    // console.log(updated_str)

    return famousSum(updated_str)
}

famousSum("23421")