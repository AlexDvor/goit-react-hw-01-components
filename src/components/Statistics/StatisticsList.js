import s from './StatisticsList.module.css';

function StatisticsList({ obj }) {
  return (
    <li className={s.item}>
      <span className="label">{obj.label}</span>
      <span className={s.percentage}>{obj.percentage}%</span>
    </li>
  );
}

export default StatisticsList;
