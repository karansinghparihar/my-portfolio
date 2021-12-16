import homeImage from './images/home-image.jpeg'
import MyInfo from './MyInfo'

const Home = () => {
    const homeData = {
        intro: 'Welcome, to the world of ',
        name: 'Web development',
        desc: 'This website is developed using ReactJs.',
        btn_label: 'Projects',
        image: homeImage,
        visit: '/projects'
    }
    return (
        <>
            <MyInfo data={homeData} />
        </>
    )
}
export default Home;