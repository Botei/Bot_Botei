module.exports = {
    name: "yardım",
    aliases: ["","yardım"],
    description: "yardım",
    usage: "test",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {
   
   message.channel.send("```o,geç,kapat,sil,``` Müzik çalmak için komutları kullanabilirsiniz...")
    }
}