
    // AIzaSyCqP5bhdp2g0TL7o43DM0bic06NRz3HUTo

    // https://youtube.googleapis.com/youtube/v3/search?q=csk&type=video&key=[YOUR_API_KEY]

    // https://youtube.googleapis.com/youtube/v3/search?q=${search}&type=video&key=AIzaSyCqP5bhdp2g0TL7o43DM0bic06NRz3HUTo


    var videos = document.getElementById("videos")

    async function searchVideos(){

        let search = document.getElementById("query").value;

            let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q=${search}&type=video&key=AIzaSyCqP5bhdp2g0TL7o43DM0bic06NRz3HUTo`)

            let data = await response.json();

            console.log("Data: ", data)

            appendVideos(data.items)

        
        // in given below link q means search for and type means videos or channel etc and api key is key max result is number of videos u want to show on display

        
    }

    searchVideos()


    function appendVideos(video_data){

        videos.innerHTML = null

        video_data.forEach(({ id: { videoId }}) => {
            
            // console.log("video:", videoId)

            let div = document.createElement("div");

            // embed utube vdo

            div.innerHTML = `<iframe width="200" height="250" src="https://www.youtube.com/embed/${videoId}"title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

            div.style.marginTop = "20px";
            videos.append(div)
        })

    }
