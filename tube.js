//   https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY] HTTP/1.1
const api = "AIzaSyDRsN0YlcdnSZ-OgW19F1yjMarVCJcxi0E";


const searchvideos = async () => {
    try{
        const q = document.getElementById("query").value;

        const res = await fetch (
           `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${api}`
        );

        let data = await res.json()
        append(data.items);
        console.log(data.items)


        console.log(res);
    }catch(err){
        console.log(err);
    }
};
searchvideos()
const append = (video) => {
    let show_videos = document.getElementById("show_videos");

    show_videos.innerHTML = null

    video.map(({id: {videoId}, snippet: {title}}) => {

        let div = document.createElement("div");

        let iframe = document.createElement("iframe");

        iframe.src = `https://www.youtube.com/embed/${videoId}`;

                iframe.width = "100%";
                iframe.height = "100%";
                iframe.allow = "fullcrean";
        
                let name = document.createElement("h5");
                name.innerText = title;
        
                div.append(iframe, name);
                show_videos.append(div);
    })
};

