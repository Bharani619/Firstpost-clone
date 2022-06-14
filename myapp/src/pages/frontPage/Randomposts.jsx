import React from 'react'
import { Banner } from '../../components/Banner'
import styles from "../../styles/RandomPosts.module.css"

export const Randomposts = () => {
  return (
    <div>
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
    </div>
  )
}
