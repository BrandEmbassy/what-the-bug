// @flow
const uuidv4 = require('uuid/v4')

const createPost = async function(
  reportUrl: string,
  channelId: string,
  title: string,
  content: string,
  author: { id: string, name: string }
) {
  const postId: string = `${channelId}_${uuidv4()}`

  await fetch(reportUrl, {
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

const addAttachments = async function(attachmentUrl: string, attachments: Array) {
  const formData = new FormData()
  attachments.forEach(attachment => {
    formData.append(attachment.id, attachment.content, attachment.filename)
  })

  await fetch( attachmentUrl, {
    method: 'post',
    body: formData
  })
}

export { createPost, addAttachments }
