import PropTypes from 'prop-types';
import Container from '../Container/Container';
import ProfileList from './ProfileList';
import s from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <Container>
      <div className={s.profile}>
        <div className={s.description}>
          <img src={avatar} alt={name} className={s.img} />
          <p className="name">{name}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>
        <ul className={s.stats}>
          <ProfileList obj={stats} />
        </ul>
      </div>
    </Container>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
