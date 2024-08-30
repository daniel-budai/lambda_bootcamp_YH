exports.handler = async (event) => {
  const method = event.requestContext.http.method;
  const response = {
    statusCode: 200,
    body: JSON.stringify(method),
  };
  return response;
};
