/**
 * @fozikio/tools-content — content pipeline plugin for cortex-engine.
 *
 * Provides 3 tools: content_create, content_list, content_update.
 * Uses the generic CortexStore API (put/get/update/query) on the 'content_v2' collection.
 */

import type { ToolPlugin } from '@fozikio/cortex-engine';
import { contentCreateTool } from './tools/content-create.js';
import { contentListTool } from './tools/content-list.js';
import { contentUpdateTool } from './tools/content-update.js';

const plugin: ToolPlugin = {
  name: '@fozikio/tools-content',
  tools: [
    contentCreateTool,
    contentListTool,
    contentUpdateTool,
  ],
};

export default plugin;

// Named re-exports for direct use
export { contentCreateTool } from './tools/content-create.js';
export { contentListTool } from './tools/content-list.js';
export { contentUpdateTool } from './tools/content-update.js';
