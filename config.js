const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVW4+iSBj9K516mBftEQQETDpZQMQr0twEN/tQQIkoN6FAYeJ/36Dd6c7uzGzvW6WoOnW+7zvn8AOkWVSiJWrA+AfIi6iGGHVL3OQIjIFY7feoAH0QQAzBGBBTcxEvApov8HqCxJFeGe10ZuSnbKDq9ZJwef6YhtKKscoXcOuDvPLiyP8NYCzsStreXHraQLeoVmPabRVPse5qU321ubbaTo3W6XpyehVewK1DhFERpaGcH1CCChgvUaPBqPga/a3my1qjTUfavrHbZsDOZ9Uocy+HRTXQN+aZ5LeLQtUKlBBfo1/NhYDw6PyKR9QhdHaj6WoZanrjXJy6IeS45WVunpsU3r7RL6MwRcE8QCmOcPPlvsPZKBcUjsnt0jSqqCeJW1+kkuQ4qSbya0zzwcahaW2BY/lrxPXZZVUICwuyxkTxDN+e7/bmglVKq7Jty4v3RugbQsKrivWZuFa8a+X0f/rOTdCymHIteSqC6uJBjdusT/yCKby8oCwydgk3YGGPUZ0v9l1hGjdlrZ6Mr7PLoF2owkVvD5Y5Xe+ceLXBmp1n8kp1WDH8oA9xVfyOpW7PakpwF/SAHdpLAhsWUdL5Ah5Odq70tpY1MExZ2g00UxetTcSGKj9b12g7u/pneUQpSmXNXh1LV5aJtRzIS9Lx9uHl5V7RCTXzAIzJWx8UKIxKXEAcZel9j6T6AAa1gfwC4Xt7gcYqRz52CUE0M9vYRfTGPpOKKCkejTUXI2kHg+tAGwylywvog7zIfFSWKJhFJc6KZo3KEoaoBOM/75Pqii5QkmG0iAIwBjzNMgzBsAzP/VF+vxwgLmGef08RBn2wL7JkjcAYFxXqg/t5kWLJISmLEiNJAkEywoiVpsSU56bEkJlMuK7C5PGmGSWoxDDJwZhkaZIZUjxH3P7qgxRd8UM+XdEU2Qf7qCixlVZ5nMHgXVvvH6HvZ1WKjSb1pW6BCjD+tI0wjtKw7AqrUlj4h6hGUlcHGO9hXKJbHwSojnzU4QGbbKC+QrE+P69V7rrLJKdFYde4Q5Y+jsBgSFI0wzzDIQWf6eGQe+Y5mn/2aYbieZYO4IgCXTsezu3u/FJIjknkFS02Q1arUkzobokt09+aoircxfBQACpQ8N5lD/qnKjezE0p/g+uFBFumXC1Yr/gajQxWW+m6wpPX/PQJ96EsMP7xkZZSFnR4Jm+bNCvvQDet7p1/imFMjv6thxQm98vz5ZO5WT59ezI2qvL07cmeT+TNk5d1L7+NpcMMEIZRXIIxkNZtTlZrSdaGDi5oRRG4UJBCAXyM8d2VD9WTznniXeNGY1fXUmERfzqSNWwbj6sS3+ollixpkD0cSip8+QkIGIPz2Q9L4VWu5yFEaT18ZeKdqnOXpLyaVUzHG2PBtEduro0OE410l7tBvGMa5wATIqwljWyvA61xlOmVjJyQbqX6JJ0nnYXf5fT5scSqPdNwY9+YLjZk5eVreunxplox272tYwSPGDuu2M5zl3X90DWrcsVr22m8PvdaSMxDuVV5SbgsrixJnSKGDVwUhY+8uOdV/PafiN6c/BDfPkL32H2by3+N78MGxK3/CeItx38hNTGwR+GQ2/nHXsN5YkXVuznvDUsuGazydKrlsSgchxXteioNbp2/8xjifVYknZfSoMiiAPRBDEssfDj5J+HAcn2QNEKeGxji9wAAguAKwiphwO1vQ5z6UaIIAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "254710772666,254106727593",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





