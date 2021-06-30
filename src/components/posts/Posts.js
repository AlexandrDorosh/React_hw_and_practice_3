import './Posts.css';
import Post from "../post/Post";

export default function Posts({items, selectComment, commentDetails}){
    return(
        <div>
            <h1>Posts</h1>
            {
                items.map(value => <Post key={value.id} item={value} selectComment={selectComment} commentDetails={commentDetails}/>)
            }
        </div>
    )
}