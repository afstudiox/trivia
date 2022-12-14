const getTokenURL = 'https://opentdb.com/api_token.php?command=request';

const getToken = async () => {
  const response = await fetch(getTokenURL);
  const data = await response.json();
  return data;
};

export default getToken;
