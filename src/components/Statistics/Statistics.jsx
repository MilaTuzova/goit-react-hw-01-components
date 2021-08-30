// import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import {Statist} from '../Statist/Statist';


export const Statistics = ({stats, title}) => {
   
    return <div className={css.section}> 
        
      
  <h2 className={css.title}>{title}</h2>

  <ul className={css.list}> 
  {stats.map(stat => (
      <li key={stat.id}  >

<Statist 
  label={stat.label}
  percentage={stat.percentage}
   />
 
    

      </li>
  ))}

  </ul>
                
        </div>
}