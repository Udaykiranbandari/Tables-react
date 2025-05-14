import { useState, useEffect } from "react";
import Cards from "./cards";
import Table from "./Table";
import AddStudent from "./AddStudent";
import "./styles.css";

function App() {
    // Load from localStorage at initial render
    const [students, setStudents] = useState(() => {
        const saved = localStorage.getItem("students");
        return saved ? JSON.parse(saved) : [];
    });

    // Save to localStorage whenever students change
    useEffect(() => {
        localStorage.setItem("students", JSON.stringify(students));
    }, [students]);

    const addStudent = (newStudent) => {
        setStudents([...students, { ...newStudent, id: students.length + 1 }]);
    };

    return (
        <div className="container">
            <h1 className="title">🎓 Student Management App</h1>
            <AddStudent onAdd={addStudent} />
            <div className="student-layout">
                <Cards students={students} />
                <Table students={students} />
            </div>
        </div>
    );
}

export default App;
