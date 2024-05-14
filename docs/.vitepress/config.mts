import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Connect 4 Game",
  description: "A Docs Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start', link: '/start' },
      { text: 'Docs', link: '/foreword' }
    ],

    sidebar: [
      {
        text: 'Home',
        items: [
          { text: 'Back to Home', link: '/' },
          { text: 'About', link: '/about' },
          { text: 'Start', link: '/start' }
        ]
      },
      {
        text: 'Docs',
        items: [
          { text: 'Foreword​', link: '/foreword​' },
          { text: 'Terminology & Formatting​', link: '/terminology-formatting' },
          { text: 'Initial Requirements​​', link: '/initial-requirements' },
          { text: 'User Stories​​', link: '/user-stories' },
          { text: 'Class Diagram​​', link: '/class-diagram' },
          { text: 'Our Tasks', link: '/our-tasks' },
          { text: 'Impediments', link: '/impediments' },
          { text: 'Evaluation', link: '/evaluation' },
          { text: 'Back Matter', link: '/back-matter' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tonyliu66/Connect-4-CC' }
    ]
  }
})
