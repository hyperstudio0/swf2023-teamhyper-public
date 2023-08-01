import { ApiProperty } from '@nestjs/swagger';

export class LanguageSetting {
  @ApiProperty()
  ko: boolean;
  @ApiProperty()
  en: boolean;
  @ApiProperty()
  zhCn: boolean;
  @ApiProperty()
  zhTw: boolean;
  @ApiProperty()
  ja: boolean;
}

export class BooleanSetting {
  constructor(value: boolean) {
    this.value = value;
  }

  @ApiProperty()
  value: boolean;
}

export class SettingDTO {
  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }

  @ApiProperty()
  key: string;
  @ApiProperty()
  value: any;
}
