var Swal;
var online = false;
var $;

// Game System
function playgame(link, name, icon) {
  if (link == "status:offline") {
  } else {
    Swal.fire({
      title: "Fullscreen or Normal?",
      icon: "question",
      focusConfirm: false,
      focusCancel: false,
      showCancelButton: true,
      reverseButtons: true,
      confirmButtonText: "Fullscreen",
      confirmButtonColor: "#3085d6",
      cancelButtonText: "Normal",
      cancelButtonColor: "#00e676",
      customClass: {
        confirmButton: "white",
        cancelButton: "white"
      }
    }).then(result => {
      if (result.value) {
        playgamefull(link, name, icon);
      } else if (
        /* Normal */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire({
          html:
            '<iframe frameborder="0" style="overflow: hidden;" id="game-element" height="540" width="900" src="' +
            link +
            '">',
          width: 960,
          showCloseButton: true,
          showCancelButton: false,
          showConfirmButton: false,
          focusConfirm: false
        });
      }
    });
  }
}
// Button to submit a game
function creategame() {
  Swal.fire({
    title: "Submit your game",
    html:
      '<iframe id="game-element" height="540" width="960" frameBorder="0" src="https://game-submissions.glitch.me/">',
    width: 1060,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: false
  });
}

// Coming soon prompt
function soon() {
  Swal.fire({
    title: "This feature is coming soon!",
    text:
      "This feature is in the works at the moment and will be available soon.",
    icon: "warning",
    focusConfirm: false
  });
  document.getElementsByClassName("swal2-popup")[0].focus();
};

// Get Games by x author
function author_search(author) {
  if (!author) return null;
  var marleigh_search = document.querySelector("#search-input")
  marleigh_search.value = author;
  marleigh.search(author);
}

// Play a game in fullscreen
function playgamefull(link, name, icon) {
  if (link == "status:offline") {
  } else {
    var ifrm = document.createElement("iframe");
    var elem = document.body;
    ifrm.setAttribute("src", link);
    ifrm.id = "game-element";
    document.body.appendChild(ifrm);
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    document.getElementById("game-element").className = "fullScreen";

    // Loading screen
    var lsc = document.createElement("div");
    lsc.setAttribute(
      "style",
      "background: url(https://media.discordapp.net/attachments/662016333407453216/682300042673258522/trianglify-lowres.png);background-size: cover;z-index: 9999999999999999999999;display: block;width: 100%;height: 100%;top: 0px;position: absolute;"
    );
    lsc.innerHTML =
      '<style> .center { position: absolute; left: 50%; top: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); font-family: `Lexend Deca`, sans-serif; } .loader { position: relative; margin: 0 auto; width: 100px; } .loader:before { content: ""; display: block; padding-top: 100%; } .circular { -webkit-animation: rotate 2s linear infinite; animation: rotate 2s linear infinite; height: 100%; -webkit-transform-origin: center center; transform-origin: center center; width: 100%; position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; } .path { stroke-dasharray: 1, 200; stroke-dashoffset: 0; -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite; animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite; stroke-linecap: round; } @-webkit-keyframes rotate { 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } } @keyframes rotate { 100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); } } @-webkit-keyframes dash { 0% { stroke-dasharray: 1, 200; stroke-dashoffset: 0; } 50% { stroke-dasharray: 89, 200; stroke-dashoffset: -35px; } 100% { stroke-dasharray: 89, 200; stroke-dashoffset: -124px; } } @keyframes dash { 0% { stroke-dasharray: 1, 200; stroke-dashoffset: 0; } 50% { stroke-dasharray: 89, 200; stroke-dashoffset: -35px; } 100% { stroke-dasharray: 89, 200; stroke-dashoffset: -124px; } } @-webkit-keyframes color { 100%, 0% { stroke: #d62d20; } 40% { stroke: #0057e7; } 66% { stroke: #008744; } 80%, 90% { stroke: #ffa700; } } @keyframes color { 100%, 0% { stroke: #d62d20; } 40% { stroke: #0057e7; } 66% { stroke: #008744; } 80%, 90% { stroke: #ffa700; } } </style> <div class="center" style=" background: white; width: 25%; border-radius: 10%; height: 60%; "> <center><img style="border-bottom-right-radius: 0px !important; border-bottom-left-radius: 0px !important; border-radius: 10%; width: 100%; border-style: none;margin-top: 0%;" src="' +
      icon +
      '" alt=""> <h1 style="font-size: 3vw !important">' +
      name +
      '</h1></center> <div class="loader" style=" z-index: 20; "> <svg class="circular" viewBox="25 25 50 50" style="width: 80%;margin-top: 20%;"> <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle> </svg> </div> </div>';
    lsc.id = "gameload";
    document.body.appendChild(lsc);
    $("#game-element").on("load", function() {
      document.getElementById("gameload").remove();
    });
  }
}

