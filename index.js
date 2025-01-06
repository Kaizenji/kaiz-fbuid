const axios = require('axios');

const getFbUid = async (url) => {
  try {
    const response = await axios.get(`https://kaiz-apis.gleeze.com/api/fbuid?url=${url}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching UID:', error);
    return null;
  }
};

module.exports = getFbUid;
