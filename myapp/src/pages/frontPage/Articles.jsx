import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Slider } from '../../components/Slider'
import { fetchArchiveData } from '../../Reducer/action'
import styles from "../../styles/Articles.module.css"

export const Articles = () => {
  const data = useSelector((store)=>store.NewsData.ArchiveData)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(data?.length===0){
      dispatch(fetchArchiveData())
    }
  },[dispatch,data?.length]);
  console.log("archive:",data);

  const handleClick = (item)=>{
    localStorage.setItem("News",JSON.stringify(item));
    navigate("/NewsDesp")
}

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
            <div className={styles.RolexBlockTwo}>
                {data.results?.map((item,i)=> {
                  return (
                    <div onClick={()=>handleClick(item)} key={i} className={styles.RolexCardBlock}>
                      <div>
                        <img width="100%" src={item.image_url} alt="" />
                      </div>
                      <div className={styles.contentBlock}>
                        <div><label>{item.category}</label></div>
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
