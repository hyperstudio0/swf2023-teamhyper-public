import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';
import { SettingEntity } from './setting.entity';

@Injectable()
export class SettingRepository extends Repository<SettingEntity> {
  constructor(
    private dataSource: DataSource,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {
    super(SettingEntity, dataSource.createEntityManager());
  }
}
