import './Header.css';
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div className='header'>
                <div><Link className='link' to="/">Home page</Link></div>
                <div><Link className='link' to="/users">Users</Link></div>
                <div><Link className='link' to="/posts">Posts</Link></div>
                <div><Link className='link' to="/comments">Comments</Link></div>
        </div>
    )
}