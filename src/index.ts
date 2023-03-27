import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cookieSession from 'cookie-session';
import expressLayouts from 'express-ejs-layouts';
import { billsRoutes } from './routes';
dotenv.config();
const app = express();
import { CONFIG } from './config';

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// this is need for cookie-session to work behind a proxy
app.set('trust proxy', 1);
app.use(
    cookieSession({
        name: 'session',
        secret: process.env.SESSION_SECRET,
    })
);
// VIEW ENGINE
app.use(expressLayouts);
app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');
app.set('views', './src/views');

//  STATIC FILES
app.use(express.static('public'));

// APP ROUTES
app.use('/', billsRoutes);

const PORT = CONFIG.APP.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});
