import { MigrationInterface, QueryRunner } from "typeorm";

export class ReplaceColumnValue1683296150026 implements MigrationInterface {
    name = 'ReplaceColumnValue1683296150026'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT 'false'`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" SET DEFAULT 'false'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
    }

}
