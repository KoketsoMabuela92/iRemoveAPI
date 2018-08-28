import { ValidationError } from 'class-validator/validation/ValidationError';
import { HttpError } from 'routing-controllers';

import { HttpStatusCodesConstants } from '../../constants/HttpStatusCodesConstants';
import { ErrorCodeConstants } from '../../constants/ErrorCodeConstants';

export class ValidationErrorResponse extends HttpError  {

    private success: boolean;
    private errorCode: string;
    private errorMessages: string[];

    constructor(validationErrors: ValidationError[]) {
        super(HttpStatusCodesConstants.HTTP_BAD_REQUEST);
        const errors: string[] = [];
        validationErrors.forEach(validationError => {
            for (const constraints in validationError.constraints) {
                if (validationError.constraints.hasOwnProperty(constraints)) {
                    errors.push(validationError.constraints[constraints]);
                }
            }
        });
        this.success = false;
        this.errorCode = ErrorCodeConstants.FAILED_VALIDATION_ERROR_CODE;
        this.errorMessages = errors;
    }

    public toJSON(): object {
        return {
            success: this.success,
            httpCode: HttpStatusCodesConstants.HTTP_BAD_REQUEST,
            errorCode: this.errorCode,
            errorMessages: this.errorMessages,
        };
    }
}
