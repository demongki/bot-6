var {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
var qrcode = require('qrcode-terminal')
var figlet = require('figlet')
var fs = require('fs')
var colors = require('colors')
var welcome = require('./ZAKKY5/group')

var { color, bgcolor, biocolor, KirLog } = require("./ZAKKY1/color");
var { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require("./ZAKKY1/functions")

require('./zakky.js')
nocache('./zakky.js', module => console.log(color(`'${module}' Telah berubah!`)))

var starts = async (Zakky = new WAConnection()) => {
                  Zakky.logger.level = 'warn'
                  Zakky.version = [2, 2143, 3]
                  Zakky.browserDescription = [ 'ZakBotz', 'Chrome', '3.0' ]
                  
                  fs.existsSync(`./zakbotz.json`) && Zakky.loadAuthInfo(`./zakbotz.json`)
                  Zakky.on('connecting', () => {
		          console.log(color('[ LOADING ]', 'white'), color('Loading Bang Sabar Napa.......', 'magenta'));
	              })
                  Zakky.on('open', () => {
		          console.log(color('[ SUCCES ]', 'white'), color('Bot Online', 'magenta'));
	              })
                  await Zakky.connect({
		          timeoutMs: 30 * 1000
	              })
	console.log(color('','aqua'), color(`||================================================||`, "red"))
                                console.log(color(' ||> ','yellow'), color(`Welcome To ZakBotz`, 'yellow'))
                                console.log(color(' ||> ','yellow'), color(`Base BloodSword`, 'yellow'))
                                console.log(color(' ||> ','yellow'), color(`Follow IG : demo_ngki`, 'yellow'))
                                console.log(color(' ||> ','yellow'), color(`Donasi`, 'yellow'))
                                console.log(color(' ||> ','yellow'), color(`DANA : 0881036690566`, 'yellow'))
                                console.log(color(' ||> ','yellow'), color(`OVO  : 0881036690566`, 'yellow'))
                                console.log(color('','aqua'), color(`||================================================||`, "red"))
                                teks = `https://chat.whatsapp.com/Kepo`
                                Zakky.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
                                console.log(color('|Follow IG : demo_ngki|', 'yellow'), color('Join Group,Tpi Boong', 'cyan'))
                                Zakky.sendMessage(`62881036690566@s.whatsapp.net`, `Hai Owner 👋\nBot Telah Sukses Tersambung Pada Nomor Ini\n*_SUCCES: ADDED FOR SCRIPT BOT INFO BOT SUDAH DI KIRIM KE CREATOR ZAKKY_*\n*[TERIMAKASIH]*`, MessageType.extendedText, {sendEphemeral: true, })
                                Zakky.sendMessage(`62881036690566@s.whatsapp.net`, `*---DATABASE BOT---*\n\n•NAMA BOT : ZakBotz\n•OWNER BOT : Zakky\n•NOMER OWNER : wa.me/62881036690566\n\n*[Bot Sudah TerConnect Ke WhatsApp Kak !! Makasih Kak Zakky Scriptnyaa Moga Berkembang Terus]*`, MessageType.extendedText, {sendEphemeral: true, })
fs.writeFileSync(`./zakbotz.json`, JSON.stringify(Zakky.base64EncodedAuthInfo(), null, '\t'))
start('2',colors.bold.gray('\n✇ BloodSword'));
        Zakky.on('group-participants-update', async (anu) => {
        await welcome(Zakky, anu)
        })
        Zakky.on('chat-update', async (message) => {
        require('./zakky.js')(Zakky, message)
        })
        }
        
function nocache(module, cb = () => { }) {
console.log(color(`Module ${module} Zakky Selalu Mengawasi`))
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()