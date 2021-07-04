import './Posts.css';
import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/Api";

export default function Posts(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => {
            setPosts(value.data)
        })
    }, []);

    return(
        <div>
            <h1>Posts</h1>
            {
                posts.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    )
}