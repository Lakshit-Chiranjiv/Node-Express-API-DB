const fs = require('fs');
const express = require('express');
// const langs = require('./../db/langs.json'); //also works intead of readfile
const jsonfilepath = './using-JSON-File-as-DB/db/langs.json';
let readdata = fs.readFileSync(jsonfilepath,'utf-8');
let langs = JSON.parse(readdata);
// console.log(langs);

const app = express();

app.get('/coders',(request,response)=>{
    response.send("coders");
});

app.get('/all%20langs',(request,response)=>{

    response.send(langs);
});

app.get('/add/:skill/:scale_value?',(request,response)=>{
    const data = request.params;
    let reply;
    if(!data.scale_value)
    {
        reply = {
            message: "scale value required!!"
        }
        response.send(reply);
    }
    else
    {
        langs[data.skill] = Number(data.scale_value);
        fs.writeFile(jsonfilepath,JSON.stringify(langs,null,4),()=>{
            console.log("writing complete!!");
            reply = {
                message: "Skill added!!!",
                skill: data.skill,
                scale_value: data.scale_value
            }
            response.send(reply);
        });

    }
});


const server = app.listen(5000, ()=>console.log("express server live at PORT 5000"));
