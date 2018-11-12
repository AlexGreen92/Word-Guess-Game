var wordsToGuess=['genesis','blondie','survivor','gameover']
var wins=0;
var activeWord;
var guessesRemaining;
var lettersGuessed;
var activeWordLength;
var lettersLeftToWin;
var display=[];
var activeWordArray;
var output='';

var setup=function(){
    output='';
    activeWord=wordsToGuess[wins];
    activeWordLength=activeWord.length;
    lettersLeftToWin=activeWord.length;
    guessesRemaining=13;
    lettersGuessed=[];
    activeWordArray=activeWord.split('');
    document.getElementById('guesses').innerHTML=guessesRemaining;
    document.getElementById('guessedLetters').innerHTML=lettersGuessed;
    for(var i=0;i<activeWordLength;i++){
        display[i]='_ ';
        output=output+display[i];
    }
    document.getElementById('currentWord').innerHTML=output;
}



document.onkeypress=function(event){
    if(!parseInt(event.key)&&guessesRemaining>0){
    for(var t=0;t<lettersGuessed.length;t++){
        if(event.key.toLowerCase()==lettersGuessed[t]){
            return;
        }
    }
    output='';
    guessesRemaining-=1;
    lettersGuessed.push(event.key.toLowerCase());
    document.getElementById('guessedLetters').innerHTML=lettersGuessed;
    document.getElementById('guesses').innerHTML=guessesRemaining;
    for(var k=0;k<activeWord.length;k++){
        if(event.key.toLowerCase()==activeWord[k]&&event.key.toLowerCase()!=display[k]){
            
            display[k]=event.key.toLowerCase();
            lettersLeftToWin--;
        } 
        output=output+display[k]+" ";
    }
    document.getElementById('currentWord').innerHTML=output; 
    if(lettersLeftToWin<1){
         alert('you win!!!!!');
         wins++;
         document.getElementById('wins').innerHTML=wins;
         setup();
         playsong();
    }else if(guessesRemaining<1){
         alert('you loose!');
         setup();
    }
}
}
function playsong(){
    if(wins==1){
        document.getElementById('songName').innerHTML='<h4>Illegal Alien By Genesis!!!!</h4>'
        document.getElementById('video').innerHTML='<iframe width="400" height="300" src="https://www.youtube.com/embed/_61hzuGGJX0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }else if(wins==2){
        document.getElementById('songName').innerHTML='<h4>Call Me By Blondie!!!!</h4>'
         document.getElementById('video').innerHTML="<video width='400' height='300' controls autoplay> <source src='assets/videos/blondie.mp4' type='video/mp4'></video>" 
        //so it looks like this song/clip has copyrights... if i`m inserting the youtube code its just not available... i`ve spent hours to make it work and the only way to make it work i found is to find and download the video itself...
        //and it looks like with the line of code above i`m violating the copyrights................
    }else if(wins==3){
        document.getElementById('songName').innerHTML='<h4>The Eye Of The Tiger By Survivor!!!!</h4>'
         document.getElementById('video').innerHTML="<video width='400' height='300' controls autoplay> <source src='assets/videos/survivor.mp4' type='video/mp4'></video>"
}}
window.onload=function(){
    setup();
}