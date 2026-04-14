import { CarouselDest } from "@/types/Types"
import styles from "./Carousel.module.css"

type Props ={
    hotDest: CarouselDest
}

const Carousel = ({hotDest}: Props) => {

    const {route, image} = hotDest;

    return(
        <div className={styles.carousel__card}>
            <img className={styles.carousel__img} src={image} alt={`Imagem do destino ${route}`}/>
            <div className={styles.carousel__overlay}>
                <h3 className={styles.carousel__text}>Destino <br></br>{route}</h3>
            </div>
        </div>
    );
}

export default Carousel;