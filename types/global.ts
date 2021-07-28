import { IContentDocument } from '@nuxt/content/types/content'

export interface AuthorProps {
  bio: string
  img: string
  name: string
}

export interface BlogProps {
  title: string
  description: string
  author: AuthorProps
  img: string
  alt: string
  tags?: Array<string | undefined>
}

export type ContentProps = BlogProps & IContentDocument
