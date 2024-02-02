# Sverdle

The default SvelteKit demo App. Currently this is unchanged.

## Setup

### 1. Install Paraglide

```bash
npx @inlang/paraglide-js init
```
### 2. Install the SvelteKit Adapter

```bash
npm install @inlang/paraglide-js-adapter-sveltekit
```
### 3. Register the Vite plugin in `vite.config.js`

```javascript
import { paraglide } from '@inlang/paraglide-js-adapter-sveltekit/vite'

export default {
  plugins: [
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    });
  ],
}
```

### 4. Initialize the Adapter 

```js
// src/lib/i18n.js
import { createI18n } from '@inlang/paraglide-js-adapter-sveltekit';

export const i18n = createI18n({
  project: "./project.inlang",
  outdir: "./src/paraglide",
});
```

```html
<!-- src/routes/+layout.svelte -->
<script>
  import { i18n } from '$lib/i18n';
  import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
</script>

<ParaglideJS {i18n}>
    <slot />
</ParaglideJS>
```

### 5. Register the hooks

```js
// src/hooks.js
import { i18n } from '$lib/i18n';

export const reroute = i18n.reroute();
```

```js
// src/hooks.server.js
import { i18n } from '$lib/i18n';

export const handle = i18n.handle();
```