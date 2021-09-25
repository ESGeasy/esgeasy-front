import { Rank, Filter } from "../../components"
import { useState } from 'react'
import styles from './Ranking.module.css'

const sectorValues = [
    "All",
    "Finances",
    "Energy",
    "Technology",
    "Oil and gas",
    "Education",
    "Health"
]

const rankTypeValues = [
    "ESG",
    "Environmental",
    "Social",
    "Governance"
]

const Ranking = () => {
    const [chosenSector, setChosenSector] = useState("All")
    const [chosenRankType, setChosenRankType] = useState("ESG")

    return (
        <div className={styles.mainContainer}>
            <div className={styles.filtersContainer}>
                <Filter name="Sector"
                        posibleValues={sectorValues}
                        defaultValue="All"
                        handler={setChosenSector} />
                <Filter name="Rank"
                        posibleValues={rankTypeValues}
                        defaultValue="ESG"
                        handler={setChosenRankType} />
            </div>
            <Rank sector={chosenSector} rankType={chosenRankType} />
        </div>
    )
}

export default Ranking