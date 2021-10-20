var stack = [];
var str = "([{}])";
var n = str.length;
var flag = 0;
for (var i = 0; i <= str.length; i++){
    if(str[i] == '(' || str[i] == '{' || str[i] == "["){
        stack.push(str[i])
        console.log(stack)
    }else{
        if (stack.length == 0){
            flag = 1;
            break;
        }else{
            if((str[i] == ']' && stack[0] != '[') || (str[i] == ')' && stack[0] != "(") || (stack[i] == '}' && stack[0] != '{')){
                flag = 1;
                break;
            }else{
                stack.pop();
                // console.log(stack)
            }
        }
    }
}

// console.log(stack)
if(flag == 1){
    console.log("not balanced");
}else{
    if (stack.length == 0){
        console.log("balanced")
    }else{
        console.log("not balanced")
    }
}