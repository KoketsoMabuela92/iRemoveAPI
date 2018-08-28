import {MigrationInterface, QueryRunner, Table, TableForeignKey} from 'typeorm';

export class Vehicles1535401902015 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        const vehicle = new Table({
            name: 'vehicles',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment',
                }, {
                    name: 'transport_provider_id',
                    type: 'integer',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'size',
                    type: 'varchar',
                    length: '45',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'colour',
                    type: 'varchar',
                    length: '45',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'registration_number',
                    type: 'varchar',
                    length: '45',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'status',
                    type: 'varchar',
                    length: '45',
                    isPrimary: false,
                    isNullable: false,
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

        await queryRunner.createTable(vehicle);

        await queryRunner.createForeignKey('vehicles', new TableForeignKey({
            columnNames: ['transport_provider_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'transport_providers',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.dropTable('vehicles');
    }

}
