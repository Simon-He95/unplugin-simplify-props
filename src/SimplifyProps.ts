export function SimplifyProps() {
  return {
    name: 'vite-plugin-simplify-props',
    transform(code: string, id: string) {
      const nameProps = /<[\w\s="'-:{}]+({([\s\w]+)})[\s\w\/="'-:]+>/g
      if (id.endsWith('.vue')) {
        // vue
        return code.replace(nameProps, (r: string, k: string, v: string) => r.replace(k, `:${v}="${v}"`))
      }
      if (id.endsWith('.jsx') || id.endsWith('.tsx')) {
        // react
        return code.replace(nameProps, (r: string, k: string, v: string) => r.replace(k, `${v}={${v}}`))
      }
    }
  }
}
