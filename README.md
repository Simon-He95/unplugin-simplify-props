# unplugin-simplify-props

It will make your writing easier

## Install

```
  npm i vite-plugin-simplify-props
```

## 🌈 Usage

<details>
<summary>Vite</summary>

```ts
// vite.config.ts
import { vitePluginPlugin } from 'unplugin-simplify-props'
export default defineConfig({
  plugins: [vitePluginPlugin(/* options */)],
})
```

</details>
<br>
<details>
<summary>Rollup</summary>

```ts
// rollup.config.js
import { resolve } from 'path'
import { rollupPlugin } from 'unplugin-simplify-props'
export default {
  plugins: [rollupPlugin(/* options */)],
}
```

</details>
<br>
<details>
<summary>Webpack</summary>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-simplify-props').webpackPlugin({
      /* options */
    }),
  ],
}
```

</details>
<br>
<details>
<summary>Vue CLI</summary>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-simplify-props').webpackPlugin({
        /* options */
      }),
    ],
  },
}
```

</details>
<br>
<details>
<summary>Esbuild</summary>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import { esbuildPlugin } from 'unplugin-simplify-props'

build({
  plugins: [esbuildPlugin(/* options */)],
})
```

</details>

```vue
<Footer {name} />
```

Transpiles the same as in Vue

```vue
<Footer :name="name" />
```

Transpiles the same as in React

```vue
<Footer name="{name}" />
```

## License

[MIT](./LICENSE) License © 2022 [Simon He](https://github.com/Simon-He95)

<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

<span><div align="center">![sponsors](https://www.hejian.club/images/sponsors.jpg)</div></span>
