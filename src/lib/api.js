const API_BASE = (
  import.meta.env.VITE_API_BASE || 'https://polgunadmin.onrender.com'
).replace(/\/+$/, '')

export class ApiError extends Error {
  constructor(message, status, payload) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.payload = payload
  }
}

function toUrl(path) {
  if (!path.startsWith('/')) {
    throw new Error(`API path must start with '/': ${path}`)
  }
  return `${API_BASE}${path}`
}

export async function apiFetch(path, init = {}) {
  const response = await fetch(toUrl(path), {
    credentials: 'include',
    ...init,
  })
  return response
}

export async function apiJson(path, init = {}) {
  const response = await apiFetch(path, {
    headers: {
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
    ...init,
  })

  const text = await response.text()
  const payload = text ? JSON.parse(text) : null

  if (!response.ok) {
    const message = payload?.error || payload?.message || `Request failed (${response.status})`
    throw new ApiError(message, response.status, payload)
  }

  return payload
}
