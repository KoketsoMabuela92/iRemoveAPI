import {IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator';

export class UserCreateRequest {

    @IsString()
    @IsNotEmpty()
    @MinLength(3, {
            message: 'first_name must be longer than or equal to 3 characters.',
        })
    @MaxLength(45, {
        message: 'first_name must be shorter than or equal to 45 characters.',
    })
    public first_name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3, {
            message: 'last_name must be longer than or equal to 3 characters.',
        })
    @MaxLength(45, {
        message: 'last_name must be shorter than or equal to 45 characters.',
    })
    public last_name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(11, {
            message: 'msisdn must be equal to 11 characters.',
        })
    @MaxLength(11, {
        message: 'msisdn must be equal to 11 characters.',
    })
    public msisdn: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3, {
        message: 'username must be longer than or equal to 3 characters.',
    })
    @MaxLength(45, {
        message: 'username must be shorter than or equal to 45 characters.',
    })
    public username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3, {
        message: 'password must be longer than or equal to 3 characters.',
    })
    @MaxLength(45, {
        message: 'password must be shorter than or equal to 45 characters.',
    })
    public password: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(10, {
        message: 'residential_address must be longer than or equal to 10 characters.',
    })
    @MaxLength(255, {
        message: 'residential_address must be shorter than or equal to 255 characters.',
    })
    public residential_address: string;
}
