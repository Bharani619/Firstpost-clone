import React from 'react'
import { Slider } from '../../components/Slider'
import styles from "../../styles/Articles.module.css"

export const Articles = () => {
  return (
    <div>
        <div className={styles.RolexContanier}>
            <div>
                <h1 style={{fontSize:"30px",fontWeight:"bold"}}>THE BIG STORY</h1>
                <div className={styles.RolexBlockOne}>
                  <div style={{border:"1px solid grey", height:"0px",width:"40%",background:"grey"}}></div>
                  <div style={{border:"5px solid goldenrod", width:"20%",background:"goldenrod"}}></div>
                  <div style={{border:"1px solid grey", height:"0px",width:"40%",background:"grey"}}></div>
                </div>
            </div>
            <div className={styles.RolexSlider}>
                <Slider/>
            </div>
        </div>
    </div>
  )
}
