import "./NotificationCard.css";

function NotificationCard({ notification, onRead }) {
    return (
        <div className={`card ${notification.isRead ? "read" : ""}`}>
            <h3>{notification.type}</h3>

            <p>{notification.message}</p>

            <small>
                Student : {notification.studentId}
            </small>

            <br />

            <small>
                {new Date(notification.createdAt).toLocaleString()}
            </small>

            <br />

            {!notification.isRead && (
                <button onClick={() => onRead(notification._id)}>
                    Mark as Read
                </button>
            )}
        </div>
    );
}

export default NotificationCard;