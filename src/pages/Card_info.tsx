import styles from './Card_info.module.scss'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios"
import { CardType } from '../types/CardType';
import { NavLink } from 'react-router-dom'

export default function Card_info () {

  const { id } = useParams();
  const url = `https://rickandmortyapi.com/api/character/${id}`
  const [cardData, setCardData] = useState<CardType>();

  useEffect(() => {
    axios.get(url).then(({ data }) => setCardData(data));
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}
            key={cardData?.id}
      >
        <div className={styles.img}>
          <img src={`${cardData?.image}`} />
        </div>

        <div className={styles.textContent}>

          <span>
            Name: 
            <span className={styles.cardText}>
              {cardData?.name}
            </span>
          </span>

          <span>
            Gender: 
            <span className={styles.cardText}>
              {cardData?.gender}
            </span>
          </span>

          <span>
            Status: 
            <span className={styles.cardText}>
              {cardData?.status}
            </span>
          </span>

          <span
            >Species: 
            <span className={styles.cardText}>
              {cardData?.species}
            </span>
          </span>

          <span>
            Origin: 
            <span className={styles.cardText}>
              {cardData?.origin.name}
            </span>
          </span>

          <span>
            Location: 
            <span className={styles.cardText}>
              {cardData?.location.name}
            </span>
          </span>

        </div>
      </div>

      <div>
        <NavLink to={`/Characters`} > 
        <button className={styles.btn}>&#9664; Back</button>
        </NavLink>
      </div>
    </div>
  )

}