const apidiv = document.getElementById('data-div');
const jsondiv = document.getElementById('json-div');
const nod1 = document.getElementById('nod1');
const nod2 = document.getElementById('nod2');
const refapi = document.getElementById('refreshapi');
const refjson = document.getElementById('refreshjson');

console.log(75);

refapi.addEventListener('click',async()=> {
    const fetched_Data = await fetch('http://localhost:5000/all%20langs');
    const api_data = await fetched_Data.json();
    console.log("API DATA");
    console.log(api_data);
    let snippet = '';
    for(const i in api_data)
    {
        snippet += '<h6>'+i+' : '+api_data[i]+'</h6>';
    }
    apidiv.innerHTML = snippet.length===0?'<h3>NO DETAILS FROM API</h3>':snippet;
});


refjson.addEventListener('click',async()=> {
    const jsonfilepath = './../db/langs.json'; //this path has to be relative to the index.html file
    const fetched_Data = await fetch(jsonfilepath);
    const json_data = await fetched_Data.json();
    console.log("JSON DATA");
    console.log(json_data);
    let snippet = '';
    for(const i in json_data)
    {
        snippet += '<h6>'+i+' : '+json_data[i]+'</h6>';
    }
    jsondiv.innerHTML = snippet.length===0?'<h3>NO DETAILS FROM JSON FILE</h3>':snippet;
});