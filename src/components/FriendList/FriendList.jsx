//import PropTypes from 'prop-types';

import { FriendsList } from './FriendList.styled';
import { Friend } from 'components/FriendList/Friend';

export const Friends = ({ friends }) => {
  //console.log(friends);
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <Friend
          key={id}
          name={name}
          avatar={avatar}
          status={isOnline}
          isOnline={isOnline}
        />
      ))}
    </FriendsList>
  );
};
