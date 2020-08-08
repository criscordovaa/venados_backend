import express from 'express';
import gameData from '../data/games';

const userRouter = express.Router();

userRouter.get('/games', (request, response) => {
    response.status(200).json(gameData);
});

export default userRouter;