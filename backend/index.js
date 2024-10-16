import express from 'express'

const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req, res)=>{
    res.send("hello user");
});

app.get('/jokes', (req, res)=>{
    const jokes =[
        {
            id:1,
            title:'A joke',
            content:'this is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'this is a joke 2'
        },
        {
            id:3,
            title:'Again a joke',
            content:'this is a joke'
        },
        {
            id:4,
            title:'Next joke',
            content:'this is a joke'
        },
        {
            id:5,
            title:'bad joke',
            content:'this is a bad joke'
        }
    ];
    res.send(jokes)// this response will be searved as a json file.
    //you can use the json formatter online to view any json content in formatted way.
});

app.listen(port, ()=>{
    console.log(`port running at ${port}`);
});