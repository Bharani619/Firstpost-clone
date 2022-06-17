import React from 'react'
import styles from "../styles/Footer.module.css"
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.FooterMainContainer}>
      {/* <div className={styles.Banner}>
      <Banner/>
      </div> */}
      <div className={styles.footerContainer}>
        <div className={styles.footerLayerOne}>
               <div><img src="https://www.firstpost.com/static/images/fp-logo.png" alt="" /></div>
               <div className={styles.footerIcons}>
                  <div><span><i class="fab fa-facebook"></i></span></div>
                  <div><span><i class="fab fa-twitter"></i></span></div>
                  <div><span><i class="fab fa-instagram"></i></span></div>
                  <div><span><i class="fab fa-youtube"></i></span></div>
               </div> 
        </div>
        <div className={styles.footerLayerTwo}>
           <div className={styles.footerLayerTwoInner}>
            <ul>
                <label>Firstpost</label>
                <li><Link to="/">About Firstpost</Link></li>
                <li><Link to="/">Press Release</Link></li>
                <li><Link to="/">RSS</Link></li>
                <li><Link to="/">Twitter</Link></li>
                <li><Link to="/">Facebook</Link></li>
            </ul>
           </div>

           <div className={styles.footerLayerTwoInner1}>
            <ul>
                <label>Section</label>
                <li><Link to="/">Front Page</Link></li>
                <li><Link to="/Politics">Politics</Link></li>
                <li><Link to="/Sports">Sports</Link></li>
                <li><Link to="/India">India</Link></li>
                <li><Link to="/World">World</Link></li>
                <li><Link to="/">Buisness</Link></li>
                <li><Link to="/Entertainment">Entertainment News</Link></li>
                <li><Link to="/Cricket">Cricket</Link></li>
                <li><Link to="/Tech">Tech</Link></li>
                <li><Link to="/Health">Health</Link></li>
                <li><Link to="/">photos</Link></li>
                <li><Link to="/">Videos</Link></li>
                <li><Link to="/">Press Release</Link></li>
                <li><Link to="/">Firstculture</Link></li>
                <li><Link to="/">Long Reads</Link></li>
                <li><Link to="/">Latest Mobiles</Link></li>
                <li><Link to="/">Latest Tablets</Link></li>
                <li><Link to="/">Latest Laptops</Link></li>
            </ul>
           </div>

           <div className={styles.footerLayerTwoInner1}>
           <ul>
                <label>Plus</label>
                <li><Link to="/">Cricket Live Score</Link></li>
                <li><Link to="/">New Delhi</Link></li>
                <li><Link to="/">Mumbai</Link></li>
                <li><Link to="/">Fp Exclusive</Link></li>
                <li><Link to="/">Board Exam Results</Link></li>
                <li><Link to="/">2020</Link></li>
                <li><Link to="/">Ipl 2020</Link></li>
                <li><Link to="/">Coronavirus</Link></li>
            </ul>
           </div>

           <div className={styles.footerLayerTwoInner1}>
            <ul>
                <label>Tools</label>
                <li><Link to="/">RSS Feeds</Link></li>
            </ul>
            <ul>
                <label>Apps</label>
                <li><Link to="/">IOS</Link></li>
                <li><Link to="/">Android</Link></li>
            </ul>
           </div>
        </div>

        <div className={styles.footerLayerThree}>
              <div>
                <label>Network18 sites</label>
                <span>-</span>
              </div>
              <div><p>Moneycontrol</p></div>
              <div><p>News18</p></div>
              <div><p>CNBC TV18</p></div>
              <div><p>Overdrive</p></div>
              <div><p>Forbes India</p></div>
              <div><p>TopperLearning</p></div>   
        </div>
        
        <div className={styles.footerLayerFour}>
            <p>Copyright © 2022.Firstpost- All Rights Reserved</p>
        </div>

        <div className={styles.footerLayerFive}>
            <p>Terms of use | Privacy | Cookie Policy</p>
        </div>

      </div>
    </div>
  )
}
