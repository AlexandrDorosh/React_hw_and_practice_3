import './User.css';
import PostDetails from "../postDetails/PostDetails";

export default function User({item, selectPost, postDetails}) {
    let {id, name, username, email, address} = item;
    return (
        <div>
                <h2>User: {id}</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>User name:</strong> {username}</p>
                <p><strong>Email:</strong> {email}</p>
                <p>
                    <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
                </p>
                <button onClick={() => {selectPost(id)}}>Show post</button>
                {
                    postDetails && <PostDetails detail={postDetails} />
                }
                <hr />
        </div>
    )
}

