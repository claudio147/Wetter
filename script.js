$(document).ready(function(){
	$.ajax({
		dataType: 'jsonp',
		url:'https://api.forecast.io/forecast/2c3248b853cc8517e69d06caa732df2a/47.4145192,9.3141141?callback=?&units=si'
	}).done(function(data){
		console.log(data);
		$('h1').text(data.currently.temperature + 'C');
		$('p').text(data.flags['metno-license']);
	});
})