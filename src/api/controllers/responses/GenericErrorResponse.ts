import { HttpError } from 'routing-controllers';

export class GenericErrorResponse extends HttpError {
    private errorMessages;

    constructor(public httpCode: number, private success: boolean,
                private errorCode: string, errorMessage: string, private errorLog?: string) {
        super(httpCode);
        this.errorMessages = [errorMessage];
    }

    public toJSON(): object {
        return {
            success: this.success,
            httpCode: this.httpCode,
            errorCode: this.errorCode,
            errorMessages: this.errorMessages,
            errorLog: this.errorLog,
        };
    }
}
