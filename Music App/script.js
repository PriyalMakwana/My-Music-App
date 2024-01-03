let songIndex=0;
let audioElement=new Audio ("0.mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
{songName:'Oonchi Oonchi Diwaro',filePath:'0.mp3',coverPath:'img1.jpg'},
{songName:'Tuu Asshiqui he Mery',filePath:'1.mp3',coverPath:'img2.jpeg'},
{songName:'Buhe Vich NehaKakkar',filePath:'2.mp3',coverPath:'img3.jpeg'},
{songName:'Sawan Aa gaya Neha',filePath:'3.mp3',coverPath:'img4.jpeg'},
{songName:'Ve Fukrey Fukrey--3',filePath:'4.mp3',coverPath:'img5.jpeg'},
{songName:'Simroon Tera Name',filePath:'5.mp3',coverPath:'img6.jpeg'},
{songName:'Sanu Ek  Pal Chain Na ',filePath:'6.mp3',coverPath:'img7.jpeg'},
{songName:'Raata Jubin Nautiyal',filePath:'7.mp3',coverPath:'img8.jpeg'},
{songName:'Not Ramaiya Vastavaiya',filePath:'8.mp3',coverPath:'img9.jpeg'},
{songName:'Jamna Paar Tony Kakkar',filePath:'9.mp3',coverPath:'img10.png'}
]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
      element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
      //console.log(element,i)
  });
  
//handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
});

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
});

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
})
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
     //console.log(e.target);
     makeAllPlays();
     songIndex= parseInt(e.target.id);
     e.target.classList.remove('fa-circle-play')
     e.target.classList.add('fa-circle-pause')
     audioElement.src = `${songIndex}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     
     masterPlay.classList.remove('fa-circle-play')
     masterPlay.classList.add('fa-circle-pause')

    })
})

document.getElementById('next').addEventListener('click',
()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
      songIndex +=1;  
    }
    audioElement.src = `${songIndex}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     
     masterPlay.classList.remove('fa-circle-play')
     masterPlay.classList.add('fa-circle-pause')

})


document.getElementById('previous').addEventListener('click',
()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
      songIndex -=1;  
    }
    audioElement.src = `${songIndex}.mp3`;
     audioElement.currentTime = 0;
     audioElement.play();
     
     masterPlay.classList.remove('fa-circle-play')
     masterPlay.classList.add('fa-circle-pause')

})