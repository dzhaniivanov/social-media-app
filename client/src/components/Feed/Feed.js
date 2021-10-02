import "./feed.css";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { useState, useEffect } from "react";
import axios from "axios";


const Feed = () => {
    const [post, setPost] = useState([]);


    useEffect(() => {
        const fetchPosts = async () => {
            const res = axios.get("posts/timeline/61585891a5578fc5c68d121a");
            console.log(res);
        };
        fetchPosts();
    }, []);

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {/*   {Posts.map((p) => (
                    <Post post={p} key={p.id} />
                ))} */}
            </div>
        </div>
    )
}

export default Feed
