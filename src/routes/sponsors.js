import express from 'express';
import sponsorData from '../data/sponsors';

const sponsorRouter = express.Router();

sponsorRouter.get('/sponsors', (request, response) => {
    response.status(200).json(sponsorData);
});

export default sponsorRouter ;