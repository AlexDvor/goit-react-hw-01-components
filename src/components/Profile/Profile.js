import PropTypes from 'prop-types';
import Container from '../Container/Container';
import s from './Profile.module.css';

function Profile({ url, alt, profName, tag, location, followers, views, likes }) {
  return (
    <Container>
      <div className={s.profile}>
        <div className={s.description}>
          <img src={url} alt={alt} className={s.img} />
          <p className="name">{profName}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>

        <ul className={s.stats}>
          <li className={s.stats_item}>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li className={s.stats_item}>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li className={s.stats_item}>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </Container>
  );
}

Profile.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  profName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
