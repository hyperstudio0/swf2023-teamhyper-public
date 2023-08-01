/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ReqLogin {
  /**
   * 이메일 주소
   * @example "super@super.com"
   */
  email: string;
  /**
   * 비밀번호
   * @example "super12345!"
   */
  password: string;
}

export interface ResLogin {
  /**
   * access_token
   * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InN1cGVyQHN1cGVyLmNvbSIsInN1YiI6MiwiaWF0IjoxNjg2NDE5NDkwLCJleHAiOjE2ODY0MjMwOTB9.OI7uWv3xwA_EiA_MX8H-g6in7zAWtefKQXjxgrrJE7g"
   */
  access_token: string;
}

export interface AuthedUser {
  /**
   * User ID
   * @example "1"
   */
  userId: number;
  /**
   * 이메일 주소
   * @example "super@super.com"
   */
  email: string;
  /**
   * 권한
   * @example "[USER]"
   */
  role: string[];
}

export interface VerificationEmbed {
  /**
   * 이메일 인증
   * @example "true"
   */
  email: boolean;
  /**
   * 모바일 인증
   * @example "true"
   */
  mobile: boolean;
}

export interface SocialIdEmbed {
  /**
   * 패이스북 ID
   * @example ""
   */
  facebookId?: string;
  /**
   * 패이스북 이름
   * @example ""
   */
  facebookName?: string;
  /**
   * 구글 ID
   * @example ""
   */
  googleId?: string;
  /**
   * 구글 이름
   * @example ""
   */
  googleName?: string;
  /**
   * 카카오 ID
   * @example ""
   */
  kakaoId?: string;
  /**
   * 카카오 이름
   * @example ""
   */
  kakaoName?: string;
  /**
   * Naver ID
   * @example ""
   */
  naverId?: string;
  /**
   * Naver 이름
   * @example ""
   */
  naverName?: string;
  /**
   * 애플 ID
   * @example ""
   */
  appleId?: string;
  /**
   * 애플 이름
   * @example ""
   */
  appleName?: string;
}

export interface TermsAgreeEmbed {
  /**
   * 서비스 이용약관 동의 (필수)
   * @example "true"
   */
  taService: boolean;
  /**
   * 개인정보 수집이용 동의 (필수)
   * @example "true"
   */
  taPrivacy: boolean;
  /**
   * 본인은 만 19세 이상입니다. (선택)
   * @example "false"
   */
  taAdult?: boolean;
  /**
   * 전자금융거래 이용약관 동의 (필수)
   * @example "false"
   */
  taEft?: boolean;
  /**
   * 위치정보서비스 및 위치기반서비스 이용약관 (필수)
   * @example "false"
   */
  taLocation?: boolean;
  /**
   * 마케팅 활용 항목 (이메일, 문자, 앱푸시, 카카오톡) (선택)
   * @example "false"
   */
  taMarketing: boolean;
  /**
   * 문자 발송 수신 동의 (선택)
   * @example "false"
   */
  smsRcv?: boolean;
  /**
   * 이메일 발송 수신 동의 (선택)
   * @example "false"
   */
  emailRcv?: boolean;
  /**
   * 앱푸시 발송 수신 동의 (선택)
   * @example "false"
   */
  pushRcv?: boolean;
  /**
   * 카카오 발송 수신 동의 (선택)
   * @example "false"
   */
  kakaoRcv?: boolean;
}

export interface Profile {
  /**
   * User ID
   * @example "1"
   */
  id: number;
  /**
   * 프로필이미지 URL
   * @example ""
   */
  image: string;
  /**
   * 이메일 주소
   * @example "super@super.com"
   */
  email: string;
  /**
   * 닉네임(별명)
   * @example "별명"
   */
  nickname: string;
  /**
   * 이름
   * @example "길동"
   */
  firstName: string;
  /**
   * 성
   * @example "홍"
   */
  lastName: string;
  /**
   * 성명
   * @example "홍길동"
   */
  fullName: string;
  /**
   * 휴대폰번호
   * @example "01041533582"
   */
  mobile: string;
  /**
   * 권한
   * @example "[USER]"
   */
  authorities: string[];
  /**
   * 인증 정보(모바일, 이메일)
   * @example "인증 정보"
   */
  verification: VerificationEmbed;
  /**
   * 패스워드 보유의 유/무
   * @example "true"
   */
  hasPassword: boolean;
  /**
   * 소셜 로그인 정보
   * @example ""
   */
  socialId: SocialIdEmbed;
  /**
   * 약관 동의 정보
   * @example ""
   */
  termsAgree: TermsAgreeEmbed;
}

