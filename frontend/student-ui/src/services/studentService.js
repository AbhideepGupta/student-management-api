import axios from "axios";

export const getStudents = () => axios.get("/students");
export const addStudent = (student) => axios.post("/students", student);
export const deleteStudent = (id) => axios.delete(`/students/${id}`);
