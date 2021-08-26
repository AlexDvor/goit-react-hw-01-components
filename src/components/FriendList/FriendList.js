import Container from '../Container/Container';
import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <Container>
      <ul className={s.friendList}>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <li className="item" key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default FriendList;
