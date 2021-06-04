const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "music",
    password: "postgres",
    port: 5432
});

const getAllSongs = (request, response) => {
    pool.query('SELECT * FROM songs', (error, result) => {
        if (error) {
            throw error;
        }
        response.status(200).json(result.rows);
    });
}
const addSongs = (request, response) => {
    const { song_id, song_name, artist, duration, play_count, track_listing } = request.body;
    pool.query(
        `INSERT INTO songs (song_name, artist, duration, play_count) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [song_id, song_name, artist, duration, play_count, track_listing],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(result.rows);
        }
    )
};

const deleteSongById = (request, response) => {
    const song_id = parseInt(req.params.song_id);
    pool.query(`DELETE FROM songs WHERE id=${song_id}`, (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    })
}

const updateSongNameById = (request, response) => {
    const { song_id } = parseIntreq.params;
    const keys = Object.keys(req.body);
    const values = Object.values(req.body);

    const configureString = () => {
        let sqlStatement = '';
        for (let i = 0; i < keys.length; i++) {
            if (i === keys.length - 1) sqlStatement += `${keys[i]}=$${i + 1}`
            else sqlStatement += `${keys[i]}=$${i + 1},`
        }
        return sqlStatement;
    }
    pool.query(
        `UPDATE songs SET ${configureString()} WHERE song_id=$${keys.length + 1}`,
        [...values, song_id],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        }

    )

}
module.exports = {
    getAllSongs: getAllSongs,
    addSongs: addSongs,
    deleteSongById: deleteSongById,
    updateSongNameById: updateSongNameById
};