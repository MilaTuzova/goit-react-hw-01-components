import { Profile } from 'components/Profile/Profile';
import user from '../data/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import statisticalData from '../data/statistical-data.json';

import { Friends } from 'components/FriendList/FriendList';
import friendsData from '../data/fiends.json';

import { History } from 'components/TransactionHistory/TransactionHistory';
import historyStatData from '../data/transactions.json';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        name={user.name}
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <Friends friends={friendsData} />

      <History items={historyStatData} />
    </Container>
  );
};
