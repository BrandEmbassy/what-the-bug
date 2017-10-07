// @flow
const uuidv4 = require('uuid/v4')
const b64toBlob = require('b64-to-blob')

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

const addAttachments = async function(postId: string, attachments: array) {
  const formData = new FormData()
  attachments.forEach(attachment => {
    const filename = uuidv4()
    const b64Data = attachment.split(';base64,')[1]
    const blob = b64toBlob(b64Data, 'image/png')
    formData.append(filename, blob, `screenshot-${filename}.png`)
  })

  await fetch(`/engager/2.0/brands/${brandId}/posts/${postId}/attachments`, {
    method: 'post',
    body: formData
  })
}

export { createPost, addAttachments }
