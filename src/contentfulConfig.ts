// src/contentfulConfig.ts

import { createClient } from 'contentful'
import urlHostToContentfulConfigsMap from './urlHostToContentfulConfigsMap'

const currentHost = window.location.hostname // Lấy hostname hiện tại

const contentfulConfig = urlHostToContentfulConfigsMap[currentHost]

if (!contentfulConfig) {
  throw new Error(`Contentful configuration not found for host: ${currentHost}`)
}

const client = createClient({
  space: contentfulConfig.space,
  accessToken: contentfulConfig.accessToken,
  environment: contentfulConfig.environment,
})

export default client
