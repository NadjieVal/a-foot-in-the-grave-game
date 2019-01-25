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
    " Hello Walter, welcome to the Amazon rainforest. Your quest starts here. You must recover by any means a rare animal or insect that you can sell at a high price. The forest is treacherous and appearances are deceptive. Make the right choices, your life depends on it.",

  //question2
  scenario2W:
    "It seems you didn't watch National Geographic a lot huh? You chose the most harmful of both. Luckily, the bite of the centipede is only painful. You limp but you'll survive. The forest is dense and noisier than we think. This is why you did not see them. Both of them are 'danger'. ",
  scenario3W:
    "Good choice, the harpy is a danger only for children. And it's a beautiful piece. You'll have a good price if you can leave this forest alive. On your way, you realize how dense and noisier the forest is. This is why you did not see the danger lurking behind the trees.",
  popup1W:
    "A jaguar, all by yourself ? LOL you have too much ambition my friend. Jaguars have the most powerful bite than any other big cats including tigers and lions. Their bite is strong enough to pierce through the shell or skull of animals. It makes them one of the deadliest animals of Amazon rainforest. The jaguar you wanted to dismember is actually enjoying your dead body.",

  //question3
  scenario4W:
    "Waou ! You chose your life instead of money. You'd be dead by now if not. Happy to see you alive. Even if 'alive' is a big word. The assassin bug stung you and infected you with the Chagas disease. You're now sick even if you don't feel anything. But it's your lucky day. An unexpected animal appears!",

  //question4
  scenario5W:
    "Wrong ! The piranha lives is the water of the Amazon jungle. Alone it's not a danger but a school of piranha is another story. The red-bellied piranhas are not always aggressive towards humans. Piranha attacks on humans are rare. However, in the dry season when food is scarce, they may attack even human. Lucky we're not in dry season. But there's other creatures in the water too late, you can't run.",
  scenario6W:
    "Nice catch ! The Waxy Monkey Tree frog lives mainly in the relatively dry warm temperate forests, where the temperature can reach 35 °. It is not an animal of the Amazon, and it does not appreciate a too humid atmosphere. You can sell her to pharmaceutical companies. She secretes a wax to protect her body like a sun screen cream. Unfortunately, with your attention on your catch, you didn't see the other creatures in the water. Too late, you can't run. ",

  //question5
  scenario7W:
    "You find yourself on the ground crawling to go to an open area. Your leg trembles with the loss of your foot. Yeah, you didn't think you could get away with it after a fight with a caiman huh! A caiman less than 4 meters is not a danger for a man. But he can still hurt. But cramwling on the ground of the Amazon forest is not a good idea either. You're facing two Nightmares.",
  popup2W:
    "I don't know if you learnt the effect of electricity in water but I'm pretty sure NOW you know 😂 . This fish has three unique organs that work together to generate electricity. Many humans have suffered shocks from electric eels, though they rarely die. Often, death only occurs with multiple shocks or when the victim is too paralyzed to move and ends up drowning. And this is exactly what happened to you.",

  //question6
  scenario8W:
    "You are really in a bad shape. You do not even stand up anymore. The sting from a bullet ant is perhaps the most painful insect sting ever known to humans. Venom-filled sting from a bullet ant would feel like being shot.  It causes intense pain, burning and swelling. Typically, the pain of bullet ant sting will last for 24 hours. But this forest has not said her last word yet. Your hiccups of surprise frighten, and annoy and scare 2 small things.",
  popup3W:
    "Listen Walter, everyone can't be Indiana Jones! If you see a snake, just run dude! This snake has an unpredictable temper, making it responsible for most of the snakebites in its range. Their venom destroys red blood cells, and is particularly lethal and fast acting. Treatment is possible if the victim receives medical attention soon enough. But because you're alone in the middle of the rainforest..."
};

var scenarAndpopM = {
  //question1
  scenario1M:
    "Hello Martha, welcome to the Amazon rainforest. Your quest starts here. You have to find at all cost the perfect animal for your experiences. An unexpeted found. But you know the forest is treacherous and appearances are deceptive. Make the right choices, your life depends on it.",

  //question2
  scenario2M: "scenario question 2 si click mille-pattes question 1",
  scenario3M:
    "scenario question 2 si click harpy question 1. Je dois avouer que tu es plutot intelligente. tu ne craignais rien de la harpie. elle ne reprsente un danger que pour les enfants qu'elle pourrait facilement enlever",

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
