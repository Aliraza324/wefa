import axios from 'axios'

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
})

export const fetchPosts = async () => {
  const { data } = await apiClient.get('/posts', {
    params: {
      _limit: 5,
    },
  })

  return data
}
