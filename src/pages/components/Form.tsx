import React from 'react'
import styles from '@/styles/Form.module.css'

type Props = {}

function Form({}: Props) {
  return (
    <>
      <div className={styles.form}>
        <div className={styles.flavours}> 
          <h2>Flavours</h2>
          <div>
            <h3>Swettness</h3>
            <input className={styles.one} type="range" min="0" max="10" step="0.1" />
          </div>
          <div>
            <h3>Fruitness</h3>
            <input className={styles.two} type="range" min="0" max="10" step="0.1" />
          </div>
          <div>
            <h3>Body</h3>
            <input className={styles.three} type="range" min="0" max="10" step="0.1" />
          </div>
          <div>
            <h3>Acidity</h3>
            <input className={styles.four} type="range" min="0" max="10" step="0.1" />
          </div>
          <div>
            <h3>Astringency</h3>
            <input className={styles.five} type="range" min="0" max="10" step="0.1" />
          </div>
        </div>
        <div className={styles.filters}> 
          <h2>Filters</h2>
        </div>
      </div>
      <button>Search</button>
    </>
  )
}

export default Form