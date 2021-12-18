import {Link} from 'react-router-dom'

const ProjectCard = (props) => {
    const {title, desc, imageSrc, path} = props.cardData
    const cardStyle = {
        'max-width': '20rem',
        'max-height': '30rem'
    }
    const imgStyle = {
        'width': '100%',
        'max-height': '18rem'
    }
    return (
        <>
            <div className="card m-2" style={cardStyle}>
                <img className="card-img-top mt-3" style={imgStyle} src={imageSrc} alt={imageSrc} />
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