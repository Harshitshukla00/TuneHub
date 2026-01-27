console.log("Welcome to Spotify");
let songindex = 0;
let songs = [
    {songName: "Abhi-to-party..", filepath:"songs/1.mp3"},
    {songName: "Thoda-thoda-pyar", filepath: "songs/2.mp3"},
    {songName: "Hukka-bar", filepath: "songs/3.mp3"},
    {songName: "Tagdi-slow & reverb", filepath: "songs/4.mp3"},
    {songName: "Aja-mahi-slow reverb", filepath: "songs/5.mp3"},
    {songName: "Dil mera tod diya", filepath: "songs/6.mp3"},
    {songName: "Kala-chashma", filepath: "songs/7.mp3"},
    {songName: "kaun-tujhe.. by kishore kumar", filepath: "songs/8.mp3"},
    {songName: "ramjhol-bolegi", filepath: "songs/9.mp3"},
    {songName: "English-medium", filepath: "songs/10.mp3"},
    {songName: "Jugni-jugni", filepath: "songs/11.mp3"},
    {songName: "Munda-gora-rang", filepath: "songs/12.mp3"},
    {songName: "jai-jaykara", filepath: "songs/13.mp3"},
    {songName: "No-entry", filepath: "songs/14.mp3"},
    {songName: "Ambarsariya-slow & reverb", filepath: "songs/15.mp3"},
    {songName: "Sar-samundar-par", filepath: "songs/16.mp3"},
];
let audioElement = new Audio(songs[0].filepath);
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let mastersongname = document.getElementById('mastersongname');

let songItem = Array.from(document.getElementsByClassName("songItem"));


songItem.forEach((element, i) => {
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
         masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
});

//listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element, i)=>{
    element.addEventListener('click',(e) => {
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songindex].filepath;
         mastersongname.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click',() =>{
    if(songindex >= songs.length-1){
        songindex = 0
    }else{
        songindex += 1;
    }
    songindex += 1;

      audioElement.src = songs[songindex].filepath;
       mastersongname.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click',() =>{
    if(songindex <= 0){
        songindex = songs.length-1;
    }else{
        songindex -= 1;
    }

      audioElement.src = songs[songindex].filepath;
      mastersongname.innerText = songs[songindex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
})