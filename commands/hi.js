

module.exports.run = async (bot, message, args) => {
    return message.reply('You are my pet now. <:secre_pathetic:743119690859020320>');
}

module.exports.config = {
    name: "hello",
    description: "Answers hello",
    usage: ".hello",
    accessableby: "Members",
    aliases: ['h']
}
