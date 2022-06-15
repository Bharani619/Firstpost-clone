import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Slider } from '../../components/Slider'
import { fetchArchiveData } from '../../Reducer/action'
import styles from "../../styles/Articles.module.css"

export const Articles = () => {
  const data = useSelector((store)=>store.NewsData.ArchiveData)
  const dispatch = useDispatch();

  useEffect(()=>{
    if(data?.length===0){
      dispatch(fetchArchiveData())
    }
  },[dispatch]);
  console.log("archive:",data);
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
            {/* <div className={styles.RolexSlider}>
                <Slider/>
            </div> */}
            <div className={styles.RolexBlockTwo}>
                {data.articles?.map((item,i)=> {
                  return (
                    <div key={i}>
                      <div>
                        <img width="100%" src={item.urlToImage} alt="" />
                      </div>
                      <div className={styles.contentBlock}>
                        <div><label>{item.author}</label></div>
                        <div><h2>{item.title}</h2></div>
                        <div><p>{item.description}</p></div>
                      </div>
                    </div>
                  )
                })}
            </div>
        </div>

    </div>
  )
}
