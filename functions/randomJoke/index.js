exports.handler = async (event) => {
  const jokes = [
    "Where does bad light end up? - In prism.",
    "Why don't scientists trust atoms? - Because they make up everything!",
    "Why did the scarecrow win an award? - Because he was outstanding in his field!",
    "Why don't skeletons fight each other? - They don't have the guts.",
    "What do you call fake spaghetti? - An impasta!",
  ];
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  const response = {
    statusCode: 200,
    body: JSON.stringify(joke),
  };
  return response;
};
