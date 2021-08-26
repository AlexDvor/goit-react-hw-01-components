import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import data from './json/user.json';
import statisticalData from './json/statistical-data.json';

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
    </div>
  );
}

export default App;
