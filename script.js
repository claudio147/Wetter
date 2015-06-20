$(document).ready(function(){
	
	var icon;
	var icon_tom;

	var skycons= new Skycons({
		color: "grey",
		resizeClear: true
	});

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
			$('.wettertext').text(data.currently.summary);
			$('.tempMAX').text('Temperatur max: '+data.daily.data[0].apparentTemperatureMax+' °C | Temperatur min: '+ data.daily.data[0].apparentTemperatureMin);
			$('.footer').text(data.flags["metno-license"]);
			icon= data.currently.icon.toUpperCase();

			$('.tempMAX_tomorrow').text('Temperatur max: '+data.daily.data[1].apparentTemperatureMax+' °C | Temperatur min: '+ data.daily.data[1].apparentTemperatureMin);
			$('.wettertext_tomorrow').text(data.daily.data[1].summary);
			icon_tom= data.daily.data[1].icon.toUpperCase();

			console.log(icon);
			console.log(data);

			skycons.add($('.js-icon')[0], icon);
			skycons.add($('.js-icon_tomorrow')[0], icon_tom);

			skycons.play();

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
				$('.address').text(data.results[0].formatted_address);
			});
		});
	});

});
	


/*
	setTimeout(function(){
		skycons.set($('.js-icon')[0], Skycons.PARTLY_CLOUDY_DAY);
	}, 5000);

});
*/

/*
$('.longitude').text(position.coords.longitude);
$('.latitude').text(position.coords.latitude);
$('.accuracy').text(position.coords.accuracy);
*/

