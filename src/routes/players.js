import express from 'express';
import playerData from '../data/players';

const playerRouter = express.Router();

playerRouter.get('/players', (request, response) => {
    response.status(200).json(playerData);
});

export default playerRouter;