
//the array of words
var words=["area","book","business","case","child","company","place","problem","student","avenue","awkward","azure","bagpipes","bandwagon","beekeeper","bikini","blitz","blizzard","boggle","bookworm","boxcar","boxful","buffalo","buzzing","buzzwords","crypt","cycle","duplex","equip","fishhook","fixable","flopping","fluffiness","funny","galaxy","gossip","injury","ivory","jackpot","joyful","juicy","kayak","lengths","lucky","luxury","matrix","microwave","nightclub","nowadays","pixel","puppy","puzzling","quiz","scratch","staff","strength","stretch","subway","swivel","syndrome","thriftless","thumbscrew","transcript","unknown","unworthy","unzip","uptown","vaporize","vixen","vodka","walkway","wave","whiskey","witchcraft","wizard","wristwatch","yoked","youthful","yummy","zephyr","zigzag","zigzagging","zilch","zipper","zodiac","zombie"]
//the computer random choise
var choise="";
//the word that the computer choose and pushed as charachters in ths array
var newWord=[];
// an array of dashes 
var newWordDash=[];
// an array to store user guessed charecter
var charGuessed=[];
// boolean variable tells if its a new game or not
var isNewGame=true;
// how many wins
var win=0;
//how many losses
var lose=0;
//how many lives and as a start each user has 5 laves
var live=6;
var intervalId;
var time = 2;
var mute = false;

var wordid=document.getElementById("word");
var winid=document.getElementById("win");
var loseid=document.getElementById("lose");
var liveid=document.getElementById("live");
var charid=document.getElementById("char");
var startGameid=document.getElementById("startGame");
var newg=document.getElementById("new");
var progBar=$("#progBar");
var muteBtn=$("#mute");
var picGame =$(".gamePicture");
var head = $(".headPicture");
var armL = $(".armLPicture");
var armR = $(".armRPicture");
var legL = $(".legLPicture");
var legR = $(".legRPicture");
var winpic = $(".winPicture");
var losepic = $(".losePicture");
head.css({opacity: "0.00"});
armL.css({opacity: "0.00"});
armR.css({opacity: "0.00"});
legL.css({opacity: "0.00"});
legR.css({opacity: "0.00"});
winpic.css({opacity: "0.00"});
losepic.css({opacity: "0.00"});

var audiogame = document.createElement("audio");
audiogame.setAttribute("src", "assets/images/game.mp3");
var audiolose = document.createElement("audio");
audiolose.setAttribute("src", "assets/images/lose.mp3");
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/images/won.mp3");
var audioScratch = document.createElement("audio");
audioScratch.setAttribute("src", "assets/images/scratch.mp3");

// function to start a new game
function start(){
    choise = words[Math.floor(Math.random() * words.length)];
    choise = choise.toUpperCase();
    console.log(choise);
    live=6;
    newWord=[];
    newWordDash=[];
    charGuessed=[];
    for (let index = 0; index < choise.length; index++) {
        newWord.push(choise[index])
        newWordDash.push("__");
    }
    let str="";
    for (let i = 0; i < newWordDash.length; i++) {
        str=str+newWordDash[i]+" ";
    }
    
    wordid.textContent=str;
    winid.textContent=win;
    loseid.textContent=lose;
    liveid.textContent=live;
    charid.textContent=charGuessed;
    startGameid.textContent="Good Luck!!!";
    newg.textContent="";
    picGame.attr("src","assets/images/base.jpg")
    console.log(newWord);
    isNewGame=false;
    $("#word").css({color:"darkgoldenrod"});
    head.css({opacity: "0.00"});
    armL.css({opacity: "0.00"});
    armR.css({opacity: "0.00"});
    legL.css({opacity: "0.00"});
    legR.css({opacity: "0.00"});
    winpic.css({opacity: "0.00"});
    losepic.css({opacity: "0.00"});
    progBar.css({width: "100%"});
    progBar.css({background: "green"});
    if(!mute){
    audioElement.pause();
    audiolose.pause();
    audiogame.play();}
}

$("#mute").click(function () {
  if(!mute){
    $("#mute").text("Unmute");
    audioElement.pause();
    audiolose.pause();
    audiogame.pause();
    audioScratch.pause();
      mute=true;
  }
  else{
    $("#mute").text("Mute");
    mute=false;
    if(startGameid.textContent==="Good job you won!!!"){
      audioElement.play();
    }
    if(startGameid.textContent==="Ahhh try again!!! The correct word was"){
      audiolose.play();
    }
    if(startGameid.textContent==="Good Luck!!!"){
      audiogame.play();
    }
  }
  });

