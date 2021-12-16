import {Link} from 'react-router-dom'

const ProjectCard = (props) => {
    const {title, desc, imageSrc, path} = props.cardData
    return (
        <>
            <div className="card m-2" style={{width:'23rem', height:'32rem'}} >
                <img className="card-img-top mt-3" height='80%' src={imageSrc} alt={imageSrc} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={path} target={'_blank'} className="btn btn-primary">View Project</a>
                    </div>
            </div>
        </>
    )
}
export default ProjectCard;