# @fozikio/tools-content

> **Built into cortex-engine v1.0.0+**
> These tools are now included in [`@fozikio/cortex-engine`](https://github.com/Fozikio/cortex-engine) core � no separate install needed. This package remains available for use with cortex-engine **v0.x only**. If you're on v1.0.0+, just install `@fozikio/cortex-engine`.


Content pipeline plugin for cortex-engine. Manage content pieces through a multi-stage pipeline from idea to publication across blogs, social posts, newsletters, and dev.to articles.

## Install

```
npm install @fozikio/tools-content
```

## Tools

| Tool | Description |
|------|-------------|
| `content_create` | Create a content piece (blog, social, devto, reddit, thread, newsletter) with an initial state |
| `content_list` | List content pieces, filterable by type and state |
| `content_update` | Update an existing content piece (body, state, tags) |

## Usage

```yaml
# cortex-engine config
plugins:
  - package: "@fozikio/tools-content"
```

```typescript
import contentPlugin from "@fozikio/tools-content";
import { CortexEngine } from "@fozikio/cortex-engine";

const engine = new CortexEngine({
  plugins: [contentPlugin],
});
```

## Documentation

- **[Wiki](https://github.com/Fozikio/cortex-engine/wiki)** — Guides, architecture, and full tool reference
- **[Plugin Authoring](https://github.com/Fozikio/cortex-engine/wiki/Plugin-Authoring)** — Build your own plugins
- **[Contributing](https://github.com/Fozikio/.github/blob/main/CONTRIBUTING.md)** — How to contribute

## License

MIT
