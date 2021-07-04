import './Comments.css';
import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../../services/Api";

export default function Comments(){
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => {
            setComments(value.data)
        })
    }, []);

    return(
        <div>
            <h1>Comments</h1>
            {
                comments.map(value => <Comment key={value.id} item={value} />)
            }
        </div>
    )
}