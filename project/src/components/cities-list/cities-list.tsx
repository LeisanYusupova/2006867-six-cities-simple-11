import { cities } from '../../const';
import { Link } from 'react-router-dom';
import {AppRoute} from '../../const';

type CitiesProps = {
  selectedCity: string;
  onCityChange: (currentCity: string) =>void;
}

function CitiesList ({selectedCity, onCityChange }:CitiesProps):JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) =>(
          <li className="locations__item" key = {city.name}>
            <Link className={`locations__item-link ${city.name === selectedCity ? 'tabs__item tabs__item--active' : ''}`}
              onClick = {() => onCityChange(city.name)}
              to = {AppRoute.Root}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CitiesList;

