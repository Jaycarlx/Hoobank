import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"


const CardDeal = () =>  (
    <section className={layout.section}>
        <div className={`${layout.sectionInfo} fadeRight`}>
            <h2 className={styles.heading2}>Find a better card deal<br className="sm:block hidden" /> in few easy steps</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo error, facilis sint blanditiis corrupti omnis.</p>
            <Button styles='mt-10'/>
        </div>

        {/* Picture */}
        <div className={`${ layout.sectionImg } fadeLeft`}>
            <img src={card} alt="card" className="h-[100%] w-[100%]" />
        </div>
   </section>
  )



export default CardDeal