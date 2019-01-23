$(function() {
  $("body").removeClass("fade-out");
});

// showChoice();

// var btnW = document.querySelector(".btn-walter");
// var btnM = document.querySelector(".btn-martha");

// $(".btn-walter").click(function() {
//   localStorage.setItem("choice", "w");
//   showChoice();
// });

// $(".btn-martha").click(function() {
//   localStorage.setItem("choice", "m");
//   showChoice();
// });

// function showChoice() {
//   var section = document.querySelector(".chosen-character");
//   var imgW = document.querySelector(".img-w");
//   var imgM = document.querySelector(".img-m");

//   imgW.style.display = "none";
//   imgM.style.display = "none";

//   var choice = localStorage.getItem("choice");

//   switch (choice) {
//     case "w":
//       section.style.display = "block";
//       imgW.style.display = "inline";
//       break;

//     case "m":
//       section.style.display = "block";
//       imgM.style.display = "inline";
//       break;
//   }
// }

// Good answers linking to next question pages

$(".btn").click(function() {
  window.location.href = "character.html";
});

$(".img1").click(function() {
  window.location.href = "question2.html";
  if ($(".title-character h3").hasClass(".walter")) {
    $("p .scenario2").html("scenario text for walter........");
  } else if ($(".title-character h3").hasClass(".martha")) {
    $("p .scenario2").html("scenario text for martha........");
  }
});

$(".img2").click(function() {
  window.location.href = "question2.html";
  if ($(".title-character h3").hasClass(".walter")) {
    $("p .scenario2").html("scenario text for walter........");
  } else if ($(".title-character h3").hasClass(".martha")) {
    $("p .scenario2").html("scenario text for martha........");
  }
});

$(".img4").click(function() {
  window.location.href = "question3.html";
  if ($(".title-character h3").hasClass(".walter")) {
    $("p .scenario3").html("scenario text for walter........");
  } else if ($(".title-character h3").hasClass(".martha")) {
    $("p .scenario3").html("scenario text for martha........");
  }
});

$(".img5").click(function() {
  window.location.href = "question4.html";
  if ($(".title-character h3").hasClass(".walter")) {
    $("p .scenario4").html("scenario text for walter........");
  } else if ($(".title-character h3").hasClass(".martha")) {
    $("p .scenario4").html("scenario text for martha........");
  }
});

$(".img8").click(function() {
  window.location.href = "question5.html";
  if ($(".title-character h3").hasClass(".walter")) {
    $("p .scenario5").html("scenario text for walter........");
  } else if ($(".title-character h3").hasClass(".martha")) {
    $("p .scenario5").html("scenario text for martha........");
  }
});

$(".img9").click(function() {
  window.location.href = "question6.html";
  if ($(".title-character h3").hasClass(".walter")) {
    $("p .scenario6").html("scenario text for walter........");
  } else if ($(".title-character h3").hasClass(".martha")) {
    $("p .scenario6").html("scenario text for martha........");
  }
});

$(".img11").click(function() {
  window.location.href = "end-game.html";
});

$(".img12").click(function() {
  window.location.href = "end-game.html";
});
// Wrong answers Pop Up showing

var replayBox = $(".you-loose");
replayBox.hide();
$(".replay").click(function() {
  window.location.href = "character.html";
});

//-------------img3--------------
$(".img3").click(function() {
  replayBox.show();
});
//-------------img6--------------
$(".img6").click(function() {
  replayBox.show();
});
//-------------img7--------------
$(".img7").click(function() {
  replayBox.show();
});
//-------------img10--------------
$(".img10").click(function() {
  replayBox.show();
});

// Wrong answer Pop Up Message

$(".im3").click(function() {
  if ($(".title-character h3").hasClass(".walter")) {
    $(".popup-window p").html(
      "A jaguar? You have too much ambition my friend!"
    );
  } else if ($(".title-character h3").hasClass(".martha")) {
    $(".popup-window p").html("A jaguar? As a guinea pig! How dare you!");
  }
});

$(".im6").click(function() {
  if ($(".title-character h3").hasClass(".walter")) {
    $(".popup-window p").html("funny message pour lui");
  } else if ($(".title-character h3").hasClass(".martha")) {
    $(".popup-window p").html("funny message pour elle");
  }
});

$(document).ready(function() {
  // Show the popup
  $(".popup-window").css({ display: "block" });
  // Background is less opaque
  $(".flex-header, .flex-middle").css({ opacity: "0.1" });
});
