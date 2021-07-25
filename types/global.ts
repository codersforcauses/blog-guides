export interface AuthorProps {
  bio: string
  img: string
  name: string
}

export interface ContentProps {
  slug: string
  path: string
  title: string
  description: string
  body: object
  excerpt: object
  author: AuthorProps
  img: string
  alt: string
  dir: string
  toc ?: Array<object>
  extension: string
  tags?: Array<string | undefined>
  updatedAt: Date
  createdAt: Date
}
