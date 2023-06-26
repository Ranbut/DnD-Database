import 'reflect-metadata';
import 'express-async-errors';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import { loadEnv, connectDb, disconnectDB } from './config';
import { usersRouter, authenticationRouter, charactersRouter, monstersRouter,
   spellsRouter, bookmarksRouter, historyRouter, equipmentsRouter, magicItemsRouter } from './routers';
import { handleApplicationErrors } from './middlewares';

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req: Request, res: Response) => res.send('OK!'))
  .use('/users', usersRouter)
  .use('/auth', authenticationRouter)
  .use('/char', charactersRouter)
  .use('/monsters', monstersRouter)
  .use('/spells', spellsRouter)
  .use('/equipments', equipmentsRouter)
  .use('/magic-items', magicItemsRouter)
  .use('/bookmarks', bookmarksRouter)
  .use('/history', historyRouter)
  .use(handleApplicationErrors);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
