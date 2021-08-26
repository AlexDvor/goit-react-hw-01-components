import PropTypes from 'prop-types';
import Container from '../Container/Container';
import s from './Statistics.module.css';

function Statistics({ stats, title }) {
  return (
    <section className="statistics">
      <Container>
        <div>
          <h2 className={s.title}>{title}</h2>

          <ul className={s.statsList}>
            {stats.map(item => (
              <li className={s.item} key={item.id}>
                <span className="label">{item.label}</span>
                <span className={s.percentage}>{item.percentage}%</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;
