import Tech from "./Tech"

function Home () {
    return (
        <>
        <div className="Introduction">
          <h3 className="Heading2" >About me</h3>
        <p>Hey I'm Glen a Junior Software Developer welcome to my portfolio website I recently graduated from an intense 13 weeks bootcamp hosted by Northcoders. On this page you be able to view the projects I made while on the bootamp aswell as projects I have completed since graduating. I look forward to improving on the fountations I have already learnt and developing my skills further.</p>
        <a href="https://github.com/ggr1992" target="_blank" rel="noopener noreferrer">
        You can view my GitHub here!
      </a>
      <a href="https://www.linkedin.com/in/glen-robotham-a537bb27a/" target="_blank" rel="noopener noreferrer">
           You can view my LinkedIn here!
      </a>
        </div>
     <Tech/>
        </>
    )
}

export default Home