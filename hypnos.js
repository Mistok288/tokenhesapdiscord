const express = require('express');
const { Client, RichEmbed } = require('discord.js');
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + "  Token Sese Sokma | HostlandÄ±");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000) 
const Discord = require('discord.js');
const client = new Discord.Client();
const client1 = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();



const data = new Map();



client.login("tokengir")//Hesap Tokeni Token

client.on('ready', ()=>{
client.channels.get('kanalid').join()//ses kanal id
})

client1.login("tokengir")//Hesap Tokeni Token

client1.on('ready', ()=>{
client1.channels.get('kanalid').join()//ses kanal id
})

client2.login("tokengir")//Hesap Tokeni Token

client2.on('ready', ()=>{
client2.channels.get('kanalid').join()//ses kanal id
})

client3.login("tokengir")//Hesap Tokeni Token

client3.on('ready', ()=>{
client3.channels.get('kanalid').join()//ses kanal id
})

client4.login("tokengir")//Hesap Tokeni Token

client4.on('ready', ()=>{
client4.channels.get('kanalid').join()//ses kanal id
})