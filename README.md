# vite-plugin-simplify-props
It will make your writing easier

## Install

```
  npm i vite-plugin-simplify-props
```

## Usage

```
  import SimplifyPlugin from 'vite-plugin-simplify-props'
  import { defineConfig } from 'vite'

  export default defineConfig({
    plugins: [
      SimplifyProps(),
    ]
  })
```

```vue
    <Footer {name}/>
```

Transpiles the same as in Vue

```vue
    <Footer :name="name" />
```

Transpiles the same as in React

```vue
    <Footer name={name} />
```

## License
[MIT](./LICENSE) License © 2022 [Simon He](https://github.com/Simon-He95)

<a href="https://github.com/Simon-He95/sponsor" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>


<span><div align="center">![sponsors](https://www.hejian.club/images/sponsors.jpg)</div></span>