window.onload = function() {
  // Desktop Version
function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

if (getURLParameter('desktop') == "true") {
  document.querySelector("#maintenance > center > a").parentElement.parentElement.style.background = "orangered";
  document.querySelector("#maintenance > center > a").parentElement.parentElement.style.display = "block";
document.querySelector("#maintenance > center > a").innerHTML = "You are beta testing tetretalk desktop. You agree to not share this program and experience bugs."
}
  
  var beta = localStorage.getItem("discordknows");
  if (beta == "1") return;
  Swal.fire({
    title: "Join our discord!",
    html:
      "Be sure to join our very own discord server at <a href=‘https://discord.gg/TSENdEG‘>https://discord.gg/TSENdEG</a>!",
    icon: "info",
    focusConfirm: false
  }).then(result => {
    if (result.value) {
      localStorage.setItem("discordknows", "1");
    }
  });
  document.getElementsByClassName("swal2-popup")[0].focus();
};
// When the user exits fullscreen, leave the game.
document.onfullscreenchange = function(event) {
  if (document.fullscreenElement == null) {
    document.getElementById("game-element").remove();
    document.getElementById("gameload").remove();
  }
};

function EH(unsafe) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Game favoriting

var starting = {
  Games: []
};
if (localStorage.getItem("Favorites") === null) {
  localStorage.setItem("Favorites", JSON.stringify(starting));
} else {
  var faves = JSON.parse(localStorage.getItem("Favorites")),
    i,
    x = "";
  if (faves.Games !== null) {
    var fg = faves.Games;
    var start =
      '<div style="margin-bottom: 15px;" id="f-title"><a style="text-decoration: none !important;font-family: `Lexend Deca`, sans-serif !important;cursor: default;color: black;margin-bottom: 10px;font-size: 26px;margin-left: 5px;font-weight: 900;">Favorites</a></div>';
    for (i in faves.Games) {
      var temp = "fg[i].name";
      x += rev(
        '<article style="border-radius: 20px;">                              <a class="noline">                     <center><img style="border-radius: 20px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;" src="' +
          fg[i].image +
          '" alt=""></center>                 </a>                  <a>         <h1 style="text-decoration: none; cursor: text;">' +
          atob(fg[i].name) +
          '</h1>     </a>     <h1 style="     font-size: 15px;     margin-top: -20px;     text-decoration: none;     ">Developed By <a onclick=author_search(this.innerHTML)>' +
          atob(fg[i].author) +
          '</a></h1>  <p class="post-content">' +
          atob(fg[i].description) +
          '</p>     <p class="actions">        <a onclick="playgame(`' +
          fg[i].embed +
          '`)"><i class="material-icons" style="     font-size: 30px;     text-decoration: none;     color: crimson; ">play_arrow</i></a>              <a title="Unfavorite" onclick="unfavorite(`' +
          atob(fg[i].name) +
          '`, this);"><i class="material-icons" style="font-size: 30px; text-decoration: none; color: rgb(0, 31, 255);">star</i></a></p> </article>'
      );
    }
    console.log(x);
    window.addEventListener("load", function() {
      if (x)
        document.getElementById("favorites").outerHTML =
          start + '<div class="articles" id="favorites">' + rev(x) + "</div>";
    });
  }
}
function dupecheck(name) {
  var u;
  var favets = JSON.parse(localStorage.getItem("Favorites"));
  var fg = favets.Games;
  var q;
  q = false;

  for (u in favets.Games) {
    if (fg[u].name == name) {
      console.log("yes");
      q = true;
    }
  }
  return q;
}

