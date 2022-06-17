import React from 'react'
import { Banner } from '../components/Banner'
import styles from "../styles/Home.module.css"
import { Randomposts } from './frontPage/Randomposts'
import { RandomNews as Data } from '../components/Data'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchRandomData } from '../Reducer/action'
import { useNavigate } from 'react-router-dom'
export const NewsDesp = () => {
  // pub_838770b4e7004abcd680cb2ed4ee5e68d5b2
  const RandomData = useSelector((store)=>store.NewsData.Random)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(RandomData?.length===0){
      dispatch(fetchRandomData())
    }
  },[dispatch,RandomData?.length])
  
  const handleClick = (item)=>{
    localStorage.setItem("News",JSON.stringify(item));
    navigate("/NewsDesp")
}

  const data = JSON.parse(localStorage.getItem("News"))

  return (
    <div style={{marginTop:"10%"}}>
      <div style={{width:"50%",margin:"auto"}}><Banner/></div>
         <div className={styles.HeaderTag}>
            <div><label>Home</label></div>
            <div><span><i class="fas fa-chevron-right"></i></span></div>
            {/* <div><p>{data.category}</p></div> */}
            <div style={{color:"grey"}}><p>{data.title}</p></div> 
         </div>
         <div className={styles.RamboContainer}>
         <div className={styles.ArticlesContainer}>
           <div style={{fontWeight:"bold",textDecoration:"underline",textDecorationColor:"goldenrod"}}>{data.category}</div>
           <div><h1 style={{fontWeight:"bold",fontSize:"28px",lineHeight:"35px"}}>{data.title}</h1></div>
           <div><p style={{fontWeight:"300",fontSize:"20px"}}>{data.description}</p></div>
           <div className={styles.RainbowBlockOne}>
            <div><p>{data.source_id}</p></div>
            <div><span>|</span></div>
            <div>{data.pubDate}</div>
           </div>
           <div className={styles.RainbowBlockOneImage}>
            <img width="100%" src={data.image_url} alt="" />
           </div>
            <div className={styles.RainbowBlockOneContent}>
                <p>{data.content}</p>  
            </div>
            <div className={styles.VioletBlock}>
              <p style={{fontSize:"22px",letterSpacing:"1px"}}>Read all the <span style={{color:"goldenrod"}}>Latest News,</span><span style={{color:"goldenrod"}}>Trending News,</span><span style={{color:"goldenrod"}}>Bollywood News,</span><span style={{color:"goldenrod"}}>India News</span> and <span style={{color:"goldenrod"}}>Entertainment News</span> here.Follow us on <span style={{color:"goldenrod"}}>Facebook,</span><span style={{color:"goldenrod"}}>Twitter</span> and <span style={{color:"goldenrod"}}>Instagram.</span></p> 
            </div>
            <div className={styles.GreyBlock}>
               <div><label style={{fontWeight:"bold",fontSize:"22px"}}>You Might Also Like</label></div>
               <div className={styles.GreyBlockOne}>
                  {Data.map((el)=>{
                    return(
                      <div className={styles.GreyBlockTwo}>
                       <div className={styles.GreyBlockThree}><img width="100%" src={el.img} alt="" /></div>
                       <div className={styles.GreyBlockFour}>
                        <div><p>{el.title}</p></div>
                        <div><label>{el.name}</label></div>
                       </div>
                      </div>
                    )
                  })}
               </div>
            </div>

            <div className={styles.RedBlock}>
                <h1 style={{fontSize:"30px",fontWeight:"bold",textAlign:"center"}}>ALSO READ</h1>
                <div className={styles.RolexBlockOne}>
                  <div style={{border:"1px solid grey", height:"0px",width:"40%",background:"grey"}}></div>
                  <div style={{border:"5px solid goldenrod", width:"20%",background:"goldenrod"}}></div>
                  <div style={{border:"1px solid grey", height:"0px",width:"40%",background:"grey"}}></div>
                </div>
            </div>
            
            <div className={styles.RolexBlockTwo}>
                {RandomData.results?.map((item,i)=> {
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
         <div className={styles.RandompostsContainer}><Randomposts/></div>
         </div>   
    </div>
  )
}
