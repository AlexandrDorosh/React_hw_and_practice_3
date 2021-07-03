import './Posts.css';
import Post from "../post/Post";

export default function Posts({items}){
    return(
        <div>
            <h1>Posts</h1>
            {
                items.map(value => <Post key={value.id} item={value}/>)
            }
        </div>
    )
}