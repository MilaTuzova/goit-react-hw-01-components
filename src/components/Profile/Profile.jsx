import PropTypes from 'prop-types';

import {
  Card,
  Img,
  Name,
  Text,
  Stats,
  StatusItem,
  Label,
  Quality,
} from './Profile.styled';

import defaultImg from './fox.jpg';

export const Profile = ({
  avatar = defaultImg,
  name = 'не известно',
  tag,
  location,
  stats,
}) => {
  return (
    <Card>
      <Img src={avatar} alt={name} />
      <Name>{name}</Name>
      <Text>{tag}</Text>
      <Text>{location}</Text>

      <Stats>
        <StatusItem>
          <Label>Followers</Label>
          <Quality>{stats.followers}</Quality>
        </StatusItem>
        <StatusItem>
          <Label>Views</Label>
          <Quality>{stats.views}</Quality>
        </StatusItem>
        <StatusItem>
          <Label>Likes</Label>
          <Quality>{stats.likes}</Quality>
        </StatusItem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
