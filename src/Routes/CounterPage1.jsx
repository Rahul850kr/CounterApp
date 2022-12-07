import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Context/AppContextProvider';
import styles from "../styles/CounterPage1.module.css"

const CounterPage1 = () => {

    const {count,handleCount} = useContext(AppContext)
  return (
    <div className={styles.container}>
        <div>
            <h2>
                Count:{count}
            </h2>
        </div>
        <div>
            <button className={styles.inc} onClick={handleCount} >
                Increment By 1
            </button>
        </div>
        <div>
            <Link to="/page2">
            <button style={{marginTop:"5rem"}} className={styles.inc} >
                Go To Next Page
            </button>
            </Link>
        </div>
    </div>
  )
}

export default CounterPage1