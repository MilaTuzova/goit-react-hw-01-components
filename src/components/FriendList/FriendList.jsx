import PropTypes from 'prop-types';

import {
  FriendsList,
  FriendItem,
  FriendStatus,
  FriendImg,
  FriendName,
} from './FriendList.styled';

export const Friends = ({ friends }) => {
  // console.log(friends);
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} name={name} src={avatar} status={isOnline}>
          <FriendStatus isOnline={isOnline}></FriendStatus>
          <FriendImg src={avatar} alt={name} width="48" />
          <FriendName>{name}</FriendName>
        </FriendItem>
      ))}
    </FriendsList>
  );
};

Friends.prototype = {
  friends: PropTypes.arrayOf(PropTypes.array),
};
