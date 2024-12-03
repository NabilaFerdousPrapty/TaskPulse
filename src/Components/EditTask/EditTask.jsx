import { useParams } from "react-router";


const EditTask = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Edit Task</h1>
            <p>Task ID: {id}</p>
        </div>
    )
}

export default EditTask