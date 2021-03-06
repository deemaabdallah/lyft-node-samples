require('dotenv').config();

var CONFIG_PORT = parseInt((process.env.CONFIG_PORT || 3000), 10);
if (isNaN(CONFIG_PORT)) {
  console.log('invalid port:', CONFIG_PORT);
  process.exit(1);
}

module.exports = {
  LYFT_API_URI: process.env.CONFIG_LYFT_API_URI || 'https://api.lyft.com',
  LYFT_WWW_URI: process.env.CONFIG_LYFT_WWW_URI || 'https://www.lyft.com',
  LYFT_CLIENT_ID: process.env.CONFIG_LYFT_CLIENT_ID || null,
  LYFT_CLIENT_SECRET: process.env.CONFIG_LYFT_CLIENT_SECRET || null,
  PORT: CONFIG_PORT
};
