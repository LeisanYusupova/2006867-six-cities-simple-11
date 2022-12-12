import ReviewForm from '../review-form/review-form';
import Review from '../review/review';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';
import {getComments} from '../../store/comments-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import { sortReviews } from '../../utils/utils';

const MAX_NUMBER_OF_COMMENTS = 10;

type PropType = {
  currentId: number;
}

function ReviewList({currentId}: PropType): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const reviews = useAppSelector(getComments);
  const sortedReviews = sortReviews(reviews);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((item, index) => {
          if (index < MAX_NUMBER_OF_COMMENTS) {
            return (
              <Review key= {item.id} review = {item}/>
            );
          }
        })}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth
        ?
        <ReviewForm currentId={currentId}/>
        : null }
    </section>
  );
}

export default ReviewList;

