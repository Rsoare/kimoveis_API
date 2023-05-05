import { MigrationInterface, QueryRunner } from "typeorm";

export class ReplaceDateTypeUsers1683322581091 implements MigrationInterface {
    name = 'ReplaceDateTypeUsers1683322581091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" SET DEFAULT 'false'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT 'false'`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "deletedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" SET DEFAULT false`);
    }

}
