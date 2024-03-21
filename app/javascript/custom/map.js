import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";


document.addEventListener('turbo:load', function(){
    mapboxgl.accessToken = 'pk.eyJ1IjoieWludGlpIiwiYSI6ImNsdTBxaHNmZzAxbnoyanBkcnppbnlmYXYifQ.u5AfLGU61hYzl1Yk8wuPYg';

    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40],
        zoom: 9
    });

    const geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        marker: {
            color: 'orange'
        },
        mapboxgl: mapboxgl
    });

    document.getElementById('search-bar').appendChild(geocoder.onAdd(map));

})