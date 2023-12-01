const Match = require('./model/match');

const getAll = async (req, res) => {
  try {
    const matches = await Match.find();

    if (!matches || matches.length === 0) {
      return res.status(404).send({ message: 'No matches found.' });
    }

    return res.status(200).send(matches);
  } catch (error) {
    console.error('Error fetching matches:', error);
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

const getLastMatch = async (req, res) => {
  try {
    const lastMatch = await Match.findOne().sort({ matchTime: -1 });

    if (!lastMatch) {
      return res.status(404).send({ message: 'No last match found.' });
    }

    return res.status(200).send(lastMatch);
  } catch (error) {
    console.error('Error fetching last match:', error);
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAll,
  getLastMatch,
};
