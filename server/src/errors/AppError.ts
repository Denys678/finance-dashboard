type AppErrorConstructorProps = {
    message: string,
    statusCode: number,
}

export class AppError extends Error {
    public readonly statusCode: number;
    
    constructor({message, statusCode}: AppErrorConstructorProps){
        super(message);

        this.statusCode = statusCode;
        this.name = "AppError";
    }
}