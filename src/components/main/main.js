import {Route, Switch} from "react-router-dom";
import HomePage from "../homePage/HomePage";
import Users from "../users/Users";
import Posts from "../posts/Posts";
import Comments from "../comments/Comments";

export default function Main(){
    return(
        <div>
            <div className='page'>
                    <Switch>
                        <Route exact path="/" render={() => <HomePage />}/>
                        <Route path="/users" render={() => <Users />}/>
                        <Route path="/posts" render={() => <Posts />}/>
                        <Route path="/comments" render={() => <Comments />}/>
                    </Switch>
            </div>
        </div>
    )
}