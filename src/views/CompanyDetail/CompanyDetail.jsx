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
            <span>Região: {company.data.region}</span>
            <span>País: {company.data.country}</span>
            <span>Câmbio: {company.data.exchange}</span>
            <h2>Gráfico de evolução do ESG pelo tempo</h2>
            <img src={`data:image/jpeg;base64,${company.image}`} alt='Gráfico de evolução do ESG pelo tempo' className={styles.graph} /> 
        </div>
    );
}

export default CompanyDetail
