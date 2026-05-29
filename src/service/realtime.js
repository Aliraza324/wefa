import { io } from 'socket.io-client'

export const realtimeClient = io(import.meta.env.VITE_SOCKET_URL ?? 'ws://localhost:3001', {
  autoConnect: false,
  transports: ['websocket'],
})
