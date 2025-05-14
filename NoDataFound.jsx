import NoDataFoundImage from "./assets/image.png";

function NoDataFound() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <img
                src={"https://img.freepik.com/premium-vector/no-data-found_585024-42.jpg?w=2000"}
                alt="No data found"
                style={{ maxWidth: "100%", height: "auto" }}
            />
            <p>No Data Found</p>
        </div>
    );
}

export default NoDataFound;
