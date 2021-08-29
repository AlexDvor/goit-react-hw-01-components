// modules
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// json
import data from './json/user.json';
import statisticalData from './json/statistical-data.json';
import friendsData from './json/friends.json';
import transactionsData from './json/transactions.json';

function App() {
  return (
    <div>
      <Profile
        name={data.name}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactionsData} />
    </div>
  );
}

export default App;
