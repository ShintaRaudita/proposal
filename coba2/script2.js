// scriPT2 ini pake chatgpt dah JS ES6+




function initialize() {
    const mapOptions = {
        zoom: 10.2,
        center: new google.maps.LatLng(-6.9034424, 107.5607552),
        disableDefaultUI: false,
    };

    const mapElement = document.getElementById('map');

    const map = new google.maps.Map(mapElement, mapOptions);

    setMarkers(map, officeLocations);
}

const officeLocations = [
    // Data lokasi bisa diperbarui sesuai kebutuhan Anda
];

function setMarkers(map, locations) {
    const globalPin = 'img/marker.png';

    locations.forEach((office) => {
        const myLatLng = new google.maps.LatLng(office[4], office[3]);
        const contentString = `
            <div id="content">
                <div id="siteNotice"></div>
                <h5 id="firstHeading" class="firstHeading">${office[1]}</h5>
                <div id="bodyContent">
                    <a href=detail.php?id_wisata=${office[0]}>Info Detail</a>
                </div>
            </div>
        `;

        const marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: office[1],
            icon: 'img/markermap.png',
        });

        marker.addListener('click', getInfoCallback(map, contentString));
    });
}

function getInfoCallback(map, content) {
    const infowindow = new google.maps.InfoWindow({
        content: content,
    });

    return function() {
        infowindow.setContent(content);
        infowindow.open(map, this);
    };
}

initialize();
