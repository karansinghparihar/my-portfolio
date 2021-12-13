import homeImage from './images/home-image.jpeg'
import MyInfo from './MyInfo'

const Home = () => {
    return (
        <>
            <MyInfo intro={'Welcome, to the world of '} name={'Web development'} description={'This website is developed using ReactJs'} btn_label={'Projects'} image={homeImage} visit={'/projects'} />
        </>
    )
}
export default Home;