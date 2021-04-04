const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000) //komutu alıp asıl botunuza atabilirsiniz
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()
  
.setColor("RANDOM")
.setTitle("**  » Ochako Uraraka Bot  **")
.setThumbnail("https://api.creavite.co/out/2f3676bb-dd78-4942-9842-af42259710ec_standard.gif")
.setDescription(`

**• Komutlar**
> [-sex](https://discord.gg/qzHTkhjQgT) → sex gifi atar.
> [-twork](https://discord.gg/qzHTkhjQgT) → twork gifi atar.
> [-daşşak](https://discord.gg/qzHTkhjQgT) → Gif atar.
> [-amınakoduğum](https://discord.gg/qzHTkhjQgT) → *Gif atar.
> [-şakşak](https://discord.gg/qzHTkhjQgT) → Gif atar.

**• Bilgilendirme**

> ⭐ **Discord Js Sürümü : 12.5.0**
> 💪🏻 **Yapımcım : Manyak*#9999**
> 👀 **Sürümüm : 2.0.1**
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['nfsw','nsfw','NFSW'], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'NSFW', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-NSFW'
};
