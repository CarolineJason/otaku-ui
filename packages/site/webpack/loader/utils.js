
const get = (tokens) => {
  const map = new Map()
  let startIndex = undefined

  for (let i = 0; i < tokens.length; i++) {
    const start =
      tokens[i].nesting === 1 && tokens[i].type === 'container_demo_open'
    const end =
      tokens[i].nesting === -1 && tokens[i].type === 'container_demo_close'
    // const desc = tokens[index + 2].content.replace(/\n/g, '<br/>')

    if (start) {
      startIndex = i
      map.set(i, undefined)
    }

    if (end) {
      const endIndex = i
      const data = {
        code: '',
        lang: '',
        example: '',
        style: '',
        end: endIndex
      }

      for (let j = startIndex; j < endIndex; j++) {
        if (tokens[j].type === 'fence') {
          if (tokens[j].info.includes('example')) {
            data.example = tokens[j].content
          } else {
            // data.example = data.example ? data.example : data.code
          }
          if (tokens[j].info === 'tsx') {
            data.lang = tokens[j].info
            data.code = tokens[j].content
          }
          if (tokens[j].info === 'css') {
            data.style = tokens[j].content
          }
        }
      }

      data.example = data.example ? data.example : data.code

      map.set(startIndex, data)
    }
  }

  return map
}

module.exports.get = get
