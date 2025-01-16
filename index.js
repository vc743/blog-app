import express from 'express';
import bodyParser from 'body-parser';
import blogsRouter from './routes/blogs.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(blogsRouter);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});