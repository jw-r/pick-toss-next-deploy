import { apiClient } from '@/actions/api-client'
import { API_ENDPOINT } from '@/actions/endpoints'
import { PrivateRequest } from '@/actions/types'

interface UpdateDocumentNameParams extends PrivateRequest {
  documentId: number
  name: string
  file: File
}

export const updateDocumentContent = async (params: UpdateDocumentNameParams) => {
  const formData = new FormData()
  formData.append('file', params.file)
  formData.append('name', params.name)

  return await apiClient.fetch({
    endpoint: API_ENDPOINT.document.updateDocumentContent(params.documentId),
    body: formData,
    headers: {
      Authorization: `Bearer ${params.accessToken}`,
    },
  })
}