require('dotenv').config();
import express from 'express';
import path from 'path';

const app = express();

app.get("/", async (req, res) => {
    res.send("Todo bien");
});

//static serve
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => { 
    console.log(`Server Started at port ${port}`); 
});