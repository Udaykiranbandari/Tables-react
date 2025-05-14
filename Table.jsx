import NoDataFound from "./NoDataFound";

function Table({ students }) {
    return (
        <div className="table-container">
            {students.length > 0 ? (
                <table border={1} cellSpacing={0} cellPadding={10} width="100%">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.studentName}</td>
                                <td>{student.email}</td>
                                <td>{student.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <NoDataFound />
            )}
        </div>
    );
}

export default Table;
