import { Rank, Filter } from "../../components"
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

const ranktypeValues = [
    "ESG",
    "Environmental",
    "Social",
    "Governance"
]

const Ranking = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.filtersContainer}>
                <Filter name="Sector"
                        posibleValues={sectorValues}
                        defaultValue="All" />
                <Filter name="Rank"
                        posibleValues={ranktypeValues}
                        defaultValue="ESG" />
            </div>
        </div>
    )
}

export default Ranking