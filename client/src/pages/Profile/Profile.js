import "./Profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

const Profile = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={`${PF}post/3.jpeg`} className="profileCoverImg" alt="" />
                            <img src={`${PF}person/3.jpeg`} className="profileUserImg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Ivan Ivanov</h4>
                            <span className="profileInfoDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus veritatis omnis eius commodi vero harum?</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username="svinsko" />
                        <Rightbar profile />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
