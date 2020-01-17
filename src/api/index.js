import ajax from '../utils/ajax'

export function userList (params, pageCurrent = 1, pageSize = 20) {
  return ajax({
    url: '/user/pc/user/list',
    method: 'post',
    data: { pageCurrent: pageCurrent, pageSize: pageSize, ...params }
  })
}

export function userUpdate (data = {}) {
  return ajax({
    url: '',
    method: 'post',
    data: data
  })
}
