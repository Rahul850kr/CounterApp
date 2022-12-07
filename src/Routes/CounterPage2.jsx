import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContextProvider'
import styles from "../styles/CounterPage1.module.css"

const CounterPage2 = () => {
    const {count} = useContext(AppContext)
    return (
      <div className={styles.container}>
          <div>
              <h2>
                  Count:{count}
              </h2>
          </div>
          <div>
            <Link to="/">
              <button style={{marginTop:"5rem"}} className={styles.inc} >
                  Go To Previous Page
              </button>
            </Link>
          </div>
      </div>
    )
}

export default CounterPage2