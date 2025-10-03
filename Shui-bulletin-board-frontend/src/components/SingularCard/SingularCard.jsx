import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./singularCard.css"

function SingularCard({
    initText = "",
    initUsername = "",
    isEdit = false,
    onSubmit
}) {

    const [text, setText] = useState(initText);
    const [username, setUsername] = useState(initUsername);
    const [error, setError] = useState(null);
    const [loading, SetLoading] = useState(false);

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);

        if(!text.trim() || !username.trim()) {
            setError("användarnamn och meddelande måste fyllas i!")
            return
        }

        SetLoading(true);

        try {
            await onSubmit(text, username.toLowerCase());
            navigate("/");
        } catch (error) {
            setError(error.message);
        } finally {
            SetLoading(false);
        }
    }
 

     return (
        <form className="add-msg" onSubmit={handleSubmit}>
            <Link to="/">
                <FontAwesomeIcon 
                    icon={faXmark} 
                    size="xl" 
                    className="xmark" 
                />
            </Link>            
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
            {error && <p className="error"><strong>ERROR:</strong> {error}</p>}
            <button className="add-msg__btn" type="submit" disabled={loading}>
                {loading 
                ? (isEdit ? "Uppdaterar..." : "Publicerar...") 
                : (isEdit ? "Uppdatera" : "Publicera")}
            </button>
        </form>
     )
}

export default SingularCard;