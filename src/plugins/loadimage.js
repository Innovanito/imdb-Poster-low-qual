export default {
  intstall(app) {
    app.config.globalProperties.$loadImage = src => {
      return new Promise( resolve => {
        const img = document.createElement('img')
        img.src = srcimg.addEventListener('load', () => {
          resolve()        
        })
      })
    }
  }
}