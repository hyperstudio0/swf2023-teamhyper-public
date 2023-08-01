import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';
import { SettingRepository } from '../../domain/setting/setting.repository';
import { LanguageSetting, SettingDTO } from '../../model/setting.dto';
import { ResResult } from '../../model/result.dto';
import { MODE, onlyKorean } from '../../domain/setting/setting.entity';
import * as process from 'process';
@Injectable()
export class SettingService {
  constructor(
    private readonly settingRepository: SettingRepository,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  async hasMode(key: string): Promise<boolean> {
    return await this.settingRepository.exist({
      where: {
        key,
      },
    });
  }

  /**
   * 다국어 - 모드 설정
   */
  async setMultilingual(
    value: boolean,
    modifierId: number,
  ): Promise<ResResult> {
    const hasValue = await this.hasMode(MODE.MULTILINGUAL);
    try {
      if (hasValue) {
        const setting = await this.settingRepository.findOne({
          select: ['id'],
          where: {
            key: MODE.MULTILINGUAL,
          },
        });
        await this.settingRepository.update(setting.id, {
          value: value,
          updatedBy: modifierId,
        });
        return new ResResult(true);
      } else {
        await this.settingRepository.save({
          key: MODE.MULTILINGUAL,
          value,
          createdBy: modifierId,
          updatedBy: modifierId,
        });
        return new ResResult(true);
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * 다국어 - 모드 보기
   */
  async getMultilingual(modifierId: number): Promise<boolean> {
    const hasValue = await this.hasMode(MODE.MULTILINGUAL);
    try {
      if (hasValue) {
        const setting = await this.settingRepository.findOneBy({
          key: MODE.MULTILINGUAL,
        });
        if (setting && setting.value) {
          return setting.value as boolean;
        }
      }
      this.setMultilingual(false, modifierId);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
    return false;
  }

  /**
   * 다국어 - 언어별 설정
   */
  async setLanguage(
    value: LanguageSetting,
    modifierId: number,
  ): Promise<ResResult> {
    const hasValue = await this.hasMode(MODE.LANGUAGE);
    try {
      if (hasValue) {
        const setting = await this.settingRepository.findOne({
          select: ['id'],
          where: {
            key: MODE.LANGUAGE,
          },
        });
        await this.settingRepository.update(setting.id, {
          value: value,
          updatedBy: modifierId,
        });
        return new ResResult(true);
      } else {
        await this.settingRepository.save({
          key: MODE.LANGUAGE,
          value,
          createdBy: modifierId,
          updatedBy: modifierId,
        });
        return new ResResult(true);
      }
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * 다국어 - 언어별 설정 보기
   */
  async getLanguage(modifierId: number): Promise<LanguageSetting> {
    try {
      const hasValue = await this.hasMode(MODE.LANGUAGE);
      if (hasValue) {
        const languageSetting = await this.settingRepository.findOneBy({
          key: MODE.LANGUAGE,
        });
        if (languageSetting && languageSetting.value) {
          return languageSetting.value as LanguageSetting;
        }
      }
      this.setLanguage(onlyKorean, modifierId);
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.BAD_REQUEST);
    }
    return onlyKorean;
  }

  /**
   * 전체 설정 한번에 보기
   */
  async getAll(modifierId: number): Promise<SettingDTO[]> {
    const result: SettingDTO[] = [];
    result.push(
      new SettingDTO(MODE.MULTILINGUAL, await this.getMultilingual(modifierId)),
    );
    result.push(
      new SettingDTO(MODE.LANGUAGE, await this.getLanguage(modifierId)),
    );
    result.push(
      new SettingDTO(MODE.DEFAULT_LANGUAGE, process.env.DEFAULT_LANG),
    );
    return result;
  }
}
