window.onload = function() {
    // Solvac
    var myLatlng = new google.maps.LatLng(48.8683359,2.3243814);
    
    // Carte centrée sur Solvac
    var myMapOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [ 
        {
            "stylers": [
              { "hue": "#078bcd" }
            ]
        },{
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
              { "visibility": "off" }
            ]
        },{
            "featureType": "landscape",
            "stylers": [
              { "visibility": "simplified" }
            ]
        },{
            "featureType": "poi",
            "stylers": [
              { "visibility": "off" }
            ]
        },{
            "featureType": "road",
            "stylers": [
              { "saturation": -65 }
            ]
        },{
            "featureType": "water",
            "stylers": [
              { "saturation": -50 },
              { "lightness": -25 }
            ]
        },{
            "featureType": "road",
            "stylers": [
              { "gamma": 0.9 }
            ]
          } 
        ]
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
    
};