import express from 'express';
import cors from 'cors';
import { saveResults } from './utils/saveResults';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.get('/', (_, res) => res.json({ message: 'server running...' }));
app.post('/save', (req, res) => {
  const { result, testName } = req.body;

  console.log('Saving results of test:', testName);
  console.table(result);
  try {
    saveResults(testName, result);

    res.json({ status: 'ok' });
  } catch (e) {
    res.status(403).json({
      message: 'Error saving results',
      error: e,
    });
  }
});

app.listen(process.env.PORT || 8008);
