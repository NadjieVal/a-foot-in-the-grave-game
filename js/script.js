$(function() {
  $("body").removeClass("fade-out");
});

// CHOICE CHARACTER AND LOCAL STORAGE SAVING

showChoice();

var btnW = document.querySelector(".input-w");
var btnM = document.querySelector(".input-m");

$(".input-w").click(function() {
  localStorage.setItem("choice", "w");
  showChoice();
  window.location.href = "question1.html";
});

$(".input-m").click(function() {
  localStorage.setItem("choice", "m");
  showChoice();
  window.location.href = "question1.html";
});

// CHARACTER SELECTION, IF ONE IS DISPLAYED, THE OTHER ONE ISN'T

function showChoice() {
  var section = document.querySelector(".chosen-character"); //value never read !!!!
  var imgW = document.querySelector(".img-w"); //value never read !!!!
  var imgM = document.querySelector(".img-m"); //value never read !!!!

  $(".img-w").css("display", "none");
  $(".img-m").css("display", "none");

  var choice = localStorage.getItem("choice");

  switch (choice) {
    case "w":
      $("section").css("display", "block");
      $(".img-w").css("display", "inline");
      break;

    case "m":
      $("section").css("display", "block");
      $(".img-m").css("display", "inline");
      break;
  }
}

// OBJECTS FOR PERSONALISED CHARACTERS AND SCENARIO

var scenarAndpopW = {
  //question1
  scenario1W:
    "Bonjour Walter, bienvenue scenario question 1 après click character walter",

  //question2
  scenario2W: "scenario question 2 si click mille-pattes question 1",
  scenario3W: "scenario question 2 si click harpy question 1",
  popup1W: "message popup si click jaguar signé W",

  //question3
  scenario4W: "scenario question 3 si click assassin bug question 2 ",

  //question4
  scenario5W: "scenario question 4 si click red bellied piranha question 3 ",
  scenario6W: "scenario question 4 si click waxy monkey tree frog question 3",

  //question5
  scenario7W: "scenario question 5 si click black caiman question 4 ",
  popup2W: "message popup si click electric eel signé W",

  //question6
  scenario8W: "scenario question 6 si click bullet ant question 5 ",
  popup3W: "message popup si click fer-de-lance signé W"
};

var scenarAndpopM = {
  //question1
  scenario1M:
    "Bonjour Martha, bienvenue scenario question 1 après click character martha",

  //question2
  scenario2M: "scenario question 2 si click mille-pattes question 1",
  scenario3M: "scenario question 2 si click harpy question 1",

  //question3
  scenario4M: "scenario question 3 si click assassin bug question 2 ",
  popup1M: "message popup si click jaguar signé M",

  //question4
  scenario5M: "scenario question 4 si click red bellied piranha question 3 ",
  scenario6M: "scenario question 4 si click waxy monkey tree frog question 3",

  //question5
  scenario7M: "scenario question 5 si click black caiman question 4 ",
  popup2M: "message popup si click electric eel signé M",

  //question6
  scenario8M: "scenario question 6 si click bullet ant question 5 ",
  popup3M: "message popup si click fer-de-lance signé M"
};

// CLICK FROM HOME PAGE TO CHARACTER PAGE

$(".btn").click(function() {
  window.location.href = "character.html";
});

// CLICK GOOD ANSWERS LINKING TO NEXT PAGE WITH SCENARIO PERSONALIZED

$(".img1").click(function() {
  localStorage.setItem("question2", "scenario2");
  window.location.href = "question2.html";
});

$(".img2").click(function() {
  localStorage.setItem("question2", "scenario3");
  window.location.href = "question2.html";
});

$(".img4").click(function() {
  localStorage.setItem("question3", "scenario4");
  window.location.href = "question3.html";
});

$(".img5").click(function() {
  localStorage.setItem("question4", "scenario5");
  window.location.href = "question4.html";
});

$(".img6").click(function() {
  localStorage.setItem("question4", "scenario6");
  window.location.href = "question4.html";
});

$(".img8").click(function() {
  localStorage.setItem("question5", "scenario7");
  window.location.href = "question5.html";
});

$(".img9").click(function() {
  localStorage.setItem("question6", "scenario8");
  window.location.href = "question6.html";
});

$(".img11").click(function() {
  window.location.href = "end-game.html";
});

$(".img12").click(function() {
  window.location.href = "end-game.html";
});

// POP UP WRONG ANSWER, YOU DEAD !

var replayBox = $(".you-loose");
replayBox.hide();
$(".replay").click(function() {
  window.location.href = "character.html";
});

//-------------img3 JAGUAR--------------
$(".img3").click(function() {
  var choice = localStorage.getItem("choice");
  if (choice === "w") {
    $(".popup-window p").html(scenarAndpopW.popup1W);
  } else if (choice === "m") {
    $(".popup-window p").html(scenarAndpopM.popup1M);
  }
  replayBox.show();
});

//-----------img7 ELECTRIC EEL-----------

$(".img7").click(function() {
  var choice = localStorage.getItem("choice");
  if (choice === "w") {
    $(".popup-window p").html(scenarAndpopW.popup2W);
  } else if (choice === "m") {
    $(".popup-window p").html(scenarAndpopM.popup2M);
  }
  replayBox.show();
});

//--------img10 FER-DE-LANCE SNAKE---------

$(".img10").click(function() {
  var choice = localStorage.getItem("choice");
  if (choice === "w") {
    $(".popup-window p").html(scenarAndpopW.popup3W);
  } else if (choice === "m") {
    $(".popup-window p").html(scenarAndpopM.popup3M);
  }
  replayBox.show();
});

// POP UP SETTINGS

$(document).ready(function() {
  // Popup showing
  $(".popup-window").css({ display: "block" });
  // Background is less opaque
  $(".flex-header, .flex-middle").css({ opacity: "0.1" });
});

// SCENARIO AFTER ONLY ONE GOOD ANSWER

function showScenario(scenario) {
  var choice = localStorage.getItem("choice");
  if (choice === "w") {
    $(".scenario1").html(scenarAndpopW.scenario1W);
    $(".scenario3").html(scenarAndpopW.scenario4W);
    $(".scenario5").html(scenarAndpopW.scenario7W);
    $(".scenario6").html(scenarAndpopW.scenario8W);
  } else if (choice === "m") {
    $(".scenario1").html(scenarAndpopM.scenario1M);
    $(".scenario3").html(scenarAndpopM.scenario4M);
    $(".scenario5").html(scenarAndpopM.scenario7M);
    $(".scenario6").html(scenarAndpopM.scenario8M);
  }
}
showScenario();

// PERSONALIZED SCENARIO DISPLAYED AFTER TWO GOOD ANSWERS

function checkAnswer(questionName) {
  var scenario = localStorage.getItem(questionName);
  var choice = localStorage.getItem("choice");
  if (choice === "w") {
    $(".scenar").html(scenarAndpopW[scenario + "W"]);
  } else if (choice === "m") {
    $(".scenar").html(scenarAndpopM[scenario + "M"]);
  }
}
//the function is called directly in the html in the page after the two good answer were possible
