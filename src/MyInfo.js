import './App.css'
import { Link } from 'react-router-dom'

const MyInfo = (props) => {
    const {intro, name, desc, btn_label, image, visit} = props.data

    return (
        <>
        <section id='myInfo'>
                <div className='col-md-10 mx-auto'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='mt-1'>
                                <h1>{intro}<strong style={{color:'#30a494'}}>{name}</strong></h1>{desc}<br />
                            </div>
                            <div className='mt-3'>
                                <Link to={visit} className='btn btn-outline-primary rounded-pill'>{btn_label}</Link>
                            </div>
                        </div>
                        <div className='col-md-6 image d-flex justify-content-center'>
                            <img src={image} alt={image} className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MyInfo;