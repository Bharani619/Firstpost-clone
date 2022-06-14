import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../styles/Navbar.module.css"
import { SearchBar } from './SearchBar'
import { SideBar } from './SideBar'

export const Navbar = () => {
  return (
    <div style={{top:0, width:"100%",position:"fixed"}}>
        <div className={styles.NeonContainerOne}>
            <div>
               <SideBar/>
            </div>
            <div className={styles.NeonContainerTwo}>
             <div className={styles.NeonContainerTwoImage}><img src="https://www.firstpost.com/static/images/fp-desk-logo.png" alt="" /></div>
             <div className={styles.NeonIcons}>
                 <span className={styles.NeonIcons1}><i class="fab fa-facebook"></i></span>
                 <span className={styles.NeonIcons2}><i class="fab fa-twitter"></i></span>
                 <span className={styles.NeonIcons3}><i class="fab fa-instagram"></i></span>
                 <span className={styles.NeonIcons4}><i class="fab fa-youtube"></i></span>
                 </div>
                </div>
            <div className={styles.NeonSearchContainer}>
                 <SearchBar/>
            </div>
        </div>
        <div className={styles.NeonContainerThree}>
         <div className={styles.NeonRoutes}>
         <div><Link to="/">Health</Link></div>
         <div><Link to="/">India</Link></div>
         <div><Link to="/">World</Link></div>
         <div><Link to="/">Politics</Link></div>
         <div><Link to="/">Auto</Link></div>
         <div><Link to='/'>Opinion</Link></div>
         <div><Link to="/">Sports</Link></div>
         <div><Link to="/">Cricket</Link></div>
         <div><Link to="/">Entertainment</Link></div>
         <div><Link to='/'>Tech</Link></div>
         </div>
        <div className={styles.NeonRoutesImages}> 
         <div><img width="85px"  src="" alt="" /></div>
         <div><img src="https://www.firstpost.com/static/images/netrasuraksha_L2_103x25px.jpg" alt="" /></div>
        </div>
        </div>
    </div>
  )
}