document.onkeyup = function(event) {
 
    if(isNewGame){
        start();
    }
    else{ 
      var select = (event.key).toUpperCase();
      if(select==="A"||select==="B"||select==="C"||select==="D"||select==="E"||select==="F"||select==="G"||select==="H"||select==="I"||select==="J"||select==="K"||select==="L"||select==="M"||select==="N"||select==="O"||select==="P"||select==="Q"||select==="R"||select==="S"||select==="T"||select==="U"||select==="V"||select==="W"||select==="X"||select==="Y"||select==="Z"){
  
        userChoise =select;
        if(charGuessed.indexOf(userChoise)===-1)
        {
            charGuessed.push(userChoise);
            charid.textContent=charGuessed;
        if(newWord.indexOf(userChoise)>=0)
        {
            for(var j=0;j<newWord.length;j++){
                if(newWord[j]===userChoise){
                newWordDash[j]=userChoise;
                } 
                let str="";
                for (let i = 0; i < newWordDash.length; i++) {
                    str=str+newWordDash[i]+" ";
                }
                wordid.textContent=str;
            }
            if(newWordDash.indexOf("__")===-1)
            {
                isNewGame=true;
                win++;
                head.css({opacity: "0.00"});
                armL.css({opacity: "0.00"});
                armR.css({opacity: "0.00"});
                legL.css({opacity: "0.00"});
                legR.css({opacity: "0.00"});
                winpic.css({opacity: "1"});
                if(!mute){
                audiogame.pause();
                audioElement.play();}
                startGameid.textContent="Good job you won!!!";
                $("#word").css({color:"chartreuse"});
                wordid.textContent=choise;                  
                isNewGame=true;
                newg.textContent="Press any key to start a new game";
            }
        }
        else{
            if(live>0){
                live--;
                liveid.textContent=live;
                if(!mute){
                audiogame.pause();}
                if(live===5){
                  progBar.css({width: "85%"});
                    progBar.css({"background-color": "greenyellow"});  
                    clearInterval(intervalId);
                    intervalId = setInterval(function () {
                      if(!mute){
                        audioScratch.play();}
                      if (time > 0) {
                        time--;
                      }
                      else {
                        if(!mute){
                        audioScratch.pause();
                        audiogame.play();}
                        clearInterval(intervalId);
                        time = 2;
                      }
                    }, 1000);
                    head.css({opacity: "1"});
                    
                }
                else if(live===4){
                  progBar.css({width: "65%"});
                  progBar.css({"background-color": "orange"});
                    clearInterval(intervalId);
                    intervalId = setInterval(function () {
                      if(!mute){
                        audioScratch.play();}
                      if (time > 0) {
                        time--;
                      }
                      else {
                        if(!mute){
                        audioScratch.pause();
                        audiogame.play();}
                        clearInterval(intervalId);
                        time = 2;
                      }
                    }, 1000);
                    armL.css({opacity: "1"});
                
                }
                else if(live===3){
                  progBar.css({width: "45%"});
                  progBar.css({"background-color": "orangered"});
                    clearInterval(intervalId);
                    intervalId = setInterval(function () {
                      if(!mute){audioScratch.play();}
                      if (time > 0) {
                        time--;
                      }
                      else {
                        if(!mute){
                        audioScratch.pause();
                        audiogame.play();}
                        clearInterval(intervalId);
                        time = 2;
                      }
                    }, 1000);
                    armR.css({opacity: "1"});
                
                }else if(live===2){
                  progBar.css({width: "25%"});
                  progBar.css({"background-color": "red"});
                    clearInterval(intervalId);
                    intervalId = setInterval(function () {
                      if(!mute){audioScratch.play();}
                      if (time > 0) {
                        time--;
                      }
                      else {
                        if(!mute){
                        audioScratch.pause();
                        audiogame.play();}
                        clearInterval(intervalId);
                        time = 2;
                      }
                    }, 1000);
                    legL.css({opacity: "1"});
                
                  }else if(live===1){
                  progBar.css({width: "5%"});
                  progBar.css({"background-color": "darkred"});
                    clearInterval(intervalId);
                    intervalId = setInterval(function () {
                      if(!mute){audioScratch.play();}
                      if (time > 0) {
                        time--;
                      }
                      else {
                        if(!mute){
                        audioScratch.pause();
                        audiogame.play();}
                        clearInterval(intervalId);
                        time = 2;
                      }
                    }, 1000);
                    legR.css({opacity: "1"});
                
                }
                if(live===0)
                {
                    head.css({opacity: "0.00"});
                    armL.css({opacity: "0.00"});
                    armR.css({opacity: "0.00"});
                    legL.css({opacity: "0.00"});
                    legR.css({opacity: "0.00"});
                    losepic.css({opacity: "1"});
                    startGameid.textContent="Ahhh try again!!! The correct word was"; 
                    $("#word").css({color:"crimson"});    
                    wordid.textContent=choise;                    
                    lose++;
                    if(!mute){
                    audiogame.pause();
                    audiolose.play();}
                    isNewGame=true;
                    newg.textContent="Press any key to start a new game";
                }

            }
        }
    }
    }
  }
}