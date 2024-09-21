import React from 'react'
import Link from 'next/link'
import styles from "../styles/todo.module.css";

const ThankYou = () => {
  return (
    <div className={styles.page}>
        
      <img src="https://media.istockphoto.com/id/1294688589/sv/foto/r%C3%B6d-katt-med-suddig-affischen-i-ramen-med-orden-tack.jpg?s=612x612&w=0&k=20&c=QUaPXe7MUep9GIg6nAcc9hlJaukJaDHqIR0iG5Soz70=" alt="" />
                
                <Link href="/">   
                 <h2>Go back to homepage</h2>
                 <hr />
                 </Link>
    </div>
  )
}

export default ThankYou
