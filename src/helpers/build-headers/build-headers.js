export const buildHeaders = accessToken => ({
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
})