import {useAppDispatch, useAppSelector} from '../../hooks/store-handler';
import {changeActiveGenre, setFilmList} from '../../store/action';
import {films} from '../../mocks/films.mock';
import {Genre} from '../../types/genre.enum';

type Props = {
  genreList: string[];
}

function GenreList(props: Props): JSX.Element {
  const {genreList} = props;
  const {activeGenre} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const handleChangeActiveGenre = (genre: string) => {
    dispatch(changeActiveGenre({ newGenre: genre as Genre }));
    dispatch(setFilmList({ filmList: films.filter((film) => film.genre === genre || genre === Genre.ALL_GENRES) }));
  };

  return (
    <ul className="catalog__genres-list">
      {
        genreList.map((genre) => (
          <li className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`} key={genre} onClick={() => handleChangeActiveGenre(genre)}>
            <span className="catalog__genres-link">{genre}</span>
          </li>
        ))
      }
    </ul>
  );
}

export default GenreList;

