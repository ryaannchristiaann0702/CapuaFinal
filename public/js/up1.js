$('#app').html(`

<div class="loader">Loading...</div>
`);
setTimeout(function(){
	x();
},1000)

function x(){
$.ajax({
	url: "http://www.omdbapi.com/?i=tt0462590"
}).done(function(res){
	console.log(res);
	let html = `
	   <center>
		<h1>${res.Title}</h1>
		<img src="${res.Poster}"/>
		<iframe width="560" height="315" src="https://www.youtube.com/embed/ZgnmCqA25-o" frameborder="0" allowfullscreen></iframe>
		<div id="container">
		<div id="center">
		<h3>Type: ${res.Type}</h3>
		<h3>Released: ${res.Released}</h3>
		<h3>Runtime: ${res.Runtime}</h3>
		<h3>Genre: ${res.Genre}</h3>
		<h3>Director: ${res.Director}</h3>
		<h3>Writer: ${res.Writer}</h3>
		<h3>Actors: ${res.Actors}</h3>
		<h3>Plot: ${res.Plot}</h3>
		<h3>Language: ${res.Language}</h3>
		<h3>Country: ${res.Country}</h3>
		<h3>Awards: ${res.Awards}</h3>
		</div>
		</div>
		</center>
		
		
	`;
	$('#app').html(html);


});
}
