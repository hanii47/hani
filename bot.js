const Discord = require('discord-sf');
const client = new Discord.Client;
const c = new Discord.Client;
const c1 = new Discord.Client;
let d = 1
let runme = false
client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => { 
    ihl(client)
    if (msg.author.id === "638200255376130048"){
        if (msg.content === "=hat"){
            runme = true
            msg.react(":white_check_mark:")
            console.log(runme)
        }
        if (msg.content === "=haf"){
            runme = false
            msg.react(":white_check_mark:")
        }
    }
})

function ihl(cc){

    if (runme == true){

        if (d >= 50){
            const channel = cc.channels.get("851632260825481216");
           channel.join().then(connection => {console.log("Successfully connected.")}).catch(e => {console.error(e)});
         d = 0
        }
        d +=1

    }
};

client.login(env.BOT_TOKEN);
