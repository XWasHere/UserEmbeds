function forceExit() {
    let a = 0/0; // trigger error
    a = 9999999999999999999999999999999999999999999999999999999 //try to cause overflow
    const b = 0
    b = 1;
    function c() {}
    function c() {return}
    // if all fails just crash it with a stack overflow
    function overflow() {
        overflow()
    }
    overflow()
}

//#region var decs
var layer
var frroot
var fr
var titleInput
var savebtns
var confirmBtn
var cancelBtn
var channelIdInput
var token
//#endregion

//#region pre init things
var CHATBARFORMCLASS = 'form-2fGMdU';

var COMMONBUTTONCLASS ='button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN';
var COMMONBUTTONCONTAINERCLASS = 'buttonContainer-28fw2U';
var COMMONBUTTONR1CLASS = 'contents-18-Yxp button-3AYNKb button-318s1X'
var COMMONBUTTONICONCLASS = 'buttonWrapper-1ZmCpA'
var COMMONBUTTONIMAGECLASS = 'icon-3D60ES'

var EMBEDBTNIMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAiUlEQVRYR+1XQQ7AIAib/+tz+d8WjCwucW4HAQ/1oJ6g1JZgOdoSkdPuESeAonnqFp3cClQQJSu5gSCAmwEArtoTkWF8AqAI92HA2wW9BXpHhLngE4BrE5gEpwaogX00QBdEdsI2h1bSHy54GxpWP48Wa7kIgAyktOKhC1Yr/W+8/Fac/jnN/p5fko6gFWajqQQAAAAASUVORK5CYII='

var chatform = document.getElementsByClassName(CHATBARFORMCLASS)[0];
var buttondiv = document.getElementsByClassName('buttons-3JBrkn')[0];
var container = document.getElementsByClassName('layerContainer-yqaFcK')[1];
var ICEmbedSend
//#endregion

//#region get token
function checkForMFA(t) {
    if (t.slice(0,3).toUpperCase() == 'MFA.') {//todo: figure out the case
        console.error('MFA is enabled on this account. Using this code on accounts with MFA is bannable. Aborting execution.')
        forceExit()
    }
}
token = window.localStorage.getItem('token').replace("\"","").replace("\"","")
checkForMFA(token) // for your own good.

//#endregion

//#region add my button
var ICEmbed = document.createElement('div');
ICEmbed.setAttribute('id', 'InvertedCode-EmbedBtnContainer')
ICEmbed.setAttribute('class', COMMONBUTTONCONTAINERCLASS)
buttondiv.appendChild(ICEmbed)

var ICEmbedBtn = document.createElement('button');
ICEmbedBtn.setAttribute('id', 'InvertedCode-EmbedBtn')
ICEmbedBtn.setAttribute('class', COMMONBUTTONCLASS)
ICEmbed.appendChild(ICEmbedBtn);

var ICEmbedBtnR1 = document.createElement('div')
ICEmbedBtnR1.setAttribute('class', COMMONBUTTONR1CLASS)
ICEmbedBtn.appendChild(ICEmbedBtnR1);

var ICEmbedBtnIcon = document.createElement('div')
ICEmbedBtnIcon.setAttribute('class', COMMONBUTTONICONCLASS)
ICEmbedBtnR1.appendChild(ICEmbedBtnIcon)

var ICEmbedBtnImg = document.createElement('img')
ICEmbedBtnImg.setAttribute('src', EMBEDBTNIMG)
ICEmbedBtnImg.setAttribute('class', COMMONBUTTONIMAGECLASS)
ICEmbedBtnIcon.appendChild(ICEmbedBtnImg);
//#endregion

//#region prepare to make the layer thing
function ICShowEditor() {
    layer = document.createElement('div')
    fr = document.createElement('div')
    frroot = document.createElement('div')
    titleInput = document.createElement('input')
    channelIdInput = document.createElement('input')
    savebtns = document.createElement('div')
    confirmBtn = document.createElement('button')
    cancelBtn = document.createElement('button')
    container.appendChild(layer)
    layer.appendChild(fr)
    fr.appendChild(frroot)
    frroot.appendChild(channelIdInput)
    frroot.appendChild(titleInput)
    frroot.appendChild(savebtns)
    savebtns.appendChild(confirmBtn)
    savebtns.appendChild(cancelBtn)

    confirmBtn.innerText = 'Confirm'
    confirmBtn.setAttribute('class', 'button-1vm4ZO button-38aScr lookFilled-1Gx00P colorBrand-3pXr91 sizeMedium-1AC_Sl grow-q77ONN')
    cancelBtn.innerText = 'Cancel'
    cancelBtn.setAttribute('class', 'button-1vm4ZO button-38aScr lookLink-9FtZy- colorPrimary-3b3xI6 sizeMedium-1AC_Sl grow-q77ONN')

    savebtns.setAttribute('class', 'flex-1xMQg5 flex-1O1GKY horizontal-1ae9ci horizontal-2EEEnY flex-1O1GKY directionRow-3v3tfG justifyStart-2NDFzi alignStretch-DpGPf3 noWrap-3jynv6 horizonal-2R4X-v')
    layer.setAttribute('class', 'layer-2KE1M9')
    fr.setAttribute('class', 'shaker-35cz7E')
    frroot.setAttribute('class', 'root-1ANs48 root-1gCeng small-3iVZYw fullscreenOnMobile-1bD22y')

    cancelBtn.addEventListener('click', ICHideEditor)
    savebtns.addEventListener('click', ICSaveEmbed)
}

function ICHideEditor() {
    layer.remove()
}

function ICSaveEmbed() {
    ICEmbedSend = {"type": "rich", "title": ""}
    if (titleInput.value) {
        ICEmbedSend.title = titleInput.value;
    }
    let packet = new Request(`https://discord.com/api/v8/channels/${channelIdInput.value}/messages`)
    packet.headers.append('authorization', TOKEN)
    res = fetch(packet)
    console.log(res)
    ICHideEditor()
}
//#endregion

//#region event handling

ICEmbedBtn.addEventListener('click', ICShowEditor);

//#endregion