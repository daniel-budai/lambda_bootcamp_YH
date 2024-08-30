exports.handler = async (event) => {
  let message = "";
  if (event.rawPath === "/cat") {
    message = "Mjau!";
  } else if (event.rawPath === "/dog") {
    message = "Woff!";
  } else {
    message = "Unknown route";
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(message),
  };
  return response;
};
