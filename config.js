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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_00_12_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI3LFxuICAgICAgICA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDg2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDY4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDk3LFxuICAgICAgICA2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMTU0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU3LFxuICAgICAgICA3OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNzksXG4gICAgICAgIDQyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTcyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMixcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMixcbiAgICAgICAgMTAyLFxuICAgICAgICA2MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiR1pueGtUd1Y5cUQ4bnNPV0sxRWdHZC82cGtNdUtCR0pBSWdzVW5ROTNCRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicVlXSzNrLVFRTEtJbnhtYzBxWmVRZ1wiLFxuICBcInBob25lSWRcIjogXCIyNDE3YzNkMi0zMTllLTRlZmUtODc5Yy03MmFlZTkzMmRiODJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYwLFxuICAgICAgNzAsXG4gICAgICAxMSxcbiAgICAgIDE2NSxcbiAgICAgIDUwLFxuICAgICAgNzUsXG4gICAgICA0MyxcbiAgICAgIDU0LFxuICAgICAgMTgwLFxuICAgICAgNTAsXG4gICAgICAxOTgsXG4gICAgICAxNzcsXG4gICAgICA4NyxcbiAgICAgIDU0LFxuICAgICAgMjEzLFxuICAgICAgNzAsXG4gICAgICA0NSxcbiAgICAgIDE1LFxuICAgICAgMjQ0LFxuICAgICAgMTQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDcyLFxuICAgICAgMjUsXG4gICAgICAyMjUsXG4gICAgICAxOTUsXG4gICAgICA1NyxcbiAgICAgIDEwMixcbiAgICAgIDEwMyxcbiAgICAgIDE4LFxuICAgICAgMjQ1LFxuICAgICAgMTYzLFxuICAgICAgMTMxLFxuICAgICAgMjQ2LFxuICAgICAgMjM2LFxuICAgICAgMTg2LFxuICAgICAgNjMsXG4gICAgICAxNzQsXG4gICAgICAyNDksXG4gICAgICAyMjQsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSjhXTFJHQlpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwNzExNjg2MzY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODIyNzkxNTgzMDQ4Nzg6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJDb21lZHkgQ2x1YiBUdlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091dnErd0NFSW1SN0xvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYVpLSHZmOFRWR0N1R1lSVllNLzljbVVOMk1HNnd5ampIcVJtRGJLN3lGQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyUEQwcFJNYmV2UktweTZOWW1HdDRYYVdvSkxxR2NadlJSb2hCVlpqZjB2KzZoeDc1NFZ2ZlBYYTBwZVNIL0swNno4OXRGWkVDWUFOWWM3Ukc0cjFBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaejRnL3NuUWhaUUxRK015Z2w5SXRYK2FiYUZBNlU1eEQrOHAzYm9uMTdETFhMSGxsOXM4ZjhiLzBrQ2FJWm9lMlZNNWRNY0FSQTdPdWUzWWxKUS9DZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDcxMTY4NjM2OjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQwMTkyMTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMd3dcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx3dy5qc29uIjogIntcImtleURhdGFcIjpcInowSE9YTG9oNjhydFFtNGVKU0JzeURJYmVKN0Z2TGdpemI1ckJuYmZQaUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzY0MDczOTYzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQwMTkyMTYxMjFcIn0iCn0="  // PUT your SESSION_ID 


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
