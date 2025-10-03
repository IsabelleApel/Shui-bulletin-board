const API_URL = import.meta.env.VITE_API_URL;

export async function fetchMessages() {
    const res = await fetch(`${API_URL}/messages`);
    return res.json();
};

export async function fetchUserMessages(username) {
    const res = await fetch(`${API_URL}/messages/${username}`);
    return res.json();
};

export async function addMessage(text, username) {
    const res = await fetch(`${API_URL}/messages`, {
        method: "POST",
        headers: {"content-Type": "application/json"},
        body: JSON.stringify({text, username}),
    });

    if(!res.ok) throw new Error("Kunde inte spara meddelandet")

    return res.json();
};

export async function updateMessage(id, username, text) {
    const res = await fetch(`${API_URL}/messages/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, text}),
    });

    if(!res.ok) throw new Error("Kunde inte uppdatera meddelandet")

    return res.json();
};

export async function deleteMessage(id) {
    console.log("nu hamnade jag här")
    const res = await fetch(`${API_URL}/messages/${id}`, {
        method: "DELETE",
    });

    if(!res.ok) throw new Error("Kunde inte radera meddelandet")
        
    return res.json();
}