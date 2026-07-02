import { useEffect, useState } from "react";
import API from "../services/api";
import NotificationCard from "../components/NotificationCard";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

function Home() {

    const [notifications,setNotifications]=useState([]);
    const [page,setPage]=useState(1);
    const [type,setType]=useState("");

    const fetchNotifications=async()=>{

        const res=await API.get(
            `/?page=${page}&limit=5&notification_type=${type}`
        );

        setNotifications(res.data);

    };

    useEffect(()=>{

        fetchNotifications();

    },[page,type]);

    const markRead=async(id)=>{

        await API.patch(`/${id}/read`);

        fetchNotifications();

    };

    return(

        <div className="container">

            <h1>Notifications</h1>

            <Filter
                value={type}
                onChange={setType}
            />

            {
                notifications.map(notification=>(

                    <NotificationCard
                        key={notification._id}
                        notification={notification}
                        onRead={markRead}
                    />

                ))
            }

            <Pagination
                page={page}
                setPage={setPage}
            />

        </div>

    );

}

export default Home;