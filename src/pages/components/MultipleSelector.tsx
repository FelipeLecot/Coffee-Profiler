import React from 'react'
import styles from '@/styles/MultipleSelector.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faSquareCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

type Props = {
  options: string[],
  showChips: boolean,
  selected: String[],
  updateSelected: (selected: String[]) => void
}

const MultipleSelector = ({options, showChips, selected, updateSelected}: Props) => {
  const [showModal, updateShowModal] = React.useState(false);
  const [filter, updateFilter] = React.useState("");

  return (
    <>
      <button className={styles["show-modal"]} onClick={() => updateShowModal(true)}>Tasting Notes</button>
      {
        showChips ?
        <div className={styles.chips}>
          {
            selected.map((option, index) => {
              return <span onClick={() => {updateSelected(selected.filter((value) => value != option))}} key={"chip-" + index}>{option}</span>
            })
          }
        </div>
        :
        null
      }

      <div style={showModal ? {display: "flex"} : {display: "none"}} className={styles["selector-modal"]}>
        <div className={styles["selector-container"]}>
          <button className={styles["close-btn"]} onClick={() => {updateShowModal(false)}}><FontAwesomeIcon icon={faTimes} /></button>
          <div className={styles["selector-option-container"]}>
            <input onChange={(e) => {updateFilter(e.target.value.toLowerCase())}} type="text" placeholder="Search" />
            {
              options.map((option, index) => {
                return option.toLowerCase().includes(filter) ? (
                  <div key={"option-" + index} className={styles["selector-option"]}>
                    <button onClick={() => {selected.includes(option) ? updateSelected(selected.filter((value) => value != option)) : updateSelected([...selected, option])}}><FontAwesomeIcon icon={selected.includes(option) ? faSquareCheck : faSquare} /><span>{option}</span></button>
                  </div>
                )
                : null
              })
            }
          </div>
        </div>
        <div className={styles.backdrop}></div>
      </div>
    </>
  )
}

export default MultipleSelector