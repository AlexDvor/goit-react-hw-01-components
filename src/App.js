import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';
import data from './user.json';

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
