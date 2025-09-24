import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro', // Correspond à docs/intro.md
      label: 'Introduction',
    },
    {
      type: 'doc',
      id: 'devices',
      label: 'Devices Management',
    },
    {
      type: 'doc',
      id: 'servers',
      label: 'Servers Management',
    },
    {
      type: 'doc',
      id: 'orders',
      label: 'Orders Management',
    },
    {
      type: 'doc',
      id: 'webhooks',
      label: 'Webhooks',
    }
  ],
};

export default sidebars;