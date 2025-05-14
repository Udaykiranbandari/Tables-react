import { useState } from "react";

function AddStudent({ onAdd }) {
    const [studentName, setStudentName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (studentName && email && age) {
            onAdd({ studentName, email, age: parseInt(age) });
            setStudentName("");
            setEmail("");
            setAge("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
            />
            <button type="submit">Add Student</button>
        </form>
    );
}

export default AddStudent;
