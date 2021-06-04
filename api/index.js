const express = require('express');
const app = express();
const db = require("./queries.js");
const port = 3030;
const cors = require ('cors')
//const bodyparser = require("body-parser");

app.use(cors());
app.use(express.json());

app.get('/',(request,response)=>{
    response.json({ info: "Lucian's Video BoomBox...!!!"});
});

app.get('/songs', db.getAllSongs);

app.post('/songs', db.addSongs);

app.delete('/songs/:song_id', db.deleteSongById);

app.put('/songs/:song_id', db.updateSongNameById);

//app.get('/planes', db.getPlanes);
//app.post('/planes', db.addPlanes);



app.listen(3030, () =>{
    console.log('Server running... on port ${port}');
})