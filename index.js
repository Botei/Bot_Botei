const Discord = require("discord.js");
const client = new Discord.Client();
const proton = require("proton-io")
const db = require("wio.db")
const ayarlar = require("./ayarlar.json")


const { Player } = require("discord-music-player")
const player = new Player(client,ayarlar.youtubeapi)
client.player = player;



let komutDosya = "./komutlar"
let event = "./eventlar"
let gelistiricler = ["273549268160217108"]
let owner = true;
let defaultCommands = ["ping"]; 



const komutYukle = new proton(client,komutDosya,event,gelistiricler,{owner,defaultCommands})


let botlaraCevapVer = false;
let etiketlePrefixOgren = true; 
let etiketiPrefixOlarakKullan = true;


client.on('message', async (msg) => {

    if(!await db.has("prefix_" + msg.guild.id)) {
        var prefix = "!"
     } else {
        var prefix = await db.fetch("prefix_" + msg.guild.id)
     }

    komutYukle.message(msg,prefix,{botlaraCevapVer,etiketiPrefixOlarakKullan,etiketlePrefixOgren})

})

client.on("message",(message) =>{
    if(message.content.toLowerCase() === "tuna") {
        message.channel.send("Seni Seviyorum")
}

    if(message.content.toLowerCase() === "sea") {
        message.channel.send("Aleyküm Selam")
}

    if(message.content.toLowerCase() === "sa") {
        message.channel.send("Aleyküm Selam")
}

    if(message.content.toLowerCase() === "batu") {
        message.channel.send("kodlamayı bilmiyor bu salak")
}

    if(message.content.toLowerCase() === "ilker") {
        message.channel.send("kızlara yürümeyi birak")
}

    if(message.content.toLowerCase() === "berkay") {
        message.channel.send("neden bu kadar yakişiklısın")
}

    if(message.content.toLowerCase() === "aq") {
        message.channel.send("Küfür etme orospu evladı")
}

    if(message.content.toLowerCase() === "günes") {
        message.channel.send("Konya güzelse sebebi sensin ama konya güzel değil")
}

})


client.login(ayarlar.token)