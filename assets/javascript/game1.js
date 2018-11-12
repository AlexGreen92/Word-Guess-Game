var myObj={
    wordsToGuess:['genesis','blondie','survivor','gameover'],
    wins:0,
    activeWord:'',
    guessesRemaining:0,
    lettersGuessed:[],
    activeWordLength:0,
    lettersLeftToWin:0,
    display:[],
    activeWordArray:[],
    output:'',
    setup:function(){
        this.output='';
        this.activeWord=this.wordsToGuess[this.wins];
        this.activeWordLength=this.activeWord.length;
        this.lettersLeftToWin=this.activeWord.length;
        this.guessesRemaining=13;
        this.lettersGuessed=[];
        this.activeWordArray=this.activeWord.split('');
        document.getElementById('guesses').innerHTML=this.guessesRemaining;
        document.getElementById('guessedLetters').innerHTML=this.lettersGuessed;
        for(var i=0;i<this.activeWordLength;i++){
            this.display[i]='_ ';
            this.output=this.output+this.display[i];
        }
        document.getElementById('currentWord').innerHTML=this.output;
    },
    myFunc:function(b){
        console.log(b);
        if(!parseInt(b.key)&&this.guessesRemaining>0){
            for(var t=0;t<this.lettersGuessed.length;t++){
                if(b.key.toLowerCase()==this.lettersGuessed[t].toLowerCase()||b.key.toLowerCase()=='enter'){
                    return;
                }
            }
            this.output='';
            this.guessesRemaining-=1;
            this.lettersGuessed.push(b.key.toUpperCase());
            document.getElementById('guessedLetters').innerHTML=this.lettersGuessed;
            document.getElementById('guesses').innerHTML=this.guessesRemaining;
            for(var k=0;k<this.activeWord.length;k++){
                if(b.key.toLowerCase()==this.activeWord[k]&&b.key.toLowerCase()!=this.display[k]){
                    this.display[k]=b.key.toLowerCase();
                    this.lettersLeftToWin--;
                } 
                this.output=this.output+this.display[k]+" ";
            }
            document.getElementById('currentWord').innerHTML=this.output; 
            if(this.lettersLeftToWin<1){
                 alert('you win!!!!!');
                 this.wins++;
                 document.getElementById('wins').innerHTML=this.wins;
                 this.setup();
                 this.playsong();
            }else if(this.guessesRemaining<1){
                 alert('you loose!');
                 this.setup();
            }
        }
    },
    playsong:function(){
        if(this.wins==1){
            document.getElementById('songName').innerHTML='<h4>Illegal Alien By Genesis!!!!</h4>'
            document.getElementById('video').innerHTML='<iframe width="400" height="300" src="https://www.youtube.com/embed/_61hzuGGJX0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }else if(this.wins==2){
            document.getElementById('songName').innerHTML='<h4>Call Me By Blondie!!!!</h4>'
             document.getElementById('video').innerHTML="<video width='400' height='300' controls autoplay> <source src='assets/videos/blondie.mp4' type='video/mp4'></video>" 
            //so it looks like this song/clip has copyrights... if i`m inserting the youtube code its just not available... i`ve spent hours to make it work and the only way to make it work i found is to find and download the video itself...
            //and it looks like with the line of code above i`m violating the copyrights................
        }else if(this.wins==3){
            document.getElementById('songName').innerHTML='<h4>The Eye Of The Tiger By Survivor!!!!</h4>'
             document.getElementById('video').innerHTML="<video width='400' height='300' controls autoplay> <source src='assets/videos/survivor.mp4' type='video/mp4'></video>"
        }
    }
}







document.onkeypress=function(event){
    myObj.myFunc(event);
}

window.onload=function(){
    myObj.setup();
}