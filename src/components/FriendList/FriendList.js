import PropTypes from 'prop-types';
import Container from '../Container/Container';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <Container>
      <ul>
        {friends.map(({ avatar, name, isOnline }) => (
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        ))}
      </ul>
    </Container>
  );
}

FriendList.proTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string,
      name: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
