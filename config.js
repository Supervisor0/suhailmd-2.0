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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_33_12_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExLFxuICAgICAgICA1NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMsXG4gICAgICAgIDEsXG4gICAgICAgIDUyLFxuICAgICAgICA4LFxuICAgICAgICAyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwLFxuICAgICAgICA0MixcbiAgICAgICAgODksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MixcbiAgICAgICAgMjUyLFxuICAgICAgICA0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMSxcbiAgICAgICAgNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTM5LFxuICAgICAgICA4MixcbiAgICAgICAgNTYsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzLFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc5LFxuICAgICAgICA0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExLFxuICAgICAgICAzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDgsXG4gICAgICAgIDYwLFxuICAgICAgICA0MixcbiAgICAgICAgMTExLFxuICAgICAgICA3MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDU2LFxuICAgICAgICA4MixcbiAgICAgICAgODAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDU0LFxuICAgICAgICA4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3MixcbiAgICAgICAgMTgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDk5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDk4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDkxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhWaGZ6NytyMDU0V0J5M0QwbnBkWUNyaHU3aFdBSXRNTlUxSnJEVnd3YTg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0NzA2NjUwNjg5OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDYyQ0NCMTcwNzQzQzAyMDZDNDdFRDU1QTkwRTUyN0JcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM1MDI5MTgyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIng1OEZCYzR5Uk5LU3ExcC04c2JfTHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzA4ZmVlYjgtZWM2OC00YzlhLTkxMTItMzdlMjkyNzQ2NzRjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDAsXG4gICAgICAyMzIsXG4gICAgICA1MyxcbiAgICAgIDE5NyxcbiAgICAgIDQ0LFxuICAgICAgMjUzLFxuICAgICAgMjgsXG4gICAgICAyMjAsXG4gICAgICAwLFxuICAgICAgMTExLFxuICAgICAgNTksXG4gICAgICAxNTYsXG4gICAgICA4OSxcbiAgICAgIDE3NixcbiAgICAgIDgwLFxuICAgICAgNTcsXG4gICAgICAyMjAsXG4gICAgICA1MCxcbiAgICAgIDE2NSxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDExNSxcbiAgICAgIDEzMCxcbiAgICAgIDE4NixcbiAgICAgIDEzOSxcbiAgICAgIDE5NyxcbiAgICAgIDIzNCxcbiAgICAgIDE5OCxcbiAgICAgIDExNixcbiAgICAgIDEwNixcbiAgICAgIDcwLFxuICAgICAgMjQsXG4gICAgICAxNDIsXG4gICAgICAxODIsXG4gICAgICAxNSxcbiAgICAgIDE1OCxcbiAgICAgIDEzNSxcbiAgICAgIDE1NSxcbiAgICAgIDEyNCxcbiAgICAgIDIxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSRUYzUFZWS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA2NjUwNjg5OToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNVSEFJTC1YTURcIixcbiAgICBcImxpZFwiOiBcIjE0MzQ4MjU0MjkxNTYwNDoxNkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOLzdrK3dCRUxIanFic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlZDTFlJQUgxK2s1aytUMUE2ZWFFQ2dSNWhLUDVCeHVUdEo2NGhVUnRvVzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNzhRTUl1V25uTXljQU44bGpxUk9EZ1dSM3YxQW5Ed3NvVnR4aVlJaWZwVlVuaTJ2TUZkZ1NnUTF5Vk90cnI4TjVTTjBDQXVhbmRRakFKbU9DWjhBQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiQWdraU16MjYzTFNqOVkweUNvMVU4OGZRODdlQkIySXVtZm1ndHBycmVzWDJ3Rm5aM3dKVDBKZnltN3VPdzJ5UHJodHhHVXFhb2RuU29yTXh5TXF1aWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA2NjUwNjg5OToxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTAyOTE3NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU14TVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTXhNLmpzb24iOiAie1wia2V5RGF0YVwiOlwicFZ0alM1djR5VnI4dTMzSC9RN1Y1TlNJTXgycHM2cVFBeGZ2WGZrU0tEND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0OTUyNTUwMDYsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUwMjkxNjI3MjlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "SUHAIL-XMD",
  packname: process.env.PACK_NAME || "Suhail-XMD",
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
