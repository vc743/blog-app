import { Router } from "express";

const router = Router();

const posts = [];
const today = new Date();
const dateOptions = {year: 'numeric', month: 'short', day: 'numeric'};
const formatedDate = today.toLocaleDateString('en-US', dateOptions);

router.get('/', (req, res) => {
    res.render('index.ejs', {posts: posts});
});

router.get('/create', (req, res) => {
    res.render('creationForm.ejs');
});

router.get('/postview/:id', (req, res) => {
    let index = req.params.id;
    let post = posts[index];
    res.render('postView.ejs', {postId: index, title: post.title, content: post.content, formatedDate});
});

router.get('/edit/:id', (req, res) => {
    let id = req.params.id;
    const { title, content } = posts[id];

    res.render('editForm.ejs', {postId: id ,title: title, content: content});
});


router.post('/submit', (req, res) => {
    
    const { title, content } = req.body;
    
    const newPost = {
        title,
        content,
        formatedDate
    };
    
    posts.push(newPost);
    
    res.redirect('/');
});

router.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const { title, content } = req.body;

    posts[id].title = title;
    posts[id].content = content;

    res.redirect('/');
});

router.post('/delete/:id', (req, res) => {
    const id = req.params.id;

    posts.splice(id, 1);

    res.redirect('/');
});

export default router;