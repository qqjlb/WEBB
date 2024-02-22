
import {defineStore} from "pinia";


type NavNode={name:string,path:string}

interface NavState {
    visNav: boolean;
    navList: NavNode[];
}

export const useNavStore = defineStore("nav",{
    state: ():NavState => ({
        visNav:false,
        navList:[
            {name:"break",path:"/"},
            {name:"detail",path:"/detail"},
            {name:"about",path:"/about"},
            {name:"user-1",path:"/user-admin/1"},
            {name:"parent-child",path:"/parent/child"},
        ],
    }),
    getters:{
        getVisNav():boolean{
            return this.visNav;
        },
        getNavList():NavNode[]{
            return this.navList;
        }
    },
    actions:{
        changeVisNav(){
            this.visNav = !this.visNav;
        }
    }

})
