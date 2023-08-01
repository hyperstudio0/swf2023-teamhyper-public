import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';
import { LanguageSetting } from '../../model/setting.dto';

export enum MODE {
  MULTILINGUAL = 'MULTILINGUAL',
  LANGUAGE = 'LANGUAGE',
  DEFAULT_LANGUAGE = 'DEFAULT_LANGUAGE',
}

export const onlyKorean: LanguageSetting = {
  ko: true,
  en: false,
  zhCn: false,
  zhTw: false,
  ja: false,
};
export const allLanguage: LanguageSetting = {
  ko: true,
  en: true,
  zhCn: true,
  zhTw: true,
  ja: true,
};

@Entity({
  name: 'Setting',
  synchronize: true,
})
export class SettingEntity extends AbstractEntity {
  @Column({ unique: true, length: 50 })
  key: string;

  @Column({ type: 'json' })
  value: string | LanguageSetting | boolean | object;
}
