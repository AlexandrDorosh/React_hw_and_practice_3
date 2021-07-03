import './Users.css';
import User from "../user/User";

export default function Users({items}){
    return(
        <div>
            <h1>Users</h1>
            {
                items.map(value => <User key={value.id} item={value}/>)
            }
        </div>
    )
}