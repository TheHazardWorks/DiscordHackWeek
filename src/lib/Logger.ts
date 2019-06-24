import chalk from 'chalk';
import fs from 'fs';

interface Colors { [key: string]: any }

class LoggerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'LoggerError';
    }
}

class Logger {
    saveToFile: boolean;
    file: any; // Not worried about that this moment...
    colors: Colors;
    constructor(saveToFile: boolean) {
        this.saveToFile = (!saveToFile) ? false : saveToFile;
        this.colors = {
            'error': chalk.red,
            'warning': chalk.yellow,
            'success': chalk.green,
            'info': chalk.gray,
            'debug': chalk.magenta,
            'message': chalk.white,
        }
        if(this.saveToFile) {
            try {
                this.file = fs.createWriteStream('./event.log', {
                    flags: 'a'
                })
            } catch(e) {
                throw new LoggerError(`Cannot save logs to file: ${e}`);
            }
        }
    }
    private postMessage(type: string, name: string, message: string) {
        let posting: string = ;
        console.log(`[${this.colors[type](name.toUpperCase())}] ${message}`);
        if(this.saveToFile == true) {
            this.file.write(`[${type.toUpperCase()}][${name.toUpperCase()}] ${message}\n`);
        }
    }
    warn(name: string, message: string) {
        this.postMessage('warning', name, message);
    }
    warning(name: string, message: string) {
        this.postMessage('warning', name, message);
    }
    success(name: string, message: string) {
        this.postMessage('success', name, message);
    }
    info(name: string, message: string) {
        this.postMessage('info', name, message);
    }
    log(name: string, message: string) {
        this.postMessage('info', name, message);
    }
    error(name: string, message: string) {
        this.postMessage('error', name, message);
    }
    debug(name: string, message: string) {
        this.postMessage('debug', name, message);
    }
}
export = Logger;