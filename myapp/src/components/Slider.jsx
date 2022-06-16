import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import styles from "../styles/swiperCard.module.css"
import { Autoplay, Pagination } from "swiper";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Reducer/action';
import { useEffect } from 'react';

export const Slider = () => {
  const data = useSelector((store)=>store.NewsData.Data)
  const dispatch = useDispatch();

  useEffect(()=>{
    if(data?.length===0){
      dispatch(fetchData())
    }
  },[dispatch, data?.length]);
  console.log("Data:",data.results)

  return (
    <>
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay,Pagination]}
      className="mySwiper"
    >
      {data.results?.map((item,i)=> {
        return (
          <>
       <SwiperSlide key={i}>
        {item.image_url && <img width="100%" style={{padding:"5px"}} src={item.image_url} alt="" />}
        <div className={styles.swiperCard}>
        <p className={styles.swiperCategory}>{item.category}</p>
        <p style={{textAlign:"left",fontSize:"22px",fontWeight:"bold"}}>{item.title}</p>
        </div>
      </SwiperSlide> 
          </>
        )
      })}
      
    </Swiper>
  </>
  )
}
