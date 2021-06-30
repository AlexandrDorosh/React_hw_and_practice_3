import './PostDetails.css';

export default function PostDetails({detail}){
    let {id, title, body} = detail;
    return(
        <div className='postsUsers'>
            <h3>Post user {id}</h3>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Body:</strong> {body}</p>
        </div>
    )
}