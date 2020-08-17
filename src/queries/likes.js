import { gql } from '@apollo/client'

export const LIKE_ANONYMOUS_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      likes,
      liked
    }
  }
`

export const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      likes,
      liked
    }
  }
`
