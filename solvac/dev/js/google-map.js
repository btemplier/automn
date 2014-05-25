window.onload = function() {
		// Solvac
		var myLatlng = new google.maps.LatLng(48.8528624, 2.3869163);
		
		// Carte centrée sur Solvac
		var myMapOptions = {
			zoom: 16,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]
		};
		
		// Création de la carte
		var myMap = new google.maps.Map(
			document.getElementById('map'),
			myMapOptions
		);
		
		// Création de l'icône
		var myMarkerImage = new google.maps.MarkerImage('images/logo-map.png');
		
		// Création du marker
		var myMarker = new google.maps.Marker({
			position: myLatlng, 
			map: myMap,
			icon: myMarkerImage,
			title: "Solvac"
		});
		
	}	