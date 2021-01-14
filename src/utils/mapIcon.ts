import Leaflet from 'leaflet';

import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [40, 58],
  iconAnchor: [20, 58],
  popupAnchor: [170,3]
})

export default mapIcon;