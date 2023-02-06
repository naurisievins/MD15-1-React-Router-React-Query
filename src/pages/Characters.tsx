import axios from "axios"
import styles from './Characters.module.scss'
import { useState, useEffect } from "react";
import Card from "../components/Card";
import type { CardType } from "../types/CardType";
import { useQuery} from '@tanstack/react-query'

export default function Characters() {

  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [cardData, setCardData] = useState<CardType[]>([]);
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`

  const getData = () => {
    const res = axios.get(url)
    .then(({ data }) => data.results)
    return res;
  };

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setLastPage(data.info.pages)
    })
  }, []);

  const { data, isLoading, isFetching, isSuccess, isError} = useQuery(["cards", page], getData);

  useEffect(() => {
    if (data) {
      setCardData((prevData) => [...prevData, ...data]);
    }
  }, [data]);

  if (isLoading) {
    return <h1 className={styles.loading}>Loading...</h1>
  }
  if (isError) {
    return <h1 className={styles.loading}>Something went wrong...</h1>
  }

  const handleLoadMore = () => {
    console.log('fetch more called')
    setPage(prevPage => prevPage + 1);
  }

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {isSuccess && cardData.map((card: CardType) => (
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
      <button className={styles.btn}
              onClick={handleLoadMore}
              disabled={isLoading || isFetching || page >= lastPage}
      >
        {page >= lastPage ? 'All loaded' : isLoading ? 'Loading...' : 'Load More'}
      </button>
    </div>
  )

}