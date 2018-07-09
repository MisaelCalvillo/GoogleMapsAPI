// Inicializa e inserta el Mapa
function initMap() {

  // La localización de Uluru
  var uluru = {
    lat: -25.344,
    lng: 130.20
  };

  var map = new google.maps.Map( document.getElementById('map'), { zoom: 3, center: uluru } );

  // Lugar en donde estaba el marcador
  var marker = new google.maps.Marker({ position: uluru, map: map });

}