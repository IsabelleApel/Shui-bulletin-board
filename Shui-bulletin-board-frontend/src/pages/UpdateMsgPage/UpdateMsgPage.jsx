import SingularCard from "../../components/SingularCard/SingularCard";
import { useLocation, useParams } from "react-router-dom";
import { updateMessage } from "../../api/api";

function UpdateMsgPage() {
    const { id } = useParams();
    const location = useLocation();
    const { message } = location.state || {};

    if(!message) return <p>Kunde inte ladda meddelandet</p>


    return (
        <section className="page page--one-msg">
            <SingularCard 
                initText={message.text}
                initUsername={message.username}
                isEdit={true}
                onSubmit={(text, username) => updateMessage(id, username, text)}
            />
        </section>
    )
}

export default UpdateMsgPage;