import { Rank, Filter } from "../../components"
import { useState } from 'react'
import { useLocation } from "react-router-dom";
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

const Ranking = ({ endpoint }) => {
    const location = useLocation();
    const parsed = queryString.parse(location.search);
    
    const [chosenSector, setChosenSector] = useState(parsed.sector || "All")
    const [chosenRankType, setChosenRankType] = useState(parsed.rank || "S&P Global ESG Score")

    return (
        <div className={styles.mainContainer}>
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
            <Rank sector={chosenSector} rankType={chosenRankType} endpoint={endpoint} />
        </div>
    )
}

export default Ranking
