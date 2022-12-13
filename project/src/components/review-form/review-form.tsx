import {useState, Fragment} from 'react';
import {fetchSendCommentAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';
import { ratingsList } from '../../const';
import { toast } from 'react-toastify';

const MIN_LENGTH = 50;
const MAX_LENHTH = 300;

type PropType = {
  currentId: number;
}
function ReviewForm({currentId}: PropType): JSX.Element {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    rating: 0,
    review: ''
  });

  const [commentIsSending, setStatusCommentSending] = useState(false);

  const handleSubmit = () => {
    const id = currentId;
    const comment = formData.review;
    const rating = formData.rating;
    setStatusCommentSending(true);
    dispatch(fetchSendCommentAction({id, comment, rating})).unwrap()
      .then(() => {
        setFormData({rating: 0, review: ''});
      })
      .catch(() => {
        toast.error('Error in submitting a review');
      })
      .finally(() => {
        setStatusCommentSending(false);
      });
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt)=>{
      evt.preventDefault();
      handleSubmit();
    }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratingsList.map(({value, title}) => {
          const id = `${value}-stars`;
          return (
            <Fragment key={id}>
              <input
                className="form__rating-input visually-hidden"
                type="radio"
                name="rating"
                id={id}
                value={value}
                onChange={(evt) => {
                  setFormData({
                    ...formData,
                    rating: Number(evt.target.value)
                  });
                }}
                checked={formData.rating === value}
                disabled = {commentIsSending}
              />
              <label
                className="reviews__rating-label form__rating-label"
                htmlFor={id}
                title={title}
              >
                <svg className="form__star-image" width="37" height="33" data-testid="star-rating">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        }
        )}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange= {(evt) => {
          setFormData( {
            ...formData,
            review: evt.target.value
          });
        }}
        value={formData.review}
        disabled = {commentIsSending}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                  To submit review please make sure to set <span className="reviews__star">rating</span> and describe
                  your stay with at least <b className="reviews__text-amount">{MIN_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled = {((formData.review.length < MIN_LENGTH || formData.review.length > MAX_LENHTH) || formData.rating === 0 || commentIsSending)}> Submit </button>
      </div>
    </form>
  );
}

export default ReviewForm;
