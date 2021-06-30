import './Comments.css';
import Comment from "../comment/Comment";

export default function Comments({items}){
    return(
        <div>
            <h1>Comments</h1>
            {
                items.map(value => <Comment key={value.id} item={value} />)
            }
        </div>
    )
}