import contactManager from './images/contact-manager.png'
import eCommerce from './images/e-commerce.png'
import eCommerceRedux from './images/e-commerce-redux.jpeg'
import taskTracker from './images/task-tracker.jpg'
import MovieScoop from './images/AppLogo.png'

// import webImage from './images/web-development.jpg'
// import appImage from './images/app-development.png'
// import softwareImage from './images/software-development.jpg'
// import digitalImage from './images/digital-marketing.jpeg'
// import androidImage from './images/android-development.jpg'
// import marketingImage from './images/marketing.jpg'

const ProjectsData = [
    {
        title:'Movie Scoop',
        desc:'Movie Scoop made with advanced react, context-api, protected routes and firebase authentication.',
        imageSrc:MovieScoop,
        path:'https://moviescoop.pages.dev/'
    },
    {
        title:'Task Tracker',
        desc:'Task tracker is an application for monitoring your projects tasks through their various stages from start to finish.',
        imageSrc:taskTracker,
        path:'https://tasktracker.pages.dev'
    },
    // {
    //     title:'Contact Manager App',
    //     desc:'A contact manager is a software program that enables users to easily store and find contact information, such as names, addresses, and telephone numbers.',
    //     imageSrc: contactManager,
    //     path:'https://contactmanager-ksp.netlify.app/'
    // },
    // {
    //     title:'E-Commerce App',
    //     desc:'An ecommerce app should aim at providing an immersive and unique experience that makes online shopping a much simpler and seamless process.',
    //     imageSrc: eCommerce,
    //     path:'https://ecommerce-karan.netlify.app/'
    // },
    {
        title:'Fashion Bucket App with Redux',
        desc:'Build an end-to-end E-Commerce App with React + Redux + FakeShopApi which provides unique shopping experience for end users.',
        imageSrc: eCommerceRedux,
        path:'https://fashionbucket.pages.dev/'
    }
    // ,
    // {
    //     title:'Digital marketing',
    //     imageSrc: digitalImage
    // },
    // {
    //     title:'Android development',
    //     imageSrc: androidImage
    // },
    // {
    //     title:'Marketing',
    //     imageSrc: marketingImage
    // }
]
export default ProjectsData;