import styles from './Card.module.css'

const Card = (props) =>{

    return(

        <div className={styles.cardCover}>
          {props.children}
        </div>

    );

}

export default Card