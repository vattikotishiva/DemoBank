import { Link, Outlet } from "react-router-dom";


export function Home(){
    return(
        <div>
            
            
    <h1>Home page</h1>

                <Link to="subhome">subhome</Link>
                <Outlet/>
                
    </div>
    )
}

export function Subhome(){
    return(
        <h1>hiiiii</h1>
    )
    }


export default Home 
