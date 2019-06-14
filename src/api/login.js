import request from '@/utils/request'

export function login(email, password) {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      email,
      password
    }
  })
}

export function getInfo() {
  return request({
    url: '/api/users/getInfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/api/users/logout',
    method: 'delete'
  })
}
