import "./rightbar.css";
import {Users} from "../../dummyData";
import Online from "../Online/Online";


const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="assets/gift.png" className="birthdayImg" alt="" />
                    <span className="birthdayText"><b>Ivan Ivanov</b> and <b>3 others friends</b> have a birthday today</span>
                </div>
                <img src="assets/ad.png" alt="" className="rightBarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                   {Users.map((u)=>(
                       <Online user={u} key={u.id}/>
                   ))}
                </ul>
            </div>
        </div>
    )
}

export default Rightbar
