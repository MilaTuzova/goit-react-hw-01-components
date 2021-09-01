import PropTypes from 'prop-types';
import { HeadTabl, Tabl } from './TransactionHistory.styled';
import { TransAction } from './TransAction';

export const History = ({ items }) => {
  // console.log(items);
  return (
    <Tabl>
      <thead>
        <tr>
          <HeadTabl>Type</HeadTabl>
          <HeadTabl>Amount</HeadTabl>
          <HeadTabl>Currency</HeadTabl>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <TransAction
            type={type}
            amount={amount}
            currency={currency}
            key={id}
          />
        ))}
      </tbody>
    </Tabl>
  );
};

History.prototype = {
  items: PropTypes.arrayOf(PropTypes.exact),
};
