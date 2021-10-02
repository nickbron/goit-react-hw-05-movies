import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetReviewsByFilmId } from '../Services/api';

const ReviewsView = () => {
  const [reviews, setReviews] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GetReviewsByFilmId(filmId);
        if (response.status === 200) {
          setReviews(response.data.results);
        } else {
          throw new Error('Error - ' + response.status);
        }
      } catch (error) {
        console.log('rejected   ' + error.message);
        return null;
      }
    }
    fetchData();
  }, [filmId]);

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p> {review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <p>We don`t have any reviews for this movie</p>
        </>
      )}
    </div>
  );
};

export default ReviewsView;
