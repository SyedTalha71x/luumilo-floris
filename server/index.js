import express from "express";
import cors from "cors";
import { config as configDotenv } from "dotenv";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';
import { networkInterfaces } from 'os';
import connectToDatabase from "./src/Utils/db.js";

import UserRoutes from "./src/Routes/UserRoutes.js";
import BadgeRoutes from './src/Routes/BadgeRoutes.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

configDotenv(); 

connectToDatabase(process.env.MONGODB_URL);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); 

// Serve static files from 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api/test', (req, res) => {
    res.status(200).json({ message: 'Server is running!' });
});

app.use('/api', UserRoutes);
app.use('/api', BadgeRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, '0.0.0.0', () => {
    function getServerIp() {
        const networkInterf = networkInterfaces();
        for (const interfaceName in networkInterf) {
            const interf = networkInterf[interfaceName];
            for (const alias of interf) {
                if (alias.family === 'IPv4' && !alias.internal) {
                    return alias.address;
                }
            }
        }
        return 'Unknown IP';
    }
    console.log(`Server is running on http://${getServerIp()}:${PORT}`);
});
