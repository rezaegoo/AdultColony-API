import { createServer } from 'http';
import expressApp from './dist/app'; // build output
import { VercelRequest, VercelResponse } from '@vercel/node';

const server = createServer(expressApp);

export default function handler(req, res) {
  server.emit('request', req, res);
}
