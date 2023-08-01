import {
  AfterRecover,
  AfterSoftRemove,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { Exclude, Transform } from 'class-transformer';

/**
 * 옵션 값 정리
 *  name?: string:
 * 테이블의 이름을 지정합니다.
 * 명시되지 않으면 네이밍 전략에 따라 엔티티 이름으로부터 테이블 이름이 생성됩니다.
 *
 *
 * orderBy?: OrderByCondition | ((object: any) => OrderByCondition | any):
 * 명시적인 정렬이 지정되지 않았을 때, 이 테이블에 대한 쿼리에 사용되는 기본 정렬을 지정합니다.
 * OrderByCondition 타입이거나 (object: any) => OrderByCondition | any 형태의 함수일 수 있습니다.
 *
 *
 * engine?: string:
 * 테이블의 데이터베이스 엔진 유형을 지정합니다. (예: "InnoDB", "MyISAM" 등)
 * 테이블 생성 시에만 사용되며, 이미 테이블이 생성된 경우에는 엔진 유형이 변경되지 않습니다.
 * 모든 데이터베이스가 이 옵션을 지원하는 것은 아닙니다.
 *
 *
 * database?: string:
 * Mysql 및 SQL Server에서 사용되는 데이터베이스 이름입니다.
 *
 *
 * schema?: string:
 * Postgres 및 SQL Server에서 사용되는 스키마 이름입니다.
 *
 *
 * synchronize?: boolean:
 * 이 엔티티에 대한 스키마 동기화가 활성화되었는지 여부를 나타냅니다.
 * false로 설정하면 스키마 동기화 및 마이그레이션에서 이 엔티티가 무시됩니다.
 * 기본적으로 모든 엔티티에 대해 스키마 동기화가 활성화됩니다.
 *
 *
 * withoutRowid?: boolean:
 * 이 옵션이 'true'로 설정되면 Sqlite의 기본 동작인 'rowid'라는 이름의 정수 기본 키 열을 테이블 생성 시에 자동으로 만들지 않습니다.
 * 자세한 내용은 https://www.sqlite.org/withoutrowid.html을 참조하세요.
 */
@Entity({
  synchronize: false, // 테이블 동기화 비활성화
})
export abstract class AbstractEntity {
  @AfterSoftRemove()
  afterSoftRemove() {
    // this.del = true;
  }
  @AfterRecover()
  afterRecover() {
    // this.del = false;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }) => value && value.getTime())
  @CreateDateColumn({ nullable: true })
  createdTime: Date;

  @Exclude()
  @Column({ default: 0, nullable: true })
  createdBy: number;

  @Exclude()
  @UpdateDateColumn({ nullable: true })
  updatedTime: Date;

  @Exclude()
  @Column({ default: 0, nullable: true })
  updatedBy: number;

  @Exclude()
  @DeleteDateColumn({ nullable: true })
  deletedDate: Date;

  @Exclude()
  @Column({ nullable: true })
  deleteBy: number;

  @Exclude()
  @VersionColumn({ default: 1, nullable: false })
  version: number;

  @Exclude()
  @Column({ default: false, nullable: false })
  hide: boolean;

  // @Exclude()
  // @Column({ default: false, nullable: false, select: false })
  // del: boolean;
}
