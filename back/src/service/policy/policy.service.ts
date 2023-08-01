import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PolicyRepository } from '../../domain/policy/policy.repository';
import { PolicyEntity, PolicyType } from '../../domain/policy/policy.entity';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '../../generated/i18n.generated';
import { PolicyDTO, PolicyVersion } from '../../model/policy.dto';
import { Pagination, PaginationOptions } from '../page.service.interface';

@Injectable()
export class PolicyService {
  constructor(
    private readonly policyRepository: PolicyRepository,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  async getLatest(type: PolicyType, countryCode: string): Promise<PolicyDTO> {
    const policy = await this.policyRepository.getLatest(type, countryCode);
    if (policy) {
      console.log(policy, 'policy');
      return new PolicyDTO(policy);
    }
    throw new HttpException('{}', HttpStatus.NO_CONTENT);
  }

  async get(id: number): Promise<PolicyDTO> {
    const policy = await this.policyRepository.findOneBy({ id });
    if (policy) {
      console.log(policy, 'policy');
      return new PolicyDTO(policy);
    }
    throw new HttpException('{}', HttpStatus.NO_CONTENT);
  }

  async page(
    options: PaginationOptions,
    type: PolicyType,
    countryCode: string,
  ): Promise<Pagination<PolicyDTO>> {
    const pagination = await this.policyRepository.page(
      options,
      type,
      countryCode,
    );
    return {
      metadata: pagination.metadata,
      items: pagination.items.map((entity) => new PolicyDTO(entity)),
    };
  }

  async versions(type: PolicyType): Promise<PolicyVersion[]> {
    const list = await this.policyRepository.find({
      where: {
        hide: false,
        type,
      },
      order: {
        effectiveDate: 'DESC',
      },
    });
    return list.map((entity) => new PolicyVersion(entity));
  }

  async initCreate(): Promise<boolean> {
    const page = await this.page(
      { size: 10, page: 1, lang: 'ko' },
      PolicyType.TERMS,
      'KR',
    );

    if (page.metadata.total === 0) {
      for (let i = 0; i < 200; i++) {
        this.create(
          i % 2 === 1 ? PolicyType.TERMS : PolicyType.PRIVACY_POLICY,
          i + '안녕하세요!',
          i,
        );
      }
      return true;
    }
    return false;
  }

  async create(
    type: PolicyType,
    content: string,
    index: number,
  ): Promise<PolicyEntity> {
    const policy = new PolicyEntity();
    policy.type = type;
    policy.content = `<p>${content}</p>`;
    const effectiveDate = new Date(); // 현재 시간
    effectiveDate.setDate(effectiveDate.getDate() + index); // 7일 추가
    policy.effectiveDate = effectiveDate;
    return await this.policyRepository.save(policy);
  }
}
