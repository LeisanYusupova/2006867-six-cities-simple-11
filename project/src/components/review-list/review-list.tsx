import ReviewForm from '../review-form/review-form';
import Review from '../review/review';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const';

type PropType = {
  currentId: number;
}

function ReviewList({currentId}: PropType): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const reviews = useAppSelector((state) => state.comments);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item) => <Review key= {item.id} review = {item}/>)}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth
        ?
        <ReviewForm currentId={currentId}/>
        : null }
    </section>
  );
}

export default ReviewList;

