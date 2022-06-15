// import React from 'react'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import "swiper/css";
// import "swiper/css/navigation";
// import styles from "../styles/swiperCard.module.css"
// import { Autoplay, Navigation } from "swiper";
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchData } from '../Reducer/action';
// import { useEffect } from 'react';

// export const Slider = () => {
//   const data = useSelector((store)=>store.NewsData.Data)
//   const dispatch = useDispatch();

//   useEffect(()=>{
//     if(data?.length===0){
//       dispatch(fetchData())
//     }
//   },[dispatch]);
//   console.log("Data:",data.results)

//   return (
//     <>
//     <Swiper
//       spaceBetween={30}
//       centeredSlides={true}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       navigation={true}
//       modules={[Autoplay, Navigation]}
//       className="mySwiper"
//     >
//       {data.results?.map((item,i)=> {
//         return (
//           <>
//        <SwiperSlide key={i}>
//         {item.image_url && <img width="100%" style={{padding:"5px"}} src={item.image_url} alt="" />}
//         <div className={styles.swiperCard}>
//         <p className={styles.swiperCategory}>{item.category}</p>
//         <p style={{textAlign:"left"}}>{item.title}</p>
//         </div>
//       </SwiperSlide> 
//           </>
//         )
//       })}
//       {/* <SwiperSlide>
//         <img  width="100%" style={{padding:"5px"}} src="https://images.firstpost.com/wp-content/uploads/fpranking/1655197336276.png" alt="" />
//         <div className={styles.swiperCard}>
//         <p className={styles.swiperCategory}>category</p>
//         <p style={{textAlign:"left"}}>How are the things are related to the past in the future</p>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img  width="100%" src="https://images.firstpost.com/wp-content/uploads/fpranking/1655205141638.jpg" alt="" />
//         <div className={styles.swiperCard}>
//         <p className={styles.swiperCategory}>category</p>
//           <p style={{textAlign:"left"}}>How are the things are related to the past in the future</p>
//         </div>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img  width="100%" src="https://images.firstpost.com/wp-content/uploads/fpranking/1655197336722.jpg" alt="" />
//         <div className={styles.swiperCard}>
//         <p className={styles.swiperCategory}>category</p>
//         <p style={{textAlign:"left"}}>How are the things are related to the past in the future</p>
//         </div>
//        </SwiperSlide> */}
//     </Swiper>
//   </>
//   )
// }
