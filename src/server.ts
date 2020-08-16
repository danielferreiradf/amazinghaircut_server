import express from 'express';

import './database';

const app = express();

app.use(express());

app.listen(5000, () => {
  console.log('Server running!');
});
