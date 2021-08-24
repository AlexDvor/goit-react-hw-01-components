// import React from 'react';
import ReactDOM from 'react-dom';
import data from './user.json';

function Profile(props) {
  return (
    <div className="profile">
      <div className="description">
        <img src={props.url} alt={props.alt} className="avatar" />
        <p className="name">{props.profName}</p>
        <p className="tag">{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{props.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{props.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{props.likes}</span>
        </li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  <Profile
    url={data.avatar}
    alt={data.name}
    profName={data.name}
    tag={data.tag}
    location={data.location}
    followers={data.stats.followers}
    views={data.stats.views}
    likes={data.stats.likes}
  />,
  document.querySelector('#root'),
);

// ============================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
