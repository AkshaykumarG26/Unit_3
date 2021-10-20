

function append(s){
   
    return new Promise(function(resolve, reject){
    
        let script = document.createElement("script");
        script.src = s

        document.head.append(script);

        script.onload = function(){
            resolve("Script Loading Done")
            // hello()
        }

        script.onerror = function(){
            reject("Script loading Error")
        }
       
    })
   
}


/*
append('script1.js')

.then(function(res){
    // console.log("Res:", res)
    hello()
    append('script2.js').then(function(res){
        // console.log(res)
        hello2()
    })
})

.catch(function(e){
    console.log("Error:", e)
})



// console.log("MyPromise:", myPromise)

*/



// hello()
async function handle(){
    let result = await append('script2.js')
    hello2()
    console.log("Result: ", result)
}
handle()