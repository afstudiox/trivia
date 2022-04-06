const getAnswersURL = `https://opentdb.com/api.php?amount=5&token=${token}`;

const getAnswers = () => (
  fetch(getAnswersURL)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getAnswers;
