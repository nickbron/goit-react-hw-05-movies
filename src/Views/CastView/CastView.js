import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetActorsByFilmId } from '../../Services/api';
import { List, Item, Image, P } from '../CastView/CastView.styled';

const CastView = () => {
  const [castData, setCastData] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GetActorsByFilmId(filmId);
        if (response.status === 200) {
          setCastData(response.data.cast);
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
      {castData && castData.length > 0 ? (
        <List>
          {castData.map(actor => (
            <Item key={actor.cast_id}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt="actor.name"
              />
              <P>{actor.name}</P>
              <p>
                Character: <br />
                {actor.character}
              </p>
            </Item>
          ))}
        </List>
      ) : (
        <>
          <p>We don`t have any actors for this movie</p>
        </>
      )}
    </div>
  );
};

export default CastView;
