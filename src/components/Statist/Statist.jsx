import css from './Statist.module.css';

export const Statist =({label, percentage}) => {
   console.log({label, percentage})
    return <div className={css.itemOfList}>
    <span>{label}</span>
    <span>{percentage} %</span> 
    </div>
}