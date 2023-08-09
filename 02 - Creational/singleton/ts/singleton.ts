class LoggerTS {

    /**
     * In TypeScript, we explicitly define the required attributes.
     * INSTANCE will store an object/instance of the LoggerTS class,
     * we will use it to know if we need to create a new instance or not.
     * In this case, INSTANCE is:
     * - PRIVATE: it can only be accessed inside the LoggerTS class
     * - STATIC: it becomes an attribute of LoggerTS, the class itself,
     *  so that it is shared by all the instances of the class.
     */
    private static instance: LoggerTS;

    /**
     * Logs will store the logs themselves, and it'll also be PRIVATE
     */
    private logs: String[];

    /**
     * By making the constructor PRIVATE, we won't be able to use the usual 'new LoggerTS()' syntax.
     * Let's remember that we will only create an instance ONCE, 
     * so using the 'NEW' keyword every time we want to obtain it wouldn't really make sense.
     * Instead, we will use a different method to get the class instance, with a more appropiate name.
     */
    private constructor () {
        this.logs = [];
    }

    /**
     * The getInstance() method is:
     * PUBLIC: So we can use it from outside the class
     * STATIC: So we can call the function directly from the class
     */
    public static getInstance(): LoggerTS {
        if(!LoggerTS.instance) {
            console.log("Creating LoggerTS...");
            LoggerTS.instance = new LoggerTS();
        }
        return this.instance;
    }

    // The log function stores its input in the logs array 
    log(data: String) {
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

const first_loggerTS = LoggerTS.getInstance();
first_loggerTS.log("FIRST LOG");

const second_loggerTS = LoggerTS.getInstance();
second_loggerTS.log("SECOND LOG");

const third_loggerTS = LoggerTS.getInstance();
third_loggerTS.log("THIRD LOG");
third_loggerTS.show();