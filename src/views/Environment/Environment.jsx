import styles from './Environment.module.css'
import environment_logo from "../../images/environmental_logo.png"
import { Link } from "react-router-dom";

const response = {
    id: 1,
    name: "Investidor Ambientalista",
    alt: "Investidor Ambientalista",
    text: "Você acredita que o futuro do planeta depende diretamente da preservação do meio ambiente. Existem empresas que estão trazendo inovações nessa área e outras que estão revolucionando o seu modelo de negócio para garantir um futuro melhor para todos. Venha ver as nossas recomendações de empresas que possuem a área ambiental como prioridade."
}

export default function Environment({id}) {

    return (
        <div className={styles.mainContainer}>
            <img src={environment_logo} alt={response.alt} className={styles.logo} />
            <h1>{response.name}</h1>
            <p className={styles.text}> {response.text} </p>     
            <Link to={'/ranking?rank=Environmental%20Dimension'} style={{ "textDecoration": "none" }}>
                <button className={styles.myButton} >
                    {"Recomendações de investimentos"}
                </button>
            </Link>       

        </div>
    );
};
