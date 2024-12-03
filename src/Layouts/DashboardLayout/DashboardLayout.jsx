
import { Outlet } from "react-router";

const DashBoard = () => {
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Main Content */}
            <div className="flex-1 overflow-y-auto h-screen">
                <Outlet /> {/* Render child routes here */}
            </div>
        </div>
    );
};

export default DashBoard;
