import PropTypes from 'prop-types';
// import css from './Profile.module.css';

import {ProfileCard, ProfileImg, ProfileName, ProfileText, ProfileStats, ProfileStatusItem, ProfileLabel, ProfileQuality} from './Profile.styled';

export const Profile = ({avatar, name, tag, location, stats}) => {
// console.log({avatar, name, tag, location,stats})
return <ProfileCard> 

<ProfileImg
    src={avatar}
    alt={name}
    />
<ProfileName>{name}</ProfileName>
<ProfileText>{tag}</ProfileText>
<ProfileText>{location}</ProfileText>

<ProfileStats>
    <ProfileStatusItem>
      <ProfileLabel>Followers</ProfileLabel>
      <ProfileQuality>{stats.followers}</ProfileQuality>
    </ProfileStatusItem>
    <ProfileStatusItem>
      <ProfileLabel>Views</ProfileLabel>
      <ProfileQuality>{stats.views}</ProfileQuality>
    </ProfileStatusItem>
    <ProfileStatusItem>
      <ProfileLabel>Likes</ProfileLabel>
      <ProfileQuality>{stats.likes}</ProfileQuality>
    </ProfileStatusItem>
</ProfileStats> 

</ProfileCard>
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
  }