export interface ReqFindPwd {
  /**
   * 이메일 주소
   * @example "super@super.com"
   */
  email: string;
}

export interface ResResult {
  /**
   * 결과 성공 여부
   * @example "true"
   */
  result: boolean;
  /**
   * 결과 메시지
   * @example "성공하였습니다./실패하였습니다."
   */
  message: string;
}

export interface KeyMessage {
  /**
   * key
   * @example ""
   */
  key: string;
  /**
   * value
   * @example ""
   */
  message: string;
}

export interface SNSReqBody {
  /**
   * sns 유형
   * @example ""
   */
  snsType?: KeyMessage;
  /**
   * 코드
   * @example ""
   */
  code: string;
  /**
   * 리다이렉트 URI
   * @example ""
   */
  redirectUri: string;
  /**
   * state
   * @example ""
   */
  state?: string;
  /**
   * assess token
   * @example ""
   */
  idToken?: string;
}

export interface SNSResBody {
  /** @example "" */
  status: KeyMessage;
  /** @example "" */
  access_token: string;
  /** @example "" */
  google_access_token: string;
  /** @example "" */
  redirectUri: string;
  /** @example "" */
  snsType: KeyMessage;
  /** @example "" */
  id: string;
  /** @example "" */
  name: string;
  /** @example "" */
  nickname: string;
  /** @example "" */
  email: string;
  /** @example "" */
  image: string;
  /** @example "" */
  verifiedEmail: boolean;
  /** @example "" */
  birth: string;
  /** @example "" */
  result: boolean;
}

export interface GooglePojo {
  /** @example "" */
  id: string;
  /** @example "" */
  email: string;
  /** @example "" */
  verified_email: boolean;
  /** @example "" */
  name: string;
  /** @example "" */
  given_name: string;
  /** @example "" */
  family_name: string;
  /** @example "" */
  link: string;
  /** @example "" */
  picture: string;
  /** @example "" */
  accessToken: string;
}

export interface SNSConnect {
  /**
   * SNS Key
   * @example ""
   */
  key: string;
  /**
   * SNS Key
   * @example ""
   */
  nickname?: string;
  /**
   * SNS Key
   * @example "FACEBOOK,"
   */
  email: string;
  /**
   * SNS Key
   * @example "FACEBOOK,"
   */
  password: string;
}

export interface LocalizedDTO {
  /** 한국어 */
  ko: string;
  /** 영어 */
  en: string;
  /** 중국어 간체 */
  zhCn: string;
  /** 중국어 번체 */
  zhTw: string;
  /** 일본어 */
  ja: string;
}

export interface BoardCategoryDTO {
  /**
   * ID
   * @example ""
   */
  id: number;
  /** 카테고리 명 */
  name: string | LocalizedDTO;
  /**
   * 게시판 유형
   * @example ""
   */
  type: string;
}

export interface BoardDTO {
  /**
   * ID
   * @example ""
   */
  id: number;
  /**
   * 카테고리
   * @example ""
   */
  categories: BoardCategoryDTO[];
  /** 제목 */
  title: string | LocalizedDTO;
  /** 내용 */
  content: string | LocalizedDTO;
  /**
   * 게시판 유형
   * @example ""
   */
  type: string;
  /**
   * 상단 고정
   * @example ""
   */
  top: boolean;
  /**
   * 페이지 뷰
   * @example ""
   */
  pageView: number;
  /**
   * 등록일
   * @format date-time
   * @example ""
   */
  createdTime: string;
  /**
   * 등록한 계정 ID
   * @example ""
   */
  createdBy: number;
  /**
   * 수정시간
   * @format date-time
   * @example ""
   */
  updatedTime: string;
  /**
   * 수정한 계정 ID
   * @example ""
   */
  updatedBy: number;
}

export interface PaginationMetadata {
  /**
   * 현 페이지 데이터 조회 수
   * @example "10"
   */
  itemCount: number;
  /**
   * 데이터 총 수
   * @example "0"
   */
  total: number;
  /**
   * 페이지 사이즈
   * @example "10"
   */
  size: number;
  /**
   * 현재 페이지
   * @example "1"
   */
  currentPage: number;
  /**
   * 페이지 총 수
   * @example "0"
   */
  totalPages: number;
}

