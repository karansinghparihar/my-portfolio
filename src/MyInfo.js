import './App.css'
import { Link } from 'react-router-dom'

const MyInfo = (props) => {
    return (
        <>
        <section id='myInfo'>
                <div className='col-md-10 mx-auto'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='mt-1'>
                                <h1>{props.intro}<strong style={{color:'#30a494'}}>{props.name}</strong></h1>{props.description}<br />
                            </div>
                            <div className='mt-3'>
                                <Link to={props.visit} className='btn btn-outline-primary rounded-pill'>{props.btn_label}</Link>
                            </div>
                        </div>
                        <div className='col-md-6 image d-flex justify-content-center'>
                            <img src={props.image} alt={props.image} className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default MyInfo;