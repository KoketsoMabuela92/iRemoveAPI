import { Get, JsonController } from 'routing-controllers';

import { HttpStatusCodesConstants } from '../constants/HttpStatusCodesConstants';
import { Users } from '../models/users';
import { UsersService } from '../services/UsersService';
import { GenericErrorResponse } from './responses/GenericErrorResponse';

@JsonController('/v1/users')
export class UsersController {

    constructor(
        private UsersService: UsersService
    ) {
    }

    @Get()
    public async getCompanies(): Promise<object> {
        let users: Users[]|void = await this.UsersService.find().catch(error => {
            throw new GenericErrorResponse(HttpStatusCodesConstants.HTTP_INTERNAL_SERVER_ERROR,
                false,
                'DATABASE',
                'Error getting companies', error);
        });

        if (!users) {

            users = [];
        }

        return {success: true, users};
    }
}
