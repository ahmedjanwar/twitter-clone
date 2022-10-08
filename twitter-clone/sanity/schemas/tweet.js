export default {
  name: 'tweet',
  title: 'tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Text in Tweet',
      type: 'string',
    },
    {
      name:'blockTweet',
      title: 'Block Tweet',
      description: 'Admin controls: Toggle if Tweet is deemed inapproprate',
      type:'boolean',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',

    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Tweet Image',
      type: 'string',
    },
  ]
}
