import PropTypes from 'prop-types';

import { FriendsList, FriendItem, FriendStatus, FriendImg, FriendName } from './FriendList.styled';


export const Friends = ({friends}) => {
    // console.log(friends);
    return <FriendsList>     
        {friends.map(({id, avatar, name, isOnline}) => (

           <FriendItem 
           key={id} 
           name={name} 
           src={avatar} 
           status={isOnline}>
                <FriendStatus isOnline={isOnline}></FriendStatus>
                <FriendImg src={avatar} alt={name} width="48" />
                <FriendName>{name}</FriendName>
                 
           </FriendItem>
        ))}
          </FriendsList>

}

Friends.prototype = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired
}

Friends.prototype = {
    friends: PropTypes.arrayOf(PropTypes.exact)
}