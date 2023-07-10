import javaScriptLogo from '../assets/Images/JavaScript-logo.png'
import nodeAndExpress from '../assets/Images/NodeAndExpress.png'
import reactLogo from '../assets/Images/react-logo.jpg'
import postgreSQLLogo from '../assets/Images/PostgreSQL.jpg'
import fireBaseLogo from '../assets/Images/Firebase.png'
import HTMLAndCSSLogo from '../assets/Images/HTML-CSS.png'
import ReactNativeLogo from '../assets/Images/React-native.png'
import TypescriptLogo from '../assets/Images/Typescript.png'
import Jest from '../assets/Images/Jest.png'

function Tech () {
return (
    <>
    <div className='Tech-container'>
    <h2 className='Heading2'>Technial Skills</h2>
    <p>I have a varying amount of experience with the following Techs.</p>
    <img  src={javaScriptLogo} alt="My Image" className='Logo'/>
    <img  src={nodeAndExpress} alt="My Image" className='Logo'/>
    <img  src={reactLogo} alt="My Image" className='Logo'/>
    <img  src={postgreSQLLogo} alt="My Image" className='Logo'/>
    <img  src={fireBaseLogo} alt="My Image" className='Logo'/>
    <img  src={HTMLAndCSSLogo} alt="My Image" className='Logo'/>
    <img  src={ReactNativeLogo} alt="My Image" className='Logo'/>
    <img  src={TypescriptLogo} alt="My Image" className='Logo'/>
    <img  src={Jest} alt="My Image" className='Logo'/>
    </div>
    </>

)
}

export default Tech