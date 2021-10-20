
    let parent = document.getElementById("parent");

    async function News(){

        let res = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c29c0a53f2d54404af129798b713c1d0`);

        // console.log(res)

        let data = await res.json();

        console.log(data.articles);

        showNews(data.articles)
    }

    News()


    function showNews(news){

        news.forEach(function(n){

            let div = document.createElement("div");

            let author = document.createElement('p');
            author.innerHTML = "Author: " + n.author;
            
            let title = document.createElement("h3");
            title.innerHTML = "Title: " + n.title;

            let content = document.createElement("p");
            content.innerHTML = "Content: " + n.content;

            let description = document.createElement("p");
            description.innerHTML = "Description: " + n.description;
            // console.log(author, title);

            div.append(author, title, content, description);

            parent.append(div)
        })
    }



    
    async function searchNews(n){

        try {
            
            let search = await fetch(`https://newsapi.org/v2/top-headlines?sources=${n}&apiKey=c29c0a53f2d54404af129798b713c1d0`);
            
            var data = await res.json();
        }catch(e){
            alert("error...!");
        }

        console.log(data)

    }




