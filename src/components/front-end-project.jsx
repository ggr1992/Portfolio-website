import MoreInfoFrontEnd from "./More-info/More-info-Front-end"

function FrontEnd () {
    return (
       <>
       <div className="Text-container">
       <h2 className="Heading2">Front-end portfolio Project</h2>
       <p> Created a web app with a focus on board games, this app was created by using the API from the back-end project. This was built using JavaScript, HTML, CSS and React.
    </p>
    <a href="https://github.com/ggr1992/nc-games" target="_blank" rel="noopener noreferrer">
        View the Repo Here.
      </a>
      <MoreInfoFrontEnd/>
       </div>
       </>
    )
}

export default FrontEnd