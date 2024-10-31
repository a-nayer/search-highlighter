export function getExcerpt(content, searchQuery) {
  const queryIndex = content
    .toLowerCase()
    .indexOf(searchQuery.toLowerCase())
  if (queryIndex === -1) return content.substring(0, 150) + '...'

  const start = Math.max(0, queryIndex - 50)
  const end = Math.min(content.length, queryIndex + 100)
  return '...' + content.substring(start, end) + '...'
}
