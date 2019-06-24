import {Client, Message} from 'eris';
import chalk from 'chalk';
import figlet from 'figlet';
import moment from 'moment';
import fs from 'fs';
import NeDB from 'nedb';

import {User, Discord, Social} from './interfaces';
import Logger from './lib/Logger';

let cString = fs.readFileSync('../configuration.json', {encoding: 'utf8'});
let config = JSON.parse(cString);

let log = new Logger({saveToFile: config.saveEventsToFile});

let debugMode: boolean = config.debug || false;

let serverDatabase = new NeDB({
    filename: './datastore/users.store',
    autoload: true
})

const bot = new Client(config.token);

process.on('SIGINT', function() {
    log.info('process', 'CTRL+C was Executed...');
    process.exit(0)
})

log.info('bot', 'Starting Discord Bot...');

bot.on('ready', function() {
    log.success('bot', 'Bot Successfully Started!');
    Object.keys(config).forEach((key: string) => {
        log.info('bot', `${key.toUpperCase()} => ${config[key]}`);
    })
})

bot.on('messageCreate', (message: Message) => {
    if(message.content.startsWith(config.prefix)) {
        let cmdArgs: string[] = message.content.replace(config.prefix, '').split(' ');
        
    }
})