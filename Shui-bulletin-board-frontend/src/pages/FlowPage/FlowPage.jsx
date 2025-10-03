import FlowCard from "../../components/FlowCard/FlowCard";
import { useMessages } from "../../hooks/useMessages";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import "./flowPage.css";
import Header from "../../components/Header/Header";

function FlowPage() {
    const { messages, loading } = useMessages();

    if(loading) return <p className="loding">Laddar meddelanden...</p>

    return (
        <section className="page">
            <Header />
            <section className="feed">
                { messages.length > 0 ?
                    (messages.map((msg) => (
                        <FlowCard key={msg.messageId} msg={msg}/>
                    ))
                    ) : (
                        <p className="no-msg">Inga meddelanden funna. Skapa gärna ett nytt!</p>
                    )
                }
                <Link to="messages/add" className="add-btn">
                    <FontAwesomeIcon icon={faPen} />
                </Link>
            </section>
        </section>
    )
}

export default FlowPage;