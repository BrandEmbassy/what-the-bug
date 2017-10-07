// @flow
const uuidv4 = require('uuid/v4')

const createPost = async function (title: string, content: string, author: { id: string, name: string }) {
  const channelId: string = 'ind_40'
  const postId: string = `${channelId}_${uuidv4()}`

  try {
    const result = await fetch('/engager/2.0/brands/1/posts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        id: postId,
        idOnExternalPlatform: postId,
        createdAt: (new Date()).toISOString().split('.')[0] + 'Z',
        title: title,
        content: content,
        channelId: channelId,
        author: author
      })
    })
    console.log(await result.text())
  } catch (err) {
    console.log(err)
  }
}

export {
  createPost
}
