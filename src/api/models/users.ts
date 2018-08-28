import { IsBoolean, IsNotEmpty, MaxLength } from 'class-validator';
import {
    Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';

@Entity('users')
export class Users {

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty({
        message: 'First name is required.',
    })
    @MaxLength(45, {
        message: 'First name must be shorter than or equal to 45 characters.',
    })
    @Column()
    public first_name: string;

    @IsNotEmpty({
        message: 'Last name is required.',
    })
    @MaxLength(45, {
        message: 'Last name must be shorter than or equal to 45 characters.',
    })
    @Column()
    public last_name: string;

    @IsNotEmpty({
        message: 'msisdn is required.',
    })
    @MaxLength(13, {
        message: 'msisdn must be shorter than or equal to 13 characters.',
    })
    @Column()
    public msisdn: string;

    @IsNotEmpty({
        message: 'username is required.',
    })
    @MaxLength(45, {
        message: 'username must be shorter than or equal to 45 characters.',
    })
    @Column()
    public username: string;

    @IsNotEmpty({
        message: 'password is required.',
    })
    @MaxLength(45, {
        message: 'password must be shorter than or equal to 45 characters.',
    })
    @Column()
    public password: string;

    @IsNotEmpty({
        message: 'residential address is required.',
    })
    @MaxLength(45, {
        message: 'residential address must be shorter than or equal to 45 characters.',
    })
    @Column()
    public residential_address: string;

    @IsBoolean({
        message: 'active requires a boolean value.',
    })
    @Column()
    public active: boolean;

    @CreateDateColumn()
    public createdDate: Date;

    @UpdateDateColumn()
    public updatedDate: Date;
}
