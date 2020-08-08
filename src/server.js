import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import {gameRoute, playerRoute, statisticRoute, notificationRoute, sponsorRoute} from './routes';
import notFound from './data/404';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api", gameRoute);
app.use("/api", playerRoute);
app.use("/api", statisticRoute);
app.use("/api", notificationRoute);
app.use("/api", sponsorRoute);

app.use((req, res, next) => {
    next({
        status: 404
    });
});

app.use((err, req, res, next) => {
    if (err.status === 404) {
        return res.status(404).json(notFound);
    }

    if (err.status === 500) {
        return res.status(500).render('500');
    }

    next();
});

app.listen(process.env.PORT, () => {
    console.log(`Application listening on port ${process.env.PORT}`)
});