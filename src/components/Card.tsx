import styles from './Card.module.scss'
import { CardProps } from '../types/CardProps'
import { NavLink } from 'react-router-dom'

export default function Card( props: CardProps ) {

  const deadOrAlive = (status: string) => {
    if (status === 'Alive') {
      return styles.circle_green
    } else if (status === 'Dead') {
      return styles.circle_red
    } else {
      return styles.circle_orange
    }
  }

  return (
    <NavLink to={`${props.cId}`} > 
      <div className={styles.card}
      >
        <div className={styles.content}>
          <div className={styles.img}>
            <img src={`${props.cImage}`} /></div>
            <div className={styles.textContent}>
              <span className={styles.name}>
                {props.cName}
              </span>
            <span className={styles.status}>
              <div className={`${styles.circle} ${deadOrAlive(props.cStatus)}`}></div>
              {props.cStatus}
            </span>
            <span className={styles.species}>
              {props.cSpecies}
            </span>
            <span className={styles.origin}>
              {props.cOrigin}
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  )
}