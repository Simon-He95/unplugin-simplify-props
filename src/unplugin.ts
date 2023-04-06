import { createUnplugin } from 'unplugin'
import { createFilter } from '@rollup/pluginutils'
import type { Options } from './types'

const unplugin = createUnplugin((options: Options = {}): any => {
  const filter = createFilter(options.include, options.exclude)
  return [
    {
      name: 'unplugin-simplify-props',
      enforce: 'pre',
      transformInclude(id: string) {
        return filter(id)
      },
      transform(code: string, id: string) {
        const nameProps = /<[\w\s="'-:{}]+({([\s\w]+)})[\s\w\/="'-:]+>/g
        if (id.endsWith('.vue')) {
          // vue
          return code.replace(nameProps, (r: string, k: string, v: string) =>
            r.replace(k, `:${v}="${v}"`),
          )
        }

        if (
          id.endsWith('.jsx')
          || id.endsWith('.tsx')
          || id.endsWith('.svelte')
        ) {
          // react svelte solid
          return code.replace(nameProps, (r: string, k: string, v: string) =>
            r.replace(k, `${v}={${v}}`),
          )
        }
      },
    },
  ]
})

export const vitePlugin = unplugin.vite
export const rollupPlugin = unplugin.rollup
export const webpackPlugin = unplugin.webpack
export const esbuildPlugin = unplugin.esbuild
