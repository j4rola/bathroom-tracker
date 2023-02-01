import styles from '../styles/Home.module.css'; 
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Tracker({cleaning}) {

    const [bathStatus, updateStatus] = useState(cleaning.cleanedBy)
    
    console.log(cleaning.timer)
    const date = new Date
    const cleanedDate = `${date.getMonth() + 1} / ${date.getDate()}`

    const [elapsedTime, updateElapsedTime] = useState(0)

    

    useEffect(() => {
        // Update the document title using the browser API
        updateElapsedTime(Math.round((Date.now() - cleaning.timer) / 1000 / 60 / 60 / 24))
        
        console.log(elapsedTime)
      }, []);

    //getElapsedTime()
    
    const toggleCleaned = async () => {
        
        if (bathStatus === 'Joe'){   
            
            updateStatus('Andrew') 
            await axios.post('/api/update-cleaning', {cleanedBy: 'Andrew', cleanedDate: cleanedDate, timer: Date.now().toString()})
            console.log('working') 

        } 
            
            else {
            updateStatus('Joe')
            await axios.post('/api/update-cleaning', {cleanedBy: 'Joe', cleanedDate: cleanedDate, timer: Date.now().toString()}) 
            console.log('working') 
        }}
    
    return(
    <> {bathStatus === 'Joe'?
        <div className={styles.container}> 
        <div className={styles.card} > 
            <div className='d-flex flex-column '> 
            <h2>Joe cleaned the bathroom on {cleaning.cleanedDate}</h2> 
            <h3>{elapsedTime} days since last cleaning.</h3>
            <Button onClick={toggleCleaned} className='mt-2' variant="success">Mark cleaned</Button>  
            </div>
        </div> 

        <div className="opacity-50"> 
            <div className={styles.card}> 
                <div className='d-flex justify-center'>
                <h2>It&aposs Andrew&aposs turn next.</h2> 
                </div>
            </div> 
        </div>
        </div> :
            <div className={styles.container}> 
                <div className={styles.card}> 
                    <div className='d-flex flex-column '>
                    <h2>Andrew Cleaned the bathroom on {date.getMonth() + 1} / {date.getDate()}.</h2> 
                    <h3>{elapsedTime} days since last cleaning.</h3>   
                    <Button className='mt-2' variant='success' onClick={toggleCleaned}>Mark cleaned</Button> 
                    </div> 
                </div> 
                <div className="opacity-50"> 
                <div className={styles.card}> 
                <div className='d-flex justify-center'>
                <h2>It&aposs Joe&aposs turn next.</h2> 
                </div>
                </div> 
                </div>  
                
            </div>}
    </>
    )
  
}

