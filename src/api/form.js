import request from '@/utils/request'

export function getName() {
  return request({
    url: '/api/users/getInfo',
    method: 'get'
  })
}

export function update(id, data) {
  return request({
    url: '/api/user/' + id,
    method: 'post',
    data: { username: data.username }
  })
}
