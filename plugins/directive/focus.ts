
export default defineNuxtPlugin((nuxtApp) => {
    if (process.server) {
        nuxtApp.vueApp.directive('focus',{
            mounted(el, binding) {
                el.addEventListener("click",(e:any)=>{
                    console.log(el);
                })
            },
            updated(el){
                console.log(el);
            }
        })
    }
})