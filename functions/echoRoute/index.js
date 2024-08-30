exports.handler = async (event) => {
  const path = event.rawPath;
  const response = {
    statusCode: 200,
    body: JSON.stringify(path.substring(1)),
  };
  return response;
};
