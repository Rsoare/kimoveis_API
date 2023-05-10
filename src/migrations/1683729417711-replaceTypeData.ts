import { MigrationInterface, QueryRunner } from "typeorm";

   export class ReplaceTypeData1683729417711 implements MigrationInterface {
      name = 'ReplaceTypeData1683729417711'

      public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT 'false'`);
         await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" SET DEFAULT 'false'`);
         await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "createdAt"`);
         await queryRunner.query(`ALTER TABLE "real_estate" ADD "createdAt" date NOT NULL DEFAULT now()`);
         await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "updatedAt"`);
         await queryRunner.query(`ALTER TABLE "real_estate" ADD "updatedAt" date NOT NULL DEFAULT now()`);
      }

      public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "updatedAt"`);
         await queryRunner.query(`ALTER TABLE "real_estate" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
         await queryRunner.query(`ALTER TABLE "real_estate" DROP COLUMN "createdAt"`);
         await queryRunner.query(`ALTER TABLE "real_estate" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
         await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "sold" SET DEFAULT false`);
         await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "admin" SET DEFAULT false`);
      }

   }
