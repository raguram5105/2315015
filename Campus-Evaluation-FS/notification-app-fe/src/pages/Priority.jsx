import { useEffect,useState } from "react";
import API from "../services/api";
import NotificationCard from "../components/NotificationCard";

function Priority(){

    const [notifications,setNotifications]=useState([]);

    useEffect(()=>{

        API.get("/priority")
        .then(res=>setNotifications(res.data));

    },[]);

    return(

        <div className="container">

            <h1>Priority Notifications</h1>

            {
                notifications.map(notification=>(

                    <NotificationCard
                        key={notification._id}
                        notification={notification}
                        onRead={()=>{}}
                    />

                ))
            }

        </div>

    );

}

export default Priority;