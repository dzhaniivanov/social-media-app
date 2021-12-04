import "./Messenger.css";
import Topbar from "../../components/Topbar/Topbar";
import Conversations from "../../components/Conversations/Conversations";

const Messenger = () => {
    return (
        <>
            <Topbar />
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input type="text" className="chatMenuInput" placeholder="Search for friends" />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />
                        <Conversations />

                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        box
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        online
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messenger
