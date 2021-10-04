import "./feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { useState, useEffect } from "react";
import axios from "axios";


const Feed = () => {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("posts/timeline/615855b5a5578fc5c68d1214");
            setPosts(res.data);
        }
        fetchPosts();
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map((p) => (
                    <Post post={p} key={p.id} />
                ))}
            </div>
        </div>
    )
}

export default Feed
