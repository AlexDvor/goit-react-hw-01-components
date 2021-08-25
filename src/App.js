import Profile from './components/Profile';
import data from './user.json';

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
    </div>
  );
}

export default App;
