import './Comment.css';

export default function Comment({item}){
    const {id, name, email, body} = item;
    return(
        <div>
            <h2>Comment: {id}</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Body:</strong> {body}</p>
            <hr />
        </div>
    )
}