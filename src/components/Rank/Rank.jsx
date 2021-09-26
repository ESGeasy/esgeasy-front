import styles from './Rank.module.css'
import { css } from '@emotion/css';
import { getGreenToRed } from '../../utils/color'

const response = [
    {
        id: 1,
        name: "Wieland Enterprises",
        score: 100
    },
    {
        id: 2,
        name: "Wieland Enterprises 2",
        score: 92
    },
    {
        id: 3,
        name: "Bdantas Enterprises 2",
        score: 84
    },
    {
        id: 4,
        name: "Xisreiber Enterprises aa",
        score: 70
    },
    {
        id: 5,
        name: "Xisreiber Enterprise bbs",
        score: 55
    },
    {
        id: 6,
        name: "Guima Enterprises",
        score: 50
    },
    {
        id: 7,
        name: "Xisreiber Enterprises thw ros",
        score: 30
    }
]

const Rank = ({ sector, rankType }) => {
    const topScore = response[0].score
    const bottomScore = response[response.length-1].score
    const normalizedDenominator = (topScore - bottomScore)

    return (
        <div className={styles.rank}>
            <div className={css`
                background-color: #EDEDED;
                font-size: 1em;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 20px;
            `}>
                <span>Score - Company</span>
                <span>Know More</span>
            </div>
            {response.map(({ name, score, ...rest }) => {
                let normalizedScore = (score - bottomScore) / normalizedDenominator * 100
                let color = getGreenToRed(normalizedScore)

                return (
                    <div className={css`
                        background-color: ${color};
                        font-size: 1em;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 20px;
                        cursor: pointer;

                        &:hover {
                            opacity: 0.8;
                        }
                    `}>
                        <span>{score+' - '+name}</span>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                        </svg>
                    </div>
                )
            })}
        </div>
    )
}

export default Rank