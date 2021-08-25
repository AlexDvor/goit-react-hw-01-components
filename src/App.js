import Profile from './components/Profile/Profile';

import data from './user.json';

function App() {
  return (
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
  );
}

export default App;
