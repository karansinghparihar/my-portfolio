import ProjectCard from "./ProjectCard";
import ProjectsData from './ProjectsData'

const Projects = () => {
    return (
        <>
            <section id='service' className="container-fluid">
                <h1 className="text-center mb-5">
                    My Projects
                </h1>
                <div className="col-md-10 col-10 mx-auto">
                    <div className="row gy-4 d-flex justify-content-evenly">
                        {ProjectsData.map((card, index) => {
                            return <ProjectCard key={index} cardTitle={card.title} CardDesc={card.desc} cardImage={card.imageSrc} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects;