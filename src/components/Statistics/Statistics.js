// import PropTypes from 'prop-types';
import Container from '../Container/Container';

function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      <Container>
        <h2 className="title">{title}</h2>

        <ul className="stat-list">
          {stats.map(item => (
            <li className="item" key={item.id}>
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Statistics;
