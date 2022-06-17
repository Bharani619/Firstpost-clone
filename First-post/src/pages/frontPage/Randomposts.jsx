import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Banner } from '../../components/Banner'
import { fetchMostReadData } from '../../Reducer/action'
import styles from "../../styles/RandomPosts.module.css"

export const Randomposts = () => {
  const data = useSelector((store)=>store.NewsData.MostReadData)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    if(data?.length===0){
      dispatch(fetchMostReadData())
    }
  },[dispatch,data?.length])

  const handleClick = (item)=>{
    localStorage.setItem("News",JSON.stringify(item));
    navigate("/NewsDesp")
}

console.log("mostRead:",data)

  return (
    <div >
      <div className={styles.RandompostBlockOne}>
      <img src="https://tpc.googlesyndication.com/simgad/11504148726813191639" alt="" />
      </div>
      <div className={styles.RandompostsBlockTwo}>
          <div>
            <h3>Subscribe to our foreign policy newsletter</h3>
            <p>Sign up for a weekly curated briefing of the most important strategic affairs stories from across the world.</p>
          </div>
          <div>
            <label>Email Address<span>*</span></label>
            <div>
              <input type="text" />
            </div>
            <button>Subscribe</button>
          </div>
      </div>
      <div className={styles.RandompostBlockThree}>
        <img src="https://wlskyinfopartners.eacdn.com/wlskyinfopartners/img/fe1b68ec-2829-4451-b4d7-3fffb7271eb1.jpg" alt="" />
      </div>
      <div className={styles.RandompostBlockFourone}><label>Most Read</label></div>
      <div className={styles.RandompostBlockFour}>
           <div>
              {data.results?.map((item,i)=> {
                return(
                  <div className={styles.MostReadposts} onClick={()=>handleClick(item)} key={i+1}>
                     <div>
                      <label>{i+1}</label>
                      <div className={styles.indexs}></div>
                      </div>
                     <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                     </div>
                  </div>
                )
              })}
           </div>
      </div>
      <div className={styles.RandompostBlockFive}>
        <img width="100%" src="https://tpc.googlesyndication.com/simgad/3566283345727926936" alt="" />
      </div>
      <div className={styles.RandompostBlockFive}>
        <img src="https://tpc.googlesyndication.com/simgad/14968140232220291257" alt="" />
      </div>
      <div className={styles.RandompostBlockSix}>
        <div>
          <div><img src="https://images.outbrainimg.com/transform/v3/eyJpdSI6IjE5ZTBkOGZjMGQxNmVlMmU3ZTQ1NzJjMzliZjIzYmNmNTQ1YTBhNGUyMzc3ZGQwNmZmMWFiYWUwMGVhNzJhYTIiLCJ3IjozOTAsImgiOjI0MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg" alt="" /></div>
          <div className={styles.RandomPostInner}>
            <div>
              <label>Engage Your Child in Developing<br></br>Communication Skills</label>
              <p>PlanetSpark</p>
              </div>
            <div>
              <button>Learn More</button>
            </div>
          </div>
        </div>
       
        <div>
          <div><img src="https://images.outbrainimg.com/transform/v3/eyJpdSI6Ijg5MzQxNjY1NDRjNTkxN2MwNDVlY2RjODhjNmZjNjBiMTg3ZjdjMGM2MzRlYzVhZGE5ZmZhZjc3NWRiNmQ1OGQiLCJ3IjozOTAsImgiOjI0MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg" alt="" /></div>
          <div className={styles.RandomPostInner}>
            <div>
              <label>Do you speak English? Work<br></br>for a USA company and<br></br>Live in Salemc </label>
              <p>Find jobs in USA | Search ads</p>
              </div>
            <div>
              <button>Learn More</button>
            </div>
          </div>
        </div>

        <div>
          <div><img src="https://images.outbrainimg.com/transform/v3/eyJpdSI6IjE5ZTBkOGZjMGQxNmVlMmU3ZTQ1NzJjMzliZjIzYmNmNTQ1YTBhNGUyMzc3ZGQwNmZmMWFiYWUwMGVhNzJhYTIiLCJ3IjozOTAsImgiOjI0MCwiZCI6MS41LCJjcyI6MCwiZiI6MH0.jpg" alt="" /></div>
          <div className={styles.RandomPostInner}>
            <div>
              <label>Engage Your Child in Developing<br></br>Communication Skills</label>
              <p>PlanetSpark</p>
              </div>
            <div>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.RandompostBlockSeven}>
        <img width="100%" src="https://wlskyinfopartners.eacdn.com/wlskyinfopartners/img/a9033241-194a-4f2b-8486-9fbc03967f58.jpg" alt="" />
      </div>
    </div>
  )
}
