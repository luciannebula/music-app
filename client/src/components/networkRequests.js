export const getAllSongs = async () => {
    const songs = await fetch("https://d1104cuav9b00q.cloudfront.net/songs");
    return songs.json();
}

export const addSongs = async (song) => {
    try {
        const holdResponse = await fetch("https://d1104cuav9b00q.cloudfront.net/songs", {
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