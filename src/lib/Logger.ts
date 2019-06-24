import chalk from 'chalk';
import figlet from 'figlet';
import fs from 'fs';

class LoggerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'LoggerError';
    }
}

class Logger {

}