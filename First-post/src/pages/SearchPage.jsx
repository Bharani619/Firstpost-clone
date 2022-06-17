import React from 'react'
import { useSelector } from 'react-redux'
import { Randomposts } from './frontPage/Randomposts'
import styles from "../styles/Home.module.css"
import { Banner } from '../components/Banner'
import { useNavigate } from 'react-router-dom'

export const SearchPage = () => {
    const data = useSelector((store)=>store.NewsData.SearchData);
    const navigate = useNavigate();

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
            <div><label>Results related to your search</label></div>
        </div>
        <div className={styles.RolexContanier}>
            <div>
                <h1 style={{fontSize:"30px",fontWeight:"bold"}}>NEWS</h1>
                <div className={styles.RolexBlockOne}>
                  <div style={{border:"1px solid grey", height:"0px",width:"40%",background:"grey"}}></div>
                  <div style={{border:"5px solid goldenrod", width:"20%",background:"goldenrod"}}></div>
                  <div style={{border:"1px solid grey", height:"0px",width:"40%",background:"grey"}}></div>
                </div>
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
</div>
  )
}
