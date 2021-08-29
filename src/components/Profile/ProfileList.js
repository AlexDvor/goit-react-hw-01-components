import s from './ProfileList.module.css';

function ProfileList({ obj }) {
  return (
    <>
      <li className={s.stats_item}>
        <span className="label">Followers</span>
        <span className="quantity">{obj.followers}</span>
      </li>
      <li className={s.stats_item}>
        <span className="label">Views</span>
        <span className="quantity">{obj.views}</span>
      </li>
      <li className={s.stats_item}>
        <span className="label">Likes</span>
        <span className="quantity">{obj.likes}</span>
      </li>
    </>
  );
}

export default ProfileList;
