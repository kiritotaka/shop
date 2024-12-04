import axios from 'axios'
import { useBaseStore } from '../stores/baseStore'
const getHeader = () => {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
  }
}
const getHeaderFile = () => {
  return {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
  }
}
async function fetch(url: string) {
  const header = getHeader()
  const baseStore = useBaseStore()
  baseStore.overlayChange(true)
  try {
    const response = await axios.get(url, { headers: header })
    return handleSuccess(response)
  } catch (error) {
    return handleError(error)
  }
}
async function add(url: string, params: any) {
  const header = getHeader()
  const baseStore = useBaseStore()
  baseStore.overlayChange(true)
  try {
    const response = await axios.post(url, params, { headers: header })
    return handleSuccess(response)
  } catch (error) {
    return handleError(error)
  }
}
//post file
async function addFile(url: string, params: any) {
  const header = getHeaderFile()
  const baseStore = useBaseStore()
  baseStore.overlayChange(true)
  var formData = new FormData()
  formData.append('file', params)
  try {
    const response = await axios.post(url, formData, { headers: header })
    return handleSuccess(response)
  } catch (error) {
    return handleError(error)
  }
}
async function update(url: string, params: any) {
  const header = getHeader()
  const baseStore = useBaseStore()
  baseStore.overlayChange(true)
  try {
    const response = await axios.put(url, params, { headers: header })
    return handleSuccess(response)
  } catch (error) {
    return handleError(error)
  }
}
const handleSuccess = (data: any) => {
  const baseStore = useBaseStore()
  baseStore.overlayChange(false)
  return data
}
const handleError = (data: any) => {
  const baseStore = useBaseStore()
  baseStore.overlayChange(false)
  baseStore.snackChange({
    status: true,
    message: data.response.data.message,
    color: 'red'
  })
  return data
}
export const baseService = {
  fetch,
  add,
  addFile,
  update
}
