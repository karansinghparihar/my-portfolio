import ProjectCard from "./ProjectCard"
import ProjectsData from './ProjectsData'

const Projects = () => {
    return (
        <>
            <section id='projects' className="container-fluid">
                <h1 className="text-center mb-5">
                    My Projects
                </h1>
                <div className="col-md-10 col-10 mx-auto">
                    <div className="row projects-row">
                        {ProjectsData.map((card, index) => {
                            return <ProjectCard key={index} cardData={card} />
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Projects;