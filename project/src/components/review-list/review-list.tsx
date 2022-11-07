import ReviewForm from '../review-form/review-form';
import Review from '../review/review';
import {ReviewType} from '../../types/types';

type ReviewListProps = {
  reviews: ReviewType[];
}

function ReviewList({reviews}:ReviewListProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item) => <Review key= {item.id} review = {item}/>)}
      </ul>
      <ReviewForm/>
    </section>
  );
}

export default ReviewList;

