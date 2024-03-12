
var gamePattern = [];


var buttonColors = ["red","blue","green","yellow"];

var randomChosenColor = buttonColors[nextSequence(0,3)];



function nextSequence(min, max){
var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
var randomChosenColour = buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
$("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeIn(100);

var audio = new Audio("sounds/"+randomChosenColor+".mp3");
audio.play();
};

