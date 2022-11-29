import {memo, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {SortTypes} from '../../const';
import { sortOffers } from '../../store/app-process/app-process';
import {getSortType} from '../../store/app-process/selectors';

function SortingForm(): JSX.Element {
  const [openedForm, setForm] = useState(false);
  const handleFormSubmit = () => {
    setForm(!openedForm);
  };
  const dispatch = useAppDispatch();
  const activeSortType = useAppSelector(getSortType);
  const handleSorting = (sortType : SortTypes) => {
    handleFormSubmit();
    if (sortType === activeSortType) {
      return;
    }
    dispatch(sortOffers({sortType}));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &nbsp; </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleFormSubmit}>
        {activeSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom places__options--${openedForm ? 'opened' : 'closed'}`}>
        {Object.values(SortTypes).map((sortType) => (
          <li className={`places__option ${activeSortType === sortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            key={sortType}
            onClick = {() => handleSorting(sortType)}
          >{sortType}
          </li>))}
      </ul>
    </form>
  );
}

export default memo(SortingForm);

