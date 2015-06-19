$(document).ready(function(){

	navigator.geolocation.getCurrentPosition(function(position){
		var koordinaten = {longitude: position.coords.longitude, latitude: position.coords.latitude};

		$.ajax({
			url: 'https://api.forecast.io/forecast/2c3248b853cc8517e69d06caa732df2a/'+koordinaten.latitude+','+koordinaten.longitude,
			data:{
				units: 'si',
				lang: 'de'
			},
			dataType: 'jsonp'
		}).done(function(data){
			$('.temperature').text(data.currently.apparentTemperature+' °C');
			console.log(data);

			//google geocoding
			$.ajax({
				url: 'https://maps.googleapis.com/maps/api/geocode/json',
				data:{
					latlng: koordinaten.latitude+','+koordinaten.longitude,
					key: 'AIzaSyDgYh-UffzCV54XCcReML4WSqyb0_zv8x8',
					language: 'de'
				}
			}).done(function(data){
				console.log(data);
				$('.location').text(data.results[0].address_components[1].long_name);
			});
		});
	});


	var skycons= new Skycons({
		color: "grey",
		resizeClear: true
	});

	skycons.add($('.js-icon')[0], Skycons.RAIN);

	skycons.play();

});

/*
$('.longitude').text(position.coords.longitude);
$('.latitude').text(position.coords.latitude);
$('.accuracy').text(position.coords.accuracy);
*/

