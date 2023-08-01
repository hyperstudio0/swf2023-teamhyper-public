import { Column } from 'typeorm';

export class DormancyMeta {
  @Column({ nullable: true, default: false, comment: '휴면 여부' })
  dormancy: boolean;

  @Column({ nullable: true, comment: '휴면된 시간' })
  dormancyTime: Date;

  @Column({ nullable: true, comment: '최근 로그인 시간' })
  lastLoginTime: Date;
}
