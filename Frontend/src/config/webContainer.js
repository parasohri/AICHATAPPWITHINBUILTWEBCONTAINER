import { WebContainer } from '@webcontainer/api';
let webcontainerinstance = null;
export const getWebContainer =async () => {
    if(webcontainerinstance==null){
        webcontainerinstance = await WebContainer.boot()
    }
    return webcontainerinstance;
}