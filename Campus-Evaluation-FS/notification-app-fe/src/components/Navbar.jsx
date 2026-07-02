import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{
            background: "#2563eb",
            padding: "15px",
            display: "flex",
            justifyContent: "space-between",
            color: "white"
        }}>
            <h2>Notification System</h2>

            <div>
                <Link
                    to="/"
                    style={{
                        color: "white",
                        textDecoration: "none",
                        marginRight: "20px"
                    }}
                >
                    Home
                </Link>

                <Link
                    to="/priority"
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                >
                    Priority
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;