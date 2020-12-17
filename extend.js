"use strict";

class EmbedButton {
    constructor(parent) {
        this.parent = parent;
        
        this.regen();
        return;
    }

    regen(parent = this.parent) {
        this.parent = parent;
        this.buttonRoot = document.createElement('div');
        this.button = document.createElement('button');
        this.buttonContent = document.createElement('div');
        this.icon = document.createElement('div');
        this.iconImg = document.createElement('img');

        this.parent.appendChild(this.buttonRoot);
        this.buttonRoot.appendChild(this.button);
        this.button.appendChild(this.buttonContent);
        this.buttonContent.appendChild(this.icon);
        this.icon.appendChild(this.iconImg);

        this.buttonRoot.setAttribute('class','buttonContainer-28fw2U');
        this.button.setAttribute('class','button-38aScr lookBlank-3eh9lL colorBrand-3pXr91 grow-q77ONN');
        this.buttonContent.setAttribute('class','contents-18-Yxp button-3AYNKb button-318s1X');
        this.icon.setAttribute('class', 'buttonWrapper-1ZmCpA');
        this.iconImg.setAttribute('class', 'icon-3D60ES');
        
        this.iconImg.setAttribute('src', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAiUlEQVRYR+1XQQ7AIAib/+tz+d8WjCwucW4HAQ/1oJ6g1JZgOdoSkdPuESeAonnqFp3cClQQJSu5gSCAmwEArtoTkWF8AqAI92HA2wW9BXpHhLngE4BrE5gEpwaogX00QBdEdsI2h1bSHy54GxpWP48Wa7kIgAyktOKhC1Yr/W+8/Fac/jnN/p5fko6gFWajqQQAAAAASUVORK5CYII=');
        return;
    }
}

class EmbedEditor {
    constructor(parent) {
        this.embed = {};
        this.parent = parent;
    }

    create() {
        this.layer = document.createElement('div');
        this.fr = document.createElement('div');
        this.focuslock = document.createElement('div');
        this.frroot = document.createElement('div');
        this.frcontent = document.createElement('div');
        this.footer = document.createElement('div');
        this.titleInput = document.createElement('div');
        this.titleLabel = document.createElement('h5');
        this.titleBox = document.createElement('input');
        this.descInput = document.createElement('div');
        this.descLabel = document.createElement('h5');
        this.descBox = document.createElement('input');
        this.urlInput = document.createElement('div');
        this.urlLabel = document.createElement('h5');
        this.urlBox = document.createElement('input');
        this.colorInput = document.createElement('div')
        this.colorLabel = document.createElement('h5');
        this.colorBox = document.createElement('input');

        this.footerEditor = document.createElement('div');
        this.imageEditor = document.createElement('div');
        this.thumbnailEditor = document.createElement('div');
        this.videoEditor = document.createElement('div');
        this.providerEditor = document.createElement('div');
        this.authorEditor = document.createElement('div');
        this.fieldEditor = document.createElement('div');
    
        this.saveButton = document.createElement('button');
        this.resetButton = document.createElement('button');

        this.parent.appendChild(this.layer);
        this.layer.appendChild(this.fr);
        this.fr.appendChild(this.focuslock);
        this.focuslock.appendChild(this.frroot);
        this.frroot.appendChild(this.frcontent);
        this.frroot.appendChild(this.footer);
        this.frcontent.appendChild(this.titleInput);
        this.titleInput.appendChild(this.titleLabel);
        this.titleInput.appendChild(this.titleBox);
        this.frcontent.appendChild(this.descInput);
        this.descInput.appendChild(this.descLabel);
        this.descInput.appendChild(this.descBox);
        this.frcontent.appendChild(this.urlInput);
        this.urlInput.appendChild(this.urlLabel);
        this.urlInput.appendChild(this.urlBox);
        this.frcontent.appendChild(this.colorInput);
        this.colorInput.appendChild(this.colorLabel);
        this.colorInput.appendChild(this.colorBox);
        this.frcontent.appendChild(this.footerEditor);
        this.frcontent.appendChild(this.imageEditor);
        this.frcontent.appendChild(this.thumbnailEditor);
        this.frcontent.appendChild(this.videoEditor);
        this.frcontent.appendChild(this.providerEditor);
        this.frcontent.appendChild(this.authorEditor);
        this.frcontent.appendChild(this.fieldEditor);
        this.footer.appendChild(this.saveButton);
        this.footer.appendChild(this.resetButton);

        this.layer.setAttribute('class', 'layer-2KE1M9');
        this.fr.setAttribute('class', 'shaker-35cz7E');
        this.focuslock.setAttribute('class', 'focusLock-Ns3yie');
        this.frroot.setAttribute('class','root-1ANs48 root-1gCeng small-3iVZYw fullscreenOnMobile-1bD22y');
        
        this.saveButton.textContent = 'Send';
        this.resetButton.textContent = 'Discard';

        this.titleLabel.textContent = 'Title';
        this.descLabel.textContent = 'Description';
        this.urlLabel.textContent = 'URL';
        this.colorLabel.textContent = 'Color';

        this.saveButton.addEventListener('click', this.send.bind(this));
        this.resetButton.addEventListener('click', this.remove.bind(this));
    }

    remove() {
        this.layer.remove();
    }

    send() {
        let packet = {
            content: "",
            tts: false,
            embed: {type: "rich"}
        };
        if (this.titleBox.value) packet.embed.title = this.titleBox.value;
        if (this.descBox.value) packet.embed.description = this.descBox.value;
        if (this.urlBox.value) packet.embed.url = this.urlBox.value;
        if (this.colorBox.value) packet.embed.color = this.colorBox.value;
        packet.embed.nonce = makeSnowflake().toString();
        fetch(`https://discord.com/api/v8/channels/${getChannelID()}/messages`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: token
            },
            body: JSON.stringify(packet)
            })
            .then((res) => {
                console.log(res)
            })
            .then(this.remove);
        this.remove();
        return;
    }
}

var sfinc = 0;

function makeSnowflake() {
    sf = new Date();
    sf = Number(sf) - 1420070400000;
    sf = sf.toString(2);
    if (sf.length < 42) {
        while (sf.length < 42) {
            sf = "0" + sf;
        }
    }
    sf += "00001";
    sf += "00000";
    sf += "000000000000";
    sf = parseInt(sf, 2);
    return sf;
}

function getChannelID() {
    return window.location.pathname.split('/')[3];
}

//#region pre init things
var CHATBARFORMCLASS = 'form-2fGMdU';

var chatform = document.getElementsByClassName(CHATBARFORMCLASS)[0];
var buttondiv = document.getElementsByClassName('buttons-3JBrkn')[0];
var container = document.getElementsByClassName('layerContainer-yqaFcK')[1];
//#endregion

const token = window.localStorage.getItem('token').replace("\"","").replace("\"","");

var EmbedBtn = new EmbedButton(buttondiv);
var EmbedEdtr = new EmbedEditor(container);

EmbedBtn.button.addEventListener('click', EmbedEdtr.create.bind(EmbedEdtr));