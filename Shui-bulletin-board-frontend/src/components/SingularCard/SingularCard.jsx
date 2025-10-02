import { useState } from "react";
import { addMessage } from "../../api/api";
import "./singularCard.css"

function SingularCard() {

    const [text, setText] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(null);
    const [loading, SetLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        SetLoading(true);
        setError(null);

        try {
            await addMessage(text, username);
            setText("");
            setUsername("");
        } catch (error) {
            setError(error.message);
        } finally {
            SetLoading(false);
        }
    }
 

     return (
        <form className="add-msg" onSubmit={handleSubmit}>
            <div className="bubble">
                <textarea 
                    className="add-msg__text" 
                    placeholder="Skriv ditt medddelande..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <input 
                className="add-msg__name" 
                type="text" 
                placeholder="Användarnamn"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button className="add-msg__btn" type="submit" disabled={loading}>{loading ? "Publicerar..." : "Publicera"}</button>
        </form>
     )
}

export default SingularCard;