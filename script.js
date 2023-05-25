console.log("Welcome to Spotify");
let songIndex = 0;
let audioElement = new Audio('song/4.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif=document.getElementById('gif'); 
let songItems =Array.from(document.getElementsByClassName('songItem'));
// console.log(songItems);
let songs = [
    {songName: "Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"cover1.jpg"},
    {songName: "Salam-e-Ishq",filePath:"song/2.mp3",coverPath:"cover2.jpg"},
    {songName: "Tu hi meri shab hai",filePath:"song/3.mp3",coverPath:"cover2.jpg"},
    {songName: "Dil Ibaadat",filePath:"song/4.mp3",coverPath:"cover1.jpg"},
    {songName: "Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"cover1.jpg"},
    {songName: "Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"cover1.jpg"},
    {songName: "Salam-e-Ishq",filePath:"song/1.mp3",coverPath:"cover1.jpg"},
    {songName: "Salam-e-Ishq",filePath:"song/4.mp3",coverPath:"cover1.jpg"},
]
songItems.forEach((element,i) => {
    // console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
});
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate')
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    // console.log(progress);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays =()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName ('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        // index=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        // audioElement.src=`song/${index}.mp3`;
        // audioElement.currentTime=0;
        // audioElement.play();
        // masterPlay.classList.remove('fa-play-circle');
        // masterPlay.classList.add('fa-pause-circle');
        audioElement.src = 'song/4.mp3';
        audioElement.currentTime = 0;
        audioElement.play();

    })
})
