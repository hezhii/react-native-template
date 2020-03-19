declare module '*.json' // 避免导入 json 文件报错
declare module '*.png' // 避免导入 png 文件报错

declare module global {
  let version: string
  let token: string
  let store: any
}
