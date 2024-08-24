import axios, { AxiosInstance, AxiosResponse, AxiosError, AxiosRequestConfig } from 'axios'
let ajax: AxiosInstance | undefined

const defaultConfig = {
  timeout: 10000,
}

const ajaxModules = {
  create(config: AxiosRequestConfig & { serviceId?: string; userId?: string; hmacKey?: string } = {}) {
    ajax = axios.create({ ...defaultConfig, ...config })
    ajax.defaults.headers.delete['Content-Type'] = 'application/json; charset=utf-8'
    ajax.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => {
        return Promise.reject(error)
      },
    )
  },
  get<T = any>(url: string, config?: any) {
    return ajax.get<T>(url, config)
  },
  post(url: string, data?: any, config?: any) {
    return ajax.post(url, data, config)
  },
  patch(url: string, data?: any, config?: any) {
    return ajax.patch(url, data, config)
  },
  put(url: string, data?: any, config?: any) {
    return ajax.put(url, data, config)
  },
  delete(url: string, config?: any) {
    return ajax.delete(url, config)
  },
  retry(config?: any) {
    return ajax.request(config)
  },
}

export default ajaxModules
