/* eslint-disable */

const locations = document.getElementById('map').dataset.locations;
console.log(locations);

// mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mapbox/streets-v12', // style URL
  // center: [-74.5, 40], // starting position [lng, lat]
  // zoom: 9, // starting zoom
});
