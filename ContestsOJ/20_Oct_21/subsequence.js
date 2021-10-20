function subsequence(str, out){

    if (str.length === 0){
        return out + ' '
    }

    subsequence(str.substring(1), out + str[0])
    subsequence(str.substring(1), out)
}

console.log(subsequence('abcd',''))