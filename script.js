$(document).ready(function(){

	navigator.geolocation.getCurrentPosition(function(position){
		var koordinaten = {longitude: position.coords.longitude, latitude: position.coords.latitude};

		console.log(koordinaten.longitude);
		//console.log(position);
		


		/*
		$('.longitude').text(position.coords.longitude);
		$('.latitude').text(position.coords.latitude);
		$('.accuracy').text(position.coords.accuracy);
		*/
	});

	$.ajax({
		url: 'https://api.forecast.io/forecast/2c3248b853cc8517e69d06caa732df2a/'+koordinaten.latitude+','+koordinaten.longitude
		data:{
			units: 'si',
			lang: 'de'
		},
		dataType: 'jsonp';
	}).done(function(data){
		console.log(data);
	})




});