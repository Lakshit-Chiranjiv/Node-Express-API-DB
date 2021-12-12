// console.log("basic express server!!!");

let knowlangs = {
    "java": 7,
    "c++": 6,
    "python": 7,
    "figma": 5
}

const express = require('express');

const app = express();

app.use(express.static('./ExpressServerwithRoutes/publicServe'));

app.get('/programmers',(request,response)=>{
    response.send("We are programmers !!!");
});

app.get('/programmers/js',(request,response)=>{
    response.send("We are javascript programmers !!!");
});

app.get('/programmers/:lang',(request,response)=>{
    const data = request.params;
    response.send(`We are ${data.lang} programmers !!!`);
});

app.get('/coders',(request,response)=>{
    response.send("We are just coders !!!");
});

app.get('/coders/:skill/:scale_value',(request,response)=>{
    const data = request.params;
    response.send(`We are coders and we know ${data.skill} ---> ${data.scale_value}/10 !!!`);
});


app.get('/all%20langs',(request,response)=>{

    response.send(knowlangs);
});

app.get('/add/:skill/:scale_value?',(request,response)=>{
    const data = request.params;
    let reply;
    if(!data.scale_value)
    {
        reply = {
            message: "scale value required!!"
        }
    }
    else
    {
        knowlangs[data.skill] = Number(data.scale_value);
        reply = {
            message: "Skill added!!!"
        }
    }

    response.send(reply);

});

app.get('/search/:skill',(request,response)=>{
    const data = request.params;
    let reply;
    if(!knowlangs[data.skill])
    {
        reply = {
            message: "skill not found!!"
        }
    }
    else
    {
        reply = {
            message: "Skill found!!!",
            skill: data.skill,
            scale_value: knowlangs[data.skill]
        }
    }

    response.send(reply);

});

app.get('/search/vals/:scale_val',(request,response)=>{
    const data = request.params;
    let reply;
    let with_val = [];
    let count = 0;

    for(let i in knowlangs)
    {
        if(knowlangs[i] === Number(data.scale_val))
        {
            count++;
            with_val.push(i);
        }
    }

        reply = {
            message: count + " skills matched!!!",
            skills: with_val
        }

    response.send(reply);

});


const server = app.listen(5000, ()=>console.log("express server live at PORT 5000"));

