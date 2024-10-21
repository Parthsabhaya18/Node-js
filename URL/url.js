let url1="https://www.google.com/search?q=sony&rlz=1C1ONGR_enIN1111IN1111&oq=sony&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiPAjIHCAIQABiPAtIBCDEyOTFqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8"

let url2="http://localhost:3000/about?userid=1&age=23"
const url=require('url');
let urldata=url.parse(url2,true)
console.log(urldata);

console.log(urldata.hostname);
console.log(urldata.port);
console.log(urldata.query);
console.log(urldata.query.userdata);



