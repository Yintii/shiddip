import mapboxgl from "mapbox-gl/dist/mapbox-gl.js"

document.addEventListener('turbo:load', function(){
    mapboxgl.accessToken = 'pk.eyJ1IjoieWludGlpIiwiYSI6ImNsdTBxaHNmZzAxbnoyanBkcnppbnlmYXYifQ.u5AfLGU61hYzl1Yk8wuPYg';

    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-74.5, 40],
        zoom: 9
    });

})