import './Post.css';
import CommentDetails from "../commentDetails/CommentDetails";
import {useState} from "react";
import {getComment} from "../../services/Api";

export default function Post({item}){
    const {id, title, body} = item;
    const [commentDetails, setCommentDetails] = useState(null);

    function selectComment(id){
        getComment(id).then(value => setCommentDetails(value.data))
    };

    return(
        <div>
            <h2>Post {id}</h2>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Body:</strong> {body}</p>
            <button onClick={() => selectComment(item.id)}>show comments</button>
            {
                commentDetails && commentDetails.map(detail => <CommentDetails key={detail.id} detail={detail}/>)
            }
            <hr />
        </div>
    )
}