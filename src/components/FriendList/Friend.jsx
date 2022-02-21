import PropTypes from 'prop-types';
import {
  FriendStatus,
  FriendImg,
  FriendName,
  FriendItem,
} from './FriendList.styled';
//import defaultImg from './fox.jpg';

export const Friend = ({ isOnline, name, avatar }) => {
  return (
    <FriendItem>
      <FriendStatus isOnline={isOnline}>{isOnline}</FriendStatus>
      <FriendImg src={avatar} alt={name} width="80" height="80" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

Friend.PropeTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
