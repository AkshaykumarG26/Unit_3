function login(e) {
    e.preventDefault();
    let form = document.getElementById("loginForm");
    let user_data={
        username: form.username.value,
        password: form.password.value,
    }
    user_data = JSON.stringify(user_data);
    fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
        method: "POST",
        body:user_data,
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        fetchdata(user_data,res.token)
    })
    .catch((err)=>{
        console.log(err);
    })
}

function fetchdata(username,token){
    fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers: {
            "Content-Type": "application/json",
            'Authorization':`Bearer ${token}`
        }
    })
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
}