//Home
var homejs = document.getElementById("homehtml");
homejs.onmouseover = function() {
  homejs.src = "https://img.icons8.com/ios/50/ffffff/home.png";
};
homejs.onmouseout = function() {
  homejs.src = "https://img.icons8.com/ios-filled/50/ffffff/home.png";
};
//

//Contactme
var contactjs = document.getElementById("contacthtml");
contactjs.onmouseover = function() {
  contactjs.src = "https://img.icons8.com/ios/50/ffffff/speech-bubble.png";
};
contactjs.onmouseout = function() {
  contactjs.src =
    "https://img.icons8.com/ios-filled/50/ffffff/speech-bubble.png";
};
//

//ThanksTo
var thanksjs = document.getElementById("thankshtml");
thanksjs.onmouseover = function() {
  thanksjs.src = "https://img.icons8.com/ios/50/ffffff/rating.png";
};
thanksjs.onmouseout = function() {
  thanksjs.src = "https://img.icons8.com/ios-filled/50/ffffff/rating.png";
};

//

//Instagram
var instagramjs = document.getElementById("instagramhtml");
instagramjs.onmouseover = function() {
  instagramjs.src = "https://img.icons8.com/ios/50/ffffff/instagram-new.png";
};
instagramjs.onmouseout = function() {
  instagramjs.src =
    "https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png";
};
//

//Twitter
var twitterjs = document.getElementById("twitterhtml");
twitterjs.onmouseover = function() {
  twitterjs.src = "https://img.icons8.com/ios/50/ffffff/twitter.png";
};
twitterjs.onmouseout = function() {
  twitterjs.src = "https://img.icons8.com/ios-filled/50/ffffff/twitter.png";
};
//

//Fecebook
var facebookjs = document.getElementById("facebookhtml");
facebookjs.onmouseover = function() {
  facebookjs.src = "https://img.icons8.com/ios/50/ffffff/facebook.png";
};
facebookjs.onmouseout = function() {
  facebookjs.src = "https://img.icons8.com/ios-filled/50/ffffff/facebook.png";
};

//

//Apple

let appleclickj = document.getElementById("appleclick");
let appleclosej = document.getElementById("closeapple");
let cont1j = document.getElementById("cont1");
appleclickj.onclick = function() {
  cont1j.style = "display: inline-block;";
};
appleclosej.onclick = function() {
  cont1j.style = "display: none;";
};
