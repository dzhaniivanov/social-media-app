import "./home.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";


const Home = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}

export default Home;
