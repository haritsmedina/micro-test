const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')

const app = express()
app.use(bodyParser.json())
app.use(cors());

const posts = {};

const handledEvents = (type, data) => {
    if(type === 'PostCreated'){
        const {id, title} = data

        posts[id] = {id, title, comments: []}
    }

    if(type === 'CommentCreated'){
        const {id, content, postId,status} = data

        const post = posts[postId]
        post.comments.push({id,content,status})

    }

    if (type === 'CommentUpdated') {
        const {id,content,postId, status} = data
        const post = post[postId] ; 

        const comment = post.comment.find(comment => {
            return comment.id === id
        })

        comment.status = status 
        comment.content = content
    }
}
 
/*
example
posts == { 'skjwii24': { 
    id: 'jlska123',
    title: 'post title',
    comments: [
        {id: 'khksl', content: 'comment!'}
    ]
 } 
}
*/
app.get('/posts', (req, res) => {
    res.send(posts)
});

app.post('/events', (req, res)=> {
    const {type, data} = req.body;

    handledEvents(type, data)
    console.log(posts)
    res.send({})
})

app.listen(4002, async ()=>{
    console.log('listening on 4002')

    const res = await axios.get('http://localhost:4005/events')
    for (let event of res.data){
        console.log(`processing event: ${event.type}`)

        handledEvents(event.type, event.data);
    }
});