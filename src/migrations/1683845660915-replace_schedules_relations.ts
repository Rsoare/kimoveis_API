import { MigrationInterface, QueryRunner } from "typeorm";

export class ReplaceSchedulesRelations1683845660915 implements MigrationInterface {
    name = 'ReplaceSchedulesRelations1683845660915'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

}
