import express from 'express';
import notificationData from '../data/notifications';

const notificationRouter = express.Router();

notificationRouter.get('/notifications', (request, response) => {
    response.status(200).json(notificationData);
});

export default notificationRouter;