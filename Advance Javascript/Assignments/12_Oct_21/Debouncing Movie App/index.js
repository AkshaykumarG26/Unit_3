
    var parent = document.getElementById("movieData");

    async function findMovie(movieName){

        movieName = document.getElementById("query").value;

        let res = await fetch(`http://www.omdbapi.com/?apikey=c78ab9a6&s=${movieName}`);

        
        let data = await res.json()
        
        // console.log(data)

        var d = data.Search

        if(data.Response == 'False'){
            alert("Error...! The movie you are searching for dosen't exist...!")
        }else{
            findRatings(d)
            // console.log(d)
        }


        

    }

    // findMovie("avatar")

    
    function findRatings(movie){
        
        parent.innerHTML = null
        let data = []
        
        movie.forEach(function(m){

            let imdbId = m.imdbID

            var res = fetch(`http://www.omdbapi.com/?i=${imdbId}&apikey=c78ab9a6`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(res => showDetails(res))
            
            
        })       
        
    }


    function showDetails(movies){


            let div = document.createElement("div");

            let title = document.createElement("h3")
            title.innerHTML = "Title: " + movies.Title;

            let poster = document.createElement("img")
            poster.src = movies.Poster;

            let year = document.createElement("p")
            year.innerHTML = "Released Year: " + movies.Year;

            let ratings = document.createElement("p")
            ratings.innerHTML = "OMDB Ratings: "+ movies.imdbRating;

            

            let recommended = document.createElement("button");
            recommended.innerHTML = "Recommended"

            div.append(title, poster, year, ratings)

            let rate = movies.imdbRating
            // console.log(Number(rate))
            if (rate >= 8.5){

                let recommended = document.createElement("button")

                recommended.innerHTML = "Recommended"

                recommended.style.width = "180px"
                recommended.style.height = '50px'
                recommended.style.padding = '10px'
                recommended.style.backgroundColor = 'purple'
                recommended.style.fontSize = '20px'


                div.append(recommended)
                
            }

            parent.append(div)
    }
    