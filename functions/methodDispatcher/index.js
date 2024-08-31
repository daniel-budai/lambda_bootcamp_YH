exports.handler = async (event) => {
  const method = event.requestContext.http.method;
  let response;

  if (method === "PUT") {
    response = {
      statusCode: 200,
      body: JSON.stringify({ message: "Welcome!" }),
    };
  } else {
    response = {
      statusCode: 405,
      body: JSON.stringify({ message: "Method not allowed." }),
    };
  }

  return response;
};
