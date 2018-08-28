import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Users } from '../models/users';
import { UsersRepository } from '../repositories/UsersRepository';
import { events } from '../subscribers/events';

@Service()
export class UsersService {

    constructor(
        @OrmRepository() private UsersRepository: UsersRepository,
        @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<Users[]> {
        this.log.info('Find all Users');
        return this.UsersRepository.find();
    }

    public findOne(id: number): Promise<Users | undefined> {
        this.log.info('Find a single user');
        return this.UsersRepository.findOne({ id });
    }

    public async create(user: Users): Promise<Users> {
        this.log.info('Create a new user => ', user.toString());
        const newUser = await this.UsersRepository.save(user);
        this.eventDispatcher.dispatch(events.User.created, newUser);
        return newUser;
    }

    public update(id: number, user: Users): Promise<Users> {
        this.log.info('Update a user');
        user.id = id;
        return this.UsersRepository.save(user);
    }

    public async delete(id: number): Promise<void> {
        this.log.info('Delete a user');
        await this.UsersRepository.delete(id);
        return;
    }
}
