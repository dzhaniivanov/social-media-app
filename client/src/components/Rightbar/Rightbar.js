import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online";


const Rightbar = ({ profile }) => {

    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="assets/gift.png" className="birthdayImg" alt="" />
                    <span className="birthdayText"><b>Ivan Ivanov</b> and <b>3 others friends</b> have a birthday today</span>
                </div>
                <img src="assets/ad.png" alt="" className="rightBarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online user={u} key={u.id} />
                    ))}
                </ul>
            </>
        )
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Poruchik Chunchevo</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User Friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Dancho Kibritliqta</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Dancho Kibritliqta</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Dancho Kibritliqta</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Dancho Kibritliqta</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Dancho Kibritliqta</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Dancho Kibritliqta</span>
                    </div>
                </div>
            </>
        )
    }


    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}

export default Rightbar
