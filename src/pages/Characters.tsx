import axios from "axios"
import styles from './Characters.module.scss'
import { useState, useEffect } from "react";
import Card from "../components/Card";
import type { CardType } from "../types/CardType";

export default function Characters() {

  const [loading, setLoading] = useState(true);
  const [cardsData, setCardsData] = useState<CardType[]>();
  const url = 'https://rickandmortyapi.com/api/character/'

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setCardsData(data.results)
      setLoading(false)
    });
  }, []);

  if (loading) {
    return <h1 className={styles.loading}>Loading...</h1>
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {cardsData && cardsData.map(card => (
          <Card key = {card.id}
                cId = {card.id}
                cImage = {card.image}
                cName = {card.name} 
                cStatus = {card.status}
                cSpecies = {card.species}
                cOrigin = {card.origin.name}
          />
        ))}
      </div>
    </div>
  )

}