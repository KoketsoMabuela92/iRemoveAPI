import {MigrationInterface, QueryRunner, Table, TableForeignKey} from 'typeorm';

export class MoveDetails1535400671962 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        const moveDetails = new Table({
            name: 'move_details',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isNullable: false,
                    isGenerated: true,
                    generationStrategy: 'increment',
                }, {
                    name: 'user_id',
                    type: 'integer',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'transport_provider_id',
                    type: 'integer',
                    isPrimary: false,
                    isNullable: false,
                }, {
                    name: 'token',
                    type: 'varchar',
                    length: '45',
                    isPrimary: false,
                    isNullable: false,
                    isUnique: true,
                }, {
                    name: 'move_type',
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

        await queryRunner.createTable(moveDetails);

        await queryRunner.createForeignKey('move_details', new TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
        }));

        await queryRunner.createForeignKey('move_details', new TableForeignKey({
            columnNames: ['transport_provider_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'transport_providers',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.dropTable('move_details');
    }

}
