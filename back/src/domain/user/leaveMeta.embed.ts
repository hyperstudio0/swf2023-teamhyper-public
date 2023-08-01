import { Column } from 'typeorm';

export class LeaveMeta {
  @Column({ default: false, comment: '탈퇴여부' })
  leave: boolean;

  @Column({ nullable: true, comment: '탈퇴이유' })
  leaveReason: string;

  @Column({ nullable: true, comment: '탈퇴 상세 이유' })
  leaveDetailReason: string;

  @Column({ nullable: true, comment: '탈퇴시간' })
  removePrivacyTime: Date;
}
