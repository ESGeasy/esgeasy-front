import styles from './Rank.module.css'
import { css } from '@emotion/css';
import { getGreenToRed } from '../../utils/color'
import { Link } from 'react-router-dom'

const Rank = ({ companies }) => {
    const topScore = companies[0].score
    const bottomScore = companies[companies.length-1].score
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
            {companies.map(({ name, score, id, ...rest }) => {
                let normalizedScore = (score - bottomScore) / normalizedDenominator * 100
                let color = getGreenToRed(normalizedScore)

                return (
                    <Link to={"/company/"+ id} key={id} className={css`
                        background-color: ${color};
                        font-size: 1em;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 20px;
                        cursor: pointer;
                        text-decoration: none;
                        color: #000;
                    
                        &:hover {
                            opacity: 0.8;
                        }
                    `}>
                        <span>{Math.floor(score)+' - '+name}</span>
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
                            <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/>
                        </svg>
                    </Link>
                )
            })}
        </div>
    )
}

export default Rank