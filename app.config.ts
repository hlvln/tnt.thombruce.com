export default defineAppConfig({
  nav: [
    { label: 'Home', icon: 'i-lucide:house', to: '/' },
    {
      label: 'Docs',
      icon: 'i-lucide:book',
      to: '/docs',
      // TODO: Mod TNT to allow `children: true` and automatically populate? Is this possible? How would TNT know what collection to look in? What path to use? (Path as above?)
      //       It would save on a lot of (right now) necessary duplication of icon: and description: values...
      //       These are used elsewhere too, and we would prefer not to have to update them both places each time.
      children: [
        { label: 'Getting Started', description: 'How to install and configure TNT for your own purposes.', icon: 'i-lucide:play', to: '/docs/getting-started' },
        { label: 'Modules', description: 'TNT modules that progressively enhance your application.', icon: 'i-lucide:boxes', to: '/docs/modules' },
        { label: 'Features', description: 'All the features that make TNT great.', icon: 'i-lucide:star', to: '/docs/features' },
        { label: 'Components', description: 'All of the components provided by TNT and our integrations.', icon: 'i-lucide:cog', to: '/docs/components' },
        { label: 'Composables', description: 'Reusable composables for advanced functionality.', icon: 'i-lucide:boxes', to: '/docs/composables' },
        { label: 'Layouts', description: 'Varied layouts for a myriad of needs.', icon: 'i-lucide:blocks', to: '/docs/layouts' },
        { label: 'Utilities', description: 'Utility functions for common programming needs.', icon: 'i-lucide:wrench', to: '/docs/utilities' },
      ]
    },
    { label: 'Blog', icon: 'i-lucide:pen', to: '/blog' },
    {
      label: 'About',
      icon: 'i-lucide:info',
      to: '/about',
      children: [
        { label: 'About TNT', description: 'How and why TNT exists', icon: 'i-lucide:info', to: '/about' },
        { label: 'Testimonials', description: 'What are people saying about TNT?', icon: 'i-lucide:message-square-heart', to: '/testimonials' },
        { label: 'Cookies', description: 'How we use cookies', icon: 'i-lucide:cookie', to: '/cookie-policy' },
      ],
    },
  ],
  theme: undefined,
  colorMode: null,
  backgroundPattern: 'circuit board',
  defaultLayout: null,
  ui: {
    colors: {
      primary: 'red',
      secondary: 'blue',
      success: 'green',
      info: 'blue',
      warning: 'yellow',
      error: 'red',
      neutral: 'slate',
    }
  }
})
