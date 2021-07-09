import express, { Express } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
// Routes
import todoRoutes from './routes';
// Config
import config from './config';

const app: Express = express();

// const PORT: string | number = process.env.PORT || 4000;

app.use(cors);
app.use(todoRoutes);

const uri: string = `mongodb://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

mongoose
  .connect(uri, options)
  .then(() => app.listen(config.port, () => console.log(`Server running on http://localhost:${config.port}`)))
  .catch((error) => {
    throw error;
  });
