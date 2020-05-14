const $source = document.getElementById("search-input");

const typeHandlers = function(e) {
                if ($source.value == "") {
        document.getElementById("gamepage").style.display = 'block';
        document.getElementById("favorites").style.display = 'flex';
        document.getElementById("ng-title").style.display = 'block';
        document.getElementById("f-title").style.display = 'block';
    } else {
        document.getElementById("gamepage").style.display = 'none';
        document.getElementById("favorites").style.display = 'none';
        document.getElementById("ng-title").style.display = 'none';
try {
document.getElementById("f-title").style.display = 'none';
}
    } 
}

$source.addEventListener('input', typeHandlers) // register for oninput
$source.addEventListener('propertychange', typeHandlers) // for IE8
// $source.addEventListener('change', typeHandler) // fallback for Firefox for <select><option>, for <input> oninput is enough
        
