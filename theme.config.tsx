import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  navigation: true,
  head: (
    <>
      <meta property="og:title" content="Senet Wiki" />
      <meta property="apple-mobile-web-app-title" content="Senet Wiki" />
      <meta property="og:description" content="The Senet Wiki" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
        />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Senet Wiki'
    }
  },

  banner: {
    key: 'Alpha-release',
      text: (
       <a href="https://github.com/senetnetwork/wiki" target="_blank">
        🎉 Senet Wiki Alpha is released. Read more →
      </a>)
  },

  primaryHue: { 
    dark: 74,
    light: 72
    },
   

  logo: (
    <>
     <svg height="40" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="300" height="100" rx="32" fill="black"/>
      <path d="M66.7182 76.9942L69.7139 71.8009L50.8924 60.9333L47.8967 66.1266C49.9795 67.3293 50.6956 69.9915 49.493 72.0743L48.0498 74.567C46.8471 76.6498 44.1849 77.3659 42.1021 76.1633L39.1064 81.3565L57.9279 92.2241L60.9236 87.0309C58.8408 85.8282 58.1247 83.1605 59.3274 81.0777L60.7651 78.585C61.9677 76.5022 64.6354 75.7861 66.7182 76.9887V76.9942Z" fill="white"/>
      <path d="M70.8349 25.2101C73.8197 20.0442 72.0485 13.4351 66.8826 10.4503C61.7166 7.46555 55.1075 9.23673 52.1228 14.4027L48.7608 20.2246C51.7183 21.9302 52.4781 25.8606 50.368 28.5447L32 49.2552L50.7121 60.0572L59.4589 33.7981C60.7327 30.6275 64.5155 29.321 67.473 31.032L70.8349 25.2101Z" fill="white"/>
      <path d="M101.272 67.8963C110.237 67.8963 114.405 63.4454 114.405 58.2689C114.405 45.8356 93.8578 51.0121 93.8578 42.7393C93.8578 39.7882 96.3292 37.3693 102.096 37.3693C105.1 37.3693 108.444 38.2401 111.4 40.1269L112.999 36.2566C110.189 34.3214 106.07 33.2571 102.096 33.2571C93.1794 33.2571 89.1088 37.7079 89.1088 42.9328C89.1088 55.5113 109.656 50.2864 109.656 58.5592C109.656 61.5103 107.136 63.7841 101.272 63.7841C96.9108 63.7841 92.5979 62.1392 90.078 59.8654L88.285 63.6389C90.9987 66.1546 96.0869 67.8963 101.272 67.8963Z" fill="white"/>
      <path d="M131.176 63.3003V52.3667H148.185V48.2545H131.176V37.8531H150.269V33.6441H126.33V67.5092H150.947V63.3003H131.176Z" fill="white"/>
      <path d="M187.966 33.6441V58.8978L167.614 33.6441H163.64V67.5092H168.486V42.2555L188.839 67.5092H192.812V33.6441H187.966Z" fill="white"/>
      <path d="M212.658 63.3003V52.3667H229.667V48.2545H212.658V37.8531H231.751V33.6441H207.812V67.5092H232.429V63.3003H212.658Z" fill="white"/>
      <path d="M251.857 67.5092H256.655V37.8531H268.285V33.6441H240.227V37.8531H251.857V67.5092Z" fill="white"/>
      </svg>
    </>
  ),
  project: {
    link: 'https://github.com/senetnetwork/wiki',
  },
  chat: {
    link: 'https://discord.com/invite/qh9dG9EwQx',
  },
  docsRepositoryBase: 'https://github.com/senetnetwork/wiki',
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  footer: {
    text: '2023 © Senet Network.',
  },
}
export default config
