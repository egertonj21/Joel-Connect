/*
blatant rip off from Only Connect's wall round
#TODO - better setup & add more 'WordGroups'
#TODO - add quit & reset buttons


*/
var guess = [];
function WordGroup(firstWord, secondWord, thirdWord, fourthWord, wordArray){
   this.firstWord =firstWord;
   this.secondWord =secondWord;
   this.thirdWord = thirdWord;
   this.fourthWord = fourthWord;
   this.wordArray = wordArray;
}

var wordGroup1 = new WordGroup("robin", "starling", "sparrow", "thrush", ["robin", "starling", "sparrow", "thrush"]);
var wordGroup2 = new WordGroup("daisy", "bluebell", "rose", "daffodil", ["daisy", "bluebell", "rose", "daffodil"]);
var wordGroup3 = new WordGroup("paris", "dublin", "belfast", "london", ["paris", "dublin", "belfast", "london"]);
var wordGroup4 = new WordGroup("hat", "shirt", "jumper", "trousers", ["hat", "shirt", "jumper", "trousers"]);
var fullgrid = ["hat", "shirt", "jumper", "trousers","paris", "dublin", "belfast", "london","daisy", "bluebell", "rose", "daffodil",
"robin", "starling", "sparrow", "thrush"];
var correctGroup = 0;


function generateUniqueRandomNumbers(min, max, count) {
   if (count > max - min + 1) {
     throw new Error("Count should not exceed the range of unique numbers.");
   }
 
   const numbers = [];
 
   
   for (let i = min; i <= max; i++) {
     numbers.push(i);
   }
 
   const uniqueNumbers = [];
 
   
   for (let i = 0; i < count; i++) {
     const randomIndex = Math.floor(Math.random() * numbers.length);
     const randomNumber = numbers.splice(randomIndex, 1)[0];
     uniqueNumbers.push(randomNumber);
   }
 
   return uniqueNumbers;
 }

var numbers = generateUniqueRandomNumbers(1,16,16)

for(var i = 0; i<fullgrid.length; i++){
   $("#bt"+numbers[i]).text(fullgrid[i]);

}

function arraysEqual(arr1, arr2) {
  arr1=arr1.sort();
  arr2=arr2.sort();
  if (arr1.length !== arr2.length) return false;
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}


$("button").click(function(){
   $(this).toggleClass("highlight");
   // alert("poke");
   // alert(fullgrid);
});
$("#enterButton").click(function(){
  var highlighted = 0;
  for(var i = 0; i<17;i++){
    if($("#bt"+(i+1)).hasClass("highlight")){
      highlighted++;
      guess.push($("#bt"+(i+1)).text());
    }
  }
  
  if(highlighted===4){
    
    // alert(guess);
    // alert(wordArray1);

    switch(correctGroup){
      case 0:
        if (arraysEqual(guess, wordGroup1.wordArray) || arraysEqual(guess, wordGroup2.wordArray) || arraysEqual(guess, wordGroup3.wordArray) 
        || arraysEqual(guess, wordGroup4.wordArray))  {
          for (var i = 0; i < guess.length; i++) {
            $("#box" + (i + 1)).text(guess[i]);
            $("#box" + (i + 1)).removeClass("hidden");
          }
          for (var i = 0; i < 17; i++) {
          if($("#bt"+(i+1)).hasClass("highlight")){
            $("#bt"+(i+1)).addClass("used");
            $("#bt"+(i+1)).removeClass("highlight");
          }
        }
        correctGroup++;
        }
        else{
          alert("incorrect")
          for (var i = 0; i < 17; i++) {
            if($("#bt"+(i+1)).hasClass("highlight")){
              $("#bt"+(i+1)).removeClass("highlight");
            }
          }
        }
        break;
      case 1:
        if (arraysEqual(guess, wordGroup1.wordArray) || arraysEqual(guess, wordGroup2.wordArray) || arraysEqual(guess, wordGroup3.wordArray) 
        || arraysEqual(guess, wordGroup4.wordArray))  {
        for (var i = 0; i < guess.length; i++) {
          $("#box" + (i + 5)).text(guess[i]);
          $("#box" + (i + 5)).removeClass("hidden");
        }
        for (var i = 0; i < 17; i++) {
        if($("#bt"+(i+1)).hasClass("highlight")){
          $("#bt"+(i+1)).addClass("used");
          $("#bt"+(i+1)).removeClass("highlight");
        }
      }
      correctGroup++;
      }
      else{
        alert("incorrect")
        for (var i = 0; i < 17; i++) {
          if($("#bt"+(i+1)).hasClass("highlight")){
            $("#bt"+(i+1)).removeClass("highlight");
          }
        }
      }
      break;
      
      case 2:
        if (arraysEqual(guess, wordGroup1.wordArray) || arraysEqual(guess, wordGroup2.wordArray) || arraysEqual(guess, wordGroup3.wordArray) 
        || arraysEqual(guess, wordGroup4.wordArray))  {
        for (var i = 0; i < guess.length; i++) {
          $("#box" + (i + 9)).text(guess[i]);
          $("#box" + (i + 9)).removeClass("hidden");
        }
        for (var i = 0; i < 17; i++) {
        if($("#bt"+(i+1)).hasClass("highlight")){
          $("#bt"+(i+1)).addClass("used");
          $("#bt"+(i+1)).removeClass("highlight");
        }
      }
      correctGroup++;
      }
      else{
        alert("incorrect")
        for (var i = 0; i < 17; i++) {
          if($("#bt"+(i+1)).hasClass("highlight")){
            $("#bt"+(i+1)).removeClass("highlight");
          }
        }
      }
      break;
      case 3:
        if (arraysEqual(guess, wordGroup1.wordArray) || arraysEqual(guess, wordGroup2.wordArray) || arraysEqual(guess, wordGroup3.wordArray) 
        || arraysEqual(guess, wordGroup4.wordArray))  {
        for (var i = 0; i < guess.length; i++) {
          $("#box" + (i + 13)).text(guess[i]);
          $("#box" + (i + 13)).removeClass("hidden");
        }
        for (var i = 0; i < 17; i++) {
        if($("#bt"+(i+1)).hasClass("highlight")){
          $("#bt"+(i+1)).addClass("used");
          $("#bt"+(i+1)).removeClass("highlight");
        }
      }
      correctGroup++;
      }
      else{
        alert("incorrect")
        for (var i = 0; i < 17; i++) {
          if($("#bt"+(i+1)).hasClass("highlight")){
            $("#bt"+(i+1)).removeClass("highlight");
          }
        }
      }
      break;
    }
  highlighted=0;
  guess=[];
  // alert("highhlighted =" +highlighted);
  }
  else{
    // alert("highlighted =" +highlighted);
    alert("select four answers");
    for (var i = 0; i < 17; i++) {
      if($("#bt"+(i+1)).hasClass("highlight")){
        $("#bt"+(i+1)).removeClass("highlight");
      }
    }
  }



})

