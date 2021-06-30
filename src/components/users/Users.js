import './Users.css';
import User from "../user/User";

export default function Users({items, selectPost, postDetails}){
    return(
        <div>
            <h1>Users</h1>
            {
                items.map(value => <User key={value.id} item={value} selectPost={selectPost}
                                         postDetails={postDetails}/>)
            }
        </div>
    )
}