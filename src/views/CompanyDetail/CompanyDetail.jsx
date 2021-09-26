import styles from './CompanyDetail.module.css';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { getCompany } from '../../utils/api';
import { Link } from 'react-router-dom';

const CompanyDetail = (props) => {
    const id = props.match.params.id;
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
                <Link to={'/ranking'} style={{ "textDecoration": "none" }}>
                    <button className={styles.myButton}>
                        Back
                    </button>
                </Link>
                <CircularProgress size={100} />
            </div>);
    }

    return (
        <div className={styles.mainContainer}>
            <Link to={'/ranking'} style={{ "textDecoration": "none" }}>
                <button className={styles.myButton}>
                    Back
                </button>
            </Link>
            <h1>{company.data.company_name} - ${company.data.ticker}</h1>
            <span>Region: {company.data.region}</span>
            <span>Country: {company.data.country}</span>
            <span>Exchange: {company.data.exchange}</span>
            <h2>ESG Evolution through time</h2>
            <img src={`data:image/jpeg;base64,${company.image}`} alt='Company ESG evolution through time graph' className={styles.graph} /> 
        </div>
    );
}

export default CompanyDetail
