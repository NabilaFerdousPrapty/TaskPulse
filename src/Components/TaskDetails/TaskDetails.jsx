
import { useParams } from "react-router";

const TaskDetails = () => {
    const { id } = useParams(); // Extract `id` from the URL

    return (
        <div>
            <h1>Task Details</h1>
            <p>Task ID: {id}</p>
        </div>
    );
};

export default TaskDetails;
