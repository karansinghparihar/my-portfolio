import {Link} from 'react-router-dom'

const ProjectCard = (props) => {
    return (
        <>
            <div className="card m-2" style={{width:'23rem', height:'32rem'}} >
                <img className="card-img-top mt-3" height='80%' src={props.cardImage} alt={props.cardImage} />
                    <div className="card-body">
                        <h5 className="card-title">{props.cardTitle}</h5>
                        <p className="card-text">{props.CardDesc}</p>
                        <Link to="/service" className="btn btn-primary">Go somewhere</Link>
                    </div>
            </div>
        </>
    )
}
export default ProjectCard;