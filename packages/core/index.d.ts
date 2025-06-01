declare module 'nuxt/schema' {
  interface AppConfigInput {
    nav?: object | boolean
    theme?: string | null
    backgroundPattern?: string | false
    defaultLayout?: string | null
    ui?: object
  }
}

export {}
