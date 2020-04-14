SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('searchcontent'),
  json: 'https://cdn.tetretalk.com/source/json/search.json',
  searchResultTemplate: '<article style="border-radius: 20px;">                <a class="noline">                    <center><img style="border-radius: 20px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;" src="{featimg}" alt="{{ thumb }}"></center>                </a>    <a>        <h1 style="text-decoration: none; cursor: text;">{title}</h1>    </a>    <h1 style="    font-size: 15px;    margin-top: -20px;    text-decoration: none;    ">Developed By <a href="javascript:soon();">{author}</a></h1><p class="post-content">{description}</p>    <p class="actions">       <a onclick="playgame(`{embed}`)"><i class="material-icons" style="    font-size: 30px;    text-decoration: none;    color: crimson;">play_arrow</i></a>    </p></article>'
});

const $source = document.getElementById("search-input");

const typeHandler = function(e) {
                if ($source.value == "") {
        document.getElementById("gamepage").style.display = 'block';
        document.getElementById("favorites").style.display = 'flex';
        document.getElementById("ng-title").style.display = 'block';
        document.getElementById("f-title").style.display = 'block';
    } else {
        document.getElementById("gamepage").style.display = 'none';
        document.getElementById("favorites").style.display = 'none';
        document.getElementById("ng-title").style.display = 'none';
        document.getElementById("f-title").style.display = 'none';
    } 
}

$source.addEventListener('input', typeHandler) // register for oninput
$source.addEventListener('propertychange', typeHandler) // for IE8
// $source.addEventListener('change', typeHandler) // fallback for Firefox for <select><option>, for <input> oninput is enough
        
