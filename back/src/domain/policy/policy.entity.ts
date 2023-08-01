import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';

export enum PolicyType {
  TERMS = 'TERMS', // 이용약관
  PRIVACY_POLICY = 'PRIVACY_POLICY',
  MARKETING = 'MARKETING',
  LEAVE = 'LEAVE',
  LOCATION = 'LOCATION',
  CONTACT = 'CONTACT',
  ADULT = 'ADULT',
}

export function getTextByType(
  type: PolicyType,
  i18n: I18nService<I18nTranslations>,
  lang: string,
) {
  return i18n.translate(`policy.${type}`, { lang });
}

@Entity({
  name: 'Policy',
  synchronize: true,
  orderBy: {
    id: 'DESC',
    createdTime: 'DESC',
  },
})
export class PolicyEntity extends AbstractEntity {
  @Column({
    type: 'enum',
    enum: PolicyType,
    default: PolicyType.TERMS,
  })
  type: PolicyType;

  @Column({ type: 'longtext' })
  content: string;

  @Column()
  effectiveDate: Date;

  @Column({ length: 2, default: 'KR' })
  countryCode: string;
}
