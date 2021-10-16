import "./feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";


const Feed = ({ username }) => {
    const [posts, setPosts] = useState([]);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get("/posts/profile/" + username)
                : await axios.get("posts/timeline/" + user._id);
            setPosts(res.data.sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt);
            }));
        }
        fetchPosts();
    }, [username, user._id]);

    return (
        <div className="feed">
            <div className="feedWrapper">
                {(!username ||username===user.username) && <Share />}
                {posts.map((p) => (
                    <Post post={p} key={p._id} />
                ))}
            </div>
        </div>
    )
}

export default Feed;
