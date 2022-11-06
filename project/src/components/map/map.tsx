import { useRef, useEffect} from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
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
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});


function Map({points , city, activeCard}: MapProps):JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            activeCard !== undefined && point.title === activeCard.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, activeCard]);

  return (
    <div style={{height: '500px'}} ref={mapRef}></div>
  );
}

export default Map;
