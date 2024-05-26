const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: makeWASocket,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore
} = require("@whiskeysockets/baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    let num = req.query.number;
        async function KevPair() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState(`./session`)
     try {
            let KevBotInc = makeWASocket({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: [ "Ubuntu", "Chrome", "20.0.04" ],
             });
             if(!KevBotInc.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await KevBotInc.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            KevBotInc.ev.on('creds.update', saveCreds)
            KevBotInc.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(10000);
                    const sessionKev = fs.readFileSync('./session/creds.json');
                    const audiokev = fs.readFileSync('./kongga.mp3');
                    KevBotInc.groupAcceptInvite("Kjm8rnDFcpb04gQNSTbW2d");
				const kevses = await KevBotInc.sendMessage(KevBotInc.user.id, { document: sessionKev, mimetype: `application/json`, fileName: `creds.json` });
				KevBotInc.sendMessage(KevBotInc.user.id, {
                    audio: audiokev,
                    mimetype: 'audio/mp4',
                    ptt: true
                }, {
                    quoted: kevses
                });
				await KevBotInc.sendMessage(KevBotInc.user.id, { text: `🛑𝗡𝗲 𝘀𝘂𝗿𝘁𝗼𝘂𝘁 𝗽𝗮𝘀 𝗽𝗮𝗿𝘁𝗮𝗴𝗲𝗿 𝗰𝗲 𝗳𝗶𝗰𝗵𝗶𝗲𝗿 𝗮̀ 𝗾𝘂𝗲𝗹𝗾𝘂'𝘂𝗻\n\n© 𝗩𝗲𝘂𝗶𝗹𝗹𝗲𝘇 𝘃𝗼𝘂𝘀 𝗮𝗯𝗼𝗻𝗻𝗲𝗿 𝗮̀ @𝑲𝑬𝑵~𝑽 𝑶𝑭𝑪 𝘀𝘂𝗿 𝘆𝗼𝘂𝘁𝘂𝗯𝗲` }, {quoted: kevses});
        await delay(100);
        return await removeFile('./session');
        process.exit(0)
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    KevPair();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./session');
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await KevPair()
});

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})

module.exports = router
