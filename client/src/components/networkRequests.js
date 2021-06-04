export const getAllSongs = async () => {
    const songs = await fetch("http://localhost:3030/songs");
    return songs.json();
}

export const addSongs = async (song) => {
    try {
        const holdResponse = await fetch("http://localhost:3030/songs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(song)
        });
        return holdResponse;

    } catch(error){
        console.log("Caught Error!! " + error)
    }
}