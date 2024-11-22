'use client'

import { useMutation } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { createDocument } from './create-document'
import { useQuery } from '@tanstack/react-query'
import { fetchDocumentDetail, fetchDocuments, updateDocument } from '.'

export const useCreateDocument = () => {
  const { data: session } = useSession()

  return useMutation({
    mutationFn: (payload: Document.Request.CreateDocument) =>
      createDocument(payload, session?.user.accessToken || ''),
  })
}

export const useUpdateDocument = () => {
  const { data: session } = useSession()

  return useMutation({
    mutationFn: (params: { documentId: number; request: Document.Request.UpdateContent }) =>
      updateDocument(params.documentId, params.request, session?.user.accessToken || ''),
  })
}

export const useGetDocuments = (params?: { directoryId?: string; sortOption?: Document.Sort }) => {
  return useQuery({
    queryKey: ['getDocuments', params?.directoryId, params?.sortOption],
    queryFn: async () => fetchDocuments(params),
  })
}

export const useGetDocumentDetail = (documentId: number) => {
  return useQuery({
    queryKey: ['getDocumentDetail', documentId],
    queryFn: async () => fetchDocumentDetail(documentId),
    enabled: !!documentId,
  })
}