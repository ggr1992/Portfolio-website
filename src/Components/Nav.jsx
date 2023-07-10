import { Link } from "react-router-dom";

function Nav () {
    return (
        <>
        <div className="NavBar">
         <Link to="/">Home </Link>
         <Link to='/Projects'> Projects</Link>

        </div>
        </>
    )
}

export default Nav