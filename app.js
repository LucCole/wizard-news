const express = require("express");
const morgan = require("morgan");
const postList = require("./views/postList")
const postDetails = require("./views/postDetails")
const errorPage = require("./views/errorPage")
const postBank = require("./postBank")

const app = express();

app.use(express.static('public'))

app.use(morgan('dev'));


const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});



app.get('/', (req, res) => {

    
    const posts = postBank.list();

    res.send(postList(posts));
});

app.get('/posts/:id', (req, res) => {

    
    const id = req.params.id;
    const post = postBank.find(id);

    if (!post.id) {
      // If the post wasn't found, just throw an error
      throw new Error('404 - Post not found')
    }else{

        res.send(postDetails(post));
    }
});

app.get('*', (req, res) => {

    
    throw new Error('404 - Page does not exist')
});

app.use((error, req, res, next) => {
    // Error gets here
    res.send(errorPage(error));
});