import { stringify, parse } from 'query-string';

export const addToQueryString = ({ url, queries }: { url?: string; queries: object }): string => {
  const removedUrl = removeQueryString({ url, queryKeys: Object.keys(queries) })
  const queryString = getQueryString(removedUrl)
  const delimiter = queryString ? '&' : '?'
  return `${removedUrl || window.location.href}${delimiter}${stringify(queries)}`
}

export const removeQueryString = ({ url, queryKeys }: { url?: string; queryKeys: string[] }): string => {
  const targetUrl = url || window.location.href

  return excludeQuery(targetUrl, queryKeys)
}

export const getQueryString = (url?: string): string => {
  if (url) {
    return new URLSearchParams(new URL(url).search).toString()
  }
  return window.location.search
}

const isEmptyObject = (obj) => {
  return (
    obj === undefined ||
    obj === null ||
    obj === '' ||
    (Array.isArray(obj) && obj.length === 0) ||
    (typeof obj === 'object' && Object.keys(obj).length === 0)
  )
}
export const excludeQuery = (url, keys = []) => {
  const [rawUrl, queryString] = url.split('?')
  const queries = parse(queryString)
  Object.keys(queries).forEach((key) => {
    if (keys.includes(key)) {
      delete queries[key]
    }
  })

  if (isEmptyObject(queries)) {
    return rawUrl
  }

  const newQueryString = stringify(queries)
  return `${rawUrl}?${newQueryString}`
}
