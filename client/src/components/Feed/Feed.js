import "./feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
const Feed = () => {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Feed
