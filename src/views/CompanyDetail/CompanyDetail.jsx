import styles from './CompanyDetail.module.css';

const response = {
    id: 1,
    name: "Wieland Enterprises",
    esgScore: 100
}

const CompanyDetail = ({ id }) => {

    return (
        <div className={styles.mainContainer}>
            <h1>{response.name}</h1>
        </div>
    );
}

export default CompanyDetail
