import { createLogger, transports, Logger } from 'winston';

const options = {
  console: {
    handleExceptions: true,
    json: true,
    colorize: true,
  },
};

const logger: Logger = createLogger({
  transports: [
    new transports.Console(options.console),
  ],
});

export { logger, Logger };
