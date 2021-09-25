import { Ranking } from './views'
import styles from './App.module.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className={styles.centralizer}>
            <Switch>
                <Route path='/' component={Ranking}/>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
