import NoDataFound from "./NoDataFound";

function Cards({ students }) {
    return (
        <div className="card-container">
            {students.length > 0 ? (
                students.map((student) => (
                    <div key={student.id} className="card">
                        <h3>Id: {student.id}</h3>
                        <p><strong>{student.studentName}</strong></p>
                        <p>{student.email}</p>
                        <p>{student.age}</p>
                    </div>
                ))
            ) : (
                <NoDataFound />
            )}
        </div>
    );
}

export default Cards;
