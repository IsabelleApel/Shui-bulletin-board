import FlowCard from "../../components/FlowCard/FlowCard";
import { useParams } from "react-router-dom";
import { useUserMessages } from "../../hooks/useUserMessages";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./userFlowPage.css";
import Header from "../../components/Header/Header";

function UserFlowPage() {
    const { username } = useParams();

    const { messages, loading } = useUserMessages(username.toLowerCase());

    if(loading) return <p className="loding">Laddar meddelanden...</p>

    return (
        <section className="page">
            <Header />
            <section className="feed">
                <Link to="/">
                    <FontAwesomeIcon 
                        icon={faArrowLeft} 
                        size="xl" 
                        className="back-arrow" 
                    />
                </Link>
                { messages.length > 0 ?
                    (messages.map((msg) => (
                        <FlowCard key={msg.messageId} msg={msg}/>
                    ))
                    ) : (
                        <p className="no-msg">Inga meddelanden funna</p>
                    )
                }
            </section>
        </section>
    )
}

export default UserFlowPage;