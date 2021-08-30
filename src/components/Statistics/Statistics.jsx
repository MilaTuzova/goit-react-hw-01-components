// import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({stats, title}) => {
   
    return <div className={css.section}> 
        
      
  <h2 className={css.title}>{title}</h2>

  <ul className={css.list}> 
  {stats.map(stat => (
      <li key={stat.id} className={css.itemOfList}>

    <span>{stat.label}</span>
    <span>{stat.percentage} %</span>

      </li>
  ))}

  </ul>
                
        </div>
}