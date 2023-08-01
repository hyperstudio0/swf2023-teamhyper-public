import { Api } from "../generated/swagger/swagger.api";
// config
import { HOST_API_URL } from "../config-global";

// ----------------------------------------------------------------------
// JWT 인증이 필요한 경우 아래와 같은 보안 작업자(securityWorker) 함수를 작성할 수 있습니다.
// 이 함수는 JWT 토큰을 인증 헤더에 추가하는 역할을 합니다.
// const securityWorker = async (securityData: string | null) => {
//   console.log(securityData, 'securityData');
//   if (securityData) {
//     return {
//       headers: {
//         Authorization: `Bearer ${securityData}`,
//       },
//     };
//   }
// };

// API 클래스 생성
const swagger = new Api({
  baseURL: HOST_API_URL,
  secure: true, // API 요청에 보안 작업자를 사용하려면 이 값을 true로 설정하세요.
});

swagger.instance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error, "axios error");
    const errorResponse = error.response && error.response.data;
    const errorMessage = errorResponse
      ? errorResponse.message
      : "Something went wrong";
    const errorStatus = error.response.status ? error.response.status : null;

    return Promise.reject({
      message: errorMessage,
      data: errorResponse,
      status: errorStatus,
    });
  }
);
const Swagger = swagger;
const Axios = swagger.instance;

export { Swagger };
export { Axios };
