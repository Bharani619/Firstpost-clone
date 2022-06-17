
import React, { useEffect } from 'react'
import { Randomposts } from './frontPage/Randomposts'
import styles from "../styles/Home.module.css"
import { Banner } from '../components/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEntData } from '../Reducer/action'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Slider } from '../components/Slider'

export const Entertainment = () => {
    const data = useSelector((store)=>store.NewsData.Entertainment)
    const dispatch = useDispatch();
    const [page, setpage]= useState(1);
    const navigate = useNavigate();

    useEffect(()=>{
      if(data?.length===0){
        dispatch(fetchEntData(page))
      }
    },[dispatch,data?.length,page]);
    
    const handlePrev = ()=>{
        setpage(page-1);
    }
    const handleNext = ()=>{
        setpage(page+1);
    }
    
   
    const handleClick = (item)=>{
        localStorage.setItem("News",JSON.stringify(item));
        navigate("/NewsDesp")
    }

  return (
 <div style={{marginTop:'10%'}}>
    <div style={{width:"50%", margin:"auto"}}><Banner/></div>
    <div className={styles.RamboContainer}>
    <div className={styles.ArticlesContainer}>
        <div className={styles.HeadLine}>
            <div><p>Latest News</p></div>
            <div><span><i class="fas fa-chevron-right"></i></span></div>
            <div><label>Entertainment News</label></div>
        </div>
        <div className={styles.RolexContanier}>
            <div>
                <h1 style={{fontSize:"30px",fontWeight:"bold"}}>ENTERTAINMENT NEWS</h1>
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
                    <div onClick={()=>handleClick(item)} key={i}>
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
    <div className={styles.RandompostsContainer}><Randomposts/></div>
    </div>
    <div style={{textAlign:"center"}}>
        <button disabled={page===1} style={{marginRight:"2%"}} onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
    </div>
</div>
  )
}
