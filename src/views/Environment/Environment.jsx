import styles from './Environment.module.css'
import logo from "../../images/environmental_logo.png"

const response = {
    id: 1,
    name: "Ambientalista"
}

export default function Environment({id}) {

    return (
        <div className={styles.mainContainer}>
            <img src={logo} alt="PAV Main Logo" className={styles.logo} />
            <h1>{response.name}</h1>
            <p> Lorem Ipsum </p>
            <p> Lorem Ipsum </p>
            <p> Lorem Ipsum </p>
            <p> Lorem Ipsum </p>
        </div>
    );
};
