
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
var live=5;

var wordid=document.getElementById("word");
var winid=document.getElementById("win");
var loseid=document.getElementById("lose");
var liveid=document.getElementById("live");
var charid=document.getElementById("char");
var startGameid=document.getElementById("startGame");
var newg=document.getElementById("new");
var picGame =$(".gamePicture");
var head = $(".headPicture");
var armL = $(".armLPicture");
var armR = $(".armRPicture");
var legL = $(".legLPicture");
var legR = $(".legRPicture");
var winpic = $(".winPicture");
var losepic = $(".losePicture");
head.animate({opacity: "0.00"});
armL.animate({opacity: "0.00"});
armR.animate({opacity: "0.00"});
legL.animate({opacity: "0.00"});
legR.animate({opacity: "0.00"});
winpic.animate({opacity: "0.00"});
losepic.animate({opacity: "0.00"});

var audiogame = document.createElement("audio");
audiogame.setAttribute("src", "assets/images/game.mp3");
var audiolose = document.createElement("audio");
audiolose.setAttribute("src", "assets/images/lose.mp3");
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/images/won.mp3");

// function to start a new game
function start(){
    choise = words[Math.floor(Math.random() * words.length)];
    console.log(choise);
    live=5;
    newWord=[];
    newWordDash=[];
    charGuessed=[];
    for (let index = 0; index < choise.length; index++) {
        newWord.push(choise[index])
        newWordDash.push("_");
    }
    wordid.textContent=newWordDash;
    winid.textContent=win;
    loseid.textContent=lose;
    liveid.textContent=live;
    charid.textContent=charGuessed;
    startGameid.textContent="Good Luck!!!";
    newg.textContent="";
    picGame.attr("src","assets/images/base.jpg")
    console.log(newWord);
    isNewGame=false;
    head.animate({opacity: "0.00"});
    armL.animate({opacity: "0.00"});
    armR.animate({opacity: "0.00"});
    legL.animate({opacity: "0.00"});
    legR.animate({opacity: "0.00"});
    winpic.animate({opacity: "0.00"});
    losepic.animate({opacity: "0.00"});
    audioElement.pause();
    audiolose.pause();
    audiogame.play();
}

document.onkeyup = function(event) {
    if(isNewGame){
        start();
    }
    else{
        userChoise =event.key;
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
                wordid.textContent=newWordDash;
            }
            if(newWordDash.indexOf("_")===-1)
            {
                isNewGame=true;
                win++;
                head.animate({opacity: "0.00"});
                armL.animate({opacity: "0.00"});
                armR.animate({opacity: "0.00"});
                legL.animate({opacity: "0.00"});
                legR.animate({opacity: "0.00"});
                winpic.animate({opacity: "1"});
                audiogame.pause();
                audioElement.play();
                startGameid.textContent="Gongrats you won!!!";                
                isNewGame=true;
                newg.textContent="Press any key to start a new game";
            }
        }
        else{
            if(live>-1){
                live--;
                liveid.textContent=live;
                if(live===4){
                    head.animate({opacity: "1"});
                }
                else if(live===3){
                    armL.animate({opacity: "1"});
                }
                else if(live===2){
                    armR.animate({opacity: "1"});
                }else if(live===1){
                    legL.animate({opacity: "1"});
                }else if(live===0){
                    legR.animate({opacity: "1"});
                }
                if(live===-1)
                {
                    head.animate({opacity: "0.00"});
                    armL.animate({opacity: "0.00"});
                    armR.animate({opacity: "0.00"});
                    legL.animate({opacity: "0.00"});
                    legR.animate({opacity: "0.00"});
                    losepic.animate({opacity: "1"});
                    startGameid.textContent="Ahhh try again!!!";                     
                    lose++;
                    audiogame.pause();
                    audiolose.play();
                    isNewGame=true;
                    newg.textContent="Press any key to start a new game";
                }

            }
        }
    }
    }
}