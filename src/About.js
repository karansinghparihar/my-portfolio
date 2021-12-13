import MyInfo from "./MyInfo";
import aboutImage from './images/about-image.jpg'
import {Link} from 'react-router-dom'
import { PDFReader } from 'reactjs-pdf-reader';

const About = () => {
    return (
        <>
            <MyInfo intro={'Hey, my name is '} name={'Karan Singh Parihar'} description={'Experienced front end developer who is comfortable working with React, HTML/CSS/Javascript/Bootstrap to deliver exceptional customer experiences.'} btn_label={'Contact Now'} image={aboutImage} visit={'/contact'} />
        </>
    )
}
export default About;