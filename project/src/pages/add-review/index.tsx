import { Link } from 'react-router-dom';

import { MainLogo, FormAddReview } from '../../components';

import { useCurrentFilmHook } from '../../hooks/useCurrentFilmHook';

import { FilmsMock } from '../../mocks/types';

type AddReviewComponentProps = {
  filmsMock: FilmsMock[],
}


function AddReview({ filmsMock }: AddReviewComponentProps): JSX.Element {
  const { currentFilm } = useCurrentFilmHook({ filmsMock });

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <MainLogo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">
                  {currentFilm?.name}
                </a>
              </li>
              <li className="breadcrumbs__item">
                <Link to="/" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </li>
            <li className="user-block__item">
              <Link to="/" className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src="img/the-grand-budapest-hotel-poster.jpg"
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>
      </div>

      <div className="add-review">
        <FormAddReview />
      </div>
    </section>
  );
}

export default AddReview;
