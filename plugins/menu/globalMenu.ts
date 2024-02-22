
function getMenuPos(e:MouseEvent,div:HTMLElement){
    let px = e.clientX;
    let py = e.clientY;
    let vw = document.documentElement.clientWidth;
    let vh = document.documentElement.clientHeight;
    let cw = div.offsetWidth;
    let ch = div.offsetHeight;
    if(px+cw>vw){
        px=vw-cw;
    }
    if(py+ch>vh){
        py=vh-ch;
    }
    return {px,py}
}

export default defineNuxtPlugin(() => {
    if (process.client) {
        // 菜单自定义
        ; (function (win, doc) {
            doc.oncontextmenu=(e:MouseEvent)=>{
                let t = e.target as HTMLElement|null
                if(t?.getAttribute("class")==="menubox"){
                    t.remove()
                }
                let result = true;
                while(t){
                    if(t.getAttribute("menu")){
                        let menuContent: HTMLElement | null = null
                        for(let i=0;i<t.childNodes.length;i++){
                            let node = t.childNodes[i] as HTMLElement
                            if(node.nodeName==="MENU"){
                                menuContent = node.cloneNode(true) as HTMLElement;
                                for(let j=0;j<node.childNodes.length;j++){
                                    (menuContent.childNodes[j] as HTMLElement).onclick = ()=>{
                                        (node.childNodes[0] as HTMLElement).click()
                                    }
                                }
                            }
                            break;
                        }
                        if(menuContent){
                            const div = document.createElement("div");
                            div.setAttribute("class","menubox");
                            menuContent.onclick = (e)=>{
                                e.stopPropagation(); 
                                div.remove();
                            };
                            setTimeout(() => {
                                if(menuContent){
                                    const {px,py}=getMenuPos(e,menuContent);
                                    menuContent.setAttribute("style","top:"+py+"px;left:"+px+"px");
                                }
                            }, 0);
                            div.appendChild(menuContent);
                            div.onclick = (e)=>{
                                div.remove();
                            };
                            document.body.appendChild(div);
                            result=false;
                        }
                        t=null;
                    }else{
                        t=t.parentElement
                    }
                }
                return false
            }
        })(window, document)
    }
})


//使用方式
// <div class="test_area" menu="show">
//     <menu>
//         <div @click="testhandle">test</div>
//     </menu>
// </div>