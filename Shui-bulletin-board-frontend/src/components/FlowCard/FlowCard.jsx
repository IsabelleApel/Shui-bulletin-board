import "./flowCard.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";


function FlowCard({msg}) {
    const [showActions, setShowActions] = useState(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);

        const options = {
            weekday: "long",
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit"
        };

        return new Intl.DateTimeFormat("sv-SE", options).format(date);
    }


    return (
        <section 
            className="card"
            onClick={() => 
                setShowActions(!showActions)
            } 
        >
            <div className="card-header">
                <span className="date">{formatDate(msg.createdAt)}</span>
            </div>
            <div className="card-body">
                <div className="card-body__left">
                    <p className="text">{msg.text}</p>
                    <Link
                        to={`/${msg.username}`}
                        className="user"
                    >{`- ${msg.username}`}</Link>
                </div>
                <div className="right">
                    {showActions && (
                        <Link 
                            to={`/messages/update/${msg.messageId}`}
                            state={{ message: msg }} 
                            className="update-btn"
                        >
                            <FontAwesomeIcon icon={faPen} />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    )
}

export default FlowCard;

