export function SimplifyProps() {
  return {
    name: 'vite-plugin-simplify-props',
    transform(code: string, id: string) {
      if (!id.endsWith('.vue')) return
      const nameProps = /<[\w\s="'-:{}]+({([\s\w]+)})[\s\w\/="'-:]+>/g
      return code.replace(nameProps, (r: string, k: string, v: string) => r.replace(k, `:${v}="${v}"`))
    }
  }
}
