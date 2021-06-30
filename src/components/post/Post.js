import './Post.css';
import CommentDetails from "../commentDetails/CommentDetails";

export default function Post({item, selectComment, commentDetails}){
    let {id, title, body} = item
    return(
        <div>
            <h2>Post {id}</h2>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Body:</strong> {body}</p>
            <button onClick={() => selectComment(item.id)}>show comment</button>
            {
                commentDetails && <CommentDetails detail={commentDetails}/>
            }
            <hr />
        </div>
    )
}