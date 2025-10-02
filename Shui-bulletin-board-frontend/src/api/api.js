const API_URL = import.meta.env.VITE_API_URL;

export async function fetchMessages() {
    const res = await fetch(`${API_URL}/messages`);
    return res.json();
};

export async function fetchUserMessages(username) {
    const res = await fetch(`${API_URL}/messages/${username}`);
    return res.json();
};

export async function addMessage(username, text) {
    const res = await fetch(`${API_URL}/messages`, {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify({username, text}),
    });
    return res.json();
};

export async function updateMessage(id, username, text) {
    const res = await fetch(`${API_URL}/messages/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, text}),
    });
    return res.json();
};