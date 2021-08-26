import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import data from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friendsData from './json/friends.json';

function App() {
  return (
    <div>
      <Profile
        url={data.avatar}
        alt={data.name}
        profName={data.name}
        tag={data.tag}
        location={data.location}
        followers={data.stats.followers}
        views={data.stats.views}
        likes={data.stats.likes}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friendsData} />
    </div>
  );
}

export default App;
