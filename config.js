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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_49_12_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUzLFxuICAgICAgICA4MixcbiAgICAgICAgMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDQ3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg4LFxuICAgICAgICA3NixcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDgyLFxuICAgICAgICA4MixcbiAgICAgICAgMjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUzLFxuICAgICAgICA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDYyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgNSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTExLFxuICAgICAgICA3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNixcbiAgICAgICAgODcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMixcbiAgICAgICAgMTAzLFxuICAgICAgICA2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDkzLFxuICAgICAgICA0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY2LFxuICAgICAgICA1NSxcbiAgICAgICAgMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDkwLFxuICAgICAgICA2MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MixcbiAgICAgICAgODYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlFWnBjZmVVYnIvR21JbWxueDZ5M2pFOVRQcXl2VWxVUnBJQVFkMXN2QzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjdqOFVzWU1XU2RXcURweC1fQ1JwV0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjQ2YjEzOTQtYmFhYS00YWQzLWE3MTAtZjYwMTI1OTIxMGYzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgNTQsXG4gICAgICA2MCxcbiAgICAgIDU2LFxuICAgICAgMTY4LFxuICAgICAgMjI4LFxuICAgICAgMjUxLFxuICAgICAgMjgsXG4gICAgICAxNzYsXG4gICAgICA5OSxcbiAgICAgIDIwMixcbiAgICAgIDI1NCxcbiAgICAgIDIyOCxcbiAgICAgIDE2NCxcbiAgICAgIDI1MSxcbiAgICAgIDIyMyxcbiAgICAgIDI0MSxcbiAgICAgIDE0NixcbiAgICAgIDIyNyxcbiAgICAgIDExOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjAsXG4gICAgICAxODAsXG4gICAgICA4OCxcbiAgICAgIDE4NixcbiAgICAgIDM1LFxuICAgICAgMjEzLFxuICAgICAgMjAyLFxuICAgICAgMTI3LFxuICAgICAgOTMsXG4gICAgICAxNTUsXG4gICAgICAyNSxcbiAgICAgIDExMyxcbiAgICAgIDMwLFxuICAgICAgNTEsXG4gICAgICA1NixcbiAgICAgIDg2LFxuICAgICAgODksXG4gICAgICAyMzcsXG4gICAgICAxNTQsXG4gICAgICA0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWRE1MRFBWOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA0Mjc0NjczOToyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE5MjU0NDA2MjY2OTY4OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tUMGlRVVFnb1NQdXdZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaG16cHpHR2UrZHVyejEyQWdaQWlDV3l4bUtRRmpNWk9CK1hEalFNR2lXZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5MjZyTldDYlNFQk1PdzkxMk1nZzlmekZoWXlseG1NeVhYL1hkZmZoYVhadHR0aFBsK2h3Y1plZ3BXTFhiVE5OSUNVZUF3TnlabENreTM3ZEFlQWREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtZUpVMStjWHZCazlHSnVhdXhLdERpR1ZRMWw4TDBDeDZBL0thMWVDSDlFZHlJekJOcndmbmMxcHNIYnZLa3VHSHBSRTBCNDVSYUViQ2pnVCttYUFEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDQyNzQ2NzM5OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDU5MDk4NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "¥BELVIN¥",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "SMD",
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
