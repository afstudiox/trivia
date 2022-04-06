const getTokenURL = 'https://opentdb.com/api_token.php?command=request';

const getToken = async () => {
  const response = await fetch(getTokenURL);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
};

export default getToken;