function favorite(image, name, author, description, embed) {
  if (dupecheck(btoa(name)) == true || embed == "status:offline") {
    Swal.fire({
      title: "Already Favorited",
      text: "You've already favorited this game.",
      icon: "error",
      focusConfirm: false
    });
    document.getElementsByClassName("swal2-popup")[0].focus();
  } else {
    var curval;
    curval = JSON.parse(localStorage.getItem("Favorites"));

    curval["Games"].push({
      image: image,
      name: btoa(name),
      author: btoa(author),
      description: btoa(description),
      embed: embed,
      id: JSON.parse(localStorage.getItem("Favorites"))["Games"].length
    });
    localStorage.setItem("Favorites", JSON.stringify(curval));
  }
}

function rev(str) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "hello".split("");
  // ["h", "e", "l", "l", "o"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
  // ["o", "l", "l", "e", "h"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
  // "olleh"

  //Step 4. Return the reversed string
  return joinArray; // "olleh"
}

function unfavorite(name, element) {
  var curval;
  curval = JSON.parse(localStorage.getItem("Favorites"));
  var indexnumber = curval["Games"].findIndex(x => x.name === btoa(name));
  console.log(indexnumber);
  curval["Games"].splice(indexnumber, 1);
  localStorage.setItem("Favorites", JSON.stringify(curval));
  element.parentElement.parentElement.remove();
  if (document.querySelector("#favorites").innerHTML == "") {
    document.querySelector("#f-title").remove();
  }
}

// fun console easter egg
var l1 = " _     _";
var l2 = "| |__ (_)";
var l3 = "|  _  | |";
var l4 = "| | | | |";
var l5 = "|_| |_|_|";

console.log(l1);
console.log(l2);
console.log(l3);
console.log(l4);
console.log(l5);
var elem = document.body;

// other easter egg more easily seen and done

if (window.addEventListener) {
  var kkeys = [],
    konami = "83,80,73,78"; //this spells spin
  window.addEventListener(
    "keydown",
    function(e) {
      kkeys.push(e.keyCode);
      if (kkeys.toString().indexOf(konami) >= 0) {
        // run code here
        var logo = document.querySelector("body > img");
        logo.classList.add("spinthelogo");
      }
    },
    true
  );
}
// VM Setup

function StartVMWebsocket(filename) {
  return fetch(filename)
    .then(response => response.arrayBuffer())
    .then(bits => WebAssembly.compile(bits))
    .then(module => {
      return new WebAssembly.Instance(module);
    });
}

// Do a barrel roll easter egg
const source = document.getElementById("search-input");

const typeHandler = function(e) {
  if (source.value.toLowerCase() == "do a barrel roll") {
    source.value = "";
    // run code here
    var logo = document.querySelector("body");
    logo.classList.add("easteregg");
    source.disabled = true;
    setTimeout(function() {
      logo.classList.remove("easteregg");
      source.disabled = false;
      document.querySelector("#searchcontent").innerHTML = "";
    }, 3000);
  } else if (source.value.toLowerCase() == "marleigh") {
document.querySelector("#search-input").value = "❤️"
  }
};
source.addEventListener("input", typeHandler); // register for oninput
source.addEventListener("propertychange", typeHandler); // for IE8
// $source.addEventListener('change', typeHandler) // fallback for Firefox for <select><option>, for <input> oninput is enough
