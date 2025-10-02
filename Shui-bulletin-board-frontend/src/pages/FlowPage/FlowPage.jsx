import FlowCard from "../../components/FlowCard/FlowCard";
import "./flowPage.css";

function FlowPage() {

    return (
        <section className="page">
            <section className="feed">
                {
                    Array.from({ length: 10}).map((_, i) => (
                        <FlowCard key={i} />
                    ))
                }
            </section>
        </section>
    )
}

export default FlowPage;