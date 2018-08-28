import { EntityRepository, Repository } from 'typeorm';
import {Users} from '../models/users';
@EntityRepository(Users)
export class UsersRepository extends Repository<Users>  {}
