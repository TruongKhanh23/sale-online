// src/urlHostToContentfulConfigsMap.js

export interface ContentfulConfig {
  space: string
  accessToken: string
  environment: string
}

const urlHostToContentfulConfigsMap: Record<string, ContentfulConfig> = {
  'sale-online-dev.vercel.app': {
    space: '992yys64kroi',
    accessToken: 'nMWzj2wv55LJ16WZ65u_wb8acUWac0mJVTOhpuOb8Ic',
    environment: 'dev',
  },
  'sale-online-uat.vercel.app': {
    space: '992yys64kroi',
    accessToken: 'XHE80zRItiIB4w5dJBnOeRG4ZLMzA6ziVtZ5W7mlcXg',
    environment: 'uat',
  },
  'sale-online-production.vercel.app': {
    space: '992yys64kroi',
    accessToken: '8Hd_MZaiRveImQut8R8uJLVdHYDRo0BlMICe_r9gEzM',
    environment: 'master', // Thông thường 'master' là môi trường production
  },
  localhost: {
    space: '992yys64kroi',
    accessToken: 'nMWzj2wv55LJ16WZ65u_wb8acUWac0mJVTOhpuOb8Ic',
    environment: 'dev',
  },
}

export default urlHostToContentfulConfigsMap
