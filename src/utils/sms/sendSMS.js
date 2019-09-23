import config from '../../config';

const ENV_VAR = config.get(process.env.NODE_ENV);

const { AT_API_KEY, AT_USERNAME } = ENV_VAR;

// Set your app credentials
const credentials = {
  apiKey: AT_API_KEY,
  username: AT_USERNAME,
};

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

async function sendMessage(to, message) {
  const options = {
    to,
    message,
  };

  const result = await sms.send(options);
  return result;
}

export default sendMessage;
