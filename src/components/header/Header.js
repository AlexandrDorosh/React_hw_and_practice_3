import './Header.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUsers, getPost, getPosts, getComment, getComments} from "../../services/Api";
import Users from "../users/Users";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";
import HomePage from "../homePage/HomePage";


export default function Header(){
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [postDetails, setPostDetails] = useState(null);
    const [commentDetails, setCommentDetails] = useState(null);

    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data)
        })
        getPosts().then(value => {
            setPosts(value.data)
        })
        getComments().then(value => {
            setComments(value.data)
        })
    }, []);

    function selectPost(id){
        getPost(id).then(value => setPostDetails(value.data))
    };

    function selectComment(id){
        getComment(id).then(value => setCommentDetails(value.data))
    };

    return(
        <Router>
            <div className='header'>
                <div><Link className='link' to="/">Home page</Link></div>
                <div><Link className='link' to="/users">Users</Link></div>
                <div><Link className='link' to="/posts">Posts</Link></div>
                <div><Link className='link' to="/comments">Comments</Link></div>
            </div>

            <div className='page'>
                <Switch>
                    <Route exact path="/" render={() => <HomePage />}/>
                    <Route path="/users" render={() => <Users items={users} selectPost={selectPost} postDetails={postDetails}/>}/>
                    <Route path="/posts" render={() => <Posts items={posts} selectComment={selectComment} commentDetails={commentDetails}/>}/>
                    <Route path="/comments" render={() => <Comments items={comments}/>}/>
                </Switch>
            </div>
        </Router>
    )
}