$(() => {

//Alert is placehlder for now, I would like to try a popup later. 
$('#displayRules').on('click', ($event) => {
alert("-Pick a category and a point value.\n-Click on the chosen box for the answer.\n-Choose which of the four questions best coorelate with the given answer.\n-Click OK once you are satisfied with your selection.\n-If you are correct, you will be rewarded with the points for that answer and your turn continues.\n-If you are incorrect, the turn passes to the next player."
);
});

     // GLOBAL VARIABLE FOR SCORE 
        let score = 0;    
     
        const object = [
  //      Category 1 Art 
     
  {   answer: 'Renaissance artist who scupted the the Statue of David.',
      questions: ['Who is Michaelangelo?', 'Who is Francavilla?', 'Who is Mangiacavalli?', 'Who is Poggini?'],
      correctAnswer: 'Who is Michaelangelo?',
      cashValue: 100,
  },
  
  {
      answer: "The alleged portrait of a one Lisa Gherardini",
      questions: ['What is the Mona Lisa?', "Girl with a Pearl Earring?", "What is The Bath?", "What is Water Nymph?" ],
      correctAnswer: 'What is the Mona Lisa?',
      cashValue: 200,
  },
  
  {
      answer: "The Town depicted in Vicent van Gogh's The Starry Night",
      questions: ["What is Paris?", "What is Nice?", "What is Ize?", "What is Saint-Rémy-de-Provence?"],
      correctAnswer: 'What is Saint-Rémy-de-Provence?',
      cashValue: 300,
  },
  
  {
      answer: "Artist of 'American Gothic.'",
      questions: ["Who is Norman Rockwell?", "Who is Grant Wood?", "Who is Edward Hopper?", "Who is Andrew Wyeth?"],
      correctAnswer: 'Who is Grant Wood?',
      cashValue: 400,
  },
  
  {
      answer: "Credited as the designer of the many statues which decorated the Parthenon.",
      questions: ["Who is Hediod?", "Who is Praxiteles?", "Who is Scopas", "Who is Phidias"],
      correctAnswer: 'Who is Phidias?',
      cashValue: 500,
  },
     
   // Category 2 Food
     
  {
  answer: "This food is the leading source of salmonella poisoning.",
  questions: ['What is chicken?', 'What is salmon?', 'What is tuna?', 'What are eggs?'],
  correctAnswer: 'What is chicken?',
cashValue: 100,

     },
     
  {
    answer: "This added ingredient keeps confectioners' sugar.", 
    questions: ['What is arrowroot?', "What is corn starch?", "What is potato starch?", 'What is baking powder?'],
    correctAnswer: 'What is corn starch?',
    cashValue: 200,
     },
     
  {
     answer: 'This staple is laced with up to 16 additives including plaster of paris, to stay fresh.',
     questions: ['What is peanut butter?', 'What is taffy?', 'What is bread?', 'What is margarine?'],
     correctAnswer: 'What is bread?',
     cashValue: 300,
     },
     
     {
     answer: 'This type of green was called Cripshead until the 1920s.',
     questions: ['What is bibb lettuce?', 'What is red leaf lettuce?', 'What is spinach?', 'What is Iceberg?'],
     correctAnswer: 'What is Iceberg?',
     cashValue: 400,
     },
     
     {
         answer: 'Though commonly unknown, this fruit is technically a berry.',
         questions: ['What is strawberry?', 'What is eggplant?', "What is lemon?", "What is banana?"],
         correctAnswer: 'What is lemon?',
         cashValue: 500,
     },
        
         
     
   // Category 3 Wine
  { 
    answer: "Chianti is a winemaking region in the rolling hills of this country", 
   questions: ["What is Italy?", "What is France", "What is Spain", "What is Hungary"],
   correctAnswer: "What is Italy?",
   cashValue: 100,
          },
          
 {  answer: "Three major ways this wine is made through: skin contact, saigenee, and blending.",
   questions: ["What is Proseco?", "What is Shiraz?", " What is Malbec?", "What is Rosé?"],
   correctAnswer: 'What is Rosé?',
   cashValue: 200,
   },  
          
   {
   answer: "The birthplace of Champagne.",
   questions: ["What is Spain?", "What is Great Britain?", "What is Germany?", "What is France?"],
   correctAnswer: "What is France?",
   cashValue: 300,
          },
   {
   answer: "The age of the oldest bottle of wine on display.",
   questions: ["What is 500 A.D.?", "What is 200 A.D.?", "What is 400 A.D.?", "What is 325 A.D.?"],
   correctAnswer: "What is 500 A.D.?",
   cashValue: 400,
          },
   {
   answer:"The birthplace of wine-making.",
   questions: ["What is France?", "What is Belgium?", "What is Egypt?", "What is Iran?"],
   correctAnswer: 'What is Iran?',
   cashValue: 500,
          },
         
     
      // Category 4 History
 {
   answer: "The name of the shop on which the Pilgrims travelled to North American in 1620.",
   questions: ['What is The Mayflower?', 'What is the Nina?', 'What is the Santa Maria?', 'What is The Titanic?'],
   correctAnswer: 'What is The Mayflower?',
   cashValue: 100,
      },
   {
   answer: "The date of France's Bastille Day.",
   questions: ['What is April 14th?', 'What is July 14th?', 'What is October 14th?', 'What is June 14th?'],
   correctAnswer: 'What is July 14th?',
   cashValue: 200,
      },
      
      {
   answer: 'In 1926, 19-year-old Gertrude Ederle became the first woman to swim this.',
   questions: ['What is the Panama Canal?', 'What is the Dead Sea?', 'What is the Rio Grande?', 'What is the English Channel?'],
   correctAnswer: 'What is the English Channel?',
   cashValue: 300,
      },
      
      {
   answer: 'The name of the  first man-made satellite launched by the USSR in 1957.',
   questions: ['What is Pluto?', 'What is Apollo?', 'What is Monarch?', 'What is Sputnik?'],
   correctAnswer: 'What is Sputnik?',
   cashValue: 400,
      },
      
      {
   answer: 'This English Queen reigned for just nine days.',
   questions: ['Who is Ann Margaret?', 'Who is Lady Jane Grey?', 'Who is Maria Antoinette?', 'Who is Lady Frances Ann'],
   correctAnswer: 'Who is Lady Jane Grey?',
   cashValue: 500,
      },
      
     
     
 //  Category 5 Beer
     
     {
  answer: "This category of tart brews includes lambic, guess, and goses.",
         questions: ["What is sour beer?", "What is pisner?", "What is lager?", "What is pale ale?"],
         correctAnswer: 'What is sour beer?',
         cashValue: 100,
     },
     
     {
         answer: 'A founding father and brew, who\'s namesake remains one of the biggest American beer brands to date.', 
         questions: ['Who is Hamilton?', 'Who is Sam Adams?', 'Who is Benjamin Franklin?', 'Who is James Adams?' ],
         correctAnswer: 'Who is Sam Adams?',
         cashValue: 200,
     },
     
     {
         answer: 'The fictional beer drunk by Homer Simpson, now produced as a real-life product.',
         questions: ['What is Duff?', 'What is Rhino?', 'What is Der Beer?', 'What is Tecate?'],
         correctAnswer: 'What is Duff?',
         cashValue: 300,
     },
     
     {
         answer: 'The century old slogan compliments the fizzy quality of Miller\'s longest continually produced brand, High Life.',
         questions: ["What is 'The Champagne of Beers'?", "What is 'That frosty mug sensation'?", "What is 'Genermany's Fun-Loving Beer'?", "What is It's BEER. Hooray beer!'"],
         correctAnswer: "What is 'The Champagne of Beers'?",
         cashValue: 400,
     },
     
     {
         answer: "Series of regulations limiting the ingredients in beer in Germany. Limiting beer ingredients to: water, hops, and barley.",
         questions: ["What is the German Beer Purity Law?", "What are Beer Making Standards of 1705?", "What is the Pisner Act 1600?", "What is Der Beer Act?"],
         correctAnswer: "What is the German Geer Purity Law?",
         cashValue: 500,
     }];


//empty div created to hide at start and show when a well is clicked.     

$('.emptyDiv').hide();

//What will the empty div display? 
//Div will need the answer and display the array of four questions. 

//passing in the data-number (now called index)
function buildDisplay(index) {
// set variable for what will be displayed. 
// open p tag of h1-6 tag grabbing the value from the property answer specific to the well with the data-number we are on. 
let answerAndQuestionDisplay = `
<h1>${object[index].answer}</h1>
`
//This is the akin to finding the looping thru writing for(i = 0; i <object.length; i++){.attr() and const arrayofAnswers = object[i].answer; and then .html or .text}


object[index].questions.forEach(function(question){
    // console.log(question);

    answerAndQuestionDisplay += "<div class='question' data-index='" + index + "'" + "data-value='" + question + "'>" + question + "</div>";
    
    // adding the Answer being asked of the user and     
});

return answerAndQuestionDisplay;

}

//function to hide div...boardReset(){} $('.emptyDiv').hide();
function boardReset(){
    $('.emptyDiv').hide();
};


//create a click event. all of my divs have the class of .well (from Bootstrap)

$('.well').on('click', function (){ 
    //created variable index to know the well's data number we've assigned it previously in the HTML.
    const index = $(this).data("number");    
    //when I click a well, I want the empty div to show. 
    $('.emptyDiv').show().html(buildDisplay(index));
    //alltogether now. onclick, show user html or text held in answerAndQuestionDisplay variable. We're invoking the function.
    $(this).remove();


// When the user selects an answer Listener Event

$('.question').on('click', function() {
    // console.log(this);
 //when user clicks the question, we want to look at the two data values (question)..the paramenter of the function above...the data index (correctAnswer). 
 const question = $(this).data("value")
 //this question as it appears on the screen
 const correctAns = (object[index].correctAnswer)
//the index of the correctAnswer in my object
if (question === correctAns){
    alert("That's correct!")
}
else {
    alert("Sorry, not the answer we're looking for.");
};

boardReset();

})

});




});