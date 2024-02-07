
export default defineNuxtPlugin(() => {
    if (process.client) {
        // 屏幕适应
        ; (function (win, doc) {
            if (!win.addEventListener) return
            function setFont() {
                let screenWidth = document.querySelector('html')!.offsetWidth
                let fontSize = screenWidth / 10
                // 最小12px
                fontSize = fontSize < 12 ? 12 : fontSize
                // 最大192px
                fontSize = fontSize > 192 ? 192 : fontSize
                document.querySelector('html')!.style.fontSize = `${fontSize}px`
            }
            setFont()
            setTimeout(() => {
                setFont()
            }, 300)
            doc.addEventListener('DOMContentLoaded', setFont, false)
            win.addEventListener('resize', setFont, false)
            win.addEventListener('load', setFont, false)
        })(window, document)
    }
})