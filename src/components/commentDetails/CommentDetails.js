import './CommentDetails.css';

export default function CommentDetails({detail}){
    return(
        <div className='commentPosts'>
            <h3>Comment post {detail.id}</h3>
            <p>{detail.body}</p>
        </div>
    )
}