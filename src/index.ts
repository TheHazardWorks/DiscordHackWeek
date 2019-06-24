import {Client} from 'eris';
import chalk from 'chalk';
import figlet from 'figlet';
import moment from 'moment';
import fs from 'fs';
import NeDB from 'nedb';

import {User, Discord, Social} from './interfaces';

let cString = fs.readFileSync('../configuration.json', {encoding: 'utf8'});
let config = JSON.parse(cString);

let debugMode = config.debug || false;

let serverDatabase = new NeDB({
    filename: './datastore/users.store',
    autoload: true
})

const bot = new Client(config.token);

