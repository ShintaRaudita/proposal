// script1.js INI BLUM JS ES6+ menurut chatgpt




function initialize() {

    var mapOptions = {
        zoom: 10.2,
        center: new google.maps.LatLng(-6.9034424, 107.5607552),
        disableDefaultUI: false
    };

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    setMarkers(map, officeLocations);

}

//var officeLocations = [
    //<?php
    //$data = file_get_contents('http://localhost/SIG-WISATA/ambildata.php');
    //$no = 1;
    //if (json_decode($data, true)) {
       // $obj = json_decode($data);
        //foreach ($obj->results as $item) {
            //?>[<?php echo $item->id_wisata ?>, '<?php echo $item->nama_wisata ?>', '<?php echo $item->alamat ?>', <?php echo $item->longitude ?>, <?php echo $item->latitude ?>],
    //<?php
        //}
    //}
    //?>
//];

function setMarkers(map, locations) {
    var globalPin = 'img/marker.png';

    for (var i = 0; i < locations.length; i++) {

        var office = locations[i];
        var myLatLng = new google.maps.LatLng(office[4], office[3]);
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var contentString =
            '<div id="content">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h5 id="firstHeading" class="firstHeading">' + office[1] + '</h5>' +
            '<div id="bodyContent">' +
            '<a href=detail.php?id_wisata=' + office[0] + '>Info Detail</a>' +
            '</div>' +
            '</div>';

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: office[1],
            icon: 'img/markermap.png'
        });

        google.maps.event.addListener(marker, 'click', getInfoCallback(map, contentString));
    }
}

function getInfoCallback(map, content) {
    var infowindow = new google.maps.InfoWindow({
        content: content
    });
    return function() {
        infowindow.setContent(content);
        infowindow.open(map, this);
    };
}

initialize();
