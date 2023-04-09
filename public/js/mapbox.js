/* eslint-disable */
const locations = document.getElementById('map').dataset.locations;
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoicGlldHJhY2g5NCIsImEiOiJjbGc4Z2p3bmEweDk4M3JxaWZlbDZ5OGEyIn0.XP5VSMrKrkWFsR5mwk3Zrg';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/pietrach94/clg9sjb62004501qxesgq8cme',
  center: [-118.113, 34.111],
  zoom: 10, // starting zoom
  interactive: false,
});
