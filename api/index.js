import { toNodeListener, fromWebHandler } from 'h3-v2';
import server from '../dist/server/server.js';

export default toNodeListener(fromWebHandler(server.fetch));
