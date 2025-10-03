import { addMessage } from "../../api/api";
import SingularCard from "../../components/SingularCard/SingularCard";
import "./addMsgPage.css"

function AddMsgPage() {

    return (
        <section className="page page--one-msg">
            <SingularCard
                onSubmit={(text, username) => addMessage(text, username)}
            />
        </section>
    )
}

export default AddMsgPage;