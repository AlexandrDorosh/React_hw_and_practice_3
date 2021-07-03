import './App.css';
import Header from "./components/header/Header";
import {useEffect, useState} from "react";
import {getComments, getPosts, getUsers} from "./services/Api";

function App() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);


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
  return (
    <div>
        <Header users={users} posts={posts} comments={comments}/>
    </div>
  );
}

export default App;
