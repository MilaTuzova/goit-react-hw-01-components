import PropTypes from 'prop-types';

import { Td } from './TransactionHistory.styled';

export const TransAction = ({ type, amount, currency }) => {
  return (
    <tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </tr>
  );
};

TransAction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
