import express from 'express';
import statisticData from '../data/statistics';

const statisticRouter = express.Router();

statisticRouter.get('/statistics', (request, response) => {
    response.status(200).json(statisticData);
});

export default statisticRouter;