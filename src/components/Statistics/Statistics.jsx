import PropTypes from 'prop-types';
// import css from './Statistics.module.css';
import { Statist } from 'components/Statist/Statist';

import { Section, TitleCard, ListCard } from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <Section>
      <TitleCard> {title} </TitleCard>

      <ListCard>
        {stats.map(({ id, label, percentage }) => (
          <li key={id}>
            <Statist label={label} percentage={percentage} />
          </li>
        ))}
      </ListCard>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};
