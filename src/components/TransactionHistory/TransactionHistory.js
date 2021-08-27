import Container from '../Container/Container';
import s from './TransactionHistory.module.css';
function TransactionHistory({ items }) {
  return (
    <Container>
      <table className={s.transactionHistory}>
        <thead>
          <tr>
            <th className={s.th}>Type</th>
            <th className={s.th}>Amount</th>
            <th className={s.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ type, amount, currency, id }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default TransactionHistory;
