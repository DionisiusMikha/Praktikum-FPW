const Player = require('./model/player')
const Match = require('./model/match')

const getAll = async (req, res) => {
    try {
      const players = await Player.find();
  
      if (!players || players.length === 0) {
        return res.status(400).send("Error");
      }
  
      return res.status(200).send(players);
    } catch (error) {
      console.error('Error fetching players:', error);
      return res.status(400).send(error);
    }
};
  
const getTop3 = async (req, res) => {
    try {
      const result = await Match.aggregate([
        {
          $unwind: '$logs'
        },
        {
          $match: {
            'logs.event': 'goal'
          }
        },
        {
          $group: {
            _id: '$logs.player',
            totalGoals: { $sum: 1 }
          }
        },
        {
          $sort: { totalGoals: -1 }
        },
        {
          $limit: 3
        }
      ]);
  
      const topScorerIds = result.map(item => item._id);
  
      const topScorers = await Player.find({ _id: { $in: topScorerIds } });
  
      const topScorersWithTotalGoal = topScorers.map(player => {
        const playerGoals = result.find(item => item._id.equals(player._id));
        return {
          _id: player._id,
          nationality: player.nationality,
          number: player.number,
          name: player.name,
          totalGoal: playerGoals ? playerGoals.totalGoals : 0
        };
      });
  
      return res.status(200).send(topScorersWithTotalGoal);
    } catch (error) {
      console.error('Error fetching top 3 players:', error);
      return res.status(500).send({ message: 'Internal Server Error' });
    }
};

module.exports = {
    getAll,
    getTop3,
}