import './User.css';
import PostDetails from "../postDetails/PostDetails";
import {useState} from "react";
import {getUser} from "../../services/Api";

export default function User({item}) {
    const {id, name, username, email, address} = item;
    const [postDetails, setPostDetails] = useState(null);

    function selectPost(id){
        getUser(id).then(value => setPostDetails(value.data))
    };

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
                    postDetails && postDetails.map(detail => <PostDetails key={detail.id} detail={detail} />)
                }
                <hr />
        </div>
    )
}

