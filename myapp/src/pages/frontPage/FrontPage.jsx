import React from 'react'
import { Articles } from './Articles'
import { Randomposts } from './Randomposts'
import styles from "../../styles/Home.module.css";
import { Banner } from '../../components/Banner';

export const FrontPage = () => {
  return (
    <div style={{marginTop:'10%'}}>
        <div style={{width:"50%", margin:"auto"}}><Banner/></div>
        <div className={styles.RamboContainer}>
        <div className={styles.ArticlesContainer}><Articles/></div>
        <div className={styles.RandompostsContainer}><Randomposts/></div>
        </div>
    </div>
  )
}
