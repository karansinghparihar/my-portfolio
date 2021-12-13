import react from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './Navbar.js'
import Home from './Home.js'
import About from './About.js'
import Contact from './Contact.js'
import Projects from './Projects.js'
import Footer from './Footer'

const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/home' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/projects' component={Projects} />
                <Redirect to='/' />
            </Switch>
            <Footer />

        </>
    )
}
export default App;