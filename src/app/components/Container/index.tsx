import { CarouselDest } from "@/types/Types"
import Carousel from "../Carousel";
import styles from "./Container.module.css"

type Props ={
    hotDest: CarouselDest[]
}

const Container = ({hotDest}: Props) =>  {

    return (
        <section className={styles.container}>
            <div className={styles.carousel}>
                {hotDest.map(Dest => <Carousel key={Dest.id} hotDest={Dest}/>)}
            </div>
        </section>
    )

}

export default Container;