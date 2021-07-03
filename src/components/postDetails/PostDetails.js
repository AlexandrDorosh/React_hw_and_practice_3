import './PostDetails.css';

export default function PostDetails({detail}){
    const {title, body} = detail;

    return(
        <div className='postsUsers'>
            <p><strong>Title:</strong> {title}</p>
            <p><strong>Body:</strong> {body}</p>
        </div>
    )
}