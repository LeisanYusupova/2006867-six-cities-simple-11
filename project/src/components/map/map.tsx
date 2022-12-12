import { useRef, useEffect} from 'react';
import { Icon, Marker, LayerGroup } from 'leaflet';
import useMap from '../../hooks/use-Map';
import 'leaflet/dist/leaflet.css';
import { OfferType, City } from '../../types/types';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../const';

type MapProps ={
  points: OfferType[];
  city: City;
  activeCard?: OfferType;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});


function Map({points , city, activeCard}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (!map) {
      return;
    }
    map.setView([city.location.latitude, city.location.longitude]);
    const markers = points.map(({ id, location }) =>
      new Marker(
        [location.latitude, location.longitude],
        { icon: activeCard !== undefined && id === activeCard.id ? currentCustomIcon : defaultCustomIcon }
      )
    );

    const markersGroup = new LayerGroup(markers);
    markersGroup.addTo(map);

    return () => {
      map.removeLayer(markersGroup);
    };
  }, [map, points, activeCard, city]);

  return (
    <div style={{height: '100%'}} ref={mapRef}></div>
  );
}

export default Map;
