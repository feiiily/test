import { Link } from "react-router-dom";

function HomePage(){
    return (
        <div>
            <h1 className="welcome">Welcome</h1>
            {/* <Link to={"/todo"}>Todo</Link>
            <Link to={"/hakernews"}>Haker News</Link> */}
            <div className="homepagelink">
            <Link to={"/login"}>login</Link><br></br>
            <Link to={"/index"}>index</Link><br />
            <Link to={"/editUserInformation"}>editUserInformation</Link>
            </div>
        </div>
    );
}

export default HomePage;