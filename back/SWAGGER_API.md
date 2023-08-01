사용법: sta [옵션]

사용법: swagger-typescript-api [옵션]

사용법: swagger-typescript-api generate-templates [옵션]

옵션:

-v, --version                 현재 버전을 출력합니다.

-p, --path <문자열>           Swagger 스키마의 경로/URL입니다.

-o, --output <문자열>         TypeScript API 파일의 출력 경로입니다. (기본값: "./")

-n, --name <문자열>           출력 TypeScript API 파일의 이름입니다. (기본값: "Api.ts")

-t, --templates <문자열>      템플릿이 있는 폴더의 경로입니다.

-d, --default-as-success      "default" 응답 상태 코드도 성공 응답으로 사용합니다.

일부 Swagger 스키마는 기본적으로 "default" 응답 상태 코드를 성공 응답 유형으로 사용합니다. (기본값: false)

-r, --responses               요청 응답에 대한 추가 정보를 생성합니다.

잘못된 응답에 대한 유형도 추가합니다. (기본값: false)

--union-enums                 "enum" 유형을 모두 유니온 유형으로 생성합니다. (T1 | T2 | TN) (기본값: false)

--add-readonly                읽기 전용 속성을 생성합니다. (기본값: false)

--route-types                 API 라우트에 대한 유형 정의를 생성합니다. (기본값: false)

--no-client                   API 클래스를 생성하지 않습니다.

--enum-names-as-values        'x-enumNames'에서 값을 enum 값으로 사용합니다. (키만 사용하지 않음) (기본값: false)

--extract-request-params      요청 파라미터를 데이터 계약으로 추출합니다. (경로 파라미터와 쿼리 파라미터를 하나의 객체로 결합) (기본값: false)

--extract-request-body        요청 본문 유형을 데이터 계약으로 추출합니다. (기본값: false)

--extract-response-body       응답 본문 유형을 데이터 계약으로 추출합니다. (기본값: false)

--extract-response-error      응답 오류 유형을 데이터 계약으로 추출합니다. (기본값: false)

--modular                     HTTP 클라이언트, 데이터 계약 및 라우트를 분리하기 위해 별도의 파일을 생성합니다. (기본값: false)

--js                          선언 파일이 포함된 JS API 모듈을 생성합니다. (기본값: false)

--module-name-index <숫자>    라우트 분리에 사용할 경로 인덱스를 결정합니다. (예: GET:/fruites/getFruit -> index:0 -> moduleName -> fruites) (기본값: 0)

--module-name-first-tag       첫 번째 태그를 기준으로 라우트를 분리합니다. (기본값: false)

--disableStrictSSL            엄격한 SSL을 비활성화합니다. (기본값: false)

--disableProxy                프록시를 비활성화합니다. (기본값: false)

--axios                       Axios HTTP 클라이언트를 생성합니다. (기본값: false)

--unwrap-response-data        응답에서 데이터 항목을 언랩합니다. (기본값: false)

--disable-throw-on-error      응답.ok가 true가 아닐 때 오류를 throw하지 않습니다. (기본값: false)

--single-http-client          HttpClient 인스턴스를 Api 생성자에 전달할 수 있는 기능을 제공합니다. (기본값: false)

--silent                      콘솔에 오류만 출력합니다. (기본값: false)

--default-response <유형>     빈 응답 스키마에 대한 기본 유형입니다. (기본값: "void")

--type-prefix <문자열>        데이터 계약 이름의 접두사입니다. (기본값: "")

--type-suffix <문자열>        데이터 계약 이름의 접미사입니다. (기본값: "")

--clean-output                API를 생성하기 전에 출력 폴더를 지웁니다. 경고: 데이터 손실을 일으킬 수 있습니다. (기본값: false)

--api-class-name <문자열>     API 클래스의 이름입니다. (기본값: "Api")

--patch                       Swagger 소스 정의에서 작은 오류를 수정합니다. (기본값: false)

--debug                       도구 내부의 프로세스에 대한 추가 정보를 출력합니다. (기본값: false)

--another-array-type          배열 유형을 Array<Type>으로 생성합니다. (기본적으로 Type[]) (기본값: false)

--sort-types                  필드와 유형을 정렬합니다. (기본값: false)

--extract-enums               인라인 인터페이스/타입 콘텐츠에서 모든 열거형을 TypeScript 열거형 구문으로 추출합니다. (기본값: false)

-h, --help                    명령어에 대한 도움말을 표시합니다.

명령어:

generate-templates              API를 생성하는 데 필요한 ".ejs" 템플릿을 생성합니다.

-o, --output <문자열>         생성된 템플릿의 출력 경로입니다.

-m, --modular                 HTTP 클라이언트, 데이터 계약 및 라우트를 분리하기 위해 필요한 템플릿을 생성합니다. (기본값: false)

--http-client <문자열>        HTTP 클라이언트 유형 (가능한 값: "fetch", "axios") (기본값: "fetch")

-c, --clean-output            템플릿을 생성하기 전에 출력 폴더를 지웁니다. 경고: 데이터 손실을 일으킬 수 있습니다. (기본값: false)

-r, --rewrite                 기존 템플릿에서 내용을 덮어씁니다. (기본값: false)

--silent                      콘솔에 오류만 출력합니다. (기본값: false)

-h, --help                    명령어에 대한 도움말을 표시합니다.
