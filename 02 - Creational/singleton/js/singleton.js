class Logger {

    /**
     * Here, the Singleton Design Pattern is exemplified with a Logger class.
     * Naturally, if we were interested in logging our application or project,
     * we would have many different files from various places in our project
     * sending info to a Logger Object. This Logger should always be THE SAME Object,
     * the only instance of the Logger class. We can ensure this with a Singleton.
     */ 

    constructor() {
        if (Logger.instance) {
            console.log("Logger already exists");
            return Logger.instance;
        }
        console.log(("Creating Logger..."));

        this.logs = [];
        Logger.instance = this;
    }

    // The log function stores its input in the logs array 
    log(data) {
        console.log("Logging: " + data);
        this.logs.push(data);
    }

    // The size function returns the current size of the logs array
    size() {
        return this.logs.length;
    }

    // The show function prints all logs into the console
    show() {
        this.logs.forEach(log => console.log(log))
    }
}

// Let's say we call the Logger on some file from our project:
let the_logger = new Logger();
the_logger.log('FIRST LOG');

// And then, on a different file, we also want to use the Logger:
let another_logger = new Logger();
another_logger.log('SECOND LOG');

//Then, the second logger can check the amount of logs a:
console.log("LOG COUNT: " + another_logger.size());
another_logger.show();

/**
 * This second file had nothing to do with the previous one,
 * but it can access the logs they generated because the Logger object
 * is always the same, thanks to the Singleton Design Pattern.
 */