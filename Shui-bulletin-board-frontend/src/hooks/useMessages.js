import { useEffect, useState } from "react";
import { fetchMessages } from "../api/api";

export function useMessages() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMessages()
            .then(data => {
                setMessages(data);
                setLoading(false);
            });
    }, []);

    return { messages, loading };
}