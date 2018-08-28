import {MigrationInterface, QueryRunner, Table} from 'typeorm';

export class TransportProviders1535399373030 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        const transportProviders = new Table({
            name: 'transport_providers',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment',
                }, {
                    name: 'company_name',
                    type: 'varchar',
                    length: '255',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'contact_person_first_name',
                    type: 'varchar',
                    length: '45',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'contact_person_last_name',
                    type: 'varchar',
                    length: '45',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'residential_address',
                    type: 'varchar',
                    length: '255',
                    isPrimary: false,
                    isNullable: false,
                } , {
                    name: 'active',
                    type: 'int',
                    unsigned: true,
                    length: '4',
                    isPrimary: false,
                    isNullable: false,
                    default: 1,
                }, {
                    name: 'createdDate',
                    type: 'timestamp',
                    isPrimary: false,
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP',
                }, {
                    name: 'updatedDate',
                    type: 'timestamp',
                    isPrimary: false,
                    isNullable: false,
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        });

        await queryRunner.createTable(transportProviders);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.dropTable('transport_providers');
    }

}
