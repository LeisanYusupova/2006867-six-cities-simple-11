import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/index';
import {SortTypes} from '../../const';
import {sortOffersAction} from '../../store/action';

function SortingForm(): JSX.Element {
  const [openedForm, setForm] = useState(false);
  const formHandler = () => {
    setForm(!openedForm);
  };
  const dispatch = useAppDispatch();
  const activeSortType = useAppSelector((state)=>state.sortType);
  const sortingHandler = (sortType : SortTypes) => {
    formHandler();
    if (sortType === activeSortType) {
      return;
    }
    dispatch(sortOffersAction(sortType));
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by &nbsp; </span>
      <span className="places__sorting-type" tabIndex={0} onClick={formHandler}>
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
            onClick = {() => sortingHandler(sortType)}
          >{sortType}
          </li>))}
      </ul>
    </form>
  );
}

export default SortingForm;

