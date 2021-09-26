import { Rank, Filter } from "../../components"
import { useState, useEffect } from 'react'
import { CircularProgress } from '@mui/material';
import { useLocation, Link } from "react-router-dom";
import { getFutureRanking, getCurrentRanking } from "../../utils/api"
import styles from './Ranking.module.css'
import queryString from 'query-string'

const sectorValues = [
    'All',
    'Oil, Gas and Consumable Fuels',
    'Metals and Mining',
    'Road and Rail',
    'Textiles, Apparel and Luxury Goods'
]

const rankTypeValues = [
    'S&P Global ESG Score',
    'Environmental Dimension',
    'Social Dimension',
    'Governance & Economic Dimension'
]

const Ranking = ({ future }) => {
    const [rankings, setRankings] = useState([])
    const location = useLocation();
    const parsed = queryString.parse(location.search);
    let title = "Current Ranking"
    let buttonText = 'Prediction Ranking'
    let otherLink = '/futureRanking'
    let method = getCurrentRanking

    if (future) {
        method = getFutureRanking
        title = "Prediction Ranking"
        buttonText = 'Current Ranking'
        otherLink = '/ranking'
    }

    const [chosenSector, setChosenSector] = useState(parsed.sector || "All")
    const [chosenRankType, setChosenRankType] = useState(parsed.rank || "S&P Global ESG Score")

    useEffect(() => {
        setRankings([])
        method(chosenSector, chosenRankType).then((response) => {
            setRankings(response.data)
        }).catch(() => {
            setRankings([])
        })
    }, [method, chosenSector, chosenRankType])


    return (
        <div className={styles.mainContainer}>
            <h1>
                {title}
            </h1>
            <Link to={otherLink} style={{ "textDecoration": "none" }}>
                <button className={styles.myButton}>
                    {buttonText}
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                        <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                </button>
            </Link>
            <div className={styles.filtersContainer}>
                <Filter name="Sector"
                    posibleValues={sectorValues}
                    defaultValue={chosenSector}
                    handler={setChosenSector} />
                <Filter name="Rank"
                    posibleValues={rankTypeValues}
                    defaultValue={chosenRankType}
                    handler={setChosenRankType} />
            </div>
            {Object.keys(rankings).length === 0 ? <CircularProgress /> :
                <Rank companies={rankings} />
            }
        </div>
    )
}

export default Ranking
