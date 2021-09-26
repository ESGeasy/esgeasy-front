import styles from './CompanyDetail.module.css';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { getCompany } from '../../utils/api';
import { useHistory } from 'react-router-dom';

const CompanyDetail = (props) => {
    const id = props.match.params.id;
    let history = useHistory();
    const [loading, setLoading] = useState(true);
    const [company, setCompany] = useState({});

    useEffect(() => {
        getCompany(id).then((response) => {
            setCompany(response.data)
            setLoading(false);
        }).catch(() => {
            console.log("Error");
        })
    }, [id])
    
    if (loading) {
        return(
            <div className={styles.mainContainer}>
                <button onClick={history.goBack} className={styles.myButton}>
                    Back
                </button>
                <CircularProgress size={100} />
            </div>);
    }

    return (
        <div className={styles.mainContainer}>
            <button onClick={history.goBack} className={styles.myButton}>
                Back
            </button>
            <h1>{company.data.company_name} - ${company.data.ticker}</h1>
            {id === '874225' ?
                <span>{"Current Stock Value: "}
                    <span style={{"fontWeight": "bold", "color": "#00C000"}}>
                        <img src={"https://cdn.discordapp.com/attachments/749411368926576860/891795422178332762/2048px-Green_Arrow_Up.png"}
                             className={styles.arrowUp}
                             alt="Stock Current Value Arrow indicating its growing" />
                        R$77,69
                    </span>
                </span>
            : undefined }
            <span>Região: {company.data.region}</span>
            <span>País: {company.data.country}</span>
            <span>Câmbio: {company.data.exchange}</span>
            <h2>Gráfico de Evolução do ESG pelo tempo</h2>
            <img src={`data:image/jpeg;base64,${company.image}`} alt='Company ESG evolution through time graph' className={styles.graph} />
            {id === '874225' ?
                <div>
                    <h2>Stock Value through time</h2>
                    <img src="https://cdn.discordapp.com/attachments/749411368926576860/891792999481221141/vale.png"
                    alt='VALE stock value through time graph' className={styles.graph} />
                </div> : undefined} 
        </div>
    );
}

export default CompanyDetail
