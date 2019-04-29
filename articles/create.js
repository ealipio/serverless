'use strict';

module.exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);

  if(data.text && typeof data.text !== 'string') {
    console.log('validation Error');
    callback(new Error('Body didnt contain a text property'));
    return 
  }
  console.log(data.text);
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Created article'
    }),
  }

  callback(null, response);
};
