var songList = document.getElementById("songs");
var songs = songList.getElementsByTagName("li");

for (const li of songs){
    li.classList.add("red");
}
