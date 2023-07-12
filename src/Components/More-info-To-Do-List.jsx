import ToDoImage from '../assets/Images/To-Do-List.png'

function MoreInfoToDo () {
 return (
 
     <div className="image-text-container">
        <img  src={ToDoImage} alt="My Image" className='imageToDo'/>
        <p>This is what my To Do list looks like from here you can type in a task and use the add button to add it this will update the useState of the tasks array you can then click on the tasks in order to delete them also updating the state.  </p>
        </div>
  
 )
}

export default MoreInfoToDo