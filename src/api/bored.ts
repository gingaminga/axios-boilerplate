// 아래는 open api를 사용한 샘플 로직입니다.

import axios, { AxiosInstance } from 'axios';
import url from './url';
import API from '../utils/axios';

/**
 * @description 지루함을 달래줄 API
 */
export default class Bored extends API {
  private static instance: Bored;
  private axiosInstance: AxiosInstance;

  constructor() {
    const axiosInstance = axios.create({
      timeout: 5000,
      withCredentials: true,
    });
    super(axiosInstance);

    this.axiosInstance = axiosInstance;
  }

  static getInstance() {
    if (this.instance) {
      this.instance.initialize();

      return this.instance;
    }

    this.instance = new this();
    this.instance.initialize();

    return this.instance;
  }

  /**
   * @description 초기 설정
   * @param type 렌더 타입
   */
  private initialize() {
    let host = url.BORED.HOST;

    this.setBaseURL(host);
    this.setResponseInterceptor();
  }

  /**
   * @description access token 설정
   * @param token access token 값
   */
  setAccessToken(token: string) {
    this.axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  /**
   * @description 호스트 설정
   */
  private setBaseURL(host: string) {
    this.axiosInstance.defaults.baseURL = host;
  }

  /**
   * @description response middleware 추가하기
   */
  private setResponseInterceptor() {
    this.axiosInstance.interceptors.response.use(
      (response) => {
        /* empty */

        return response;
      },
      async (error) => {
        if (axios.isAxiosError(error)) {
          /* empty */
        }
      },
    );
  }
}
