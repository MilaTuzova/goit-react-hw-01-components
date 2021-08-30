import PropTypes from 'prop-types'; 
// import css from './Statist.module.css';

import { ItemList } from './Statist.styled';

export const Statist =({label, percentage}) => {
//    console.log({label, percentage})
    return <ItemList>
    <span>{label}</span>
    <span>{percentage} %</span> 
    </ItemList>
}

Statist.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
}