import PropTypes from 'prop-types';
import Container from '../Container/Container';
import s from './TransactionHistory.module.css';
function TransactionHistory({ items }) {
  return (
    <Container>
      <table className={s.transactionHistory}>
        <thead>
          <tr className={s.tr}>
            <th className={s.th}>Type</th>
            <th className={s.th}>Amount</th>
            <th className={s.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ type, amount, currency, id }) => (
            <tr className={s.tr} key={id}>
              <td className={s.td}>{type}</td>
              <td className={s.td}>{amount}</td>
              <td className={s.td}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
