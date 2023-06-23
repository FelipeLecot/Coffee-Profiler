import React from 'react'
import styles from '@/styles/Result.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

type Props = {}

const Result = (props: Props) => {
  return (
    <div className={styles.result}>
      <div className={styles.main}>
        <div className={styles.resultbox}>
          <Image alt="Result" width={307} height={378} src="/coffee-example.png"/>
          <div className={styles.overlay}>
            <button><FontAwesomeIcon icon={faShare} /></button>
            <button><FontAwesomeIcon icon={faHeart} /></button>
          </div>
        </div>
        <h1><Link href="/coffee/coffeename-3279237">Coffee Name</Link></h1>
        <h2>Harvested by <Link href="/profile/farmername-3279237">Farmer</Link></h2>
        <h2>Roasted by <Link href="/profile/roastername-23987372">Roaster</Link></h2>
      </div>
      <div className={styles.details}>
        <span>Origin</span>
        <h2>Colombian (Huila)</h2>
        <span>Specia</span>
        <h2>Arabica (Pink Bourbon)</h2>
        <span>Roast</span>
        <h2>Medium</h2>
        <span>Process</span>
        <h2>Washed</h2>
        <span>Altitude</span>
        <h2>1800 m</h2>
        <span>Brew</span>
        <h3>Espresso</h3>
        <span>Notes</span>
        <h3>Roasted hazelnut, pomegranate & mango</h3>
      </div>
    </div>
  )
}

export default Result