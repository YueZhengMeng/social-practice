import instance from './instance'

export const isLoggedIn = (): boolean => {
    return instance.defaults.headers.common['Authorization'] !== undefined || instance.defaults.headers.common['Authorization'] === ''
}

export const login = async (username: string, password: string): Promise<any> => {
  return instance.post('/login', {
      username: username,
      password: password
  })
}

export const register = async (username: string, password: string): Promise<any> => {
  return instance.post('/user/register', {
        username: username,
        password: password
  })
}

export const getCurrentUser = async (): Promise<any> => {
  return instance.get('/user/role')
}

export const getUserInGroup = async (id: number): Promise<any> => {
  return instance.get('/user/byGroupID/' + id)
}

export const getAllUser = async (): Promise<any> => {
  return instance.get('/user/all')
}
