import "./MsgCard.css"

function MsgCard() {
    return (
        <section className="card">
            <div className="card-header">
                <span className="date">måndag 3 nov, 09:23</span>
            </div>
            <div className="card-body">
                <p className="text">Saker händer här och där. Elakingar på spårvagnarna vid Brunnsparken. Se till att vara på plats den tiden, var försiktiga</p>
                <span className="user">- Snodden</span>
            </div>
        </section>
    )
}

export default MsgCard;

