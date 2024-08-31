exports.handler = async (event) => {
  const length = event.queryStringParameters.len || 8;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify(password),
  };
  return response;
};
