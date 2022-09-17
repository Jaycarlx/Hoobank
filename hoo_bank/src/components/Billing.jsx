import { apple, bill, google } from "../assets"
import styles, {layout} from "../style"

const Billing = () =>  (
    <section id="product" className={`${layout.sectionReverse} fadeRight`}>
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="billing" className="w-[100%] h-[100] relative z-[5]" />
            
            
            <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"></div>
            <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"></div>
        </div>


        {/* text */}
        <div className={`${layout.sectionInfo} fadeLeft`}>
            <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" />
                billing & invoicing. </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, odit explicabo tempore incidunt beatae velit sunt magni et, tenetur earum nobis consequatur, nesciunt sapiente
            </p>
            <div className="flex flex-row flex-wrap sm:mt10 mt-6">
                <img src={apple} alt="apple" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer hover:scale-110" />
                <img src={ google} alt="apple" className="w-[128px] h-[42px] object-contain cursor-pointer hover:scale-110"/>
            </div>
                
        </div>
   </section>
  )


export default Billing