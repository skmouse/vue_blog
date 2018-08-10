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
    url: '/api/users/getinfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/api/user/logout',
    method: 'delete'
  })
}