export interface BoardPage {
  /** 데이터 */
  items: BoardDTO[];
  /** 페이지 메타 정보 */
  metadata: PaginationMetadata;
}

export interface ReqBoard {
  /** 제목 */
  title: LocalizedDTO;
  /** 내용 */
  content: LocalizedDTO;
  /** 카테고리 ID */
  categoryIds: number[];
}

export interface SettingDTO {
  key: string;
  value: object;
}

export interface BooleanSetting {
  value: boolean;
}

export interface LanguageSetting {
  ko: boolean;
  en: boolean;
  zhCn: boolean;
  zhTw: boolean;
  ja: boolean;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Admin 문서
 * @version 1.0.0
 * @contact
 *
 * Admin 문서를 위한 설명
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @name AppControllerGetHello
   * @request GET:/
   */
  appControllerGetHello = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/`,
      method: "GET",
      ...params,
    });

  i18N = {
    /**
     * No description
     *
     * @name AppControllerI18N
     * @request GET:/i18n
     */
    appControllerI18N: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/i18n`,
        method: "GET",
        ...params,
      }),
  };
  i18N2 = {
    /**
     * No description
     *
     * @name AppControllerI18N2
     * @request GET:/i18n-2
     */
    appControllerI18N2: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/i18n-2`,
        method: "GET",
        ...params,
      }),
  };
  acceptLanguage = {
    /**
     * No description
     *
     * @name AppControllerAcceptLanguage
     * @request GET:/accept-language
     */
    appControllerAcceptLanguage: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/accept-language`,
        method: "GET",
        ...params,
      }),
  };
  api = {
    /**
     * No description
     *
     * @tags 회원
     * @name UserLogin
     * @summary 로그인 정보
     * @request POST:/api/v1/user/login
     */
    userLogin: (data: ReqLogin, params: RequestParams = {}) =>
      this.request<ResLogin, void>({
        path: `/api/v1/user/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 회원
     * @name UserAuthedUser
     * @summary JWT Access_token 확인
     * @request GET:/api/v1/user/authed-user
     * @secure
     */
    userAuthedUser: (params: RequestParams = {}) =>
      this.request<AuthedUser, void>({
        path: `/api/v1/user/authed-user`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 회원
     * @name UserMe
     * @summary 내 정보
     * @request GET:/api/v1/user/me
     * @secure
     */
    userMe: (params: RequestParams = {}) =>
      this.request<Profile, void>({
        path: `/api/v1/user/me`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 회원 찾기
     * @name FindControllerLogin
     * @summary 비밀번호 찾기
     * @request POST:/api/v1/user/find-pwd
     */
    findControllerLogin: (data: ReqFindPwd, params: RequestParams = {}) =>
      this.request<ResResult, void>({
        path: `/api/v1/user/find-pwd`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Social Login (Google)
     * @name GoogleWebLogin
     * @summary 웹용 구글 로그인 연동
     * @request POST:/api/v1/google-login
     */
    googleWebLogin: (data: SNSReqBody, params: RequestParams = {}) =>
      this.request<SNSResBody, any>({
        path: `/api/v1/google-login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Social Login (Google)
     * @name GoogleNativeLogin
     * @summary 웹용 구글 로그인 연동
     * @request POST:/api/v1/google-login/native
     */
    googleNativeLogin: (data: GooglePojo, params: RequestParams = {}) =>
      this.request<SNSResBody, any>({
        path: `/api/v1/google-login/native`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Social Login (Google)
     * @name GoogleConnectKey
     * @summary CONNECT 상태의 회원 연동
     * @request POST:/api/v1/google-login/connect
     */
    googleConnectKey: (data: SNSConnect, params: RequestParams = {}) =>
      this.request<Profile, any>({
        path: `/api/v1/google-login/connect`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Social Login (Google)
     * @name GoogleUpdateConnect
     * @summary 웹용 구글 로그인 연동 (마이페이지 용)
     * @request POST:/api/v1/google-login/update
     * @secure
     */
    googleUpdateConnect: (data: SNSReqBody, params: RequestParams = {}) =>
      this.request<SocialIdEmbed, any>({
        path: `/api/v1/google-login/update`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 게시판
     * @name BoardPage
     * @summary 게시판 paging
     * @request GET:/api/v1/board
     * @secure
     */
    boardPage: (
      query: {
        /**
         * 검색어
         * @example ""
         */
        query?: string;
        /**
         * @format date-time
         * @example "2023-07-26T08:18:55.298Z"
         */
        startTime?: string;
        /**
         * @format date-time
         * @example "2023-07-26T08:18:55.298Z"
         */
        endTime?: string;
        /**
         * 한 페이지에 표시할 레코드의 개수
         * @example 20
         */
        size?: number;
        /**
         * 현재 페이지 번호 (1부터 시작)
         * @example 1
         */
        page?: number;
        /**
         * 게시판 유형
         * @example "NOTICE"
         */
        type: "NOTICE";
        /** 카테고리 */
        categoryIds?: number[];
        /** 순서변경 */
        orderBy?: string;
        /** 숨김 */
        hide?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<BoardPage, any>({
        path: `/api/v1/board`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 게시판
     * @name BoardCreate
     * @summary 게시판 등록
     * @request POST:/api/v1/board
     */
    boardCreate: (data: ReqBoard, params: RequestParams = {}) =>
      this.request<BoardDTO, any>({
        path: `/api/v1/board`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 게시판
     * @name BoardDeleteByIds
     * @summary 게시판 삭제
     * @request DELETE:/api/v1/board
     */
    boardDeleteByIds: (data: number[], params: RequestParams = {}) =>
      this.request<ResResult, any>({
        path: `/api/v1/board`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 게시판
     * @name BoardCategories
     * @summary 게시판 카테고리
     * @request GET:/api/v1/board/categories
     * @secure
     */
    boardCategories: (
      query: {
        /**
         * 게시판 유형
         * @example "NOTICE"
         */
        type: "NOTICE";
      },
      params: RequestParams = {},
    ) =>
      this.request<BoardCategoryDTO[], any>({
        path: `/api/v1/board/categories`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 게시판
     * @name BoardGet
     * @summary 게시판 상세
     * @request GET:/api/v1/board/{id}
     * @secure
     */
    boardGet: (id: number, params: RequestParams = {}) =>
      this.request<BoardDTO, any>({
        path: `/api/v1/board/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 게시판
     * @name BoardDelete
     * @summary 게시판 삭제
     * @request DELETE:/api/v1/board/{id}
     */
    boardDelete: (id: number, params: RequestParams = {}) =>
      this.request<ResResult, any>({
        path: `/api/v1/board/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 설정
     * @name GetSetting
     * @summary 설정 정보 보기
     * @request GET:/api/setting
     * @secure
     */
    getSetting: (params: RequestParams = {}) =>
      this.request<SettingDTO[], void>({
        path: `/api/setting`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 설정
     * @name GetSettingDefaultLang
     * @summary 기본언어 설정 보기
     * @request GET:/api/setting/default-language
     * @secure
     */
    getSettingDefaultLang: (params: RequestParams = {}) =>
      this.request<SettingDTO, void>({
        path: `/api/setting/default-language`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 설정
     * @name GetSettingMultilingual
     * @summary 다국어 설정
     * @request GET:/api/setting/multilingual
     * @secure
     */
    getSettingMultilingual: (params: RequestParams = {}) =>
      this.request<BooleanSetting, void>({
        path: `/api/setting/multilingual`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 설정
     * @name SetSettingMultilingual
     * @summary 다국어 설정
     * @request POST:/api/setting/multilingual
     * @secure
     */
    setSettingMultilingual: (data: BooleanSetting, params: RequestParams = {}) =>
      this.request<BooleanSetting, void>({
        path: `/api/setting/multilingual`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 설정
     * @name GetSettingLanguage
     * @summary 다국어 언어 설정
     * @request GET:/api/setting/language
     * @secure
     */
    getSettingLanguage: (params: RequestParams = {}) =>
      this.request<LanguageSetting, void>({
        path: `/api/setting/language`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags 설정
     * @name SetSettingLanguage
     * @summary 다국어 언어 설정
     * @request POST:/api/setting/language
     * @secure
     */
    setSettingLanguage: (data: LanguageSetting, params: RequestParams = {}) =>
      this.request<LanguageSetting, void>({
        path: `/api/setting/language`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
