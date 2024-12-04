import { Outlet } from "react-router";
import Sidebar from "../../Components/DashboasrdNav/DashboardNav";
import DashBoardUpperNav from "../../Components/DashboardUpperNav/DashboardUpperNav";

const DashBoard = () => {
    return (
        <div className="min-h-screen flex bg-gray-100 relative lg:relative">
            {/* Sidebar will be absolute only for small to medium screens */}
            <div className="absolute lg:static">
                <Sidebar />
            </div>
            {/* Main Content */}
            <div className="w-full flex-col justify-center items-center mx-auto overflow-y-auto h-screen">
                <DashBoardUpperNav />
                <Outlet /> {/* Render child routes here */}
            </div>
        </div>
    );
};

export default DashBoard;
