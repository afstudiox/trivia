async function getAnswers(token) {
  try {
    const getTokenURL = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const response = await fetch(getTokenURL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

export default getAnswers;
