import styles from './QrPage.module.css'
import Card from '../ui/Card'
import QrImage from '../images/image-qr-code.png'

const QrPage = () => {
  
    return(
        <div className={styles.outerCover}>
          <Card>
             <div className={styles.upperCover}>
                <img src={QrImage} alt="Qr-scanner" />
             </div>
             <div className={styles.lowerCover}>

                <p className={styles.heading}>Improve your front-end skills by building projects</p>
                <p className={styles.para}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>   

             </div>
          </Card>
        </div>
      
    )
}

export default QrPage