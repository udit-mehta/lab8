function initMap() {
	// add your code here
	L.mapquest.key = '2bpGwngnDA6cdVuGPt1Pla2WLWmfypuW';

	var map = L.mapquest.map('map',{
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.878969, -117.235928]).addTo( map );
}