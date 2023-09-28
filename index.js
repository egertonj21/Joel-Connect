/*
TODO add check answer button - and necessary logic
TODO add answer lines

*/

function WordGroup(firstWord, secondWord, thirdWord, fourthWord, wordArray){
   this.firstWord =firstWord;
   this.secondWord =secondWord;
   this.thirdWord = thirdWord;
   this.fourthWord = fourthWord;
   this.wordArray = wordArray;
}

var birds = new WordGroup("robin", "starling", "sparrow", "thrush", ["robin", "starling", "sparrow", "thrush"]);
var flower = new WordGroup("daisy", "bluebell", "rose", "daffodil", ["daisy", "bluebell", "rose", "daffodil"]);
var city = new WordGroup("paris", "dublin", "belfast", "london", ["paris", "dublin", "belfast", "london"]);
var clothes = new WordGroup("hat", "shirt", "jumper", "trousers", ["hat", "shirt", "jumper", "trousers"]);
var fullgrid = ["hat", "shirt", "jumper", "trousers","paris", "dublin", "belfast", "london","daisy", "bluebell", "rose", "daffodil",
"robin", "starling", "sparrow", "thrush"];

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


$("button").click(function(){
   
   
   
   $(this).toggleClass("highlight");
   // alert("poke");
   // alert(fullgrid);
    

    

});

