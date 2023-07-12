import { Link } from "react-router-dom"

function ToDoListApp () {
    return (
        <>
        <div className="Text-container">
        <h2 className="Heading2">To-Do-List App</h2>
        <p>This To-Do-List app is an app intended for mobile it was a small project I have worked on it was created using React Native and Expo on this app you can add tasks that you want to do today and delete them once completed  </p>
        <Link to='/ToDoList'>More info   </Link>
        <br></br>
        <br></br>
        <a href="https://github.com/ggr1992/To-Do-list-React-Native" target="_blank" rel="noopener noreferrer">
        View the Repo Here.
      </a>
        </div> 
        </>
    )
}
export default ToDoListApp