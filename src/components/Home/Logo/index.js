 
 
// import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'
import f_man from '../../../assets/images/f_man.png'
import table from '../../../assets/images/table.png'
import shadow from '../../../assets/images/shadow.png'
import download from '../../../assets/images/download.png'
import download1 from '../../../assets/images/download1.png'
import download2 from '../../../assets/images/download2.png'
import download3 from '../../../assets/images/download3.png'
import download4 from '../../../assets/images/download4.png'
import download5 from '../../../assets/images/download5.png'
const Logo = () => {

  return (
    <div className="logo-container"  >
           <div className="frelencer_img">
    <img alt="img1" className="f_img_one" src={f_man}/>
    <img alt="img2" className="f_img_two" src={table}/>
    <img alt="img3" className="f_img_three" src={download}/>
    <img alt="img4" className="f_img_four" src={shadow}/>
    <img alt="img5" className="f_img_five" src={download1}/>
    <img alt="img6" className="f_img_six" src={download2}/>
    <img alt="img7" className="f_img_seven" src={download3}/>
    <img alt="img8" className="f_img_eight" src={download4}/>
    <img alt="img9" className="f_img_nine" src={download5}/>   
        </div>
    </div>
  )
}

export default Logo
