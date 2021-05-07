export const pageview = (url) => {
    window.gtag('config', process.env.GTAG, {
      page_path: url,
    })
  }
  
  // log specific events happening.
  export const event = ({ action, params }) => {
    window.gtag('event', action, params)
  }