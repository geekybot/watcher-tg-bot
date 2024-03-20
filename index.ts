import express from 'express';
import bodyParser from 'body-parser';
import { handleSwap } from './telegram';
import { parseData } from './helper/parseBody';
const app = express();

app.use(bodyParser.json());


app.post('/swap', async (req, res) => {
    try {
        let transaction = req.body[0];
        let token = await parseData(transaction);
        handleSwap(transaction.description, token);
        res.status(200).send('OK');
    } catch (error) {
        res.status(200).send('Error');
    }
});
const PORT = process.env.PORT || 33249;

app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`%c Webhook receiver listening on port ${PORT}`, "color: red; font-weight: bold;");
});
