export let store = {
    userPage: {
        users: [],
        computers: [],
        request: 'Введите запрос',
        result: [],
        computerShow: false,
    },
    computerPage: {},
    groupPage: {},

}

let reRenderAll = ()=>{

}

export function reRender(observer){
    reRenderAll = observer;
}

export function setText(text){
    store.userPage.request = text
    reRenderAll(store)
}

export function openModal(){
    store.userPage.computerShow === true ?
        store.userPage.computerShow = false :
        store.userPage.computerShow = true;
    console.log(store.userPage.computerShow)
    reRenderAll(store)
}