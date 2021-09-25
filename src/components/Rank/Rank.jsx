import styles from './Rank.module.css'
import { getGreenToRed } from '../../utils/color'

const response = [
    {
        position: 1,
        name: "Wieland Enterprises",
        score: 100
    },
    {
        position: 2,
        name: "Wieland Enterprises 2",
        score: 92
    },
    {
        position: 3,
        name: "Bdantas Enterprises 2",
        score: 84
    },
    {
        position: 4,
        name: "Xisreiber Enterprises aa",
        score: 70
    },
    {
        position: 5,
        name: "Xisreiber Enterprise bbs",
        score: 55
    },
    {
        position: 6,
        name: "Guima Enterprises",
        score: 50
    },
    {
        position: 7,
        name: "Xisreiber Enterprises thw ros",
        score: 30
    }
]

const Rank = ({ sector, rankType }) => {
    const topScore = response[0].score
    const bottomScore = response[response.length-1].score
    const normalizedDenominator = (topScore - bottomScore)

    console.log(topScore)
    console.log(bottomScore)
    return (
        <div className={styles.rank}>
            {response.map(({ position, name, score, ...rest }) => {
                let normalizedScore = (score - bottomScore) / normalizedDenominator * 100
                console.log(normalizedScore)
                let color = getGreenToRed(normalizedScore)
                console.log(color)
                return (
                    <div style={{
                        "backgroundColor": color,
                        "fontSize": "1em",
                        "display": "flex",
                        "alignItems": "center",
                        "justifyContent": "space-between",
                        "padding": "20px" 
                        }}>
                        <span>{position+" - "+name}</span>
                        <span>{score}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Rank