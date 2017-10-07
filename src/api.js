// @flow
const uuidv4 = require('uuid/v4')

const channelId: string = 'ind_40'
const brandId = 1

const createPost = async function(
  title: string,
  content: string,
  author: { id: string, name: string }
) {
  const postId: string = `${channelId}_${uuidv4()}`

  await fetch(`/engager/2.0/brands/${brandId}/posts`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      id: postId,
      idOnExternalPlatform: postId,
      createdAt: new Date().toISOString().split('.')[0] + 'Z',
      title: title,
      content: content,
      channelId: channelId,
      author: author
    })
  })

  return postId
}

const addAttachments = async function(postId: string, attachments: Array) {
  const formData = new FormData()
  attachments.forEach(attachment => {
    formData.append(attachment.id, attachment.content, attachment.filename)
  })

  await fetch(`/engager/2.0/brands/${brandId}/posts/${postId}/attachments`, {
    method: 'post',
    body: formData
  })
}

export { createPost, addAttachments }
