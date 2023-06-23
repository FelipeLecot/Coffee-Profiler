import React from 'react'
import styles from '@/styles/Result.module.css'
import Image from 'next/image'

type Props = {}

const Result = (props: Props) => {
  return (
    <div className={styles.resultbox}>
      <Image alt="Result" src="/coffee-example.png"/>
    </div>
  )
}

export default Result