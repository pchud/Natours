/* eslint-disable */
const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoicGlldHJhY2g5NCIsImEiOiJjbGc4Z2p3bmEweDk4M3JxaWZlbDZ5OGEyIn0.XP5VSMrKrkWFsR5mwk3Zrg';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/pietrach94/clg9sjb62004501qxesgq8cme',
  scrollZoom: false,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
  // Create marker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Extends map bounds to include current location
  bounds.extend(loc.coordinates);

  // Add popup
  new mapboxgl.Popup({ offset: 30 })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
