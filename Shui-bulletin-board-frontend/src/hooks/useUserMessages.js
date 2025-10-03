import { useEffect, useState } from "react";
import { fetchUserMessages } from "../api/api";

export function useUserMessages(username) {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserMessages(username)
            .then(res => {
                setMessages(res.data.messages);
                setLoading(false);
            });
    }, [username]);

    return { messages, loading };
}