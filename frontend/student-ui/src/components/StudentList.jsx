import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";

function StudentList() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents().then(res => setStudents(res.data));
    }, []);

    return (
        <div>
            <h2>Students</h2>
            <ul>
                {students.map(s => (
                    <li key={s.id}>{s.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default StudentList;
