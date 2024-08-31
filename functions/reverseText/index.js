exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const reversedText = body.text.split("").reverse().join("");
  const response = {
    statusCode: 200,
    body: JSON.stringify(reversedText),
  };
  return response;
};
