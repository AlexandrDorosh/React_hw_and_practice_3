import './CommentDetails.css';

export default function CommentDetails({detail}){
    return(
        <div className='commentPosts'>
            <p>{detail.body}</p>
        </div>
    )
}