import MsgCard from "../../components/MsgCard/MsgCard";
import "./flowPage.css";

function FlowPage() {

    return (
        <section className="page">
            <section className="feed">
                {
                    Array.from({ length: 10}).map((_, i) => (
                        <MsgCard key={i} />
                    ))
                }
            </section>
        </section>
    )
}

export default FlowPage;