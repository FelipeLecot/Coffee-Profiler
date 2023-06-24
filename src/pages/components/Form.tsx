import React from 'react'
import styles from '@/styles/Form.module.css'
import MultipleSelector from './MultipleSelector'

type Props = {}

const notesOptions = ["1 One", "2 Two", "3 Three", "4 Four", "5 Five", "6 Six", "7 Seven", "8 Eight", "9 Nine", "10 Ten", "11 Eleven", "12 Twelve", "13 Thirteen", "14 Fourteen", "15 Fifteen", "16 Sixteen", "17 Seventeen", "18 Eighteen", "19 Nineteen", "20 Twenty"];

function Form({}: Props) {
  const [selected, updateSelected] = React.useState<String[]>([]);

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
          <div className={styles["tasting-notes"]}>
            <MultipleSelector options={notesOptions} showChips={true} selected={selected} updateSelected={updateSelected}/>
          </div>
        </div>
        <div className={styles.filters}> 
          <h2>Filters</h2>
        </div>
      </div>
      <div className={styles["submit-container"]}>
        <button>Search</button>
      </div>
    </>
  )
}

export default Form