import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({avatar, name, tag, location, stats}) => {
console.log({avatar, name, tag, location,stats})
return <div className={css.card}> 
<div>
<img
      src={avatar}
      alt={name}
      className={css.image}
    />
<p className={css.name}>{name}</p>
<p className={css.text}>{tag}</p>
<p className={css.text}>{location}</p>
</div>

<ul className={css.stats}>
    <li className={css.status}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{stats.followers}</span>
    </li>
    <li className={css.status}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{stats.views}</span>
    </li>
    <li className={css.status}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{stats.likes}</span>
    </li>
</ul> 

</div>

}

Profile.prototype = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
}