const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_42_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEyLFxuICAgICAgICA3MixcbiAgICAgICAgMzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjExLFxuICAgICAgICA2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICA1MixcbiAgICAgICAgODMsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgODksXG4gICAgICAgIDM4LFxuICAgICAgICA0MCxcbiAgICAgICAgODYsXG4gICAgICAgIDUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkyLFxuICAgICAgICAzNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDk0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMixcbiAgICAgICAgOTksXG4gICAgICAgIDEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgODgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDksXG4gICAgICAgIDk4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDksXG4gICAgICAgIDQyLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjExLFxuICAgICAgICA2NixcbiAgICAgICAgMTExLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTksXG4gICAgICAgIDAsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDUsXG4gICAgICAgIDMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjksXG4gICAgICAgIDMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjksXG4gICAgICAgIDYyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzMsXG4gICAgICAgIDQyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNixcbiAgICAgICAgMjA4LFxuICAgICAgICA5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDY0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0OSxcbiAgICAgICAgODQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOSxcbiAgICAgICAgNzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExOCxcbiAgICAgICAgODAsXG4gICAgICAgIDg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNUNEMEJKTWErc0VDUmNHQm84dGlPSFBRZW9jTk1oZkk5V0U5VUN4amhUND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV05qM2p2YmxUZFN5djE3Rm45aVFvZ1wiLFxuICBcInBob25lSWRcIjogXCI3MWM1MDhiNC1mOTdjLTRiNzgtYTA3MC1kMDk3NjE3MDRjMWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMTUxLFxuICAgICAgMjQyLFxuICAgICAgOTUsXG4gICAgICAzMixcbiAgICAgIDUsXG4gICAgICAxMDMsXG4gICAgICAxOTksXG4gICAgICAxMDIsXG4gICAgICAxMjAsXG4gICAgICAyMTksXG4gICAgICAxMDQsXG4gICAgICAxNjMsXG4gICAgICAxMDUsXG4gICAgICAxMjQsXG4gICAgICAxMSxcbiAgICAgIDI0MSxcbiAgICAgIDczLFxuICAgICAgMTksXG4gICAgICA1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICAxMjYsXG4gICAgICA4MCxcbiAgICAgIDIwMSxcbiAgICAgIDIyMixcbiAgICAgIDEzOCxcbiAgICAgIDExNyxcbiAgICAgIDEsXG4gICAgICAyMCxcbiAgICAgIDIwNSxcbiAgICAgIDc0LFxuICAgICAgMTEsXG4gICAgICAxMzIsXG4gICAgICAyMjQsXG4gICAgICAxOTUsXG4gICAgICA5MixcbiAgICAgIDU2LFxuICAgICAgMTc2LFxuICAgICAgODQsXG4gICAgICAyMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiN1ZETEJZU0dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzY0ODg4ODM6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJtYWhtb29kIGFsa2hhbGVlXCIsXG4gICAgXCJsaWRcIjogXCIxMDU0MDEzNTAxNDUzNTozOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKU0IxN29FRUtHUzc3b0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi90QlI5dnVzMkh4R0o0UjFjYjFKWUtsM1VZd3kvS3RjaldUeVR6OGZyQmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTmtIQldUdU1zN3ljQXJWdHF4b0dMRGRPNFNYVTQwMlZHTXRMZVdaQlZURXhUbXJFQTROcjkrUTFSKzVNZ1gyZlJVK2lUSWMvb2c3NG11RW1SYyt5QWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT0dBa3dpUFNYUjV0c1MyeldyRjhSTzkyeXJmU3NDcFJnbXd4R3Nqd3doRGhHVEV6eWZ5ajJXRVZnNmpwdmNmK2c4QjMySGpCOHJ2RVlVOCtieStIaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzNjQ4ODg4MzozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDA2ODUxNlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
