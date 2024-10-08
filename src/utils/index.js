import { message, Upload } from 'antd'

export const handleError = (error) => {
  error.message
    ? Array.isArray(error.message)
      ? error.message.map((err) => message.error(err))
      : message.error(error.message)
    : message.error('Something went wrong')
}

export const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!')
    return Upload.LIST_IGNORE
  }

  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!')
    return Upload.LIST_IGNORE
  }

  return false
}

export const getPublicIdFromUrl = (url) => {
  const regex = /\/upload\/(?:v\d+\/)?([^.]+)/
  const matches = url.match(regex)
  return matches ? matches[1] : null
}
