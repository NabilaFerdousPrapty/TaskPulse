
import { Outlet } from "react-router";
import Sidebar from "../../Components/DashboasrdNav/DashboardNav";
import DashBoardUpperNav from "../../Components/DashboardUpperNav/DashboardUpperNav";

const DashBoard = () => {
    return (
        <div className="min-h-screen flex bg-gray-100">
            <Sidebar />
            {/* Main Content */}
            <div className="flex-1 flex-col overflow-y-auto h-screen">
                <DashBoardUpperNav />
                <Outlet /> {/* Render child routes here */}
            </div>
        </div>
    );
};

export default DashBoard;
