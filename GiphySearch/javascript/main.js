/* 1. grab the input value */

document.querySelector(".js-go").addEventListener('click', function(){

	var input = document.querySelector("input").value;
	console.log(input);
	pushToDOM(input);


});

document.querySelector(".js-userinput").addEventListener('keyup', function(e){

	var input = document.querySelector("input").value;
	if(e.which===13)
	{
		// pushToDOM(input);
		makeRequest(input);
	}


});

/*2. Get the data from the API*/

function makeRequest(input){

var searchTerms = input.split(' ').join('+');
var url = "http://api.giphy.com/v1/gifs/search?q="+ searchTerms +"&api_key=0Y1iUkOW8yOaTN30wRNiHTm6Fy2ZQcHt";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();


GiphyAJAXCall.addEventListener('load', function(e) {

// your callback events go here 
	var data = e.target.response;
	pushToDOM(data);

});
}

/*3. Show me the GIFs */
function pushToDOM(input){

	var response = JSON.parse(input);
	var imageURLs = response.data;

	var container = document.querySelector('.js-container');
	container.innerHTML = "";
	imageURLs.forEach(function(image){

		var src = image.images.fixed_height.url;
	 	container.innerHTML += "<img src='"+ src +"' class='container-image' />";
	});
}