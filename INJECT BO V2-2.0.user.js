// ==UserScript==
// @name         INJECT BO V2
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  try to take over the world!
// @author       You
// @match        https://bo.sentralcargo.co.id/Dashboard/Inbox.aspx
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sentralcargo.co.id
// @grant        none
// ==/UserScript==

//varaibel


const injecting = () => {
let bhtml = `
<div id="topview">
	<div id="topleft">
		<div id="tl-top">
			<div id="tlt-left">
				<div class="card divpanel" data-panel="todo">
				  <div class="card-title">TO-DO <span>Activity</span></div>
				  <div class="card-body">
					  <div class="table-responsive">
						<table class="table table-hover table-condensed">
						  <thead>
							<tr><th style="width: 30px;">Status</th><th>Task</th></tr>
						  </thead>
						  <tbody>
						  </tbody>
						</table>
					  </div>
				  </div>
				  <div class="card-footer">FOOTER</div>
				</div>
			</div>
			<div id="tlt-right">
				<div class="card" >
				  <div class="card-title">FINANCE</div>
				  <div class="card-body"></div>
                  <div class="card-footer">SALDO</div>
                </div>
			</div>
		</div>
		<div id="tl-bottom">
			<div id="tlb-left">
				<div class="card" >
				  <div class="card-title">NETWORK TX/RX<span>Connection</span></div>
				  <div class="card-body">
                    <div class="table-responsive" style="height:50%;">
                      <table class="table-small">
                        <thead>
                          <tr><th>key</th><th>value</th><th>opt</th></tr>
                        </thead>
                        <tbody>
                          <tr><td>CNC</td><td>12:55:32</td><td>Injecting...</td></tr>
                          <tr><td>CNC</td><td>12:55:32</td><td>Injecting...</td></tr>
                          <tr><td>CNC</td><td>12:55:32</td><td>Injecting...</td></tr>
                        </tbody>
                      </table>
                    </div>
                    <div class="table-responsive" style="height:50%;">
                      <table class="table-small">
                        <thead>
                          <tr><th>key</th><th>value</th><th>opt</th></tr>
                        </thead>
                        <tbody>
                          <tr><td>CNC</td><td>12:55:32</td><td>Injecting...</td></tr>
                          <tr><td>CNC</td><td>12:55:32</td><td>Injecting...</td></tr>
                          <tr><td>CNC</td><td>12:55:32</td><td>Injecting...</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div class="card-footer">FOOTER</div>
                </div>
			</div>
			<div id="tlb-right">
				<div class="card" >
				  <div class="card-title">CHAT TRACKING</div>
				  <div class="card-body"></div>
                  <div class="card-footer">FOOTER</div>
                </div>
			</div>
		</div>
	</div>
	<div id="topright">
				<div class="card"  style="border: 1px solid darkred;">
				  <div class="card-title">
                    <div class="btn-group" role="group">
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        DataBase
                        <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                          <li><a href="#!" class="btnapp" data-action="database" data-option="sdrv">Setoran Driver</a></li>
                          <li><a href="#!" class="btnapp" data-action="database" data-option="scab">Setoran Cabang</a></li>
                          <li><a href="#!" class="btnapp" data-action="database" data-option="scod">Setoran Incoming</a></li>
                          <li><a href="#!" class="btnapp" data-action="database" data-option="sout">Setoran Outgoing</a></li>
                          <li role="separator" class="divider"></li>
                          <li><a href="#!" class="btnapp" data-action="database" data-option="ptcs">PettyCash</a></li>
                          <li><a href="#!" class="btnapp" data-action="database" data-option="bank">Bank</a></li>
                          <li><a href="#!" class="btnapp" data-action="database" data-option="cash">Kas Tunai</a></li>
                          <li><a href="#!" class="btnapp" data-action="database" data-option="dpst">Deposit</a></li>
                          <li><a href="#!" class="btnapp" data-action="database" data-option="sout">Setoran Outgoing</a></li>
                        </ul>
                      </div>
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Resi Menu
                        <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                          <li><a href="#!" class="btnapp" data-action="resi" data-option="cekresi">Cek Resi</a></li>
                          <li><a href="#!" class="btnapp" data-action="resi" data-option="cekongkir">Cek Ongkir</a></li>
                          <li><a href="#!" class="btnapp" data-action="resi" data-option="trackingresi">Tracking Resi</a></li>
                          <li><a href="#!" class="btnapp" data-action="resi" data-option="advancemenus">Advance Menus</a></li>
                        </ul>
                      </div>
                      <div class="btn-group" role="group">
                        <button type="button" class="btn btn-sm btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Finance
                        <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu">
                          <li><a href="#!" class="btnapp" data-action="finance" data-option="dashboard">DashBoard</a></li>
                          <li><a href="#!" class="btnapp" data-action="reqkas" data-option="new">Request Kas</a></li>
                          <li><a href="#!" class="btnapp" data-action="finance" data-option="pettycash">PettyCash</a></li>
                          <li><a href="#!" class="btnapp" data-action="finance" data-option="bank">Bank Mutation</a></li>
                          <li><a href="#!" class="btnapp" data-action="posh" data-option="new">Posh Plain</a></li>
                        </ul>
                     </div>
                    </div>
                    <span>MAIN CONSOLE</span>
                  </div>
				  <div class="card-body"></div>
                  <div class="card-footer">FOOTER</div>
                </div>
	</div>
</div>
<div id="bottomview">
</div>
<div id="dialog-message" style="display:none;">
  <div class="dialog-body">
  </div>
</div>
<div class="window" data-id="0" style="display:none;"></div>
<div id="taskview">
  <div class="btn-group dropup">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      <span class="glyphicon glyphicon-pushpin"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#!" class="btnapp" data-action="map" data-option="new">MAP</a></li>
      <li><a href="#!" class="btnapp" data-action="bo" data-option="new">Back Office</a></li>
      <li><a href="#!" class="btnapp" data-action="chatwa" data-option="new">Chat WA</a></li>
      <li><a href="#!" class="btnapp" data-action="notepad" data-option="new">Notepad</a></li>
      <li><a href="#!" class="btnapp" data-action="setcolor" data-option="new">Set Color</a></li>
      <li role="separator" class="divider"></li>
    </ul>
  </div>
  <div class="btn-group dropup">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled>
      <span class="glyphicon glyphicon-cog"></span>
    </button>
    <ul class="dropdown-menu">
      <li><a href="#!">Something else here</a></li>
      <li role="separator" class="divider"></li>
      <li><a href="#!">Separated link</a></li>
    </ul>
  </div>
  <style>
div#wincount {
    background: darkred;
    position: relative;
    top: -50px;
    left: -15px;
    width: 20px;
    border-radius: 10px;
    margin: 5px;
    color: white;
    text-align: center;
}
  </style>
  <div id="wincount" style="">
    <span>0</span>
  </div>
</div>
`;
    $('.container').html(`<div id="fsociety">${bhtml}</div>`);
    bhtml = null;
    return
}
//========================================= START CODE

let keepdisplay = false;
let windowElemen = {
    target:null,
    minwidth:0,
    minheight:0
}

//========================================= WINDOW
let windowcount = 0;
const windowIndex = (idDiv, del = null) => {
    let posisi = $('.window[data-id="'+idDiv+'"]').css("z-index");
    if(!del) $('.window[data-id="'+idDiv+'"]').css("z-index",windowcount)
    $('.window').each(function(index, element) {
        let zIndex = $(element).css('z-index');
        if(zIndex !== windowcount){
            if(zIndex > posisi){
                $(element).css('z-index',zIndex - 1)
            }
        }
    });
    return
};
const handleWindow = ($el) => {
    let option = $el.attr('data-option');
    if(option == 'new'){
        let lebar = $el.attr('data-width');
        let tinggi = $el.attr('data-height');
        let idDiv = randomId();
        let flag = 'New Window';
        return newWindow(idDiv,flag,lebar,tinggi,'');
    }
    if(option == 'close'){
        let idDiv = $el.attr('data-id');
        windowIndex(idDiv,true)
        $('.window[data-id="'+idDiv+'"]').draggable('destroy');
        $('.resized[data-id="'+idDiv+'"]').resizable('destroy');
        $('.window[data-id="'+idDiv+'"]').remove();
        windowcount--
        $('#wincount span').text(windowcount)
        $('.btnapp[data-action="window"][data-option="show"][data-id="'+idDiv+'"]').remove()
        //NULLIS
        idDiv = null;
        return
    }
    if(option == 'fullscreen'){
        let idDiv = $el.attr('data-id');
        let wdiv = $('.window[data-id="'+idDiv+'"]'); //get top and left
        let wresize = $('.resized[data-id="'+idDiv+'"]'); //get width and height
        let wbody = $('.dialog-body[data-id="'+idDiv+'"] '); //get width and height

        let toppoint = wdiv.offset().top;
        let leftpoint = wdiv.offset().left;
        let r_width = wresize.width();
        let r_height = wresize.height();
        let b_width = wbody.width();
        let b_height = wbody.height();

        $el.attr('data-position',`${toppoint}px-${leftpoint}px-${r_width}px-${r_height}px-${b_width}px-${b_height}px`);
        $el.attr('data-option','screen')
        wdiv.css({'top':'50px','left':'0'}).draggable("disable");
        wresize.css({width:'100vw',height:'calc( -55px + 100vh)'}).resizable("disable");
        wbody.css({width:'100%',height:'calc(100% - 85px)'})
        return
    }
    if(option === 'screen'){
        let idDiv = $el.attr('data-id');
        let wdiv = $('.window[data-id="'+idDiv+'"]');
        let wresize = $('.resized[data-id="'+idDiv+'"]');
        let wbody = $('.dialog-body[data-id="'+idDiv+'"] ');
        let position = ($el.attr('data-position')).split('-');

        let toppoint = position[0];
        let leftpoint = position[1];
        let r_width = position[2];
        let r_height = position[3];
        let b_width = position[4];
        let b_height = position[5];

        $el.attr('data-position','');
        $el.attr('data-option','fullscreen')
        wdiv.css({'top':toppoint,'left':leftpoint}).draggable("enable");
        wresize.css({'width':r_width,'height': r_height}).resizable("enable");
        wbody.css({'width':'100%','height': b_height})
        return
    }
    if(option == 'minimize'){
        let idDiv = $el.attr('data-id');
        let flag = $el.attr('data-flag');
        $('.window[data-id="'+idDiv+'"]').hide()
        //$('#taskview .dropdown-menu').append(`<li><a href="#!" class="btnapp" data-action="window" data-option="show" data-id="${idDiv}" data-flag="${flag}">${flag}</a></li>`)
        return
    }
    if(option == 'show'){
        let idDiv = $el.attr('data-id');
        windowIndex(idDiv)
        $('.window[data-id="'+idDiv+'"]').show()
        //$('.btnapp[data-action="window"][data-option="show"][data-id="'+idDiv+'"]').remove()
        return
    }
}
const newWindow = (idDiv,flag,lebar,tinggi,body,footer = false) => {
        if(checkFlag(flag)) return
        let divmaster = $('.window[data-id="0"]');
        let divclone = divmaster.clone();
        divclone.attr({'data-id':idDiv,'data-flag':flag});
        divclone.css({'width':lebar+'px', 'height': tinggi+'px', 'z-index':windowcount});
        divclone.append(`
<div class="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front ui-dialog-buttons resized" data-id="${idDiv}">
	<div class="ui-dialog-titlebar ui-corner-all ui-widget-header ui-helper-clearfix" style="height:35px">
		<span class="ui-dialog-title">🙈 ${flag}</span>
		<button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close btnapp" title="FullScreen" style="right: 50px;" data-action="window" data-option="fullscreen" data-id="${idDiv}">
			<span class="ui-button-icon ui-icon ui-icon-plus"></span>
		</button>
        <button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close btnapp" title="Minimize" style="right: 28px;" data-action="window" data-option="minimize" data-id="${idDiv}" data-flag="${flag}">
			<span class="ui-button-icon ui-icon ui-icon-minus"></span>
		</button>
        <button type="button" class="ui-button ui-corner-all ui-widget ui-button-icon-only ui-dialog-titlebar-close btnapp" title="Close" style="right: 5px;" data-action="window" data-option="close" data-id="${idDiv}">
			<span class="ui-button-icon ui-icon ui-icon-close"></span>
		</button>
	</div>
	<div style="height:${parseInt(tinggi)-(footer ? 42 : 77)}px" class="ui-dialog-content ui-widget-content dialog-body" data-id="${idDiv}">
    ${body}
	</div>
    ${footer ? '' : `
	<div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix" style="height:35px">
		<div class="ui-dialog-buttonset">
			<button type="button" class="ui-button ui-corner-all ui-widget btnapp" data-action="window" data-option="close" data-id="${idDiv}" data-flag="${flag}">Close</button>
		</div>
	</div>`}
</div>
  `);
        $('body').append(divclone);
        divclone.show();
        divclone.css({'top':'calc(50% - '+divclone.height()/2+'px)','left':'calc(50% - '+divclone.width()/2+'px)'})
        divclone.draggable({
            start: ()=>{
                windowIndex(idDiv)
            }
        });
        $('.resized[data-id="'+idDiv+'"]').resizable({
            minWidth:divclone.width(),
            minHeight:divclone.height(),
            alsoResize:'.dialog-body[data-id="'+idDiv+'"]'
        })
        windowcount++
        $('#wincount span').text(windowcount)
        $('#taskview .dropdown-menu').append(`<li><a href="#!" class="btnapp" data-action="window" data-option="show" data-id="${idDiv}" data-flag="${flag}">${flag}</a></li>`)
        //NULLIS
        divclone = null;
        flag = null;
        divmaster = null;
        lebar = null;
        tinggi = null;
        return
}
const checkFlag = (flag) => {
    let window = $('.window[data-flag="'+flag+'"]');
    if(window.length > 0){
        let minimize = $('.btnapp[data-option="show"][data-flag="'+flag+'"]');
        if(minimize.length > 0 ){
            minimize.trigger('click')
        }
        else{
            let id = window.attr('data-id');
            windowIndex(id);
        }
        return true
    }
    return false
}
const addbotton = (flag,text,cls ='',attr ='') => {
    $(`.window[data-flag="${flag}"] .ui-dialog-buttonset`).prepend(`<button type="button" class="ui-button ui-corner-all ui-widget ${cls}" ${attr} >${text}</button>`)
}
//=========================================


//========================================= DIALOG
const newDialog = (title,message,width = 400,height = 200,button = null) => {
    $( "#dialog-message .dialog-body").html(message);
    $( "#dialog-message" ).dialog({
        title:'🙉 '+title,
        position: { my: "center", at: "center", of: window },
        show: { effect: "clip", duration: 300 },
        modal: true,
        draggable: false,
        resizable: false,
        width:width,
        height:height,
        buttons: button ? button : {'Close': function() { $( this ).dialog("destroy") }},
        close: function(event, ui) {
                        $(this).dialog("destroy");
                    }
    });
}
const dialogAlert = (title, message) => newDialog(title,message);
const dialogConfirm = (title, message) => {
    let button = {
        'Ok': function() {
            $( this ).dialog("destroy");
            return true
        },
        'Cancel': function() {
            $( this ).dialog("destroy")
            return false
        }
    }
    newDialog(title, message,'400','200',button)
}
const renderBodyTableDialog = (data) => {
	let tbody ='';
	for(let i=0;i<data.length;i++){
		tbody += `<tr><td>${data[i].label}</td>`
		if(data[i].element){
			if(data[i].element === 'input'){
				tbody += `<td><input class="${data[i].obj.class}" ${data[i].obj.attribute} spellcheck="false" style="${data[i].obj.style}"></td></tr>`
			}
			else if(data[i].element === 'select'){
				tbody += `<td><select class="${data[i].obj.class}" ${data[i].obj.attribute} style="${data[i].obj.style}">`
				let opt = data[i].obj.option;
				for(let s=0;s<opt.length;s++){
					tbody += `<option value="${opt[s].key}">${opt[s].value}</option>`
				}
				tbody += `</select></td></tr>`
			}
			else if(data[i].element === 'textarea'){
				tbody += `<td><textarea class="${data[i].obj.class}" ${data[i].obj.attribute} spellcheck="false" style="${data[i].obj.style}"></textarea></td></tr>`
			}
			else if(data[i].element === 'table'){
				tbody += `<td><table class="${data[i].obj.class}" ${data[i].obj.attribute} style="${data[i].obj.style}"><tbody>`
				let opt = data[i].obj.option;
                let total = 0;
				for(let s=0;s<opt.length;s++){
					tbody += `<tr><td>${opt[s].key}</td><td style="text-align: right;">${addCommas(opt[s].value)}</td></tr>`;
                    total += opt[s].value;
				}
				tbody += `<tr><td>TOTAL</td><td style="text-align: right;">${addCommas(total)}</td></tr></tbody></table></td></tr>`
			}
            else if(data[i].element === 'button'){
                tbody += `<td><button type="button" class="${data[i].obj.class}" ${data[i].obj.attribute} style="${data[i].obj.style}">${data[i].obj.text}</button></td></tr>`
            }
		}
		else{
			tbody += `<td></td></tr>`
		}
	}
	return tbody
}
//=========================================


//========================================= MODAL
const modalCustom = (title,body,footer) => {
    let el_modaltitle = $('#xmodal .modal-title');
    let el_modalbody = $('#xmodal .modal-body');
    let el_modalfooter = $('#xmodal .modal-footer');

    el_modaltitle.text(title);
    el_modalbody.html(body);
    el_modalfooter.html(footer);
    return
}
//=========================================


//========================================= LOOP COOKIES
let intervalId = null;
const keepSessionAlive = async (cookie) => {
    let el_noti = $('.navbar-left span');
    try{
        let resp = await fetch('https://bo.sentralcargo.co.id/Dashboard/Inbox.aspx', {header: {'Cookie': cookie}});
        if (!resp.ok) {
            throw new Error("Permintaan gagal. Kode status: " + resp.status);
        }
        let respontxt = await resp.text();
        if(respontxt.includes('btnLogin')){
            console.log("Lost");
            el_noti.removeClass('glyphicon-signal');
            el_noti.addClass('glyphicon-remove')
        }
        else{
            console.log("Connected");
            el_noti.removeClass('glyphicon-remove');
            el_noti.addClass('glyphicon-signal');
        }
    }
    catch (error) {
        console.log("Terjadi kesalahan:", error);
    };
}
const loopingCookie = async (cookie) => {
    intervalId = setInterval(() => {
        keepSessionAlive(cookie);
    }, 60000);
};
const stopInterval = () => {
  clearInterval(intervalId);
  console.log('Interval stopped');
};
//=========================================


//========================================= FETCH BO
const baseUrl = 'https://bo.sentralcargo.co.id';
const fetchget = async (url) => {
    $('#load').show();
    try{
        let resp = await fetch(url);
        if (!resp.ok) {
            throw new Error("Permintaan gagal. Kode status: " + resp.status);
        }
        let respontxt = await resp.text();
        $('#load').hide();
        return respontxt;
    }
    catch (error) {
        $('#load').hide();
        return alert("Terjadi kesalahan:", error);
    };
}
const fetchpost = async (url, target, formDataArray) => {
    $('#load').show();
    try{
        let rsp = await fetchget(url);
        let parser = new DOMParser();
        let xml = parser.parseFromString(rsp, 'text/html');
        let viewState = xml.getElementById('__VIEWSTATE').value;
        let eventValidation = xml.getElementById('__EVENTVALIDATION').value;
        let formToPost = new FormData();
        formDataArray.forEach(item => {
            formToPost.append(item.name, item.value);
        });
        formToPost.append("__EVENTTARGET",target); //btn search = "ctl00$cphBody$btnSearch"
        formToPost.append("__VIEWSTATE",viewState);
        formToPost.append("__EVENTVALIDATION",eventValidation);
        formToPost.append("__ASYNCPOST","true");
        let resp = await fetch(url, {method: "POST", body: formToPost});
        if (!resp.ok) {
            throw new Error("Permintaan gagal. Kode status: " + resp.status);
        }
        let respontxt = await resp.text();
        $('#load').hide();
        return respontxt;
    }
    catch (error) {
        $('#load').hide();
        return alert("Terjadi kesalahan:", error);
    };
}
//=========================================


//========================================= FETCH DB
const codeGs = '1w8TC6IYWfLJ7Ga5bvy0O8cob1qMZ7idGnFrQMW4RnVg';
const urlGSheet = 'https://docs.google.com/spreadsheets/d/'+codeGs+'/gviz/tq?';
const urlGApps = 'https://script.google.com/macros/s/AKfycbx6f6Mg1dQgu7AwZCQlNMHzIONjVe7_AeL3qRZfaz7bs1KI2voKuJEu_Vb4Qff10oADrA/exec';

const makerJSON = d => {
    let h = d.table.cols;
    let v = d.table.rows;
    let jsonArray = [];
    let title = [];
    for(let i=0; i<h.length; i++) {
        title.push(h[i].label)
    }
    let value = [];
    for (let j = 0; j < v.length; j++) {
        let rowData = v[j].c;
        let val = [];
        for (let k = 0; k < rowData.length; k++) {
            let isi ='';
            if(rowData[k] != null){
                if(rowData[k].v != null){
                    let konten = rowData[k].v
                    if((String(konten)).includes('Date')){
                        isi = rowData[k].f
                    }else{
                        isi = konten
                    }
                }else{isi=''}
            }
            else{isi=''}
            val.push(isi);
        }
        value.push(val)
    }
    for(let l = 0; l < value.length; l++) {
        let line = value[l];
        let json = new Object();
        for(let m = 0; m<title.length; m++){
            json[title[m]] = line[m];
        }
        jsonArray.push(json);
    };
    return jsonArray
};
const getDatabase = async (q, sname) => {
    $('#load').show();
    try{
        let query = encodeURIComponent(q);
        let vrl = `${urlGSheet}&sheet=${sname}&tq=${query}`;
        let response = await fetch(vrl)
        if (!response.ok) {
            throw new Error("Permintaan gagal. Kode status: " + response.status);
        }
        let data = await response.text();
        let res = data.substr(47).slice(0,-2);
        let respons = JSON.parse(res);
        let result = makerJSON(respons);
        $('#load').hide();
        return result
    }
    catch (error) {
        $('#load').hide();
        console.log("Terjadi kesalahan:", error);
        throw error;

    };
};
const postDatabase = async (action,formArr) => {
    let formToPost = new FormData();
    formToPost.append("action", action);
    formToPost.append("data", JSON.stringify(formArr));
    try{
        $('#load').show();
        let response = await fetch(urlGApps,{
            method: "POST",
            body:formToPost
        })
        if (!response.ok) {
        throw new Error("Permintaan gagal. Kode status: " + response.status);
        }
        let result = await response.json()
        $('#load').hide();
        return result
    }
    catch (error) {
        $('#load').hide();
        dialogAlert('ERROR', stringify(error));
        console.log("Terjadi kesalahan:", error);
        throw error;
    };
};
const gsConvertToJson = (arr, type = null) => {
	if(!arr.length) return {};
	let result = {};
    if(type == 'su'){
        arr.forEach(item => {
            result[item.id] = { ...item,
                               source:item.source ? JSON.parse(item.source) : {},
                               source_sum:toInt(item.source_sum),
                               used:item.used ? JSON.parse(item.used) : {},
                               used_sum:toInt(item.used_sum),
                               sisa:toInt(item.sisa),
                              }
        });
    }
    else if(type == 'dk'){
        result = arr.reduce((acc, item) => {
            let { saldo, ...rest} = item;
            acc[item.id] = {...rest,
                            debit:toInt(item.debit),
                            kredit:toInt(item.kredit)
                           };
            return acc;
        }, {});
    }
    else{
        arr.forEach(item => {
            result[item.id] = item;
        });
    }
    return result
};
const calc_status_su = (data, sourceObj = {}, usedObj = {}) => {
	data.source = {...data.source, ...sourceObj};
	let items = Object.keys(data.source);
	let amount = 0;
	for(let item of items){
		amount += data.source[item].amount;
	}
	data.source_sum = amount;

	data.used = {...data.used, ...usedObj};
	amount = 0;
	items = Object.keys(data.used);
	for (let item of items){
		amount += data.used[item].amount;
	}
	data.used_sum = amount;

	data.sisa = data.source_sum - data.used_sum;
	data.status = (data.sisa == 0) ? 'done' : 'active';
};
const stringify = data => {
    return JSON.stringify(data)
};
//=========================================


//========================================= UTILITY
/*
*/
const setColorHandler = $el => {
    let option = $el.attr('data-option')
    if(option === 'new') {
        let title = 'SET COLOR';
        let body = `
    <div class="controls">
        <label for="red">R:</label>
        <input type="range" id="red" class="handleapp" data-action="setcolor" data-option="set" name="red" min="0" max="255" value="0">
        <span id="redValue">0</span>
        <label for="green">G:</label>
        <input type="range" id="green" class="handleapp" data-action="setcolor" data-option="set" name="green" min="0" max="255" value="0">
        <span id="greenValue">0</span>
        <label for="blue">B:</label>
        <input type="range" id="blue" class="handleapp" data-action="setcolor" data-option="set" name="blue" min="0" max="255" value="0">
        <span id="blueValue">0</span>
    </div>
    <div id="colorBox" style="width:100%;">Color Box</div>
    `;
        newDialog(title,body,400,400)
        return
    }
    if(option === 'set'){
        let red = $('#red').val();
        let green = $('#green').val();
        let blue = $('#blue').val();
        $('#redValue').text(red);
        $('#greenValue').text(green);
        $('#blueValue').text(blue);
        $('#colorBox').css('background-color',`rgb(${red}, ${green}, ${blue})`)
        return
    }
    if(option === 'save'){
        let red = $('#red').val();
        let green = $('#green').val();
        let blue = $('#blue').val();
        return
    }
}
/*
param : Object - object with keys attribut
return : Boolean
*/
const isEmpty = obj => {
  return Object.keys(obj).length === 0;
}
const randomId = (type = null) => {
    let prefix = type ? type : '';
    let rand = Math.floor(Math.random() * 9000) + 1000;
    return prefix+rand.toString()
}
const delay = ms => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
};
const parseElement = str => {
    let part = str.split('_');
    let tc = part[0].split('.');
    let tag = tc[0];
    let attr = part[1] ? part[1] : '';
    let style = part[2] ? ` style="${part[2]}"` : '';
    let cl = '';
    if(tc.length > 1) {
        for(let i = 1; i < tc.length; i++){
            cl += tc[i]+ ' ';
        }
    }
    let element = {
        start:`<${tag} class="${cl}" ${attr+style}>`,
        end:`</${tag}>`
    }
    return element
}
const createHtml = obj => {
    let out = '';
    let parents = Object.keys(obj);
    if(parents.length === 0) return out;
    for(let parent of parents){
        let p = parseElement(parent)
        out += p.start;
        if(obj[parent].value){
            out += obj[parent].value;
        }
        if(obj[parent].child){
            out += createHtml(obj[parent].child);
        }
        out += p.end;
    }
    return out;
}
const stringToDate = input => {
    const dateRegex = /\((\d{2}) (\w{3}) (\d{2})/;
    const match = input.match(dateRegex);
    if (match) {
        const day = match[1];
        const month = match[2];
        const year = `20${match[3]}`;
        const monthMap = {
            Jan: '01',
            Feb: '02',
            Mar: '03',
            Apr: '04',
            May: '05',
            Jun: '06',
            Jul: '07',
            Aug: '08',
            Sep: '09',
            Oct: '10',
            Nov: '11',
            Dec: '12'
        };
        const monthNumber = monthMap[month];
        if (monthNumber) {
            return `${day}-${monthNumber}-${year}`;
        }
    }
    return null;
};
const googleDate = (day = 0) => {
    let [d,m,y] = dayFrom(day).split('-');
    return `${m}-${d}-${y}`
}
const dayFrom = (day = 0) => {
    let today = new Date();
    if(day != 0) today.setDate(today.getDate() - day);
    let d = String(today.getDate()).padStart(2, '0');
    let m = String(today.getMonth() + 1).padStart(2, '0');
    let y = today.getFullYear();
    return d + '-' + m+ '-' + y;
}
const timeStamp = (day = 0) => {
  let now = new Date();
  if(day != 0){
     now.setDate(now.getDate() - day);
     now.setHours(0, 0, 0, 0);
  }
  let timestamp = Math.floor(now.getTime() / 1000);
  return timestamp;
}
const readTime = (time, option = null) => {
	let date = new Date(time* 1000);
	let th = date.getFullYear();
	let bl = date.getMonth() + 1; // Ingat bahwa bulan dimulai dari 0, sehingga kita tambahkan 1.
	let hr = date.getDate();
	let jm = date.getHours();
	let mn = date.getMinutes();
	let dt = date.getSeconds();

    if(!option) return `${duadigit(hr)}-${duadigit(bl)}-${th} ${duadigit(jm)}:${duadigit(mn)}:${duadigit(dt)}`;
    else if(option === 'date') return `${duadigit(hr)}-${duadigit(bl)}-${th}`;
    else if(option === 'time') return `${duadigit(jm)}:${duadigit(mn)}:${duadigit(dt)}`;
    else return time
}
const duadigit = (i) =>{
	return i < 10 ? '0'+i : i
}
//=========================================


//========================================= DATABASE ID
let _id = {}
const updateIdow = async () => {
    let rsp = await getDatabase('select *','last_position');
    _id = splitId(rsp)
    console.log(_id)
}
const splitId = arr => {
    let result = {};
    let data = arr[0];
    //let keys = Object.keys(data);
    let v = {}
    for(let key in data){
        let split=null;
        if(key.length == 4) split = data[key].split('#');
        v[key] = split ? {id:split[0],row:split[1]} : data[key]
    }
    result[data.id] = v
    return result
}
const makeId = type => {
    if(!_id || !_id.last_id[type]) return false;
    let cId = _id.last_id[type].id;
    let row = _id.last_id[type].row;
    let sequenceNumber = parseInt(cId.slice(4), 10);
    let nextSequenceNumber = sequenceNumber + 1;
    let nextId = cId.slice(0, 4) + nextSequenceNumber.toString().padStart(4, '0');
    _id.last_id[type] = {id:nextId,row:++row};
    return _id.last_id[type];
};
const fakeId = (type = null) => {
    let prefix = type ? type : '';
    let rand = Math.floor(Math.random() * 9000) + 1000;
    let id = prefix+rand.toString()
    return {id,row:rand}
}
//=========================================


//========================================= KARYAWAN
let _pic = {};
const updatepic = async () => {
    let rsp = await getDatabase('select A, C, D WHERE E = "active"','pic');
    _pic = gsConvertToJson(rsp)
}
const selectPic = () =>{
    let pics = Object.keys(_pic);
    let el_option = '';
    for(let pic of pics){
        el_option += `<option value="${_pic[pic].name}">${_pic[pic].name}</option>`
    }
    return el_option
}
const arrPic = () => {
    let pics = Object.keys(_pic);
    let el_option = [];
    for(let pic of pics){
        el_option.push({key:_pic[pic].name,value:_pic[pic].name})
    }
    return el_option
}
//=========================================


//========================================= DATABASE resi_tagihan_incoming
let _resi_tagihan_incoming = {};
//=========================================


//========================================= DATABASE resi_tagihan_outgoing
let _resi_tagihan_outgoing = {};
//=========================================


//========================================= DATABASE setoran_driver
let _setoran_driver = {};
//=========================================


//========================================= DATABASE setoran_cod
let _setoran_cod = {};
//=========================================


//========================================= DATABASE setoran_outgoing
let _setoran_outgoing = {};
//=========================================


//========================================= DATABASE bons
let _bons = {};
const updatebons = async ()=>{
    let rsp = await getDatabase('select * WHERE K = "active"','bons');
    //_bons = gsConvertToJson(rsp,'su');
    let result = {};
    let bypic = {}
    if(rsp.length){
        rsp.forEach(item => {
            result[item.id] = { ...item, source:item.source ? JSON.parse(item.source) : {}, used:item.used ? JSON.parse(item.used) : {} };
            if(bypic[item.pic] && bypic[item.pic].bons.length){
                bypic[item.pic].bons.push(item.id)
            }
            else bypic[item.pic] = {bons:[item.id]}
        });
    }
    _bons = {...result, ...bypic}
}
//=========================================


//========================================= DATABASE POSH
let _posh = {};
const updateposh = async ()=>{
    let rsp = await getDatabase('select * WHERE J = "active"','posh');
    _posh = gsConvertToJson(rsp,'su')
}
//=========================================


//========================================= DATABASE loan
let _loan = {};
//=QUERY(A:K; "SELECT A, C, D WHERE C >= '01-01-2024' AND C <= '01-08-2024'"; 1)
// format date di google sheet terbaca mm-dd-yy
//=========================================


//========================================= DATABASE bank
let _bank = {};
//=========================================


//========================================= DATABASE cash
let _cash = {};
//=========================================


//========================================= DATABASE kas_out
let _kas_out = {};
//=========================================


//========================================= DATABASE req_kas
let _req_kas = {};
//=========================================


//========================================= DATABASE bonus
let _bonus = {};
//=========================================

//========================================= DATABASE pettycash
let _pettycash = {};
//=========================================

//========================================= DATABASE etol
let _etol = {};
//=========================================

//========================================= DATABASE deposit
let _deposit = {};
const updatedeposit = async () => {
    let rsp = await getDatabase('SELECT * WHERE K = "active"','deposit');
    _deposit = gsConvertToJson(rsp,'su')
}
//=========================================

//========================================= DATABASE opname
let _opname = {};
//=========================================

//========================================= ADD REQ KAS
const requestkas = async ($el) =>{
    let option = $el.attr('data-option');
    if(option == 'new'){
        if(isEmpty(_req_kas)){
            let rsp = await getDatabase('SELECT * WHERE G = "active"','req_kas');
            _req_kas = gsConvertToJson(rsp)
            if(!isEmpty(_req_kas)) return dialogAlert('INFO','Permintaan kas sebelumnya belum di proses !')
        }
        let title = 'PERMINTAAN KAS CABANG';
        let body = `<div class="table-responsive" style="height:100%"><table class="table-dialog">`;
        let bonsItem = [];
        let bonsText = '';
        if(!isEmpty(_bons)){
            for(let bon in _bons){
                if(!bon.startsWith('bons')) continue
                bonsItem.push({key:_bons[bon].detail,value:_bons[bon].source_sum})
                bonsText += `${_bons[bon].detail} : ${addCommas(_bons[bon].source_sum)}\n`
            }
        }
        let sal = _id.last_id;
        let data = [
            {label:'DATE',element:'input',obj:{class:'text-right reqkas',attribute:`type="text" data-type="date" value="${dayFrom()}" disabled`,style:''}},
            {label:'Saldo PettyCash',element:'input',obj:{class:'text-right reqkas',attribute:`type="text" data-type="ptcs" value="${addCommas(sal.ptcs_sum)}" disabled`,style:''}},
            {label:'Saldo E-Tol',element:'input',obj:{class:'text-right reqkas',attribute:`type="text" data-type="etol" value="${addCommas(sal.etol_sum)}" disabled`,style:''}},
            {label:'Sisa Kas',element:'input',obj:{class:'text-right reqkas',attribute:`type="text" data-type="sisakas" value="${addCommas(0)}" disabled`,style:''}},
            {label:'PIC',element:'input',obj:{class:'reqkas',attribute:'type="text" data-type="pic" ',style:''}},
            {label:'Jumlah (Rp)',element:'input',obj:{class:'reqkas',attribute:'type="ribuan" data-type="jumlah" ',style:''}},
            {label:'Keperluan',element:'textarea',obj:{class:'reqkas',attribute:'data-type="keperluan" ',style:''}},
        ];
        let tbody = renderBodyTableDialog(data);
        body += tbody+'</table></div>';
        let button = {
            'Simpan':async function(){
                let sal_ptcs = $('.reqkas[data-type="ptcs"]').val();
                let sal_sisakas = $('.reqkas[data-type="sisakas"]').val();
                let keperluan = $('.reqkas[data-type="keperluan"]').val();
                let seri = makeId('rkas')
                let data = {
                    [seri.id]:{
                        id:seri.id,
                        row:seri.row,
                        date:timeStamp(),
                        pic:$('.reqkas[data-type="pic"]').val(),
                        detail:`Saldo PettyCash : ${sal_ptcs}\n${bonsText}\nSisa Kas : ${sal_sisakas}\nKeperluan : ${keperluan}`,
                        amount:parseInt($('.reqkas[data-type="jumlah"]').val().replace(/,/g, '')),
                        status:'active'
                    }
                };
                _req_kas = data;
                $( this ).dialog("destroy");
                let d = await postDatabase('update',{req_kas:data});
                console.log(d)
            },
            'Batal':function(){
                $( this ).dialog("destroy");
            }
        };
        newDialog(title,body,500,400,button)
        return
    }
    if(option == 'load'){
        if(isEmpty(_req_kas)){
            let rsp = await getDatabase('SELECT * WHERE G = "active"','req_kas');
            _req_kas = gsConvertToJson(rsp)
            if(isEmpty(_req_kas)) return dialogAlert('INFO','Tidak ada transaksi permintaan kas !')
        }
        let items = Object.keys(_req_kas);
        let tbody = '<tbody>';
        for(let item of items){
            tbody += `<tr>
            <td>${readTime(_req_kas[item].date)}</td><td>${_req_kas[item].pic}</td><td>${(_req_kas[item].detail).replace(/\n/g,'<br>')}</td>
            <td>${addCommas(_req_kas[item].amount)}</td><td>${_req_kas[item].status}</td></tr>`;
        }
        tbody += '</tbody>';
        let title = 'KONFIRMASI PERMINTAAN KAS';
        let body = `<div class="table-responsive" style="height:220px"><table class="table-dialog table-bordered">
        <thead><tr><th>Date</th><th>PIC</th><th>Detail</th><th>Jumlah (Rp)</th><th>Status</th></tr></thead>
        ${tbody}
        </table></div>
<div class="row">
  <div class="col-sm-12">
    <div class="col-sm-6">
      <label class="control-label-text-left col-sm-3" for="imageupload">File</label>
      <div class="col-sm-9">
        <input type="file" name="imageupload" class="form-control handleapp" id="imgAdd" accept="image/*" data-action="tagihan" data-option="load"></input>
      </div>
      <label class="control-label-text-left col-sm-3" for="imagedesk">Catatan</label>
      <div class="col-sm-9">
        <input type="text" name="imagedesk"  id="image_catatan" class="form-control input-sm">
      </div>
    </div>
    <div class="col-sm-6">
      <img id="imgfile" style="max-width: 270px;;max-height: 280px;;" src=""></img>
    </div>
  </div>
</div>
        `;
        let button = {
            'Accept':async function(){
                let seri = makeId('bank')
                let date = timeStamp()
                _bank[seri.id] = {
                    id:seri.id,
                    date,
                    row:seri.row,
                    pic:_req_kas[items[0]].pic,
                    detail:'Tambahan Kas Cabang',
                    kredit:_req_kas[items[0]].amount,
                    reff:items[0]
                }
                _req_kas[items[0]] = {..._req_kas[items[0]],status:'Accept',fu_date:date,reff:seri.id}
                let rsp = await postDatabase('update',{req_kas:_req_kas,bank:_bank});
                console.log(rsp)
                $( this ).dialog("destroy");
            },
            'Reject':async function(){
                let img = $('#imgfile').attr('src');
                if(!img) return $('#imgAdd').focus();
                let catatan = $('#image_catatan').val();
                if(catatan == '') return $('#image_catatan').focus();
                _req_kas[items[0]] = {..._req_kas[items[0]],status:'Reject',fu_date:timeStamp(), doc:img.split(',')[1], catatan}
                await postDatabase('update',{req_kas:_req_kas})
                _req_kas = {};
                $( this ).dialog("destroy");
            },
            'Cancel':function(){
                $( this ).dialog("destroy");
            }
        }
        newDialog(title,body,600,600,button)
        return
    }
}

//=========================================

const addSource = ($el) =>{
    return new Promise((resolve) => {
        let title = 'TESSSSSSSSSSSSSSSST';
        let body = `<div class="table-responsive" style="height:100%"><table class="table-dialog">`;
        let data = [
            {label:'DATE',element:'input',obj:{class:'',attribute:`type="text" value="${dayFrom()}" disabled`,style:''}},
            {label:'PIC',element:'input',obj:{class:'inputpic',attribute:'type="text" spellcheck="false"',style:''}},
        ];
        body += renderBodyTableDialog(data);
        body += '</table></div>';
        let button = {
            'Simpan':function(){
                let pic = $('.inputpic').val();
                resolve(pic);
                $( this ).dialog("destroy");
            },
            'Batal':function(){
                $( this ).dialog("destroy");
            }
        };
        newDialog(title,body,400,400,button)
    })
}

const addUsed = ($el)=>{
    let type = $el.attr('data-type');
    //
    if(type == 'new'){
        let driver = $el.attr('data-driver');
        let modalbody = `
<div class="panel panel-danger" style="margin-bottom: 0;">
  <div class="panel-body">
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addusedtype">Type</label>
      <div class="col-sm-8">
        <select name="addusedtype" id="addused_type" class="form-control input-sm handleapp" data-action="addused" data-type="select_id">
          <option selected="selected" value="">Pilih Penggunaan</option>
          <option value="kout">Pengeluaran Kas</option>
          <option value="bons">Bon Sementara</option>
          <option value="scab">Setoran Cabang</option>
          <option value="loan">Minus</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addusedid">ID</label>
      <div class="col-sm-8">
        <input type="text" name="addusedid" id="addused_id" class="form-control input-sm" value="" disabled>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addusedamount">Amount</label>
      <div class="col-sm-8">
        <input type="number" name="addusedamount" id="addused_amount" class="form-control input-sm">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addused_pic">PIC</label>
      <div class="col-sm-8">
        <select name="addused_pic" id="addused_pic" class="form-control input-sm">
          <option selected="selected" value="">Pilih PIC</option>${selectPic()}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="adduseddetail">Deskirsi</label>
      <div class="col-sm-8">
        <input type="text" name="adduseddetail" id="addused_detail" class="form-control input-sm">
      </div>
    </div>
  </div>
</div>
        `;
        let modalfooter = `
        <button type="button" class="btn btn-default" data-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-success btnapp" data-action="addused" data-type="save" data-driver="${driver}">Simpan</button>
        `;
        modalCustom('Add Used (Source : '+ addCommas(_dataDriver[driver].totalsource - _dataDriver[driver].totalused)+')',modalbody,modalfooter);
        $('#xmodal').modal('show');
        return
    }
    else if (type == 'save'){
        let id = makeId($('#addused_id').val())
        if(id == '') return $('#addused_type').focus()
        let pic = $('#addused_pic').val();
        if(pic == '') return $('#addused_pic').focus()
        let amount = $('#addused_amount').val()
        if(amount == '') return $('#addused_amount').focus()
        let driver = $el.attr('data-driver');
        let detail = $('#addused_detail').val();

        $('.tbody_used[data-driver="'+driver+'"]').append(`
        <tr class="tr_used" data-id="${id}">
          <td ><a href="#!" class="btnapp" data-action="showid" data-type="${id}">${id}</a></td>
          <td>${addCommas(amount)}</td>
          <td><button type="button" class="btn btn-danger xbtn btnapp" data-action="addused" data-type="delete" data-driver="${driver}" data-id="${id}" data-amount="${amount}">x</button></td>
        </tr>`);
        _dataDriver[driver].used[id] = {id,amount:parseInt(amount),detail,pic};
        _dataDriver[driver].totalused += parseInt(amount);
        updatetagihan(driver);
        saveId($('#addsource_type').val(),id)
        $('#xmodal').modal('hide');
        return
    }
    else if (type == 'delete'){
        let id = $el.attr('data-id');
        let driver = $el.attr('data-driver');
        let amount = $el.attr('data-amount');
        delete _dataDriver[driver].used[id]
        _dataDriver[driver].totalused -= parseInt(amount);
        updatetagihan(driver);
        $(`.tr_used[data-id="${id}"]`).remove()
        return
    }
    else if (type == 'select_id'){
        $('#addused_id').val($el.val());
    }
    else{

    }
}//del

const addBons = ($el)=>{
    let type = $el.attr('data-type');
    //
    if(type == 'new'){
        let driver = $el.attr('data-driver');
        let modalbody = `
<div class="panel panel-danger" style="margin-bottom: 0;">
  <div class="panel-body">
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbonstype">Type</label>
      <div class="col-sm-8">
        <select name="addbonstype" id="addbons_type" class="form-control input-sm handleapp" data-action="addbons" data-type="select_type">
          <option selected="selected" value="">Pilih Type</option>
          <option value="source">Source</option>
          <option value="used">Used</option>
        </select>
      </div>
    </div>
    <div id="addbons_panel"></div>
  </div>
</div>
        `;
        let modalfooter = `
        <button type="button" class="btn btn-default" data-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-success btnapp" data-action="addbons" data-type="save" data-driver="${driver}">Simpan</button>
        `;
        modalCustom('Add Bons',modalbody,modalfooter);
        $('#xmodal').modal('show');
        return
    }
    else if (type == 'select_type'){
        let type = $el.val();
        if(type == 'source'){
            let optionbons = ''
            let pics = Object.keys(_bons);
            for(let pic of pics){
                if(_bons[pic].handle) continue;
                optionbons += `<option value="${_bons[pic].id}">${_bons[pic].date} - ${_bons[pic].pic} - ${addCommas(_bons[pic].amount)}</option>`
            }
            $('#addbons_panel').html(`
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbonstype">Source</label>
      <div class="col-sm-8">
        <select name="addbonstype" id="addbons_type" class="form-control input-sm handleapp" data-action="addbons" data-type="select_source">
          <option selected="selected" value="">Pilih Source</option>${optionbons}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbonsid">ID</label>
      <div class="col-sm-8">
        <input type="text" name="addbonsid" id="addbons_id" class="form-control input-sm" value="" disabled>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbonsamount">Amount</label>
      <div class="col-sm-8">
        <input type="number" name="addbonsamount" id="addbons_amount" class="form-control input-sm" disabled>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbonsdetail">Deskirsi</label>
      <div class="col-sm-8">
        <input type="text" name="addbonsamount" id="addbons_detail" class="form-control input-sm" disabled>
      </div>
    </div>
            `)
        }
        else if(type == 'used'){
            $('#addbons_panel').html(`
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbonstype">Used</label>
      <div class="col-sm-8">
        <select name="addbonstype" id="addused_type" class="form-control input-sm handleapp" data-action="addbons" data-type="select_used">
          <option selected="selected" value="">Pilih Penggunaan</option>
          <option value="kout">Pengeluaran Kas</option>
          <option value="bons">Bon Sementara</option>
          <option value="cash">Import to Tunai</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbonsdid">ID</label>
      <div class="col-sm-8">
        <input type="text" name="addbonsid" id="addbons_id" class="form-control input-sm" value="" disabled>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbonsamount">Amount</label>
      <div class="col-sm-8">
        <input type="number" name="addbonsamount" id="addbons_amount" class="form-control input-sm">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbons_pic">PIC</label>
      <div class="col-sm-8">
        <select name="addbons_pic" id="addbons_pic" class="form-control input-sm">
          <option selected="selected" value="">Pilih PIC</option>${selectPic()}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbonsdetail">Deskirsi</label>
      <div class="col-sm-8">
        <input type="text" name="addbonsdetail" id="addbons_detail" class="form-control input-sm">
      </div>
    </div>
            `)
        }
    }
    else if (type == 'select_source'){
        let id = $el.val();
        let data = _bons[id];
        $('#addbons_id').val(data.id)
        $('#addbons_amount').val(data.amount)
        $('#addbons_detail').val(data.detail)
        return
    }
    else if (type == 'select_used'){
        $('#addbons_id').val(makeId($el.val()));
        return
    }
    else if (type == 'save'){
        let type = $('#addbons_type').val()
        let id = $('#addbons_id').val()
        let amount = $('#addbons_amount').val()
        let driver = $el.attr('data-driver');
        let detail = $('#addbons_detail').val();
        let addrow = '';
        if(type == 'source'){
            _dataDriver[driver].bons[id] = {id,amount:parseInt(amount),detail,type};
            _dataDriver[driver].totalbonssource ? _dataDriver[driver].totalbonssource += parseInt(amount) : _dataDriver[driver].totalbonssource = parseInt(amount);
            _dataDriver[driver].totalbons = _dataDriver[driver].totalbonsused ? _dataDriver[driver].totalbonssource - _dataDriver[driver].totalbonsused : _dataDriver[driver].totalbonssource - 0;
            _bons[id].handle = true;
            addrow = `
        <tr class="tr_bons" data-id="${id}">
          <td>${id}</td>
          <td>${addCommas(amount)}</td>
          <td></td>
          <td><button type="button" class="btn btn-danger xbtn btnapp" data-action="addbons" data-type="delete" data-driver="${driver}" data-id="${id}" data-amount="${amount}" data-cat="${type}">x</button></td>
        </tr>`;
        }
        else if(type == 'used'){
            let pic = $('#addbons_pic').val()
            _dataDriver[driver].bons[id] = {id,amount:parseInt(amount),detail,type,pic};
            _dataDriver[driver].totalbonsused ? _dataDriver[driver].totalbonsused += parseInt(amount) : _dataDriver[driver].totalbonsused = parseInt(amount);
            _dataDriver[driver].totalbons = _dataDriver[driver].totalbonssource ? _dataDriver[driver].totalbonssource - _dataDriver[driver].totalbonsused : 0 - _dataDriver[driver].totalbonsused;
            addrow = `
        <tr class="tr_bons" data-id="${id}">
          <td>${id}</td>
          <td></td>
          <td>${addCommas(amount)}</td>
          <td><button type="button" class="btn btn-danger xbtn btnapp" data-action="addbons" data-type="delete" data-driver="${driver}" data-id="${id}" data-amount="${amount}" data-cat="${type}">x</button></td>
        </tr>`;
        }
         $('.tbody_bons[data-driver="'+driver+'"]').append(addrow)
        updatetagihan(driver);
        saveId($('#addbons_type').val(),id)
        $('#xmodal').modal('hide');
        return
    }
    else if (type == 'delete'){
        let id = $el.attr('data-id');
        let amount = $el.attr('data-amount');
        let driver = $el.attr('data-driver');
        let cat = $el.attr('data-cat');
        delete _dataDriver[driver].bons[id]
        if(cat == 'source'){
            _dataDriver[driver].totalbonssource -= parseInt(amount)
            _bons[id].handle = false;
        }
        else if(cat == 'used'){
            _dataDriver[driver].totalbonsused -= parseInt(amount)
        }
        _dataDriver[driver].totalbons = _dataDriver[driver].totalbonssource - _dataDriver[driver].totalbonsused
        updatetagihan(driver);
        $(`.tr_bons[data-id="${id}"]`).remove()
        return
    }
    else{

    }
}//del

const uploadImage = ($el) => {
    let type = $el.attr('data-type');
    if(type == 'upload'){
        let id = $el.attr('data-id')
        let driver = $el.attr('data-driver')
        let tagihan = $el.attr('data-tagihan')
        let modalbody = `
        <label>${id}</label><br><label>Rp. ${addCommas(tagihan)}</label>
        <input type="file" class="form-control handleapp" id="imgAdd" accept="image/*" data-action="uploadimage" data-type="load"></input>
        <img id="imgfile" style="max-width: 100%;height: auto;"></img><br>
        <input type="text" class="form-control" id="image_catatan">
        `
        let modalfooter = `
        <button type="button" class="btn btn-default" data-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-success btnapp" data-action="uploadimage" data-type="save" data-id="${id}" data-driver="${driver}">Simpan</button>
        `;
        modalCustom('Upload Image',modalbody,modalfooter);
        $('#xmodal').modal('show');
        return
    }
    else if(type == 'save'){
        let img = $('#imgfile').attr('src');
        if(!img) return $('#imgAdd').focus();
        let catatan = $('#image_catatan').val();
        if(catatan == '') return $('#image_catatan').focus();
        let id = $el.attr('data-id');
        let driver = $el.attr('data-driver');
        _dataDriver[driver].resitf[id].doc = img.split(',')[1];
        _dataDriver[driver].resitf[id].catatan = catatan;
        $(`.btnapp[data-action="uploadimage"][data-type="delete"][data-id="${id}"]`).show()
        $(`.btnapp[data-action="uploadimage"][data-type="upload"][data-id="${id}"] span`).removeClass('glyphicon-floppy-open').addClass('glyphicon-eye-open')
        $(`.btnapp[data-action="uploadimage"][data-type="upload"][data-id="${id}"]`).attr('data-type', 'view')
        $('#xmodal').modal('hide');
    }
    else if(type == 'delete'){
        let conf = confirm("Delete Image ?");
        if(!conf) return
        let id = $el.attr('data-id');
        let driver = $el.attr('data-driver');
        _dataDriver[driver].resitf[id].doc = null;
        _dataDriver[driver].resitf[id].catatan = null;
        $(`.btnapp[data-action="uploadimage"][data-type="view"][data-id="${id}"] span`).removeClass('glyphicon-eye-open').addClass('glyphicon-floppy-open')
        $(`.btnapp[data-action="uploadimage"][data-type="view"][data-id="${id}"]`).attr('data-type', 'upload')
        $el.hide()
    }
    else if(type == 'view'){
        let id = $el.attr('data-id');
        let driver = $el.attr('data-driver');
        let modalbody =`
        <img id="imgfile" style="max-width: 100%;height: auto;" src="${'data:image/png;base64,'+_dataDriver[driver].resitf[id].doc}"></img><br>
        <input type="text" class="form-control" id="image_catatan" value="${_dataDriver[driver].resitf[id].catatan}">
        `;
        let modalfooter = `<button type="button" class="btn btn-default" data-dismiss="modal">Batal</button>`;
        modalCustom('Bukti Transfer - '+id,modalbody,modalfooter);
        $('#xmodal').modal('show');
    }
    else if(type == 'load'){
        let fileInput = document.querySelector("#imgAdd");
        if (fileInput.files[0].type.startsWith("image/")){
            setPriviewImage(fileInput.files[0]);
        }
        return
    }
};

const setPriviewImage = (file) =>{
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
        document.querySelector("#imgfile").src = fileReader.result;
    }
}

const task = ($el) => {
    let type = $el.attr('data-type')
    if(type == 'absen'){
    }
    else if(type == 'resi_tagihan_incoming'){
        console.log(_resi_tagihan_incoming)
    }
    else if(type == 'resi_tagihan_outgoing'){
        console.log(_resi_tagihan_outgoing)
    }
    else if(type == 'setoran_driver'){
        console.log(_setoran_driver)
    }
    else if(type == 'setoran_cabang'){
        console.log(_setoran_cabang)
    }
    else if(type == 'setoran_cod'){
        console.log(_setoran_cod)
    }
    else if(type == 'setoran_outgoing'){
        console.log(_setoran_outgoing)
    }
    else if(type == 'bons'){
        console.log(_bons)
    }
    else if(type == 'loan'){
        console.log(_loan)
    }
    else if(type == 'bank'){
        console.log(_bank)
    }
    else if(type == 'cash'){
        console.log(_cash)
    }
    else if(type == 'kas_out'){
        console.log(_kas_out)
    }
    else if(type == 'req_kas'){
        console.log(_req_kas)
    }
    else if(type == 'bonus'){
        console.log(_bonus)
    }
    else if(type == 'pettycash'){
        console.log(_pettycash)
    }
    else if(type == 'etol'){
        console.log(_etol)
    }
    else if(type == 'deposit'){
        console.log(_deposit)
    }
    else if(type == 'opname'){
        console.log(_opname)
    }
    else if(type == 'last_position'){
        console.log(_newid)
    }
    else if(type == 'datadriver'){
        console.log(_dataDriver)
    }
}

const typelampiran = (data) => {
    //
}



const typelist = (data) => {

}


//========================================= ABSENSI
const absensiControler = () => {
    let dataAbsen = {};
    return ($el) => {
        let option = $el.attr('data-option');
        if(option == 'new'){
            if(_todo.absen !== '') return newDialog('INFO','Absensi selesai diinput !. Terima Kasih')
            let body = `
<div class="panel panel-default" style="margin-bottom: 0;">
  <div class="panel-body">
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="shift">Shift</label>
      <div class="col-sm-8">
        <select name="shift" id="shift" class="form-control input-sm">
          <option selected="selected" value="pagi">Pagi (08:00 - 16:00)</option>
          <option value="sore">Sore (16:00 - 23:00)</option>
          <option value="pro">Pro (00:00 - 23:59)</option>
          <option value="veteran">Veteran (Senin - Minggu)</option>
          <option value="legend">Legend (Join - Resign)</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="tkaryawan">Total</label>
      <div class="col-sm-8">
        <input type="number" name="tkaryawan" id="tkaryawan" class="form-control input-sm">
      </div>
    </div>
<div class="row"><div class="col-sm-12">
      <label class="control-label-text-left col-sm-4" for="pic">Absen :</label>
      <div class="col-sm-8">
        <select name="pic" id="pic" class="form-control input-sm">
          <option selected="selected" value="">Pilih PIC</option>
          ${selectPic()}
        </select>
      <select name="keterangan" id="keterangan" class="form-control input-sm">
          <option selected="selected" value="">Pilih Keterangan</option>
          <option value="sakit">Sakit</option>
          <option value="ijin">Ijin</option>
          <option value="alpa">Alpa</option>
          <option value="mangkir">Mangkir</option>
          <option value="kedubai">ke Dubai</option>
        </select><button type="button" class="btn btn-default btnapp" data-action="absensi" data-option="addpic" style="float: right;">add</button></div>
      <div class="col-sm-4">
      </div>
    </div></div>
    <div>
      <table class="table table-hover" id="table_absensi">
        <thead>
          <tr><th>Karyawan</th><th style="width:50px;">Ket</th><th style="width:30px;">...</th></tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  </div>
</div>
        `;
            let button = {
                'Simpan': async function() {
                    let seri = makeId('absn');
                    let total_karyawan = $('#tkaryawan').val()
                    let shift = $('#shift').val()
                    dataAbsen.result = {
                        [seri.id]:{
                            id:seri.id,
                            row:seri.row,
                            date:googleDate(),
                            shift,
                            detail:JSON.stringify(dataAbsen.absen ? dataAbsen.absen : ''),
                            total_karyawan,
                        }
                    }
                    _todo.absen = seri.id;
                    $( this ).dialog("destroy")
                    await postDatabase('update',{absensi:dataAbsen.result,todo:{[_todo.id]:_todo}})
                    await panelTodo()
                    dataAbsen = {};
                },
                'Close': function() {
                    dataAbsen = {};
                    $( this ).dialog("destroy")
                }
            }
            let flag = 'Absensi Karyawan';
            newDialog(flag,body,400,400,button)
            return
        }
        if(option == 'addpic'){
            let pic = $('#pic').val();
            let ket = $('#keterangan').val();
            if(dataAbsen.absen) return
            dataAbsen.absen = {
                name:pic,
                ket
            }
            $('#table_absensi tbody').append(`
        <tr class="trabsensi" data-pic="${pic}">
          <td>${pic}</td>
          <td>${ket}</td>
          <td style="background-color:grey;text-align:center;cursor:pointer;" class="btnapp" data-action="absensi" data-option="del" data-pic="${pic}">x</td>
        </tr>
        `);
            return
        }
        if(option == 'del'){
            let pic = $el.attr('data-pic')
            delete dataAbsen[pic]
            $(`.trabsensi[data-pic="${pic}"]`).remove()
            return
        }
        return
    }
}
const absensiHandler = absensiControler();
//=========================================


//========================================= RESI HANDLER
const resiHandler = async ($el) => {
    let option = $el.attr('data-option');
    if(option == 'cekresi'){
        let idDiv = randomId();
        let flag = 'Cek Resi';
        let body = `
        <div  style="display: flex;margin-top:20px;">
          <input type="number" class="form-control inputresi" placeholder="Search for...">
          <button class="btn btn-danger btnapp" type="button"  data-action="resi" data-option="cariresi" >Search</button>
        </div>
        `
        return newWindow(idDiv,flag,'250','115',body,true)
    }
    if(option == 'cekongkir'){}
    if(option == 'trackingresi'){}
    if(option == 'advancemenus'){}
    if(option == 'cariresi'){
        let resi = $('.inputresi').val();
        $el.prop('disabled',true)
        let rsp = await cekresiApi(resi);
        $el.prop('disabled',false)
        if(rsp.status == 'ok'){
            let idDiv = randomId();
            let data = rsp.data;
            let body = `
<div class="row" style="margin:0;">
  <div div="col-sm-12">
    <div class="col-sm-10">
        <table class="table table-hover">
            <tbody>
              <tr><td style="width: 100px;">Alert</td><td style="width: 200px;" colspan="3">: <span class="label label-danger">OVER</span></td></tr>
              <tr><td style="width: 100px;">Pengirim</td><td style="width: 200px;">: ${data.CustName}</td><td style="width: 100px;">Penerima</td><td style="width: 200px;">: ${data.RecipientName}</td></tr>
              <tr><td>Alias</td><td>: ${data.SenderAlias}</td><td>Tujuan</td><td>: ${data.DestName}</td></tr>
              <tr><td>Telp</td><td>: ${data.CustMobilePhoneNo}</td><td>Telp.</td><td>: ${data.RecipientMobilePhoneNo}</td></tr>
            </tbody>
        </table>
    </div>
    <div class="col-sm-2" style="display: inline-grid;">
      <button class="btn btn-default btn-sm btnapp">Copy</button>
      <button class="btn btn-default btn-sm btnapp">Note</button>
      <button class="btn btn-default btn-sm btnapp">to Case</button>
      <button class="btn btn-default btn-sm btnapp">to GCab</button>
      <button class="btn btn-default btn-sm btnapp" data-action="chatwa" data-option="new">Make Chat</button>
    </div>
  </div>
</div>
            `;
            return newWindow(idDiv,resi + ' - ' + data.RecipientName,'800','600',body,true)
        }
        else{
            newDialog('FAILED',rsp.data)
        }
        return
    }
};
const cekresiApi = async (resi) => {
    if (!/^\d{8,11}$/.test(resi)) {
        return { status: 'error', data: '❌ *Resi not valid !*' };
    };
    try {
        let res = await fetch(baseUrl+`/api/ResiInfo/${resi}`);
        let data = await res.json();
        if (data || data.CustName){
        	return { status: 'ok', data };
        }
    }
    catch (error) {
        return { status: 'error', data: error.message };
    };
};
//url foto pod https://s3.ap-southeast-1.amazonaws.com/sc.pod/${resi}_${nourut}
//=========================================


//========================================= FINANCE HANDLER
const financeHandler = async ($el) => {
    let option = $el.attr('data-option');
    if(option == 'dashboard'){
        return
    }
    if(option == 'pettycash'){
        let idDiv = randomId();
        let flag = 'PettyCash';
        newWindow(idDiv,flag,'800','600',``)
        return
    }
    if(option == 'bank'){
        // format date di google sheet terbaca mm-dd-yy
        let rsp = await getDatabase(`SELECT * WHERE C >= "${timeStamp(7)}" AND C <= "${timeStamp()}"`,'bank');
        let data = gsConvertToJson(rsp);
        showTableWindow(data, 'MUTASI BANK')
        return
    }
    if(option == 'cash'){
        // format date di google sheet terbaca mm-dd-yy
        let rsp = await getDatabase(`SELECT * WHERE C >= "${timeStamp(7)}" AND C <= "${timeStamp()}"`,'cash');
        let data = gsConvertToJson(rsp);
        showTableWindow(data, 'KAS TUNAI')
        return
    }
    if(option == 'ptcs'){
        // format date di google sheet terbaca mm-dd-yy
        let rsp = await getDatabase(`SELECT * WHERE C >= "${timeStamp(7)}" AND C <= "${timeStamp()}"`,'pettycash');
        let data = gsConvertToJson(rsp);
        showTableWindow(data, 'PETTYCASH')
        return
    }
    if(option == 'bons'){
        let rsp = await getDatabase('SELECT * WHERE K = "active"','bons');
        let data = gsConvertToJson(rsp,'su');
        if(isEmpty(data)) return dialogAlert('INFO','No Data !');
        showTableWindow(data, 'BON SEMENTARA')
        return
    }
    if(option == 'other'){
        return
    }
}
//=========================================


//========================================= GMAP
const gmap = ($el) => {
    let option = $el.attr('data-option')
    if(option == 'new'){
        let idDiv = randomId();
        let flag = 'MAP-'+idDiv;
        let body = `
<div class="row" style="height:45px">
  <div class="col-12"  style="display: flex;margin: 5px 15px;">
    <input type="text" class="form-control isrcMap" placeholder="Masukkan nama lokasi...">
    <button type="button" class="btn btn-danger btnapp" data-action="map" data-option="search" data-id="${idDiv}" style="margin-left: 5px;">Go !</button>
  </div>
</div>
<div class="row" style="height:calc(100% - 45px)">
  <div class="col-md-12 divmaps" style="height: 100%;">
  </div>
</div>
        `
        newWindow(idDiv,flag,'800','600',body,true)
        return
    };
    if(option == 'search'){
        let id = $el.attr('data-id');
        let scrMap = $('.window[data-id="'+id+'"] .isrcMap').val();
        $('.window[data-id="'+id+'"] .divmaps').html(`
            <iframe scrolling="no" src="https://maps.google.com/maps?z=16&hl=en&output=embed&q=${scrMap}" style="width: 100%;height: 100%;"></iframe>
        `);
        return
    }
}
//=========================================


//========================================= BO
const boHandler = ($el) => {
    let option = $el.attr('data-option')
    if(option == 'new'){
        let flag = 'Back Office';
        if(checkFlag(flag)) return
        let idDiv = randomId();
        let body = `
<div class="row" style="height:100%">
  <div class="col-md-12 divmaps" style="height: 100%;">
    <iframe src="https://bo.sentralcargo.co.id/Order/ManifestGeneratorForm.aspx" style="width: 100%;height: 100%;"></iframe>
  </div>
</div>
        `
        newWindow(idDiv,flag,'1000','800',body,true)
    };
}
//=========================================


//========================================= NOTEPAD
const notepad = async ($el) => {
    let option = $el.attr('data-option');
    if(option === 'new'){
        let rand = randomId()
        let idDiv = 'ntpd-'+rand;
        let flag = 'NOTEPAD - PID : '+rand;
        let body = `
<div class="row" style="margin: 0 -10px;height: calc(100% - 40px);">
  <div class="col-12" style="height: 100%;">
    <textarea class="form-control notepad" data-id="${idDiv}" style="resize: none;height: 100%;font-family: monospace;" spellcheck="false"></textarea>
  </div>
</div>
	<div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix" style="height:35px">
		<div class="ui-dialog-buttonset">
          <button type="button" class="ui-button ui-corner-all ui-widget btnapp" data-action="notepad" data-option="save" data-id="${idDiv}">Save</button>
		  <button type="button" class="ui-button ui-corner-all ui-widget btnapp" data-action="window" data-option="close" data-id="${idDiv}">Close</button>
		</div>
	</div>`;
        newWindow(idDiv,flag,'400','600',body,true)
        return
    }
    if(option === 'save'){
        let id = $el.attr('data-id');
        let filename = prompt("File Name :");
        if(filename === null) return $(`.notepad[data-id="${id}"]`).focus()
        let date = new Date();
        let seri = makeId('ntpd')
        let text = $(`.notepad[data-id="${id}"]`).val();
        await postDatabase('update',{notepad:{[seri.id]:{id:seri.id,row:seri.row,date,filename,text}}})
        return
    }
    if(option === 'open'){
        return
    }
}
//=========================================


//========================================= ADD POSH
const poshHandler = async ($el) => {
    let option = $el.attr('data-option');
    if(option === 'new'){
        if(isEmpty(_posh)){
            await updateposh;
        }
        let poshitems = Object.keys(_posh);
        let poshTableBody = '';
        let poshTableSource ='';
        for(let item of poshitems){
            if(_posh[item].source !== '{}'){
                let poshSource = _posh[item].source
                poshTableSource += `<table class="table table-condensed table-bordered" style="margin: -1px 0;"><tbody id="tbodyposh">`;
                let sources = Object.keys(poshSource);
                let random = randomId()
                for (let source of sources){
                    poshTableSource += `
<tr class="trposh" data-id="${random}">
<td>${poshSource[source].pic}</td>
<td>${poshSource[source].detail}</td>
<td>${addCommas(poshSource[source].amount)}</td>
<td style="text-align: center;"><button type"button" style="border: 0;" class="btnapp" data-action="posh" data-option="del" data-id="${random}">x</button></td>
</tr>`;
                }
                poshTableSource += `</tbody></table>`
            }
            poshTableBody += `<tr>
<td>${_posh[item].id}</td>
<td>${_posh[item].date}</td>
<td style="padding: 0;">${poshTableSource}</td>
<td>${addCommas(_posh[item].amount)}</td>
<td><span class="label label-primary">Active</span></td>
<td>${_posh[item].catatan}</td>
</tr>`
        }
        let title = 'Posh Plain Budgeting';
        let message =`
<div class="panel panel-default">
  <div class="panel-body">
    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-8">
            <div class="form-group">
              <label class="control-label-text-left col-sm-4" for="poshdate">Date</label>
              <div class="col-sm-8">
                <input type="text" name="poshdate" id="poshdate" class="form-control input-sm" value="${dayFrom()}" disabled="">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label-text-left col-sm-4" for="poshdesk">Deskripsi</label>
              <div class="col-sm-8">
                <input type="text" name="poshdesk" id="poshdesk" class="form-control input-sm">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label-text-left col-sm-4" for="poshamount">Amount (Rp.)</label>
              <div class="col-sm-8">
                <input type="number" name="poshamount" id="poshamount" class="form-control input-sm">
              </div>
            </div>
            <div class="form-group">
              <label class="control-label-text-left col-sm-4" for="poshpic">PIC</label>
              <div class="col-sm-8">
                 <select name="poshpic" id="poshpic" class="form-control input-sm">
                   <option selected="selected" value="">Pilih PIC</option>
                   ${selectPic()}
                 </select>
              </div>
            </div>
            <div class="form-group">
              <label class="control-label-text-left col-sm-4" for="poshcatatan">Catatan</label>
              <div class="col-sm-8">
                <input type="text" name="poshcatatan" id="poshcatatan" class="form-control input-sm">
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <button type="button" class="btn btn-default btnapp" data-action="posh" data-option="add">ADD</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="tbl-container">
          <div class="tbl-fixed">
            <table class="table table-condensed table-hover table-bordered">
              <caption>List Posh Plain</caption>
              <thead>
                <tr>
                  <th>id</th>
                  <th>date</th>
                  <th>source</th>
                  <th>amount</th>
                  <th>status</th>
                  <th>catatan</th>
                </tr>
              </thead>
              <tbody>${poshTableBody}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        `;
        let button = {
            'Send': async function() {
                let pic = $('#rkaspic').val();
                if(pic === '') return $('#rkaspic').focus();
                let amount = parseInt($('#rkasjumlah').val());
                if(amount === '') return $('#rkasjumlah').focus();
                let keperluan = $('#rkasdetail').val();
                if(keperluan === '') return $('#rkasdetail').focus();
                let detail = `Saldo PettyCash : ${saldo.ptcs_sum}
${itemBons.text}
${'List posh plain'}
Sisa Kas : ${$('#rkassisakas').val()}
Keperluan : ${keperluan}`;
                let catatan = $('#rkascatatan').val();
                let seri = makeId('rkas')
                let data = {
                    [seri.id]:{
                        id:seri.id,
                        row:seri.row,
                        date:dayFrom(),
                        pic,
                        detail,
                        amount,
                        status:'active',
                        reff:'no-reff',
                        fu_date:'',
                        catatan
                      }
                    };
                $( this ).dialog("destroy")
                // await postDatabase('update',{'req_kas':data})
                //let rsp = await postDatabase('update',{'req_kas':data})
                //console.log(data)
            },
            'Close': function() {
                $( this ).dialog("destroy")
            }
        }
        newDialog(title,message,800,600,button)
        return
    }
    if(option === 'add'){
        let pic = $('#poshpic').val()
        if(pic === '') return $('#poshpic').focus();
        let amount = parseInt($('#poshamount').val());
        if(amount === '' || amount === 0) return $('#poshamount').focus();
        let detail = $('#poshdesk').val();
        if(detail === '') return $('#poshdesk').focus();
        let random = randomId();
        $('#tbodyposh').append(`
<tr class="trposh" data-id="${random}">
<td>${pic}</td>
<td>${detail}</td>
<td>${addCommas(amount)}</td>
<td style="text-align: center;">
  <button type"button" style="border: 0;" class="btnapp" data-action="posh" data-option="del" data-id="${random}">x</button>
</td>
</tr>`);
        return
    }
    if(option === 'del'){
        let id = $el.attr('data-id')
        $(`.trposh[data-id="${id}"]`).remove()
    }
}
//=========================================


//========================================= RESI TAGIHAN
const tagihanControler = () => {
    let dataTagihan = {};
    return ($el) => {
        if(Object.keys(dataTagihan).length === 0){
            dataTagihan = {
                datadriver:{},
                datasource:{},
                dataused:{},
                dataincoming:{},
                dataoutgoing:{}
            }
        }
        let option = $el.attr('data-option');
        if(option == 'new'){
            if(checkFlag('Setoran Driver')) return;
            let title = 'Tagihan Driver '+dayFrom();
            let message = `
<div class="panel panel-default" style="margin-bottom: 0;">
  <div class="panel-body">
    <label>Select range :</label>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="idatefrom">From</label>
      <div class="col-sm-8">
        <input type="date" name="idatefrom" id="idatefrom" class="form-control input-sm">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="idateto">To</label>
      <div class="col-sm-8">
        <input type="date" name="idateto" id="idateto" class="form-control input-sm">
      </div>
    </div>
  </div>
</div>
        `;
            let button = {
                'Show': function() {
                    let dfrom = $('#idatefrom').val();
                    let dto = $('#idateto').val();
                    let url = `https://bo.sentralcargo.co.id/Dashboard/BranchResiForm.aspx?KeyId=20122&TrxDtFrom=${dfrom}%2012:00:00%20AM&TrxDtTo=${dto}%2012:00:00%20AM&SisaTagihTujuan=1&PODStat=Report`;
                    $( this ).dialog("destroy")
                    resiTagihan(url, dataTagihan)
                },
                'Close': function() {
                    $( this ).dialog("destroy")
                }
            }
            newDialog(title,message,400,220,button)
            return
        }
        if(option == 'filter'){
            let driver = $el.attr('data-driver');
            if ($el.prop('checked')) {
                $(`.trfilter[data-driver="${driver}"]`).show();
                $(`.panelsdrv[data-driver="${driver}"]`).show();
            }
            else {
                $(`.trfilter[data-driver="${driver}"]`).hide();
                $(`.panelsdrv[data-driver="${driver}"]`).hide();
            }
            return
        }
        if(option == 'tunai'){
            let driver = $el.attr('data-driver');
            let resi = $el.attr('data-resi');
            let tagihan = parseInt($el.attr('data-tagihan'));
            if ($el.prop('checked')) {
                $(`.cbtransfer[data-resi="${resi}"]`).prop('disabled', true);
                $(`.trfilter[data-resi="${resi}"]`).css('background','chartreuse')
                $(`.tbodysource[data-driver="${driver}"]`).append(`<tr class="trsource" data-id="${resi}"><td>${resi}</td><td>${addCommas(tagihan)}</td><td></td></tr>`)
                temp_sdrv[driver].amount += tagihan;
                temp_sdrv[driver].tagihantunai += tagihan;
                temp_sdrv[driver].tagihantotal += tagihan;
                temp_sdrv[driver].source[resi] = {id:resi,amount:tagihan}
                let route = _resi_tagihan_incoming[resi] ? {tagihan:_resi_tagihan_incoming[resi],setoran:temp_scod} : {tagihan:_resi_tagihan_outgoing[resi],setoran:temp_sout};
                route.tagihan.type_bayar = 'tunai';
                route.tagihan.rekon_date = '';
                route.tagihan.doc = '';
                route.tagihan.catatan = '';
                route.setoran.source[resi] = {
                    id:resi,
                    amount:tagihan
                }
                route.setoran.amount += tagihan;
                route.setoran.sisa += tagihan;
                calcTagihan(driver)
            }
            else {
                $(`.cbtransfer[data-resi="${resi}"]`).prop('disabled', false);
                $(`.trfilter[data-resi="${resi}"]`).css('background','')
                $(`.trsource[data-id="${resi}"]`).remove()
                temp_sdrv[driver].amount -= tagihan;
                temp_sdrv[driver].tagihantunai -= tagihan;
                temp_sdrv[driver].tagihantotal -= tagihan;
                delete temp_sdrv[driver].source[resi];
                let route = _resi_tagihan_incoming[resi] ? {tagihan:_resi_tagihan_incoming[resi],setoran:temp_scod} : {tagihan:_resi_tagihan_outgoing[resi],setoran:temp_sout};
                route.tagihan.type_bayar = '';
                delete route.setoran.source[resi]
                route.setoran.amount -= tagihan;
                route.setoran.sisa -= tagihan;
                calcTagihan(driver)
            }
            return
        }
        if(option == 'transfer'){
            let driver = $el.attr('data-driver');
            let resi = $el.attr('data-resi');
            let tagihan = parseInt($el.attr('data-tagihan'));
            if ($el.prop('checked')) {
                $(`.cbtunai[data-resi="${resi}"]`).prop('disabled', true);
                $(`.trfilter[data-resi="${resi}"]`).css('background','gold');
                $(`.btnimageupload[data-id="${resi}"]`).show();
                temp_sdrv[driver].tagihantransfer += tagihan;
                temp_sdrv[driver].tagihantotal += tagihan;
                let route = _resi_tagihan_incoming[resi] ? {tagihan:_resi_tagihan_incoming[resi]} : {tagihan:_resi_tagihan_outgoing[resi]};
                route.tagihan.type_bayar = 'transfer';
                route.tagihan.rekon_date = '';
                route.tagihan.doc = '';
                route.tagihan.catatan = '';
                calcTagihan(driver)
            }
            else {
                $(`.cbtunai[data-resi="${resi}"]`).prop('disabled', false);
                $(`.trfilter[data-resi="${resi}"]`).css('background','')
                $(`.btnimageupload[data-id="${resi}"]`).hide();
                $(`.btnimagedelete[data-id="${resi}"]`).hide()
                temp_sdrv[driver].tagihantransfer -= tagihan;
                temp_sdrv[driver].tagihantotal -= tagihan;
                let route = _resi_tagihan_incoming[resi] ? {tagihan:_resi_tagihan_incoming[resi]} : {tagihan:_resi_tagihan_outgoing[resi]};
                route.tagihan.type_bayar = '';
                calcTagihan(driver)
            }
            return
        }
        if(option == 'upload'){
            let title = 'Upload Image';
            let message = `
<div class="panel panel-danger" style="margin-bottom: 0;">
  <div class="panel-body">
    <div class="form-group">
      <label class="control-label-text-left col-sm-3" for="imageupload">File</label>
      <div class="col-sm-9">
        <input type="file" name="imageupload" class="form-control handleapp" id="imgAdd" accept="image/*" data-action="tagihan" data-option="load"></input>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-3" for="imagedesk">Catatan</label>
      <div class="col-sm-9">
        <input type="text" name="imagedesk"  id="image_catatan" class="form-control input-sm">
      </div>
    </div>
  </div>
</div><br>
<img id="imgfile" style="max-width: 100%;height: auto;"></img><br>
        `;
            let button = {
                'Upload': function() {
                    let img = $('#imgfile').attr('src');
                    if(!img) return $('#imgAdd').focus();
                    let catatan = $('#image_catatan').val();
                    if(catatan == '') return $('#image_catatan').focus();
                    let id = $el.attr('data-id');
                    let driver = $el.attr('data-driver');
                    let type = $el.attr('data-type');
                    let db_ = null;
                    if(type == 'incoming'){
                        db_ = _resi_tagihan_incoming[id];
                    }
                    else{
                        db_ = _resi_tagihan_outgoing[id];
                    }
                    db_.status = 'done';
                    db_.rekon_date = dayFrom();
                    db_.doc = img.split(',')[1];
                    db_.catatan = catatan;
                    $(`.btnimagedelete[data-id="${id}"]`).show()
                    $(`.btnimageupload[data-id="${id}"] span`).removeClass('glyphicon-floppy-open').addClass('glyphicon-eye-open')
                    $(`.btnimageupload[data-id="${id}"]`).attr('data-option', 'view')
                    $( this ).dialog("destroy")
                },
                'Close': function() {
                    $( this ).dialog("destroy")
                }
            }
            newDialog(title,message,400,600,button)
            return
        }
        if(option == 'load'){
            let fileInput = document.querySelector("#imgAdd");
            if (fileInput.files[0].type.startsWith("image/")){
                setPriviewImage(fileInput.files[0]);
            }
            return
        }
        if(option == 'view'){
            let id = $el.attr('data-id');
            let type = $el.attr('data-type');
            let db_ = null;
            if(type == 'incoming'){
                db_ = _resi_tagihan_incoming[id];
            }
            else{
                db_ = _resi_tagihan_outgoing[id];
            }
            let title = 'View Image';
            let message = `
<div class="panel panel-danger" style="margin-bottom: 0;">
  <div class="panel-body">
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="imagedesk">Catatan</label>
      <div class="col-sm-8">
        <input type="text" name="imagedesk"  id="image_catatan" class="form-control input-sm" value="${db_.catatan}" disabled>
      </div>
    </div>
  </div>
</div><br>
<img id="imgfile" style="max-width: 100%;height: auto;" src="${'data:image/png;base64,'+db_.doc}"></img><br>
        `;
            newDialog(title,message,400,600)
            return
        }
        if(option == 'delete'){
            let id = $el.attr('data-id');
            let type = $el.attr('data-type');
            let db_ = null;
            if(type == 'incoming'){
                db_ = _resi_tagihan_incoming[id];
            }
            else{
                db_ = _resi_tagihan_outgoing[id];
            }
            db_.rekon_date = '';
            db_.doc = '';
            db_.catatan = '';
            $el.hide()
            $(`.btnimageupload[data-id="${id}"] span`).removeClass('glyphicon-eye-open').addClass('glyphicon-floppy-open')
            $(`.btnimageupload[data-id="${id}"]`).attr('data-option', 'upload')
            return
        }
        if(option == 'addsource'){
            let driver = $el.attr('data-driver');
            let title = 'Add Source';
            let message = `
<div class="panel panel-default" style="margin-bottom: 0;">
  <div class="panel-body">
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="sourcefrom">Type</label>
      <div class="col-sm-8">
        <select name="sourcefrom" id="sourcefrom" class="form-control input-sm">
          <option selected="selected" value="">Pilih Sumber Dana</option>
          <option value="dpst">Deposit</option>
          <option value="loan">Dana Plus</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="sourceamount">Amount</label>
      <div class="col-sm-8">
        <input type="number" name="sourceamount" id="sourceamount" class="form-control input-sm">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="sourcepic">PIC</label>
      <div class="col-sm-8">
        <select name="sourcepic" id="sourcepic" class="form-control input-sm">
          <option selected="selected" value="">Pilih PIC</option>${selectPic()}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="sourcedetail">Deskirsi</label>
      <div class="col-sm-8">
        <input type="text" name="sourcedetail" id="sourcedetail" class="form-control input-sm">
      </div>
    </div>
  </div>
</div>
        `;
            let button = {
                '+ Add': function() {
                    let data = temp_sdrv[driver];
                    let type = $('#sourcefrom').val();
                    let pic = $('#sourcepic').val();
                    if(pic == '') return $('#sourcepic').focus();
                    let detail = $('#sourcedetail').val();
                    if(detail == '') return $('#sourcedetail').focus();
                    let amount = parseInt($('#sourceamount').val());
                    let id = type+'-'+new Date().getTime();
                    data.source[id] = {
                        id:'',
                        amount,
                        pic,
                        detail
                    };
                    data.amount += amount;
                    $(`.tbodysource[data-driver="${driver}"]`).append(`
                <tr class="trsource" data-id="${id}">
                  <td>${id}</td>
                  <td>${addCommas(amount)}</td>
                  <td><button type="button" class="btnapp" data-action="tagihan" data-option="delsource" data-id="${id}" data-driver="${driver}" data-tagihan="${amount}">x</button></td>
                </tr>
                `)
                    calcTagihan(driver)
                    $( this ).dialog("destroy")
                },
                'Close': function() {
                    $( this ).dialog("destroy")
                }
            }
            newDialog(title,message,400,300,button)
            return
        }
        if(option == 'delsource'){
            let id = $el.attr('data-id');
            let driver = $el.attr('data-driver')
            let tagihan = parseInt($el.attr('data-tagihan'));
            $(`.trsource[data-id="${id}"]`).remove();
            temp_sdrv[driver].amount -= tagihan;
            delete temp_sdrv[driver].source[id];
            calcTagihan(driver)
            return
        }
        if(option == 'addused'){
            let driver = $el.attr('data-driver');
            let title = 'Add Used';
            let message = `
<div class="panel panel-default" style="margin-bottom: 0;">
  <div class="panel-body">
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="usedto">Type</label>
      <div class="col-sm-8">
        <select name="usedto" id="usedto" class="form-control input-sm">
          <option selected="selected" value="">Pilih Penggunaan</option>
          <option value="kout">Kas Keluar</option>
          <option value="bons">Bon Sementara</option>
          <option value="loan">Minus</option>
          <option value="scab">Setoran Cabang</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="usedamount">Amount</label>
      <div class="col-sm-8">
        <input type="number" name="usedamount" id="usedamount" class="form-control input-sm">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="usedpic">PIC</label>
      <div class="col-sm-8">
        <select name="usedpic" id="usedpic" class="form-control input-sm">
          <option selected="selected" value="">Pilih PIC</option>${selectPic()}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="useddetail">Deskirsi</label>
      <div class="col-sm-8">
        <input type="text" name="useddetail" id="useddetail" class="form-control input-sm">
      </div>
    </div>
  </div>
</div>
        `;
            let button = {
                '+ Add': function() {
                    let type = $('#usedto').val();
                    let pic = $('#usedpic').val();
                    if(pic == '') return $('#usedpic').focus();
                    let detail = $('#useddetail').val();
                    if(detail == '') return $('#useddetail').focus();
                    let data = temp_sdrv[driver];
                    let amount = parseInt($('#usedamount').val());
                    let id = type+'-'+new Date().getTime();
                    data.used[id] = {
                        id:'',
                        amount,
                        pic,
                        detail
                    };
                    data.totalused += amount;
                    $(`.tbodyused[data-driver="${driver}"]`).append(`
                <tr class="trused" data-id="${id}">
                  <td>${id}</td>
                  <td>${addCommas(amount)}</td>
                  <td><button type="button" class="btnapp" data-action="tagihan" data-option="delused" data-id="${id}" data-driver="${driver}" data-tagihan="${amount}">x</button></td>
                </tr>
                `)
                    calcTagihan(driver)
                    $( this ).dialog("destroy")
                },
                'Close': function() {
                    $( this ).dialog("destroy")
                }
            }
            newDialog(title,message,400,300,button)
            return
        }
        if(option == 'delused'){
            let id = $el.attr('data-id');
            let driver = $el.attr('data-driver')
            let tagihan = parseInt($el.attr('data-tagihan'));
            $(`.trused[data-id="${id}"]`).remove();
            temp_sdrv[driver].totalused -= tagihan;
            delete temp_sdrv[driver].used[id];
            calcTagihan(driver)
            return
        }
        if(option == 'addbons'){
            let driver = $el.attr('data-driver')
            let title = 'Add Bons';
            let message = `
<div class="panel panel-danger" style="margin-bottom: 0;">
  <div class="panel-body">
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbonstype">Type</label>
      <div class="col-sm-8">
        <select name="addbonstype" id="addbonstype" class="form-control input-sm handleapp" data-action="tagihan" data-option="select_typebons">
          <option selected="selected" value="">Pilih Penggunaan</option>
          <option value="source">Source</option>
          <option value="used">Used</option>
        </select>
      </div>
    </div>
    <div class="form-group sourcefrom" style="display:none;">
      <label class="control-label-text-left col-sm-4 " for="sourcefrom">Source From</label>
      <div class="col-sm-8">
        <select name="sourcefrom" id="sourcefrom" class="form-control input-sm handleapp" data-action="tagihan" data-option="select_bons">
        </select>
      </div>
    </div>
    <div class="form-group usedto" style="display:none;">
      <label class="control-label-text-left col-sm-4" for="usedto">Used To</label>
      <div class="col-sm-8">
        <select name="usedto" id="usedto" class="form-control input-sm">
          <option selected="selected" value="">Pilih Penggunaan</option>
          <option value="kout">Kas Keluar</option>
          <option value="bons">Bon Sementara</option>
          <option value="loan">Minus</option>
          <option value="cash">Kas Tunai</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="amount">Amount</label>
      <div class="col-sm-8">
        <input type="number" name="amount" id="addbons_amount" class="form-control input-sm">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbons_pic">PIC</label>
      <div class="col-sm-8">
        <select name="addbons_pic" id="addbons_pic" class="form-control input-sm">
          <option selected="selected" value="">Pilih PIC</option>${selectPic()}
        </select>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="addbons_detail">Deskirsi</label>
      <div class="col-sm-8">
        <input type="text" name="addbons_detail" id="addbons_detail" class="form-control input-sm">
      </div>
    </div>
  </div>
</div>
        `;
            let button = {
                '+ Add': function() {
                    let type = $('#addbonstype').val();
                    if(type == '') return $('#addbonstype').focus();
                    let pic = $('#addbons_pic').val();
                    if(pic == '') return $('#addbons_pic').focus();
                    let detail = $('#addbons_detail').val();
                    if(detail == '') return $('#addbons_detail').focus();
                    let data = temp_sdrv[driver];
                    let amount = parseInt($('#addbons_amount').val());
                    let category = (type == 'source') ? $('#sourcefrom').val() : $('#usedto').val();
                    let id = category+'-'+new Date().getTime();
                    data.bons[type][id] = {
                        id: (type == 'source') ? detail : '',
                        amount,
                        pic,
                        detail
                    };
                    data.bons['total'+type] += amount;
                    data.bons.balance = data.bons.totalsource - data.bons.totalused;
                    $(`.tbodybons[data-driver="${driver}"]`).append(`
                <tr class="trbons" data-id="${id}">
                  <td>${id}</td>
                  ${(type == 'source') ? `<td>${addCommas(amount)}</td><td></td>` : `<td></td><td>${addCommas(amount)}</td>`}
                  <td><button type="button" class="btnapp" data-action="tagihan" data-option="delbons" data-id="${id}" data-driver="${driver}" data-tagihan="${amount}" data-type="${type}">x</button></td>
                </tr>
                `)
                    calcTagihan(driver)
                    $( this ).dialog("destroy")
                },
                'Close': function() {
                    $( this ).dialog("destroy")
                }
            }
            newDialog(title,message,400,300,button)
            return
        }
        if(option == 'select_typebons'){
            let type = $el.val();
            if(type == 'source'){
                let optionbons = ''
                let pics = Object.keys(_bons);
                for(let pic of pics){
                    if(_bons[pic].handle) continue;
                    optionbons += `<option value="${_bons[pic].id}">${_bons[pic].date} - ${_bons[pic].pic} - ${addCommas(_bons[pic].amount)}</option>`
                }
                $('#addbons_amount').prop('disabled',true)
                $('#addbons_detail').prop('disabled',true)
                $('#sourcefrom').html(optionbons)
                $('.sourcefrom').show()
                $('.usedto').hide()
            }
            else{
                $('#addbons_amount').val('')
                $('#addbons_amount').prop('disabled',false)
                $('#addbons_detail').prop('disabled',false)
                $('.sourcefrom').hide()
                $('.usedto').show()
                $('#addbons_pic').html(selectPic())
            }
            return
        }
        if(option == 'select_bons'){
            let id = $el.val()
            let amount = _bons[id].amount;
            $('#addbons_amount').val(amount)
            $('#addbons_pic').html(`<option selected="selected" value="${_bons[id].pic}">${_bons[id].pic}</option>`)
            $('#addbons_detail').val(_bons[id].id)
            return
        }
        if(option == 'delbons'){
            let id = $el.attr('data-id');
            let driver = $el.attr('data-driver')
            let tagihan = parseInt($el.attr('data-tagihan'));
            let type = $el.attr('data-type');
            $(`.trbons[data-id="${id}"]`).remove();
            temp_sdrv[driver].bons['total'+type] -= tagihan;
            temp_sdrv[driver].bons.balance = temp_sdrv[driver].bons.totalsource - temp_sdrv[driver].bons.totalused;
            delete temp_sdrv[driver].bons[type][id];
            calcTagihan(driver)
            return
        }
        if(option == 'save'){
            let driver = $el.attr('data-driver');
            let data = temp_sdrv[driver];
            if((data.amount - data.totalused) !== 0) return newDialog('INFO','Total Sumber Dana dengan Pengeluaran belum balance !')
            if(data.bons.balance !== 0) return newDialog('INFO','Total Bons Source dengan Used belum balance !')
            if((data.tagihantotal - data.tagihantarget) !== 0){
                let isNext = dialogConfirm('ALERT','Tagihan tidak balance! Lanjut simpan ?')
                if(!isNext) return
            }
            $el.prop('disabled', true)
            let sdrv = makeId('sdrv'); //=====> ID SDRV
            //let sdrv = {id:'sdrv'+(new Date().getTime()),row:2}

            //=============== oLAH SOURCE
            let valSource = {}
            let sources = Object.keys(data.source)
            for(let source of sources){
                if(source.length == 11){
                    valSource[source] = data.source[source];
                }
                else{
                    let code = source.slice(0, 4)
                    let seri = makeId(code);
                    valSource[seri.id] = data.source[source];
                    if(code == 'dpst'){
                        _deposit[seri.id] = {
                            id:seri.id,
                            row:seri.row,
                            date:data.date,
                            detail:data.source[source].detail,
                            pic:data.source[source].pic,
                            debit:0,
                            kredit:data.source[source].amount,
                            reff:sdrv.id,
                            catatan:''
                        }
                    }
                    else if(code == 'loan'){
                        _loan[seri.id] = {
                            id:seri.id,
                            row:seri.row,
                            date:data.date,
                            detail:data.source[source].detail,
                            pic:data.source[source].pic,
                            debit:0,
                            kredit:data.source[source].amount,
                            reff:sdrv.id,
                            catatan:''
                        }
                    }
                }
            }

            //================ OLAH USeD
            let valUsed = {};
            let useds = Object.keys(data.used)
            for(let used of useds){
                let code = used.slice(0, 4)
                let seri = makeId(code);
                valUsed[seri.id] = data.used[used];
                if(code == 'kout'){
                    _kas_out[seri.id] = {
                        id:seri.id,
                        row:seri.row,
                        date:data.date,
                        pic:data.used[used].pic,
                        detail:data.used[used].detail,
                        amount:data.used[used].amount,
                        source:sdrv.id,
                        status:'active',
                        claim_date:'',
                        doc:'',
                        nota:'',
                        catatan:''
                    }
                }
                else if(code == 'bons'){
                    _bons[seri.id] = {
                        id:seri.id,
                        row:seri.row,
                        date:data.date,
                        detail:data.used[used].detail,
                        pic:data.used[used].pic,
                        source:{
                            [sdrv.id]:{
                                id:sdrv.id,
                                amount:data.used[used].amount
                            }
                        },
                        amount:data.used[used].amount,
                        used:{},
                        sisa:data.used[used].amount,
                        status:'active',
                        catatan:''
                    }
                }
                else if(code == 'loan'){
                    _loan[seri.id] = {
                        id:seri.id,
                        row:seri.row,
                        date:data.date,
                        detail:data.used[used].detail,
                        pic:data.used[used].pic,
                        debit:data.used[used].amount,
                        kredit:0,
                        reff:sdrv.id,
                        catatan:''
                    }
                }
                else if(code == 'scab'){
                    temp_scab.source[sdrv.id] = {
                        id:sdrv.id,
                        amount:data.used[used].amount
                    }
                    temp_scab.amount += data.used[used].amount;
                    temp_scab.sisa += data.used[used].amount;
                }
            }

            //=============== OLAH BONS
            let bons_id = null;
            let bonsSources = Object.keys(data.bons.source);
            if(bonsSources.length){
                if(bonsSources.length > 1){
                    bons_id = makeId('bons')
                    _bons[bons_id.id] = {
                        id:bons_id.id,
                        row:bons_id.row,
                        date:data.date,
                        detail:'',
                        pic:driver,
                        source:{},
                        amount:0,
                        used:{},
                        sisa:0,
                        status:'active'
                    }
                    for(let bonsSource of bonsSources){
                        _bons[data.bons.source[bonsSource].id].used = {
                            [bons_id.id]:{
                                id:bons_id.id,
                                amount:data.bons.source[bonsSource].amount
                            }
                        }
                        _bons[data.bons.source[bonsSource].id].sisa = 0;
                        _bons[data.bons.source[bonsSource].id].status = 'done';
                        _bons[data.bons.source[bonsSource].id].catatan = 'marger to '+bons_id.id;
                        _bons[bons_id.id].source[data.bons.source[bonsSource].id]={
                            id:data.bons.source[bonsSource].id,
                            amount:data.bons.source[bonsSource].amount
                        }
                        _bons[bons_id.id].amount += data.bons.source[bonsSource].amount
                        _bons[bons_id.id].detail += data.bons.source[bonsSource].detail + '';
                        _bons[bons_id.id].sisa += data.bons.source[bonsSource].amount
                    }
                }
                else {
                    bons_id = {id:data.bons.source[bonsSources[0]].id,row:0}
                }
                let bonsUseds = Object.keys(data.bons.used);
                for(let bonsUsed of bonsUseds){
                    let code = bonsUsed.slice(0, 4)
                    let seri = makeId(code);
                    if(code == 'kout'){
                        _kas_out[seri.id] = {
                            id:seri.id,
                            row:seri.row,
                            date:data.date,
                            pic:data.bons.used[bonsUsed].pic,
                            detail:data.bons.used[bonsUsed].detail,
                            amount:data.bons.used[bonsUsed].amount,
                            source:bons_id.id,
                            status:'active',
                            claim_date:'',
                            doc:'',
                            nota:'',
                            catatan:''
                        }
                    }
                    else if(code == 'bons'){
                        _bons[seri.id] = {
                            id:seri.id,
                            row:seri.row,
                            date:data.date,
                            detail:data.bons.used[bonsUsed].detail,
                            pic:data.bons.used[bonsUsed].pic,
                            source:{
                                [bons_id.id]:{
                                    id:bons_id.id,
                                    amount:data.bons.used[bonsUsed].amount
                                }
                            },
                            amount:data.bons.used[bonsUsed].amount,
                            used:{},
                            sisa:data.bons.used[bonsUsed].amount,
                            status:'active',
                            catatan:''
                        }
                    }
                    else if(code == 'loan'){
                        _loan[seri.id] = {
                            id:seri.id,
                            row:seri.row,
                            date:data.date,
                            detail:data.bons.used[bonsUsed].detail,
                            pic:data.bons.used[bonsUsed].pic,
                            debit:data.bons.used[bonsUsed].amount,
                            kredit:0,
                            reff:bons_id.id,
                            catatan:''
                        }
                    }
                    else if(code == 'cash'){
                        _cash[seri.id] = {
                            id:seri.id,
                            row:seri.row,
                            date:data.date,
                            detail:data.bons.used[bonsUsed].detail,
                            pic:data.bons.used[bonsUsed].pic,
                            debit:0,
                            kredit:data.bons.used[bonsUsed].amount,
                            reff:bons_id.id,
                            catatan:''
                        }
                    }
                    _bons[bons_id.id].used[seri.id] = {
                        id:seri.id,
                        amount:data.bons.used[bonsUsed].amount
                    }
                    _bons[bons_id.id].sisa -= data.bons.used[bonsUsed].amount
                }
            }

            //==================== SDRV

            _setoran_driver[sdrv.id] = {
                id:sdrv.id,
                row:sdrv.row,
                date:data.date,
                detail: `setoran ${data.pic} ${data.date}`,
                pic: data.pic,
                source: valSource,
                amount:data.amount,
                used:valUsed,
                sisa:data.amount - data.totalused,
                status:'done',
                catatan:''
            }
            return
        }
        if(option == 'uploadtagihan'){
            $el.prop('disabled',true)
            let seri = makeId('scab')
            _setoran_cabang[seri.id] = {
                id: seri.id,
                row: seri.row,
                date: dayFrom(),
                detail:'Setoran Cabang '+dayFrom(),
                pic: 'MISBAHUS SUDUR',
                source:temp_scab.source,
                amount:temp_scab.amount,
                used:{},
                sisa:temp_scab.sisa,
                status:'active'
            }
            return uploaddata()
        }
    }
}
const calcTagihan = (driver) => {
    let data = temp_sdrv[driver];
    $(`.spantotalsource[data-driver="${driver}"]`).text(addCommas(data.amount));
    $(`.spantotalused[data-driver="${driver}"]`).text(addCommas(data.totalused));
    $(`.tdtotaltunai[data-driver="${driver}"]`).text(addCommas(data.tagihantunai));
    $(`.tdtotaltransfer[data-driver="${driver}"]`).text(addCommas(data.tagihantransfer))
    $(`.tdtotaltagihan[data-driver="${driver}"]`).text(addCommas(data.tagihantotal))
    $(`.tdtotalbalance[data-driver="${driver}"]`).text(addCommas(data.tagihantotal - data.tagihantarget))
    $(`.spantotalbons[data-driver="${driver}"]`).text(addCommas(data.bons.balance))
}
const uploaddata = async () => {
        $('#menu_tagihan').attr('disabled',true)
        let data = {
            'resi_tagihan_incoming':_resi_tagihan_incoming,
            'resi_tagihan_outgoing':_resi_tagihan_outgoing,
            'setoran_driver':_setoran_driver,
            'setoran_cabang':_setoran_cabang,
            'setoran_cod':_setoran_cod,
            'setoran_outgoing':_setoran_outgoing,
            'kas_out':_kas_out,
            'bons':_bons,
            'loan':_loan,
            'bank':_bank,
            'cash':_cash,
            'req_kas':_req_kas,
            'pettycash':_pettycash,
            'bonus':_bonus,
            'etol':_etol,
            'deposit':_deposit,
            'opname':_opname
        }
        //console.log(data)
        let respon = await postDatabase('update',data)
}

let temp_sdrv = {};
let temp_scab = {
    source:{},
    amount:0,
    sisa:0
};
let temp_scod = {
    source:{},
    amount:0,
    sisa:0
};
let temp_sout = {
    source:{},
    amount:0,
    sisa:0
};
const resiTagihan = async (url, dataTagihan) => {
    // let response = await fetchget(url);
    // let parser = new DOMParser();
    // let xmlDoc = parser.parseFromString(response, 'text/html');
    // let tabel = xmlDoc.getElementById("cphBody_gvData");
    let arrResi = [];
    // if(tabel){
    //     let rows = tabel.querySelectorAll('tbody tr');
    //     rows.forEach(row => {
    //         let noResi = (row.querySelector('td:nth-child(1)')).textContent.trim();
    //         let penerima = (row.querySelector('td:nth-child(4)')).textContent.trim();
    //         let tagihan = (row.querySelector('td:nth-child(9)')).textContent.trim();
    //         let status = (row.querySelector('td:nth-child(10)')).textContent.trim();
    //         let track = (row.querySelector('td:nth-child(12)')).textContent.trim();
    //         let podstat = (row.querySelector('td:nth-child(13)')).textContent.trim();
    //         let matches = [];
    //         track.replace(/\[(.*?)\]/g, function(match, captureGroup) {
    //             matches.push(captureGroup);
    //         });
    //         arrResi.push({
    //             resi:noResi,
    //             penerima:penerima,
    //             tagihan:parseInt(tagihan.replace(/,/g, '')),
    //             status:status,
    //             diterima:matches[0],
    //             driver:matches[1],
    //             podstat:podstat
    //         });
    //     });
    // }

    let rsp = await getDatabase('select *  WHERE H = "active"','resi_tagihan_incoming'); //=========== GET DATA DARI DB resi_tagihan_incoming
    _resi_tagihan_incoming = gsConvertToJson(rsp);
    for(let i=0;i<rsp.length;i++){
        arrResi.push({
            resi:rsp[i].resi,
            penerima:rsp[i].cust,
            tagihan:rsp[i].tagihan,
            status:rsp[i].status,
            diterima:rsp[i].cust,
            driver:rsp[i].pic,
            podstat:rsp[i].tagihan_date
        });
    }

    let tgl = (dayFrom()).split('-')[0];
    temp_sdrv = {};
    let htmlIncoming = `
    <table class="table table-hover table-condensed">
    <caption>TAGIHAN INCOMING</caption>
      <thead><tr><th>Resi</th><th>Penerima</th><th>Sukses</th><th>Tagihan</th><th>PIC</th><th>Status</th><th>CH/TF</th><th>...</th></tr></thead>
      <tbody>`;
    for(let i=0;i<arrResi.length;i++){
        if(arrResi[i].status == 'Request Recon') continue
        let tgls = (arrResi[i].podstat).match(/\((\d+)\s\w+\s\d+\s-\s\d+:\d+\)/);
        if(tgls[1] == tgl) continue
        if(_resi_tagihan_incoming[arrResi[i].resi]){
        } //================= CEK resi_tagihan_incoming
        else{
            let seri = makeId('rsin');
            let row = seri.row;
            _resi_tagihan_incoming[arrResi[i].resi] = {
                id:arrResi[i].resi,
                row:row,
                resi:arrResi[i].resi,
                cust:arrResi[i].penerima,
                tagihan:arrResi[i].tagihan,
                tagihan_date:arrResi[i].podstat,
                pic:arrResi[i].driver,
                status:'active',
                rekon_date:'',
                type_bayar:'',
                doc:'',
                reff:'',
                catatan:''
            }
        } //============= jika tidak ada maka buat object baru resi_tagihan_incoming
        htmlIncoming += `<tr class="trfilter" data-driver="${arrResi[i].driver}" data-resi="${arrResi[i].resi}" data-tagihan="${arrResi[i].tagihan}">
        <td><a href="#!" class="btnapp" data-action="showid" data-type="${arrResi[i].resi}">${arrResi[i].resi}</a></td>
        <td>${arrResi[i].penerima}</td>
        <td>${arrResi[i].podstat}</td>
        <td>${addCommas(arrResi[i].tagihan)}</td>
        <td>${arrResi[i].driver}</td>
        <td>${arrResi[i].status}</td>
        <td>
          <input type="checkbox" class="cbtunai handleapp" data-action="tagihan" data-option="tunai" data-driver="${arrResi[i].driver}" data-resi="${arrResi[i].resi}" data-tagihan="${arrResi[i].tagihan}">
          <input type="checkbox" class="cbtransfer handleapp" data-action="tagihan" data-option="transfer" data-driver="${arrResi[i].driver}" data-resi="${arrResi[i].resi}" data-tagihan="${arrResi[i].tagihan}">
        </td>
        <td style="display: flex;">
          <button type="button" class="btn btn-default btn-sm btnimageupload btnapp" data-action="tagihan" data-option="upload" data-type="incoming" data-id="${arrResi[i].resi}" data-tagihan="${arrResi[i].tagihan}" data-driver="${arrResi[i].driver}" style="display:none;">
            <span class="glyphicon glyphicon-floppy-open"></span>
          </button>
          <button type="button" class="btn btn-default btn-sm btnimagedelete btnapp" data-action="tagihan" data-option="delete" data-type="incoming" data-id="${arrResi[i].resi}" data-driver="${arrResi[i].driver}" style="display:none;">
            <span class="glyphicon glyphicon-floppy-remove"></span>
          </button>
        </td>
        </tr>`;
        if(temp_sdrv[arrResi[i].driver]){
            temp_sdrv[arrResi[i].driver].tagihantarget += arrResi[i].tagihan
        } //============= Cek object driver di temp_sdrv, jika ada hanya tambaahkan object temp_sdrv[driver].tagihantarget
        else{
            temp_sdrv[arrResi[i].driver] = {
                id:'',
                row:0,
                date:dayFrom(0),
                detail:'',
                pic:arrResi[i].driver,
                source:{},
                amount:0,
                used:{},
                totalused:0,
                sisa:0,
                status:'active',
                catatan:'',
                tagihantarget:arrResi[i].tagihan,
                tagihantunai:0,
                tagihantransfer:0,
                tagihantotal:0,
                bons:{
                    source:{},
                    used:{},
                    totalsource:0,
                    totalused:0,
                    balance:0
                }
            }
        } //================jika tidak ada buat object temp_sdrv driver baru dengan id dan row masih kosong
    }
    htmlIncoming += '</tbody></table>';

    //================end incoming table=======

    //=============== outgoing=========
    // const referse = (date) => {
    //     let str = date.split('-')
    //     return str[2] + '-' + str[1] + '-' + str[0]
    // } //======== fungsi untuk merubah format date dari dd-mm-yyy menjadi yyy-mm-dd
    // let formDataArray = [
    //     { name: 'ctl00$cphBody$rblSearchMode', value: 'RNG' },
    //     { name: 'ctl00$cphBody$ddlOfficeRecipient', value: '20122' },
    //     { name: 'ctl00$cphBody$ddlWayOfPayment', value: '' },
    //     { name: 'ctl00$cphBody$txtTrxDtFrom', value: referse(dayFrom(10)) }, //===outgoing di cek dari 10 hari ke belakang
    //     { name: 'ctl00$cphBody$txtTrxDtTo', value: referse(dayFrom(1)) } //=== sampai hari kemarin
    // ];
    // let outgoing = await fetchpost('https://bo.sentralcargo.co.id/Reconciliation/BranchCashReconRequestForm.aspx', "ctl00$cphBody$btnSearch", formDataArray);
    // let parser_out = new DOMParser();
    // let xmlDoc_out = parser_out.parseFromString(outgoing, 'text/html');
    // let tableElement = xmlDoc_out.getElementById('cphBody_gvdata');
    let arrResi_out = [];
    // if(tableElement){
    //     let rows = tableElement.querySelectorAll('tbody tr');
    //     rows.forEach(row => {
    //         let resi = (row.querySelector('td:nth-child(2)')).textContent.trim();
    //         let cust = (row.querySelector('td:nth-child(5)')).textContent.trim();
    //         let tagihan = (row.querySelector('td:nth-child(9)')).textContent.trim();
    //         let payment = (row.querySelector('td:nth-child(6)')).textContent.trim();
    //         let driver = (row.querySelector('td:nth-child(7)')).textContent.trim();
    //         let podstat = (row.querySelector('td:nth-child(4)')).textContent.trim();
    //         arrResi_out.push({
    //             resi,
    //             cust,
    //             tagihan:parseInt(tagihan.replace(/,/g, '')),
    //             payment,
    //             driver,
    //             podstat,
    //         });
    //     });
    // }

    let rsp_out = await getDatabase('select * WHERE H = "active"','resi_tagihan_outgoing'); //=========== GET DATA DARI DB resi_tagihan_outgoing
    _resi_tagihan_outgoing = gsConvertToJson(rsp_out)

    for(let i=0;i<rsp_out.length;i++){
        arrResi_out.push({
            resi:rsp_out[i].resi,
            cust:rsp_out[i].cust,
            tagihan:rsp_out[i].tagihan,
            payment:rsp_out[i].status,
            driver:rsp_out[i].pic,
            podstat:rsp_out[i].tagihan_date
        });
    }

    let htmloutgoing = `
    <table class="table table-hover table-condensed">
    <caption>TAGIHAN OUTGOING</caption>
      <thead><tr><th>Resi</th><th>Penerima</th><th>Sukses</th><th>Tagihan</th><th>PIC</th><th>Payment</th><th>CH/TF</th><th>...</th></tr></thead>
      <tbody>`;
    for(let i=0;i<arrResi_out.length;i++){
        if(_resi_tagihan_outgoing[arrResi_out[i].resi]){
        } //============jika resi sudah ada tidak melakukan apa apa
        else{
            let seri = makeId('rsot');
            let row = seri.row;
            _resi_tagihan_outgoing[arrResi_out[i].resi] = {
                id:arrResi_out[i].resi,
                row,
                resi:arrResi_out[i].resi,
                cust:arrResi_out[i].cust,
                tagihan:arrResi_out[i].tagihan,
                tagihan_date:arrResi_out[i].podstat,
                pic:arrResi_out[i].driver,
                status:'active',
                rekon_date:'',
                type_bayar:'',
                doc:'',
                reff:'',
                catatan:''
            }
        } //===============jika resi belum ada buat object baru
        htmloutgoing += `<tr class="trfilter" data-driver="${arrResi_out[i].driver}" data-resi="${arrResi_out[i].resi}" data-tagihan="${arrResi_out[i].tagihan}">
        <td><a href="#!" class="btnapp" data-action="showid" data-type="${arrResi_out[i].resi}">${arrResi_out[i].resi}</a></td>
        <td>${arrResi_out[i].cust}</td>
        <td>${arrResi_out[i].podstat}</td>
        <td>${addCommas(arrResi_out[i].tagihan)}</td>
        <td>${arrResi_out[i].driver}</td>
        <td>${arrResi_out[i].payment}</td>
        <td>
          <input type="checkbox" class="cbtunai handleapp" data-action="tagihan" data-option="tunai" data-driver="${arrResi_out[i].driver}" data-resi="${arrResi_out[i].resi}" data-tagihan="${arrResi_out[i].tagihan}">
          <input type="checkbox" class="cbtransfer handleapp" data-action="tagihan" data-option="transfer" data-driver="${arrResi_out[i].driver}" data-resi="${arrResi_out[i].resi}" data-tagihan="${arrResi_out[i].tagihan}">
        </td>
        <td style="display: flex;">
          <button type="button" class="btn btn-default btn-sm btnimageupload btnapp" data-action="tagihan" data-option="upload" data-type="outgoing" data-id="${arrResi_out[i].resi}" data-tagihan="${arrResi_out[i].tagihan}" data-driver="${arrResi_out[i].driver}" style="display:none;">
            <span class="glyphicon glyphicon-floppy-open"></span>
          </button>
          <button type="button" class="btn btn-default btn-sm btnimagedelete btnapp" data-action="tagihan" data-option="delete" data-type="outgoing" data-id="${arrResi_out[i].resi}" data-driver="${arrResi_out[i].driver}" style="display:none;">
            <span class="glyphicon glyphicon-floppy-remove"></span>
          </button>
        </td>
        </tr>`;
        if(temp_sdrv[arrResi_out[i].driver]){
            temp_sdrv[arrResi_out[i].driver].tagihantarget += arrResi_out[i].tagihan
        }
        else{
            temp_sdrv[arrResi_out[i].driver] = {
                id:'',
                row:0,
                date:dayFrom(0),
                detail:'',
                pic:arrResi_out[i].driver,
                source:{},
                amount:0,
                used:{},
                totalused:0,
                sisa:0,
                status:'active',
                catatan:'',
                tagihantarget:arrResi_out[i].tagihan,
                tagihantunai:0,
                tagihantransfer:0,
                tagihantotal:0,
                bons:{
                    source:{},
                    used:{},
                    totalsource:0,
                    totalused:0,
                    balance:0
                }
            }
        }
    }
    htmloutgoing += '</tbody></table>';
//============================================

//===============panel
    let drivers = Object.keys(temp_sdrv) //============= berisi array nama driver

    let htmlfilter = '';
    let htmlpanel = '';
    for(let driver of drivers){
        htmlfilter +=`<label class="col-sm-6"><input type="checkbox" class="handleapp" data-action="tagihan" data-option="filter" data-driver="${driver}" checked>${driver}</label>`;
        htmlpanel += `
<div class="panel panel-default panelsdrv" data-driver="${driver}">
  <div class="panel-heading">SDRV ${driver}</div>
  <div class="panel-body">
<div class="row">
<div class="col-sm-6 panel panel-default" style="padding:5px;">
    <button type="button" class="btnapp" data-action="tagihan" data-option="addsource" data-driver="${driver}" style=" border-radius: 5px; margin-bottom: 5px; border-color: unset;">+ Source</button>
    <div class="tbl-container"><div class="tbl-fixed" style="height:180px;">
    <table class="table table-hover">
        <thead>
            <tr><th style="width: 100px;">ID</th><th>Amount</th><th style="width: 30px;">...</th></tr>
        </thead>
        <tbody class="tbodysource" data-driver="${driver}">
        </tbody>
    </table>
    </div></div>
    <label class="label label-primary">Total : Rp. <span class="spantotalsource" data-driver="${driver}">0</span></label>
</div>
<div class="col-sm-6 panel panel-default" style="padding:5px;margin-bottom: 0;">
    <button type="button" class="btnapp" data-action="tagihan" data-option="addused" data-driver="${driver}" style=" border-radius: 5px; margin-bottom: 5px; border-color: unset;">+ Used</button>
    <div class="tbl-container"><div class="tbl-fixed" style="height:180px;">
    <table class="table table-hover">
        <thead>
            <tr><th style="width: 100px;">ID</th><th>Amount</th><th style="width: 30px;">...</th></tr>
        </thead>
        <tbody class="tbodyused" data-driver="${driver}">
        </tbody>
    </table>
    </div></div>
    <label class="label label-danger">Total : Rp. <span class="spantotalused" data-driver="${driver}">0</span></label>
</div>
</div>
<div class="row">
<div class="col-sm-4 panel panel-default" style="padding: 17px 5px;margin-bottom: 0;">
    <table class="table table-bordered">
        <thead>
            <tr><th>Detail</th><th>Amount</th></tr>
        </thead>
        <tbody>
            <tr><td>Target</td><td class="tdtotaltarget" data-driver="${driver}" style="background: lavender;font-weight: bolder;text-align: end;">${addCommas(temp_sdrv[driver].tagihantarget)}</td></tr>
            <tr><td>Tunai</td><td class="tdtotaltunai" data-driver="${driver}" style="background: chartreuse;font-weight: bolder;text-align: end;">${addCommas(temp_sdrv[driver].tagihantunai)}</td></tr>
            <tr><td>Transfer</td><td class="tdtotaltransfer" data-driver="${driver}" style="background: gold;font-weight: bolder;text-align: end;">${addCommas(temp_sdrv[driver].tagihantransfer)}</td></tr>
            <tr><td>Total</td><td class="tdtotaltagihan" data-driver="${driver}" style="background: lavender;font-weight: bolder;text-align: end;">${addCommas(temp_sdrv[driver].tagihantransfer)}</td></tr>
            <tr><td>Balance</td><td class="tdtotalbalance" data-driver="${driver}" style="background: lavender;font-weight: bolder;text-align: end;">${addCommas(temp_sdrv[driver].tagihantransfer)}</td></tr>
        </tbody>
    </table>
</div>
<div class="col-sm-8 panel panel-default" style="padding:5px;margin-bottom: 0;">
    <button type="button" class="btnapp" data-action="tagihan" data-option="addbons" data-driver="${driver}" style=" border-radius: 5px; margin-bottom: 5px; border-color: unset;">+ Bons</button>
    <div class="tbl-container"><div class="tbl-fixed" style="height:180px;">
    <table class="table table-hover">
        <thead>
            <tr><th style="width: 100px;">ID</th><th>Source</th><th>Used</th><th style="width: 30px;">...</th></tr>
        </thead>
        <tbody class="tbodybons" data-driver="${driver}">
        </tbody>
    </table>
    </div></div>
    <label class="label label-primary">Balance : Rp. <span class="spantotalbons" data-driver="${driver}">0</span></label>
</div>
</div>
  </div>
  <div class="panel-footer" style="padding:5px;text-align: end;">
    <button type="button" class="btn btn-success btnapp" data-action="tagihan" data-option="save" data-driver="${driver}" style="border-radius: 5px;margin-bottom: 0;border-color: unset;">Simpan</button>
  </div>
</div>
        `;
    }

//==============Buat window tagihan

    let idDiv = new Date().getTime();
    let flag = 'Setoran Driver'
    let body = `
<div class="col-sm-7">
  <div class="tbl-container">
    <div class="tbl-fixed">
      ${htmlIncoming}
    </div>
  </div>
  <div class="tbl-container">
    <div class="tbl-fixed">
      ${htmloutgoing}
    </div>
  </div>
</div>
<div class="col-sm-5">
  <div class="panel panel-default">
    <div class="panel-heading">FILTER PIC</div>
    <div class="panel-body" style="padding: 0;">
      <div class="checkbox col-sm-12">
        ${htmlfilter}
      </div>
    </div>
    <div class="panel-footer" style="padding:5px;text-align: end;">
      <button type="button" class="btn btn-success btnapp" data-action="tagihan" data-option="uploadtagihan" style="border-radius: 5px;margin-bottom: 0;border-color: unset;">Upload</button>
    </div>
  </div>
  ${htmlpanel}
</div>
    `
    await updatebons()
    newWindow(idDiv,flag,'1200','600',body, true)
    // console.log(_resi_tagihan_incoming)
    // let respon = await postDatabase('update',{resi_tagihan_incoming:_resi_tagihan_incoming})
    // console.log(respon)

}

const tagihanHandler = tagihanControler();
//=========================================

//========================================= CHAT WA
let grup_ = {};
let privat_ = {};
let _chat_wa = {}
const chatwaUpdate = async () => {
    grup_ = gsConvertToJson(await getDatabase('select A, C', 'grupdirect'));
    privat_ = gsConvertToJson(await getDatabase('select A, C', 'contac'));
};
const chatwaHandler = async ($el) => {
    let option = $el.attr('data-option');
    if(option == 'new'){
        return makeChatWa()
    }
    if(option == 'view'){
        let rsp = await getDatabase('select * WHERE H = "active"','chat_wa');
        _chat_wa = gsConvertToJson(rsp)
        return
    }
    if(option == 'select_type'){
        let type = $el.val()
        let conel = '<option value="">No Tag</option>';
        let contacs = Object.keys(privat_)
        for(let contac of contacs){
            conel += `<option value="${privat_[contac].id}">${privat_[contac].name}</option>`
        }
        if(type == 'grup'){
            let grupel = '';
            let grups = Object.keys(grup_)
            for(let grup of grups){
                grupel += `<option value="${grup_[grup].id}">${grup_[grup].name}</option>`
            }
            $('#togrup').html(grupel)
            $('#tagto').html(conel)
            $('.watogrup').show()
            $('.watoprivat').hide()
            $('.watagto').show()
            $('.wamessage').show()
            return
        }
        if(type == 'privat'){
            $('#toprivat').html(conel)
            $('.watogrup').hide()
            $('.watoprivat').show()
            $('.watagto').hide()
            $('.wamessage').show()
            return
        }
    }
};
const makeChatWa = (reff = null) => {
    let title = 'Make Chat to WhatsApp';
    let message = `
<div class="panel panel-default" style="margin-bottom: 0;">
  <div class="panel-body">
    <div class="form-group">
      <label class="control-label-text-left col-sm-4" for="sto">Send Type</label>
      <div class="col-sm-8">
        <select name="sto" id="selectto" class="form-control input-sm handleapp" data-action="chatwa" data-option="select_type">
          <option selected="selected" value="">Pilih Type</option>
          <option value="grup">Group</option>
          <option value="privat">Private</option>
        </select>
      </div>
    </div>
    <div class="form-group watogrup" style="display: none;">
      <label class="control-label-text-left col-sm-4" for="togrup">To Group</label>
      <div class="col-sm-8">
        <select name="togrup" id="togrup" class="form-control input-sm">
          <option selected="selected" value="">Pilih Group</option>
        </select>
      </div>
    </div>
    <div class="form-group watoprivat" style="display: none;">
      <label class="control-label-text-left col-sm-4" for="toprivat">To Contac</label>
      <div class="col-sm-8">
        <select name="toprivat" id="toprivat" class="form-control input-sm handleapp" data-action="chatwa" data-option="select_contac">
          <option selected="selected" value="">Pilih Kontak</option>
        </select>
      </div>
    </div>
    <div class="form-group watagto" style="display: none;">
      <label class="control-label-text-left col-sm-4" for="tagto">Tag</label>
      <div class="col-sm-8">
        <select name="tagto" id="tagto" class="form-control input-sm handleapp" data-action="chatwa" data-option="select_contac">
          <option selected="selected" value="">Pilih Kontak</option>
        </select>
      </div>
    </div>
    <div class="form-group wamessage" style="display: none;">
      <label class="control-label-text-left col-sm-4" for="sendmsg">Message</label>
      <div class="col-sm-8">
        <textarea name="sendmsg" id="sendmsg" class="form-control" spellcheck="false" style="width: 328px;height: 180px;resize: none;"></textarea>
      </div>
    </div>
  </div>
</div>
        `;
        let button = {
            'Send': async function() {
                let data = {};
                let seri = makeId('cawa')
                let type = $('#selectto').val()
                data.chat_wa = {
                    [seri.id]:{
                        id:seri.id,
                        row:seri.row,
                        date:dayFrom(),
                        type,
                        to:(type == 'grup') ? $('#togrup').val() : $('#toprivat').val(),
                        tag:(type == 'grup') ? $('#tagto').val() : '',
                        msg:$('#sendmsg').val().trim(),
                        reff:reff ? reff : 'no-reff',
                        status:'active'
                    }
                }
                $( this ).dialog("destroy")
                await postDatabase('update',data)
            },
            'Close': function() {
                $( this ).dialog("destroy")
            }
        }
        newDialog(title,message,600,400,button)
}
//=========================================


//========================================= PANEL
let _todo = null;
const googleDay = str => {
    let [dd,mm,yy] = str.split('-');
    return `${mm}-${dd}-${yy}`
}
const panelTodo = async () => {
    let day = dayFrom() //googleDay(dayFrom())
    let rsp = await getDatabase(`select * WHERE C = "${day}"`,'todo'); //select * WHERE C = "${day}"
    $('.divpanel[data-panel="todo"]').addClass('blink');
    await delay(250)
    $('.divpanel[data-panel="todo"]').removeClass('blink');
    if(rsp.length){
        _todo = rsp[0];
    }
    else{
        let seri = makeId('todo');
        _todo = [{
            id:seri.id,
            row:seri.row,
            date:dayFrom(),
            status:'active',
            absen:'',
            setoran_driver:'',
            setoran_cabang:'',
            reconcile:'',
            input_pettycash:'',
            print_nota:'',
            input_sj:'',
            scan_resi:'',
            input_opname:''
        }]
        await postDatabase('update',{todo:{[_todo[0].id]:_todo[0]}})
    }
    let d = _todo;
    $('.divpanel[data-panel="todo"] tbody').html(`
      <tr><td><span class="label label-${d.absen == '' ? 'danger">Active' : 'success">Done'}</span></td><td class="btnapp" data-action="absensi" data-option="new" style="cursor:pointer;">Absensi Karyawan</td></tr>
      <tr><td><span class="label label-${d.setoran_driver == '' ? 'danger">Active' : 'success">Done'}</span></td><td class="btnapp" data-action="setoran" data-option="new">Setoran Driver</td></tr>
      <tr><td><span class="label label-${d.setoran_cabang == '' ? 'danger">Active' : 'success">Done'}</span></td><td class="btnapp" data-action="scabang" data-option="new">Setoran Cabang</td></tr>
      <tr><td><span class="label label-${d.reconcile == '' ? 'danger">Active' : 'success">Done'}</span></td><td class="btnapp" data-action="addsource" data-option="new" style="cursor:pointer;">Reconcile</td></tr>
      <tr><td><span class="label label-${d.input_pettycash == '' ? 'danger">Active' : 'success">Done'}</span></td><td>Input PettyCash</td></tr>
      <tr><td><span class="label label-${d.print_nota == '' ? 'danger">Active' : 'success">Done'}</span></td><td>Cetak Kas Report</td></tr>
      <tr><td><span class="label label-${d.input_sj == '' ? 'danger">Active' : 'success">Done'}</span></td><td>Input Surat Jalan</td></tr>
      <tr><td><span class="label label-${d.scan_resi == '' ? 'danger">Active' : 'success">Done'}</span></td><td>Scan Resi</td></tr>
      <tr><td><span class="label label-${d.input_opname == '' ? 'danger">Active' : 'success">Done'}</span></td><td>Input Opname</td></tr>
    `)
}
//=========================================


//========================================= BOOT LOADER
const bootloader = async () => {
    let cardleft = {
        'div.card':{
            child:{'div.card-title__background: #810808;color: white;border: 2px solid white;':{
                    value:'File Manager',
                    child:{'span.path':{
                            value:'/home'}
                          }
                   },
                   'div.card-body__display:flex;flex-wrap:wrap;':{},
                   'div.card-footer':{value:'FOOTER STATUS'}
            }
        }
    }
    let cardright = {
        'div.card':{
            child:{
                'div.card-title__background: #810808;color: white;border: 2px solid white;':{
                    value:'SysAdmin Panel'
                },
                'div.card-body':{},
                'div.card-footer':{
                    value:'Footer Status'
                }
            }
        }
    }
    let bl = `
	<div id="bottomleft">${createHtml(cardleft)}
	</div>
	<div id="bottomright">${createHtml(cardright)}
	</div>`;
    $('#bottomview').append(bl);
    await delay(50)
    $('#bottomleft .card').addClass('blink')
    await delay(300)
    $('#bottomright .card').addClass('blink')
    await delay(300)
    $('#bottomview .card').removeClass('blink')
    let style = 'cursor:pointer;'
    let fin = _id.last_id;
    let tlt_right = [
        {label:'DATE : ',element:'input',obj:{class:'text-right fadeintitle',attribute:`type="text" value="${dayFrom()}" disabled`,style:''}},
        {label:'PTCS : ',element:'input',obj:{class:'text-right btnapp fadeintitle',attribute:`type="text" data-action="finance" data-option="ptcs" value="${addCommas(fin.ptcs_sum)}" `,style}},
        {label:'ETOL : ',element:'input',obj:{class:'text-right btnapp fadeintitle',attribute:`type="text" data-action="finance" data-option="etol" value="${addCommas(fin.etol_sum)}" `,style}},
        {label:'BONS : ',element:'input',obj:{class:'text-right btnapp fadeintitle',attribute:`type="text" data-action="finance" data-option="bons" value="${addCommas(fin.bons_sum)}" `,style}},
        {label:'POSH : ',element:'input',obj:{class:'text-right btnapp fadeintitle',attribute:`type="text" data-action="finance" data-option="posh" value="${addCommas(0)}" `,style}},
        {label:'BANK : ',element:'input',obj:{class:'text-right btnapp fadeintitle',attribute:`type="text" data-action="finance" data-option="bank" value="${addCommas(fin.bank_sum)}" `,style}},
        {label:'CASH : ',element:'input',obj:{class:'text-right btnapp fadeintitle',attribute:`type="text" data-action="finance" data-option="cash" value="${addCommas(fin.cash_sum)}" `,style}},
        {label:'DRRT : ',element:'input',obj:{class:'text-right btnapp fadeintitle',attribute:`type="text" data-action="finance" data-option="drrt" value="${addCommas(0)}" `,style}},
        {label:'DPST : ',element:'input',obj:{class:'text-right btnapp fadeintitle',attribute:`type="text" data-action="finance" data-option="dpst" value="${addCommas(fin.dpst_sum)}" `,style}},
    ]
    $('#tlt-right .card-body').html(`<div class="table-responsive" style="height:100%"><table class="table-dialog">${renderBodyTableDialog(tlt_right)}</table></div>`);
    $('#tlt-right .card-body .btnapp').removeClass('fadeintitle')
    $('#tlt-right .card-footer').html(`KAS CABANG :<span id="finance_kas_cabang">Rp. ${addCommas(fin.kas_cabang)}</span>`)
    $('#bottomright .card-body').html(`
<div style="position: relative;top: 50%;width: 100%;">
    <meter min="0" max="100" value="10" style="width: 100%;height:20px;"></meter>
    <progress style="width: 100%;height:8px;"></progress>
</div>`);
}
const showResiPanel = () => {
    let div = `<div style="display: flex;height: 100%;"><div class="item-0" style="flex:1;height: calc(-10px + 100%);margin: 5px;"></div>
    <div class="item-1" style="flex:3;height: calc(-10px + 100%);margin: 5px;"></div></div>`;
    $('#bottomright .card-body').html(div);
    $('#bottomright .card-body .item-0').html(`
<div class="table-responsive">
  <table class="table table-condensed" style="margin: 0;height:100%">
    <thead>
       <tr><th>ON</th><th>SPX</th><th>REG</th></tr>
    </thead>
    <tbody>
      <tr><td>MANIFES</td><td id="mnfs_sp">0</td><td id="mnfs_reg">0</td></tr>
      <tr><td>CABANG</td><td id="cab_sp">0</td><td id="cab_reg">0</td></tr>
      <tr><td>DELIVERY</td><td id="dlv_sp">0</td><td id="dlv_reg">0</td></tr>
      <tr><td><span class="label label-danger">EXCEPT</span></td><td id="err_sp">0</td><td id="err_reg">0</td></tr>
    </tbody>
  </table>
</div>`);
    let sty = 'style="background: #e7e7e7;"'
    $('#bottomright .card-body .item-1').html(`
<style>
div#bottomright .card-body .item-1 thead {
   background: lightgrey;
}
div#bottomright .card-body .item-1 th, div#bottomright .card-body .item-1 td {
    text-align: center;
    vertical-align: middle;
    padding: 3px;
    min-width: 30px;
}
div#bottomright .card-body .item-1 td:hover {
    background: grey !important;
    color: white;
    font-weight: bolder;
    cursor: pointer;
}
</style>
<div class="table-responsive">
  <table class="table table-condensed" style="margin: 0;height:100%">
    <thead>
       <tr><th colspan=2 rowspan=2>MONITOR</th><th rowspan=2>QTY</th><th colspan=3>SLA</th><th colspan=3>REGION</th><th colspan=3>INCOMING</th><th colspan=3>REPORT</th></tr>
       <tr><th>OVER</th><th>NOW</th><th>SAVE</th><th>PSN</th><th>PRO</th><th>LMJ</th><th>0</th><th>1</th><th>2+</th><th>URG</th><th>PRB</th><th>CASE</th></tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan=2>ONCABANG</td><td>SHOPEE</td><td id="cab_sp_qty" ${sty}>0</td><td id="cab_sp_over">0</td><td id="cab_sp_now" ${sty}>0</td><td id="cab_sp_save">0</td><td id="cab_sp_psn" ${sty}>0</td>
        <td id="cab_sp_pro">0</td><td id="cab_sp_lmj" ${sty}>0</td><td id="cab_sp_0">0</td><td id="cab_sp_1" ${sty}>0</td><td id="cab_sp_2">0</td><td id="cab_sp_urg" ${sty}>0</td><td id="cab_sp_prb">0</td><td id="cab_sp_case" ${sty}>0</td>
      </tr>
      <tr>
        <td>REGULER</td><td id="cab_reg_qty" ${sty}>0</td><td id="cab_reg_over">0</td><td id="cab_reg_now" ${sty}>0</td><td id="cab_reg_save">0</td><td id="cab_reg_psn" ${sty}>0</td><td id="cab_reg_pro">0</td><td id="cab_reg_lmj" ${sty}>0</td>
        <td id="cab_reg_0">0</td><td id="cab_reg_1" ${sty}>0</td><td id="cab_reg_2">0</td><td id="cab_reg_urg" ${sty}>0</td><td id="cab_reg_prb">0</td><td id="cab_reg_case" ${sty}>0</td>
      </tr>
      <tr>
        <td rowspan=2>DELIVERY</td><td>SHOPEE</td><td id="dlv_sp_qty" ${sty}>0</td><td id="dlv_sp_over">0</td><td id="dlv_sp_now" ${sty}>0</td><td id="dlv_sp_save">0</td><td id="dlv_sp_psn" ${sty}>0</td>
        <td id="dlv_sp_pro">0</td><td id="dlv_sp_lmj" ${sty}>0</td><td id="dlv_sp_0">0</td><td id="dlv_sp_1" ${sty}>0</td><td id="dlv_sp_2">0</td><td id="dlv_sp_urg" ${sty}>0</td><td id="dlv_sp_prb">0</td><td id="dlv_sp_case" ${sty}>0</td>
      </tr>
      <tr>
        <td>REGULER</td><td id="dlv_reg_qty" ${sty}>0</td><td id="dlv_reg_over">0</td><td id="dlv_reg_now" ${sty}>0</td><td id="dlv_reg_save">0</td><td id="dlv_reg_psn" ${sty}>0</td><td id="dlv_reg_pro">0</td><td id="dlv_reg_lmj" ${sty}>0</td>
        <td id="dlv_reg_0">0</td><td id="dlv_reg_1" ${sty}>0</td><td id="dlv_reg_2">0</td><td id="dlv_reg_urg" ${sty}>0</td><td id="dlv_reg_prb">0</td><td id="dlv_reg_case" ${sty}>0</td>
      </tr>
    </tbody>
  </table>
</div>`);
}
//=========================================


//========================================= FILE MANAGER
const fmControler = () => {
    let fmRoute = {}
    return ($el) => {
        let path = $el.attr('data-path')
        if(isEmpty(fmRoute)){
            fmRoute = {
                path
            }
        }
        $('#bottomleft .path').text(path)
    }
}
const fmHandler = fmControler();
const fmInit = async () => {
    let homeIcon = [
        {name:'Config',icon:'cog',attr:'data-action="filemanager" data-option=""',path:'config'},
        {name:'Inject',icon:'signal',attr:'data-action="filemanager" data-option=""',path:'inject'},
        {name:'Home',icon:'home',attr:'data-action="filemanager" data-option=""',path:'home'},
        {name:'Notepad',icon:'file',attr:'data-action="notepad" data-option="new"',path:'home'},
        {name:'User',icon:'user',attr:'data-action="filemanager" data-option=""',path:'user'},
        {name:'Inbox',icon:'inbox',attr:'data-action="filemanager" data-option=""',path:'inbox'},
        {name:'OIL',icon:'tint',attr:'data-action="filemanager" data-option=""',path:'oil'},
        {name:'ToDo',icon:'check',attr:'data-action="filemanager" data-option=""',path:'todo'},
        {name:'Alert',icon:'fire',attr:'data-action="filemanager" data-option=""',path:'notif'},
        {name:'Home',icon:'home',attr:'data-action="filemanager" data-option=""',path:'home'},
        {name:'Notepad',icon:'file',attr:'data-action="notepad" data-option="new"',path:'home'},
        {name:'User',icon:'user',attr:'data-action="filemanager" data-option=""',path:'user'},
        {name:'Inbox',icon:'inbox',attr:'data-action="filemanager" data-option=""',path:'inbox'},
        {name:'OIL',icon:'tint',attr:'data-action="filemanager" data-option=""',path:'oil'},
        {name:'Bank',icon:'check',attr:'data-action="bank" data-option="load"',path:'bank'},
        {name:'ReqKas',icon:'fire',attr:'data-action="reqkas" data-option="load"',path:'notif'},
    ]
    for(let i = 0; i < homeIcon.length; i++){
        let el = `<div class="icon-container">
<div class="icon btnapp blink" ${homeIcon[i].attr} data-path="/home/${homeIcon[i].path}">
<span class="glyphicon glyphicon-${homeIcon[i].icon}"></span>
<h5>${homeIcon[i].name}</h5>
</div>
</div>
    `;
        $('#bottomleft .card-body').append(el);
        await delay(50)
    }
    $('.icon-container .icon').removeClass('blink') //fadeintitle
}
//=========================================


//========================================= CHART
const chartHandler = ($el) => {
    let option = $el.attr('data-option');
    if(option === 'new'){
        let ctx = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        return
    }
}
//=========================================


//========================================= UPDATE MANIFEST
let _manifest = null;
let _mnfs_compare = null;
let _missroute = {};
const updateManifest = async () => {
    const formatdate = (str) => {
        let d = str.split('-');
        return `${d[1]}/${d[0]}/${d[2]}`
    }
    if(!_manifest){
        let rsp = await getDatabase('SELECT * WHERE C = "active"','manifest');
        _manifest = gsConvertToJson(rsp)
    }
    let comp = await getDatabase('SELECT A, B, C','manifest');
    _mnfs_compare = gsConvertToJson(comp)
    let pm =0; let ps =0; //============= TP
    console.log('_manifest',Object.keys(_manifest).length)
    $('#bottomright .card-body meter').attr('value', 20)
    let poshback = {};
    //=================== BO : RESI MONITORING DETAIL ==================
    let url = `https://bo.sentralcargo.co.id/Order/ScanResiMonitoringDetailForm.aspx?KeyId=84&IsPerwkPartner=0&TrxDtFrom=${formatdate(dayFrom(3))}&TrxDtTo=${formatdate(dayFrom())}`;
    //let url = `https://bo.sentralcargo.co.id/Dashboard/BranchResiForm.aspx?KeyId=20122&TrxDtFrom=${formatdate(dayFrom(3))}%2012:00:00%20AM&TrxDtTo=${formatdate(dayFrom())}%2012:00:00%20AM&PODRating=UNKNOWN`;
    let response = await fetchget(url);
    let parser = new DOMParser();
    let xmlDoc = parser.parseFromString(response, 'text/html');
    let tabel = xmlDoc.getElementById("cphBody_gvData");
    if(tabel){
        let rows = tabel.querySelectorAll('tbody tr');
        $('#bottomright .card-body meter').attr('value', 30)
        rows.forEach((row) => {
            let noResi = (row.querySelector('td:nth-child(1)')).textContent.trim();
            let asal = (row.querySelector('td:nth-child(3)')).textContent.trim();
            let kc = (row.querySelector('td:nth-child(5)')).textContent.trim();
            let kecamatan = kc.substring(3,kc.indexOf(',')).trim();
            let regions = ['Pasuruan', 'Probolinggo', 'Lumajang'];
            let region = regions.find(r => kc.includes(r)) || 'other';
            let pengirim = (row.querySelector('td:nth-child(7)')).textContent.trim();
            let type = 'REG';
            if(pengirim == 'Shopee Indonesia') type = 'SPX';
            let penerima = (row.querySelector('td:nth-child(8)')).textContent.trim();
            let date_resi = (row.querySelector('td:nth-child(9)')).textContent.trim();
            let s = (row.querySelector('td:nth-child(11)')).textContent.trim();
            let sl = parseInt( s );
            let sla = ( s === '' || isNaN(sl) ) ? 'unknow' : dayFrom(sl);
            let koli = (row.querySelector('td:nth-child(12)')).textContent.trim();
            let berat_asli = (row.querySelector('td:nth-child(13)')).textContent.trim();
            let berat_final = (row.querySelector('td:nth-child(14)')).textContent.trim();
            let payment = (row.querySelector('td:nth-child(15)')).textContent.trim();
            let spod = (row.querySelector('td:nth-child(18)')).textContent.trim();
            let track = (row.querySelector('td:nth-child(19)')).textContent.trim();

            let posisi, info, status, masuk;
            if(spod.startsWith('P')){
                posisi = 'oncabang';
                status = 'active';
                masuk = '';
                if(track.startsWith('OTS (')) info = track;
                else if(track.startsWith('BA (')) info = track;
                else if(track.startsWith('NTH (')) info = track;
                else if(track.startsWith('Paket sudah diterima oleh kantor [Pasuruan')){
                    info = 'ktr';
                    masuk = stringToDate(spod);
                }
                else if(track.startsWith('AU (')) info = track;
                else if(track.startsWith('AS (')) info = track;
                else if(track.startsWith('CODA (')) info = track;
                else if(track.startsWith('PEND (')) info = track;
                else if(track.startsWith('Paket sedang dikirimkan ke')){
                    info = 'ondlv';
                    posisi = 'deliveri';
                }
                else{
                    info = 'mnfs';
                    posisi = 'manifest';
                }
            }else{
                info = 'done';
                posisi = 'done';
                status = 'done';
            }

            if(_manifest['mnfs'+noResi] && !checkObjValue(noResi,'track' ,track)){
                _manifest['mnfs'+noResi].history = _manifest['mnfs'+noResi].history ? spod+' - '+info+_manifest['mnfs'+noResi].history+'#' : spod+' - '+info+_manifest['mnfs'+noResi].history;
                _manifest['mnfs'+noResi].info = info;
                _manifest['mnfs'+noResi].posisi = posisi;
                _manifest['mnfs'+noResi].status = status;
                _manifest['mnfs'+noResi].masuk = _manifest['mnfs'+noResi].masuk ? _manifest['mnfs'+noResi].masuk : (masuk ? masuk : '');
                poshback['mnfs'+noResi] = _manifest['mnfs'+noResi];
                //console.log('edit data info manifest')
            }
            if(!_mnfs_compare['mnfs'+noResi]){
                //let n = spod.substring(3,5);
                //let t = dayFrom().split('-')[0];
                //if(n == t){
                    let seri = makeId('mnfs');
                    _manifest['mnfs'+noResi] = {
                        id:'mnfs'+noResi,
                        row:seri.row,
                        resi:noResi,
                        asal,berat_asli,berat_final,
                        kecamatan, region, pengirim, penerima, date_resi,
                        koli:parseInt(koli), sla, status, masuk,
                        payment, track, posisi, type, info,
                        history: ''
                    }
                    poshback['mnfs'+noResi] = _manifest['mnfs'+noResi];
                //}
            }
        });
    }
    $('#bottomright .card-body meter').attr('value', 50)
    //================ BO : STATUS MONITORING DETAIL ===============
    response = await fetchget(`https://bo.sentralcargo.co.id/Order/TrackingMonitoringDetailForm.aspx?KeyId=20122&TrxDtFrom=${formatdate(dayFrom())}&TrxDtTo=${formatdate(dayFrom())}`);
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(response, 'text/html');
    tabel = xmlDoc.getElementById("cphBody_gvData");
    if(tabel){
        let rows = tabel.querySelectorAll('tbody tr');
        rows.forEach(row => {
            let noResi = (row.querySelector('td:nth-child(1)')).textContent.trim();
            let asal = (row.querySelector('td:nth-child(2)')).textContent.trim();
            let kecamatan = (row.querySelector('td:nth-child(4)')).textContent.trim();
            let sla = (row.querySelector('td:nth-child(7)')).textContent.trim();
            let payment = (row.querySelector('td:nth-child(8)')).textContent.trim();
            let tagihan = (row.querySelector('td:nth-child(9)')).textContent.trim();
            let track = (row.querySelector('td:nth-child(16)')).textContent.trim();
            let spod = (row.querySelector('td:nth-child(17)')).textContent.trim();
            let lastscan = spod.slice(2);
            let masuk, posisi, status, driver, diterima, prb;
            if(spod.startsWith('P')){
                posisi = 'oncabang';
                if(track.startsWith('Dijadwalkan')) prb = 'ots';
                else if(track.startsWith('Alamat tidak jelas')) prb = 'ba';
                else if(track.startsWith('Tidak ada di rumah')) prb = 'nth';
                else if(track.startsWith('Paket sudah diterima oleh kantor [Pasuruan')) prb = 'ktr';
                else if(track.startsWith('Antar Ulang')) prb = 'au';
                else if(track.startsWith('Antar sebagian')) prb = 'as';
                else if(track.startsWith('CODA')) prb = 'coda';
                else if(track.startsWith('PEND')) prb = 'pend';
                else{prb = ''}
                //if(_manifest['mnfs'+noResi] && _manifest['mnfs'+noResi].masuk === ''){
                if(prb == 'ktr') {
                    masuk = stringToDate(spod);
                }
            }
            else if(track.startsWith('Paket telah diterima oleh')) {
                posisi = 'done';
                status = 'done';
                let siku = track.match(/\[([^\]]+)\]/g).map(match => match.slice(1, -1));
                diterima = siku[0];
                driver = siku[1];
            }
            let needUpdate = false;
            if(_manifest['mnfs'+noResi]){
                //if(!checkObjValue(noResi,'asal', asal)) needUpdate = true;
                //if(!checkObjValue(noResi,'masuk', masuk)) needUpdate = true;
                if(!checkObjValue(noResi,'prb', prb)) needUpdate = true;
                let dest = kecamatan.split(',');
                if(!checkObjValue(noResi,'kecamatan', dest[0].trim())) needUpdate = true;
                if(!checkObjValue(noResi,'region', dest[1].trim())) needUpdate = true;
                if(_manifest['mnfs'+noResi].sla === 'unknow') {
                    console.log('masalah sla',noResi)
                    _manifest['mnfs'+noResi].sla = dayFrom(parseInt(sla));
                    needUpdate = true;
                }
                if(_manifest['mnfs'+noResi].masuk == '') {
                    console.log('masalah masuk',noResi)
                    _manifest['mnfs'+noResi].masuk = masuk;
                    needUpdate = true;
                }
                if(status) {
                    if(!checkObjValue(noResi,'status' ,status)) needUpdate = true;
                }
                if(!checkObjValue(noResi,'payment' ,payment)) needUpdate = true;
                if(!checkObjValue(noResi,'tagihan' ,parseInt(tagihan.replace(/,/g, '')))) needUpdate = true;
                if(!checkObjValue(noResi,'track' ,track)) needUpdate = true;
                //if(!checkObjValue(noResi,'info' ,info)) needUpdate = true;
                if(!checkObjValue(noResi,'lastscan' ,lastscan)) needUpdate = true;
                if(!checkObjValue(noResi,'posisi' ,posisi)) needUpdate = true;
                if(driver){
                    if(!checkObjValue(noResi,'driver' ,driver)) needUpdate = true;
                    if(!checkObjValue(noResi,'diterima' ,diterima)) needUpdate = true;
                }
            }
            else{
                //let seri = makeId('mnfs');
                console.log(noResi,'tambahan missroute dari monitor detail') //====================== TP
                _missroute['mnfs'+noResi] = {
                    id:'mnfs'+noResi,
                    missinfo: 'not manifest'
                }
            }

            if(needUpdate) {
                console.log(noResi,'MONITOR update '+pm++) //====================== TP
                poshback['mnfs'+noResi] = _manifest['mnfs'+noResi];
            }
        });
        $('#bottomright .card-body meter').attr('value', 65)
    }
//     //================ BO : STATUS MONITORING DETAIL SND_CUS===============
    response = await fetchget(`https://bo.sentralcargo.co.id/Order/TrackingMonitoringDetailForm.aspx?KeyId=20122&TrxDtFrom=${formatdate(dayFrom())}&TrxDtTo=${formatdate(dayFrom())}&StatusCode=SND_CUS`);
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(response, 'text/html');
    tabel = xmlDoc.getElementById("cphBody_gvData");
    if(tabel){
        let rows = tabel.querySelectorAll('tbody tr');
        rows.forEach(row => {
            let noResi = (row.querySelector('td:nth-child(1)')).textContent.trim();
            let payment = (row.querySelector('td:nth-child(8)')).textContent.trim();
            let tagihan = (row.querySelector('td:nth-child(9)')).textContent.trim();
            let track = (row.querySelector('td:nth-child(16)')).textContent.trim();
            let driver = (row.querySelector('td:nth-child(13)')).textContent.trim();
            let needUpdate = false;
            if(_manifest['mnfs'+noResi]){
                if(!checkObjValue(noResi,'payment' ,payment)) needUpdate = true;
                if(!checkObjValue(noResi,'tagihan' ,parseInt(tagihan.replace(/,/g, '')))) needUpdate = true;
                if(!checkObjValue(noResi,'track' ,track)) needUpdate = true;
                if(!checkObjValue(noResi,'posisi' ,'deliveri')) needUpdate = true;
                if(!checkObjValue(noResi,'driver' ,driver)) needUpdate = true;
            }
            else{
                //let seri = makeId('mnfs');
                console.log(noResi,'tambahan missroute dari SND-CUS') //====================== TP
                _missroute['mnfs'+noResi] = {
                    id:'mnfs'+noResi,
                    missinfo: 'not oncab'
                }
            }
            if(needUpdate) {
                console.log(noResi,'SND-CUS update '+ ps++) //====================== TP
                poshback['mnfs'+noResi] = _manifest['mnfs'+noResi];
            }
        });
    }
    console.log('postback',Object.keys(poshback).length)
    $('#bottomright .card-body meter').attr('value', 80)
    if(Object.keys(poshback).length > 0) await postDatabase('update',{manifest:poshback})
    $('#bottomright .card-body meter').attr('value', 100)
    //=================ASSIGN TO TABLE
    let rekap = {}
    let miss = {}
    let items = Object.keys(_manifest);
    for(let item of items){
        if(_manifest[item].posisi == 'manifest'){
            if(_manifest[item].type == 'SPX') rekap.mnfs_sp = (rekap.mnfs_sp || 0) + 1;
            if(_manifest[item].type == 'REG') rekap.mnfs_reg = (rekap.mnfs_reg || 0) + 1;
            continue;
        }
        let on = '';
        let type = '';
        if(_manifest[item].posisi == 'oncabang') on = 'cab';
        if(_manifest[item].posisi == 'deliveri') on = 'dlv';
        if(_manifest[item].posisi == 'done') on = 'done';
        // TYPE
        if(_manifest[item].type == 'SPX') {
            type = 'sp';
            rekap[`${on}_${type}_qty`] = (rekap[`${on}_${type}_qty`] || 0) + 1;
        }
        else if(_manifest[item].type == 'REG') {
            type = 'reg';
            rekap[`${on}_${type}_qty`] = (rekap[`${on}_${type}_qty`] || 0) + 1;
        }
        // REGION
        if(_manifest[item].region == 'Pasuruan') {
            rekap[`${on}_${type}_psn`] = (rekap[`${on}_${type}_psn`] || 0) + 1;
        }
        else if(_manifest[item].region == 'Probolinggo') {
            rekap[`${on}_${type}_pro`] = (rekap[`${on}_${type}_pro`] || 0) + 1;
        }
        else if(_manifest[item].region == 'Lumajang') {
            rekap[`${on}_${type}_lmj`] = (rekap[`${on}_${type}_lmj`] || 0) + 1;
        }
        else {
            rekap[`err_${type}`] = (rekap[`err_${type}`] || 0) + 1;
            miss[item] = {..._manifest[item], missinfo: `Salah Tujuan - ${_manifest[item].kecamatan},${_manifest[item].region}`}
        }
        //SLA
        let sla = (_manifest[item].sla !== '') ? _manifest[item].sla : '';
        let calc_sla = selisihHari(sla);
        if(calc_sla > 1) {
            _manifest[item].monitor_sla = 'over'
            rekap[`${on}_${type}_over`] = (rekap[`${on}_${type}_over`] || 0) + 1;
        }
        else if(calc_sla == 0) {
            _manifest[item].monitor_sla = 'now'
            rekap[`${on}_${type}_now`] = (rekap[`${on}_${type}_now`] || 0) + 1;
        }
        else if(calc_sla < 1) {
            _manifest[item].monitor_sla = 'save'
            rekap[`${on}_${type}_save`] = (rekap[`${on}_${type}_save`] || 0) + 1;
        }
        else {
            // rekap.err_spx = (rekap.err_spx || 0) + 1;
            // miss[item] = {..._manifest[item], missinfo: `Salah Tujuan - ${_manifest[item].kecamatan},${_manifest[item].region}`}
        }
        //INCOMING
        let msk = _manifest[item].masuk ? _manifest[item].masuk : '';
        let calc_masuk = selisihHari(msk);
        if(calc_masuk == 0) {
            _manifest[item].monitor_incoming = 0
            rekap[`${on}_${type}_0`] = (rekap[`${on}_${type}_0`] || 0) + 1;
        }
        if(calc_masuk == 1) {
            _manifest[item].monitor_incoming = 1
            rekap[`${on}_${type}_1`] = (rekap[`${on}_${type}_1`] || 0) + 1;
        }
        if(calc_masuk > 1) {
            _manifest[item].monitor_incoming = 2
            rekap[`${on}_${type}_2`] = (rekap[`${on}_${type}_2`] || 0) + 1;
        }
        //REPORT
        if(_manifest[item].prb !== ''){
            _manifest[item].monitor_report_prb = 'prb'
            rekap[`${on}_${type}_prb`] = (rekap[`${on}_${type}_prb`] || 0) + 1;
        }
        if(_manifest[item].urg !== ''){
            _manifest[item].monitor_report_urg = 'urg'
            rekap[`${on}_${type}_urg`] = (rekap[`${on}_${type}_urg`] || 0) + 1;
        }
        if(_manifest[item].case !== ''){
            _manifest[item].monitor_report_case = 'case'
            rekap[`${on}_${type}_case`] = (rekap[`${on}_${type}_case`] || 0) + 1;
        }
    }
    showResiPanel();
    let ids = Object.keys(rekap);
    for(let id of ids){
        let selector = $(`#${id}`);
        if(!selector) continue
        selector.addClass('btnapp');
        selector.attr({'data-action':'monitor','data-option':'new','data-f':id})
        selector.text(rekap[id]);
    }
    $('#cab_sp').text(rekap.cab_sp_qty);
    $('#cab_reg').text(rekap.cab_reg_qty);
    $('#dlv_sp').text(rekap.dlv_sp_qty);
    $('#dlv_reg').text(rekap.dlv_reg_qty);
    console.log(rekap)
    return
}
const checkObjValue = (resi, key, val) => {
    if(_manifest['mnfs'+resi][key] == val) {
        return true;
    }
    else {
        _manifest['mnfs'+resi][key] = val;
        console.log(resi,key,val,'UPDATE')
    }
    return false;
}
const selisihHari = (str) => {
    let [dd,mm,yy] = str.split('-');
    let inputdate = new Date( yy, mm -1, dd );
    let today = new Date();
    let diffDay = today - inputdate;
    let diffConf = Math.ceil(diffDay / (1000 * 60 * 60 * 24));
    return diffConf - 1
}
const filterData = (on, type, cat = null) => {
    return Object.fromEntries(
        Object.entries(_manifest).filter(([key, value]) => value.posisi === on && value.type === type && ( cat === null || value[cat.key] === cat.val ))
    );
}
//=========================================


//========================================= MONITOR HANDLER
const monitorHandler = ($el) => {
    let option = $el.attr('data-option')
    if(option == 'new'){
        let p = $el.attr('data-f');
        let path = p.split('_')
        let route = {
            mnfs:'manifest',cab:'oncabang',dlv:'deliveri',sp:'SPX',reg:'REG',qty:null,
            psn:{key:'region',val:'Pasuruan'},pro:{key:'region',val:'Probolinggo'},lmj:{key:'region',val:'Lumajang'},
            save:{key:'monitor_sla',val:'save'},now:{key:'monitor_sla',val:'now'},over:{key:'monitor_sla',val:'over'},
            '0':{key:'monitor_incoming',val:0},'1':{key:'monitor_incoming',val:1},'2':{key:'monitor_incoming',val:2},
            urg:{key:'monitor_report_urg',val:'urg'},prb:{key:'monitor_report_prb',val:'prb'},case:{key:'monitor_report_case',val:'case'},
        }
        let filter = filterData( route[path[0]] , route[path[1]] , route[path[2]] )
        let items = Object.keys(filter);
        let headers = ['Resi','Tgl Resi','Pengirim','Penerima','Kecamatan','Region','Koli','Payment','Tagihan','Masuk','SLA','PRB'];
        let el_table = `
<table class="table table-hover table-condensed">
<thead>
  <tr>`;
        headers.forEach(header => {
            el_table += `<th>${header}</th>`
        });
        el_table += '</tr></thead><tbody>'
        for(let item of items){
            el_table += `<tr class="btnapp" data-action="monitor" data-option="opsi" data-resi="${filter[item].resi}"><td style="width: 80px;">${filter[item].resi}</td><td style="width: 70px;">${(filter[item].date_resi).split('-')[0].trim()}</td>
        <td style="width: 150px;">${filter[item].pengirim}</td><td style="width: 150px;">${filter[item].penerima}</td><td style="width: 80px;">${filter[item].kecamatan}</td><td style="width: 80px;">${filter[item].region}</td><td style="width: 30px;">${filter[item].koli}</td>
        <td style="width: 80px;">${filter[item].payment}</td><td style="width: 90px;">Rp. ${addCommas(filter[item].tagihan)}</td><td style="width: 80px;">${filter[item].masuk}</td><td style="width: 80px;">${filter[item].sla}</td>
        <td style="width: 30px;">${filter[item].prb}</td></tr>`;
        }
        el_table += '</tbody>'
        let idDiv = randomId();
        let flag = 'FILTER : '+p;
        let body = `
<div  style="display: flex;height:30px;margin-bottom:5px;">
  <input type="number" class="form-control inputresi" placeholder="Search for...">
  <button class="btn btn-danger btnapp" type="button"  data-action="resi" data-option="cariresi" >Search</button>
</div>
<div class="table-responsive" style="height: calc(-30px + 100%);">

${el_table}

  </table>
</div>`;
        return newWindow(idDiv,flag,1400,600,body)
    }
    if(option == 'opsi'){
        let resi = $el.attr('data-resi')
        let obj = {resi}
        return dialogOption(obj)
    }
    if(option == 'detail'){
        let resi = $el.attr('data-resi');
        $( "#dialog-message" ).dialog("destroy")
        return showResiDetail(resi);
    }
}
const dialogOption = (obj) => {
    let title = 'Option';
    let body = `<div class="table-responsive" style="height:100%"><table class="table-dialog">`;

    let data = [
        {label:'',element:'button',obj:{class:'btnapp',attribute:``,style:'width: 100%;height: 25px;border-radius: 5px;margin: 2.5px 0;',text:'Copy Resi'}},
        {label:'',element:'button',obj:{class:'btnapp',attribute:`data-action="monitor" data-option="detail" data-resi="${obj.resi}"`,style:'width: 100%;height: 25px;border-radius: 5px;margin: 2.5px 0;',text:'Show Detail'}},
        {label:'',element:'button',obj:{class:'btnapp',attribute:``,style:'width: 100%;height: 25px;border-radius: 5px;margin: 2.5px 0;',text:'Make Chat'}},
    ];
    let tbody = renderBodyTableDialog(data);
    body += tbody+'</table></div>';
    newDialog(title,body,200,200)
    return
}
const showResiDetail = (resi) => {
    console.log(_manifest['mnfs'+resi])
    let idDiv = randomId();
    let flag = 'RESI DETAIL : '+resi;
    let manifest = _manifest['mnfs'+resi];
    let data = [
        {label:'Resi',element:'input',obj:{class:'reqkas',attribute:`type="text" data-type="date" value="${dayFrom()}" disabled`,style:''}},
        {label:'Saldo PettyCash',element:'input',obj:{class:'reqkas',attribute:`type="text" data-type="ptcs" value="${addCommas(0)}" disabled`,style:'text-align: right;'}},
        {label:'Saldo E-Tol',element:'input',obj:{class:'reqkas',attribute:`type="text" data-type="etol" value="${addCommas(0)}" disabled`,style:'text-align: right;'}},
        {label:'PIC',element:'input',obj:{class:'reqkas',attribute:'type="text" data-type="pic" ',style:''}},
        {label:'Jumlah (Rp)',element:'input',obj:{class:'reqkas',attribute:'type="number" data-type="jumlah" ',style:''}},
        {label:'Keperluan',element:'textarea',obj:{class:'reqkas',attribute:'data-type="keperluan" ',style:''}},
    ];
    let tbody = renderBodyTableDialog(data);
    let body = `<div class="table-responsive" style="height:100%"><table class="table-dialog">${tbody}</table></div>`;

    return newWindow(idDiv,flag,800,600,body)
}
//=========================================

//========================================= SETORAN DRIVER
// action : setoran
let tagihanData = {};
const setoranHandler = async ($el) => {
    let option = $el.attr('data-option');
    if(option == 'new'){
        const formatDate = str => {
            let [d,m,y] = str.split('-')
            return `${m}/${d}/${y}`
        }
        let urlTagihanIncoming = `/Dashboard/BranchResiForm.aspx?KeyId=20122&TrxDtFrom=${formatDate(dayFrom(20))}%2012:00:00%20AM&TrxDtTo=${formatDate(dayFrom())}%2012:00:00%20AM&SisaTagihTujuan=1&PODStat=Report`;
        let response = await fetchget(baseUrl+urlTagihanIncoming);
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(response, 'text/html');
        let table = xmlDoc.getElementById("cphBody_gvData");
        if(table){
            let rows = table.querySelectorAll('tbody tr');
            let t = dayFrom().split('-')[0];
            tagihanData.done = [{info:{}}];
            tagihanData.active = null;
            rows.forEach(row => {
                let statusbayar = (row.querySelector('td:nth-child(10)')).textContent.trim();
                //if(statusbayar !== 'Request Recon') return
                if(statusbayar === 'Request Recon') return
                let spod = (row.querySelector('td:nth-child(13)')).textContent.trim();
                let n = spod.substring(3,5);
                if(n == t) return
                let resi = (row.querySelector('td:nth-child(1)')).textContent.trim();
                let sender = (row.querySelector('td:nth-child(3)')).textContent.trim();
                let receiver = (row.querySelector('td:nth-child(4)')).textContent.trim();
                let tagih = (row.querySelector('td:nth-child(9)')).textContent.trim();
                let tagihan = parseInt(tagih.replace(/,/g, ''))
                let track = (row.querySelector('td:nth-child(12)')).textContent.trim();
                let siku = [];
                track.replace(/\[(.*?)\]/g, function(match, captureGroup) {
                    siku.push(captureGroup);
                });
                let diterima = siku[0];
                let pic = siku[1];
                if(!tagihanData[pic]){
                    tagihanData[pic] = {
                        [resi]:{resi,sender,receiver,tagihan,pic,diterima,type:'INC',payment:null,img:null},
                        flag:{totaltagihan:tagihan,
                              tunai_total:0,
                              transfer:{},
                              transfer_total:0,
                              source_t:{
                                  total_resi:0,
                                  total_dpst:0,
                                  total_loan:0,
                              },
                              source_t_total:0,
                              used_t:{
                                  total_kout:0,
                                  total_bons:0,
                                  total_dpst:0,
                                  total_loan:0,
                              },
                              used_t_total:0,
                              source_b:{},
                              source_b_total:0,
                              used_b:{
                                  total_kout:0,
                                  total_bons:0,
                                  total_cash:0,
                                  total_loan:0,
                              },
                              used_b_total:0,
                              cash:0,
                             }
                    };
                    if(_bons[pic]){
                        _bons[pic].bons.forEach(id => {
                            tagihanData[pic].flag.source_b = {...tagihanData[pic].flag.source_b, ...{[id]:_bons[id]}};
                            tagihanData[pic].flag.source_b_total += _bons[id].source_sum;
                        })
                    }
                }
                else if (!tagihanData[pic][resi]){
                    let k = {[resi]:{resi,sender,receiver,tagihan,pic,diterima,type:'INC',payment:null,img:null}}
                    tagihanData[pic].flag.totaltagihan += tagihan;
                    tagihanData[pic] = {...tagihanData[pic], ...k}
                }
            })
        }

        //================================== OUTGOING
        const referse = (date) => {
            let str = date.split('-')
            return str[2] + '-' + str[1] + '-' + str[0]
        }
        let formDataArray = [
            { name: 'ctl00$cphBody$rblSearchMode', value: 'RNG' },
            { name: 'ctl00$cphBody$ddlOfficeRecipient', value: '20122' },
            { name: 'ctl00$cphBody$ddlWayOfPayment', value: '' },
            { name: 'ctl00$cphBody$txtTrxDtFrom', value: referse(dayFrom(10)) }, //===outgoing di cek dari 10 hari ke belakang
            { name: 'ctl00$cphBody$txtTrxDtTo', value: referse(dayFrom(1)) } //=== sampai hari kemarin
        ];
        let outgoing = await fetchpost('https://bo.sentralcargo.co.id/Reconciliation/BranchCashReconRequestForm.aspx', "ctl00$cphBody$btnSearch", formDataArray);
        let parser_out = new DOMParser();
        let xmlDoc_out = parser_out.parseFromString(outgoing, 'text/html');
        let tableElement = xmlDoc_out.getElementById('cphBody_gvdata');
        if(tableElement){
            let rows = tableElement.querySelectorAll('tbody tr');
            rows.forEach(row => {
                let resi = (row.querySelector('td:nth-child(2)')).textContent.trim();
                let receiver = (row.querySelector('td:nth-child(5)')).textContent.trim();
                let tagihan = toInt((row.querySelector('td:nth-child(9)')).textContent.trim().replace(/,/g,''));
                let payment = (row.querySelector('td:nth-child(6)')).textContent.trim();
                let pic = (row.querySelector('td:nth-child(7)')).textContent.trim();
                let podstat = (row.querySelector('td:nth-child(4)')).textContent.trim();
                if(!tagihanData[pic]){
                    tagihanData[pic] = {
                        [resi]:{resi,sender:'Outgoing',receiver,tagihan,pic,diterima:'',type:'OUT',payment:null,img:null},
                        flag:{totaltagihan:tagihan,
                              tunai_total:0,
                              transfer:{},
                              transfer_total:0,
                              source_t:{
                                  total_resi:0,
                                  total_dpst:0,
                                  total_loan:0,
                              },
                              source_t_total:0,
                              used_t:{
                                  total_kout:0,
                                  total_bons:0,
                                  total_dpst:0,
                                  total_loan:0,
                              },
                              used_t_total:0,
                              source_b:{},
                              source_b_total:0,
                              used_b:{
                                  total_kout:0,
                                  total_bons:0,
                                  total_cash:0,
                                  total_loan:0,
                              },
                              used_b_total:0,
                              cash:0,
                             }
                    };
                    if(_bons[pic]){
                        _bons[pic].bons.forEach(id => {
                            tagihanData[pic].flag.source_b = {...tagihanData[pic].flag.source_b, ...{[id]:_bons[id]}};
                            tagihanData[pic].flag.source_b_total += _bons[id].source_sum;
                        })
                    }
                }
                else if (!tagihanData[pic][resi]){
                    let k = {[resi]:{resi,sender:'Outgoing',receiver,tagihan,pic,diterima:'',type:'OUT',payment:null,img:null}}
                    tagihanData[pic].flag.totaltagihan += tagihan;
                    tagihanData[pic] = {...tagihanData[pic], ...k}
                };
            });
        }

        let driver = Object.keys(tagihanData);
        if(driver.length == 1) return dialogAlert('INFO','Tidak ada tagihan !')

        showWindow(tagihanData)
        await updatedeposit();
        return
    }
    if(option == 'driver'){
        let pic = $el.attr('data-pic');
        $('.tagihan-item').css('background','#f3f3f3')
        $('.tagihan-item[data-pic="'+pic+'"]').css('background','lightblue')
        if(tagihanData.active == pic) return
        tagihanData.active = pic;
        let dt = tagihanData[pic];
        let resis = Object.keys(dt)
        let tr = '';
        for(let resi of resis){ //resi,sender,receiver,tagihan,pic,diterima,type:'incoming'
            if(resi == 'flag') continue;
            let payment = dt[resi].payment;
            let cbch, cbtf, showbtn, delbtn;
            if(payment){
                if(payment == 'tunai'){
                    cbch = 'checked'; cbtf = 'disabled';
                }
                else {
                    cbch = 'disabled'; cbtf = 'checked';showbtn = 'display:"";';
                    if(dt.flag.transfer[resi].img) delbtn = 'display:"";'
                }
            }
            tr += `
<tr>
  <td class="cursor btnapp" data-action="setoran" data-option="detail" data-id="${dt[resi].resi}">${dt[resi].resi}</td>
  <td>${dt[resi].sender}</td><td>${dt[resi].receiver}</td><td>${dt[resi].pic}</td>
  <td>${dt[resi].diterima}</td><td>${dt[resi].type}</td><td class="text-right">${addCommas(dt[resi].tagihan)}</td>
  <td>
    <input type="checkbox" class="cb_tagihan_tunai handleapp" data-action="setoran" data-option="cb_tunai" data-type="${dt[resi].type}" data-resi="${resi}" ${cbch ? cbch : ''} style="cursor:pointer;">
    <input type="checkbox" class="cb_tagihan_transfer handleapp" data-action="setoran" data-option="cb_transfer" data-type="${dt[resi].type}" data-resi="${resi}" ${cbtf ? cbtf : ''} style="cursor:pointer;">
  </td>
  <td class="text-center">
    <button type="button" class="btnimageupload btnapp" data-action="setoran" data-option="upload" data-pic="${dt[resi].pic}" data-resi="${resi}" style="${showbtn ? showbtn : 'display:none;'}">
      <span class="glyphicon glyphicon-${delbtn ? 'eye' : 'floppy'}-open"></span>
    </button>
    <button type="button" class="btnimagedelete btnapp" data-action="setoran" data-option="delete" data-pic="${dt[resi].pic}" data-resi="${resi}" style="${delbtn ? delbtn : 'display:none;'}margin-left:5px;">
       <span class="glyphicon glyphicon-floppy-remove"></span>
    </button>
  </td>
</tr>`;
        }
        $('#setoran_tbody').html(tr);

        if(dt.flag.source_t){
            let sources = Object.keys(dt.flag.source_t)
            tr = '';
            for(let source of sources){
                if(source.startsWith('total')) continue
                tr += `<tr class="tr_source" data-resi="${dt.flag.source_t[source].id}">
                <td class="cursor btnapp" data-action="setoran" data-option="detail" data-id="${source}">${source}</td>
                <td>${dt.flag.source_t[source].desk}</td><td class="text-right">${addCommas(dt.flag.source_t[source].amount)}</td>
                ${source.length == 11 ? '<td></td>' :
                `<td><button class="btnapp" type="button" data-action="setoran" data-option="removetr" data-id="${dt.flag.source_t[source].id}" data-type="source_t">x</button></td>`}
                </tr>`;
            }
            $('.detail_tagihan[data-type="dpst"]').val('Rp. '+addCommas(dt.flag.source_t.total_dpst));
            $('.detail_tagihan[data-type="loan"]').val('Rp. '+addCommas(dt.flag.source_t.total_loan));
            $('#tbody_tagihan_source').html(tr)
        }else $('#tbody_tagihan_source').html('');
        if(dt.flag.used_t){
            let useds = Object.keys(dt.flag.used_t)
            tr = '';
            for(let used of useds){
                if(used.startsWith('total')) continue
                tr += `<tr class="tr_source" data-resi="${dt.flag.used_t[used].id}">
                <td class="cursor btnapp" data-action="setoran" data-option="detail" data-id="${used}">${used}</td>
                <td>${dt.flag.used_t[used].desk}</td><td class="text-right">${addCommas(dt.flag.used_t[used].amount)}</td>
                <td><button class="btnapp" type="button" data-action="setoran" data-option="removetr" data-id="${dt.flag.used_t[used].id}" data-type="used_t">x</button></td>
                </tr>`;
            }
            $('#tbody_tagihan_used').html(tr)
        }else $('#tbody_tagihan_used').html('');
        if(dt.flag.source_b){
            let sources = Object.keys(dt.flag.source_b)
            tr = '';
            for(let source of sources){
                tr += `<tr class="tr_source" data-resi="${dt.flag.source_b[source].id}">
                <td class="cursor btnapp" data-action="setoran" data-option="detail" data-id="${source}">${source}</td>
                <td>${dt.flag.source_b[source].detail}</td><td class="text-right">${addCommas(dt.flag.source_b[source].source_sum)}</td><td></td>
                </tr>`;
            }
            $('#tbody_bons_source').html(tr);
        }else $('#tbody_bons_source').html('');
        if(dt.flag.used_b){
            let useds = Object.keys(dt.flag.used_b)
            tr = '';
            for(let used of useds){
                if(used.startsWith('total')) continue
                tr += `<tr class="tr_source" data-resi="${dt.flag.used_b[used].id}">
                <td class="cursor btnapp" data-action="setoran" data-option="detail" data-id="${used}">${used}</td>
                <td>${dt.flag.used_b[used].desk}</td><td class="text-right">${addCommas(dt.flag.used_b[used].amount)}</td>
                <td><button class="btnapp" type="button" data-action="setoran" data-option="removetr" data-id="${dt.flag.used_b[used].id}" data-type="used_b">x</button></td>
                </tr>`;
            }
            $('#tbody_bons_used').html(tr);
        }else $('#tbody_bons_used').html('');
        updateDetailTagihan(pic,dt)
        return
    }
    if(option == 'detail'){
        showId($el.attr('data-id'));
        return
    }
    if(option == 'cb_tunai'){
        let pic = tagihanData.active;
        let resi = $el.attr('data-resi');
        let type = $el.attr('data-type');
        let data = tagihanData[pic];
        let tagihan = data[resi].tagihan;
        if ($el.prop('checked')) {
            $('.cb_tagihan_transfer[data-resi="'+resi+'"]').prop('disabled', true);
            let add = {[resi]:{id:resi,desk:'',type,amount:tagihan}};
            data[resi].payment = 'tunai';
            data.flag.source_t.total_resi += tagihan;
            data.flag.source_t = {...data.flag.source_t,...add};
            data.flag.source_t_total += tagihan;
            data.flag.tunai_total += tagihan;
            $('#tbody_tagihan_source').append(`<tr class="tr_source" data-resi="${resi}"><td>${resi}</td><td></td><td class="text-right">${addCommas(tagihan)}</td></tr>`);
            updateDetailTagihan(pic,data)

        }
        else {
            $('.cb_tagihan_transfer[data-resi="'+resi+'"]').prop('disabled', false);
            data[resi].payment = '';
            delete data.flag.source_t[resi];
            data.flag.source_t.total_resi -= tagihan;
            data.flag.source_t_total -= tagihan;
            data.flag.tunai_total -= tagihan;
            $('.tr_source[data-resi="'+resi+'"]').remove();
            updateDetailTagihan(pic,data)
        }
        return
    }
    if(option == 'cb_transfer'){
        let pic = tagihanData.active;
        let resi = $el.attr('data-resi');
        let data = tagihanData[pic];
        let tagihan = data[resi].tagihan;
        if ($el.prop('checked')) {
            $('.cb_tagihan_tunai[data-resi="'+resi+'"]').prop('disabled', true);
            $('.btnimageupload[data-resi="'+resi+'"]').show();
            //$('.btnimagedelete[data-resi="'+resi+'"]').show();
            let add = {[resi]:{id:resi,desk:'',amount:tagihan,img:null}};
            data[resi].payment = 'transfer';
            data.flag.transfer = {...data.flag.transfer,...add};
            data.flag.transfer_total += tagihan;
            updateDetailTagihan(pic,data)
        }
        else {
            $('.cb_tagihan_tunai[data-resi="'+resi+'"]').prop('disabled', false);
            $('.btnimageupload[data-resi="'+resi+'"]').hide();
            //$('.btnimagedelete[data-resi="'+resi+'"]').hide();
            data[resi].payment = '';
            delete data.flag.transfer[resi]
            data.flag.transfer_total -= tagihan;
            updateDetailTagihan(pic,data)
        }
        console.log(data);
        return
    }
    if(option == 'addsource_t'){
        if(!tagihanData.active) return dialogAlert('INFO','Pilih Driver !')
        let title = 'ADD SOURCE - TAGIHAN';
        let body = `<div class="table-responsive" style="height:100%"><table class="table-dialog">`;
        let S_type = [
            {key:'dpst',value:'Deposit'},
            {key:'loan',value:'Lainnya'},
        ];
        let data = [
            {label:'DATE',element:'input',obj:{class:'dialog_setoran',attribute:`type="text" data-type="date" value="${dayFrom()}" disabled`,style:''}},
            {label:'SOURCE TYPE',element:'select',obj:{class:'dialog_setoran',attribute:'data-type="source"',style:'',option:S_type}},
            {label:'PIC',element:'input',obj:{class:'dialog_setoran',attribute:`type="text" data-type="pic" value="${tagihanData.active}" disabled`,style:''}},
            {label:'NOMINAL',element:'input',obj:{class:'dialog_setoran',attribute:`type="number" data-type="nominal" `,style:''}},
            {label:'DESKRIPSI',element:'textarea',obj:{class:'dialog_setoran',attribute:`data-type="desk" `,style:''}},
        ];
        body += renderBodyTableDialog(data);
        body += '</table></div>';
        let button = {
            'Simpan':function(){
                let numb = $('.dialog_setoran[data-type="nominal"]').val();
                if(numb == '') return $('.dialog_setoran[data-type="nominal"]').focus();
                let data = tagihanData[tagihanData.active];
                let type = $('.dialog_setoran[data-type="source"]').val()
                let id = type + randomId();
                let pic = $('.dialog_setoran[data-type="pic"]').val();
                let amount = parseInt(numb);
                let desk = $('.dialog_setoran[data-type="desk"]').val();
                let add = {[id]:{id,date:dayFrom(),amount,pic,desk}};
                data.flag.source_t['total_'+type] += amount;
                data.flag.source_t = {...data.flag.source_t,...add};
                data.flag.source_t_total +=  amount;
                $('#tbody_tagihan_source').append(`<tr class="tr_source" data-resi="${id}"><td>${id}</td><td>${desk}</td><td class="text-right">${addCommas(amount)}</td>
                <td><button class="btnapp" type="button" data-action="setoran" data-option="removetr" data-id="${id}" data-type="source_t">x</button></td></tr>`);
                $( this ).dialog("destroy");
                updateDetailTagihan(tagihanData.active,data)
            },
            'Batal':function(){
                $( this ).dialog("destroy");
            }
        };
        newDialog(title,body,400,400,button)
        return
    }
    if(option == 'addused_t'){
        if(!tagihanData.active) return dialogAlert('INFO','Pilih Driver !')
        let title = 'ADD USED - TAGIHAN';
        let body = `<div class="table-responsive" style="height:100%"><table class="table-dialog">`;
        let s_type = [
            {key:'kout',value:'Pengeluaran Kas'},
            {key:'bons',value:'Bon Sementara'},
            {key:'dpst',value:'Deposit'},
            {key:'loan',value:'Lainnya'}
        ];
        let s_deposit = [{key:'',value:'Pilih list Deposit'}];
        let items = Object.keys(_deposit);
        for(let item of items){
            s_deposit.push({key:_deposit[item].id,value:`${_deposit[item].detail} - [sisa : ${addCommas(_deposit[item].source_sum - _deposit[item].used_sum)}]`});
        }
        let data = [
            {label:'DATE',element:'input',obj:{class:'dialog_setoran',attribute:`type="text" data-type="date" value="${dayFrom()}" disabled`,style:''}},
            {label:'USED TYPE',element:'select',obj:{class:'dialog_setoran',attribute:'data-type="used"',style:'',option:s_type}},
            {label:'PIC',element:'select',obj:{class:'dialog_setoran',attribute:`data-type="pic"`,style:'',option:arrPic()}},
            {label:'NOMINAL',element:'input',obj:{class:'dialog_setoran',attribute:`type="number" data-type="nominal" `,style:''}},
            {label:'DESKRIPSI',element:'textarea',obj:{class:'dialog_setoran',attribute:`data-type="desk" `,style:''}},
            {label:'DEPOSIT',element:'select',obj:{class:'dialog_setoran',attribute:'data-type="deposit"',style:'',option:s_deposit}},
        ];
        body += renderBodyTableDialog(data);
        body += '</table><hr><span class="dialog_setoran" data-type="err" style="font-style: italic;"></span></div>';
        let button = {
            'Simpan':function(){
                let numb = $('.dialog_setoran[data-type="nominal"]').val();
                if(numb == '') {
                    $('.dialog_setoran[data-type="err"]').text('Input Amount !');
                    return $('.dialog_setoran[data-type="nominal"]').focus();
                }
                let data = tagihanData[tagihanData.active];
                let used = $('.dialog_setoran[data-type="used"]').val();
                let depo = $('.dialog_setoran[data-type="deposit"]').val();
                let id = '';
                if(used == 'dpst' && depo == ''){
                     $('.dialog_setoran[data-type="err"]').text('Select Deposit !');
                     return $('.dialog_setoran[data-type="deposit"]').focus();
                }
                else if(used == 'dpst' && depo != '') id = depo;
                else id = used + randomId();
                let pic = $('.dialog_setoran[data-type="pic"]').val();
                let amount = parseInt(numb);
                let desk = $('.dialog_setoran[data-type="desk"]').val();
                let add = (used == 'dpst') ? {[id]:{id,amount:_deposit[id].source_sum - _deposit[id].used_sum,desk,pic}} : {[id]:{id,amount,desk,pic}};
                data.flag.used_t = {...data.flag.used_t,...add};
                data.flag.used_t_total += amount;
                data.flag.used_t['total_'+used] += amount;
                $('#tbody_tagihan_used').append(`<tr class="tr_used" data-resi="${id}"><td>${id}</td><td>${desk}</td><td class="text-right">${addCommas(amount)}</td>
                <td><button class="btnapp" type="button" data-action="setoran" data-option="removetr" data-id="${id}" data-type="used_t">x</button></td></tr>`);
                $( this ).dialog("destroy");
                updateDetailTagihan(tagihanData.active,data)
                console.log(data)
            },
            'Batal':function(){
                $( this ).dialog("destroy");
            }
        };
        newDialog(title,body,400,400,button)
        return
    }
    if(option == 'addused_b'){
        if(!tagihanData.active) return dialogAlert('INFO','Pilih Driver !')
        let title = 'ADD USED - BON SEMENTARA';
        let body = `<div class="table-responsive" style="height:100%"><table class="table-dialog">`;
        let S_type = [
            {key:'kout',value:'Pengeluaran Kas'},
            {key:'bons',value:'Bon Sementara'},
            {key:'cash',value:'Kembali ke KAS'},
            {key:'loan',value:'Other'},
        ];
        let data = [
            {label:'DATE',element:'input',obj:{class:'dialog_setoran',attribute:`type="text" data-type="date" value="${dayFrom()}" disabled`,style:''}},
            {label:'USED TYPE',element:'select',obj:{class:'dialog_setoran',attribute:'data-type="used"',style:'',option:S_type}},
            {label:'PIC',element:'input',obj:{class:'dialog_setoran',attribute:`type="text" data-type="pic" value="${tagihanData.active}" disabled`,style:''}},
            {label:'NOMINAL',element:'input',obj:{class:'dialog_setoran',attribute:`type="number" data-type="nominal" `,style:''}},
            {label:'DESKRIPSI',element:'textarea',obj:{class:'dialog_setoran',attribute:`data-type="desk" `,style:''}},
        ];
        body += renderBodyTableDialog(data);
        body += '</table></div>';
        let button = {
            'Simpan':function(){
                let numb = $('.dialog_setoran[data-type="nominal"]').val();
                if(numb == '') return $('.dialog_setoran[data-type="nominal"]').focus();
                let data = tagihanData[tagihanData.active];
                let id = ($('.dialog_setoran[data-type="used"]').val()) + randomId();
                let pic = $('.dialog_setoran[data-type="pic"]').val();
                let amount = parseInt(numb);
                let desk = $('.dialog_setoran[data-type="desk"]').val();
                let add = {[id]:{id,amount,desk,pic}};
                data.flag.used_b = {...data.flag.used_b,...add};
                data.flag.used_b_total += amount;
                data.flag.used_b['total_'+id.slice(0,4)] += amount;
                $('#tbody_bons_used').append(`<tr class="tr_used" data-resi="${id}"><td>${id}</td><td>${desk}</td><td class="text-right">${addCommas(amount)}</td>
                <td><button class="btnapp" type="button" data-action="setoran" data-option="removetr" data-id="${id}" data-type="used_b">x</button></td></tr>`);
                $( this ).dialog("destroy");
                updateDetailTagihan(tagihanData.active,tagihanData[tagihanData.active])
            },
            'Batal':function(){
                $( this ).dialog("destroy");
            }
        };
        newDialog(title,body,400,400,button)
        return
    }
    if(option == 'removetr'){
        let id = $el.attr('data-id');
        let type = $el.attr('data-type');
        let data = tagihanData[tagihanData.active].flag;
        data[type+'_total'] -= data[type][id].amount;
        data[type]['total_'+id.slice(0,4)] -= data[type][id].amount;
        delete data[type][id];
        updateDetailTagihan(tagihanData.active,tagihanData[tagihanData.active]);
        $el.closest('tr').remove();
        return
    }
    if(option == 'upload'){
        let resi = $el.attr('data-resi');
        let image = tagihanData[tagihanData.active].flag.transfer[resi].img ? 'data:image/png;base64,' + tagihanData[tagihanData.active].flag.transfer[resi].img : '';
        let title = 'Upload Image';
        let message = `
<div class="panel panel-danger" style="margin-bottom: 0;">
  <div class="panel-body">
    <div class="form-group">
      <label class="control-label-text-left col-sm-3" for="imageupload">File</label>
      <div class="col-sm-9">
        <input type="file" name="imageupload" class="form-control handleapp" id="imgAdd" accept="image/*" data-action="tagihan" data-option="load"></input>
      </div>
    </div>
    <div class="form-group">
      <label class="control-label-text-left col-sm-3" for="imagedesk">Catatan</label>
      <div class="col-sm-9">
        <input type="text" name="imagedesk"  id="image_catatan" class="form-control input-sm">
      </div>
    </div>
  </div>
</div><br>
<img id="imgfile" style="max-width: 100%;height: auto;" src="${image}"></img><br>
        `;
        let button = {
            'Upload': function() {
                let img = $('#imgfile').attr('src');
                if(!img) return $('#imgAdd').focus();
                let catatan = $('#image_catatan').val();
                if(catatan == '') return $('#image_catatan').focus();
                let id = $el.attr('data-resi');
                $(`.btnimagedelete[data-resi="${id}"]`).show()
                if(!$(`.btnimageupload[data-resi="${id}"] span`).hasClass('glyphicon-eye-open')) {
                    console.log('sudah eye open')
                    $(`.btnimageupload[data-resi="${id}"] span`).removeClass('glyphicon-floppy-open').addClass('glyphicon-eye-open');
                }
                tagihanData[tagihanData.active].flag.transfer[id].img = img.split(',')[1];
                $( this ).dialog("destroy")
            },
            'Close': function() {
                $( this ).dialog("destroy")
            }
        }
        newDialog(title,message,400,600,button)
        return
    }
    if(option == 'delete'){
        let id = $el.attr('data-resi');
        delete tagihanData[tagihanData.active].flag.transfer[id].img;
        $(`.btnimagedelete[data-resi="${id}"]`).hide();
        $(`.btnimageupload[data-resi="${id}"] span`).removeClass('glyphicon-eye-open').addClass('glyphicon-floppy-open');
    }
    if(option == 'simpan'){
        if(!tagihanData.active) return;
        console.log('tagihanData', tagihanData);
        let drivers = Object.keys(tagihanData);
        if(drivers.length - 2 != tagihanData.done.length - 1) {
            return dialogAlert('INFO', `<div class="table-responsive" style="height: 100%;">
            <h4>Data belum lengkap !</h4><caption>Data Ready : ${tagihanData.done.length}</caption><ul><li>${tagihanData.done.join('</li><li>')}</li></ul></div>`);
        }

        let date = googleDate();
        let sdrv = {};

        //OBJECT SCAB - FIX
        let scab = {date,pic:'admin',detail:'Setoran Cabang',source:{},source_sum:0,used:{},used_sum:0};

        //OBJECT SCOD - FIX
        let scod = {date,pic:'admin',detail:'COD TUNAI',source:{},source_sum:0,used:{},used_sum:0};

        //OBJECT SOUT - FIX
        let sout = {date,pic:'admin',detail:'OUTGOING TUNAI',source:{},source_sum:0,used:{},used_sum:0};

        let dpst_source = {}, dpst_source_sum=0, dpst_used = {}, dpst_used_sum=0;
        let kout_used = {}, kout_used_sum=0;
        let bons_source = {}, bons_source_sum=0, bons_used = {}, bons_used_sum=0;
        let cash_used = {}, cash_used_sum=0;

        for (let driver of drivers){
            if(driver == 'active' || driver == 'done') continue;
            let fl = tagihanData[driver].flag;
            let tunai = fl.tunai_total;
            let transfer = fl.transfer_total;
            let cash = fl.cash;
            let sbon = fl.source_b_total;
            let ubon = fl.used_b_total;

            //OBJECT SDRV - FIX
            let seri_sdrv = makeId('sdrv');
            sdrv[seri_sdrv.id] = {id:seri_sdrv.id,row:seri_sdrv.row,date, pic:driver, detail:'Setoran Driver', source:{}, source_sum:0, used:{}, used_sum:0};

            // ISI SCAB_SOURCE - FIX
            let scab_source_temp = {[seri_sdrv.id]:{id:seri_sdrv.id, desk:driver, amount:cash}}
            scab.source = {...scab.source, ...scab_source_temp};
            scab.source_sum += cash;
            let scab_FakeId = fakeId('scab');
            sdrv[seri_sdrv.id].used = {...sdrv[seri_sdrv.id].used, ...{[scab_FakeId.id]:{desk:driver, amount:cash}}};
            sdrv[seri_sdrv.id].used_sum += cash;

            if(fl.source_t){
                let items = Object.keys(fl.source_t)
                if(items.length > 0){
                    for(let item of items){
                        if(item.startsWith('total')) continue;
                        let route = fl.source_t[item];

                        if(item.length == 11){
                            if(fl.source_t[item].type == 'INC'){ //=========== RESI INCOMING
                                //ISI SCOD_SOURCE
                                let scod_source_temp = {[route.id]:{id:route.id, desk:route.desk, amount:route.amount}}
                                scod.source = {...scod.source, ...scod_source_temp};
                                scod.source_sum += route.amount;
                            }
                            else { //=========== RESI OUTGOING
                                //ISI SOUT_SOURCE
                                let sout_source_temp = {[route.id]:{id:route.id, desk:route.desk, amount:route.amount}}
                                sout.source = {...sout.source, ...sout_source_temp};
                                sout.source_sum += route.amount;
                            }
                        }
                        else if(item.startsWith('dpst')){
                            let add = {[seri_sdrv.id]:{id:seri_sdrv.id,amount:route.amount}};
                            let seri = makeId('dpst');
                            route.id = seri.id;
                            _deposit[seri.id] = {id:seri.id,row:seri.row,detail:route.desk,pic:driver,source:add,source_sum:route.amount,used:{},used_sum:0,sisa:route.amount,status:'active'};
                            scab.used = {...scab.used, ...{[seri.id]:{id:seri.id,desk:route.desk,amount:route.amount}}};
                            scab.used_sum += route.amount;
                        }
                        else if(item.startsWith('loan')){
                            let seri_loan = makeId('loan');
                            route.id = seri_loan.id
                            _loan[seri_loan.id] = {id:seri_loan.id,row:seri_loan.row,date,detail:route.desk,pic:driver,debit:0,kredit:route.amount,reff:seri_sdrv.id};
                            scab.used = {...scab.used, ...{[seri_loan.id]:{id:seri_loan.id,desk:route.desk,amount:route.amount}}};
                            scab.used_sum += route.amount;
                        }

                        //ISI SDRV
                        let sdrv_temp = {[route.id]:{id:route.id, desk:route.desk, amount:route.amount}}
                        sdrv[seri_sdrv.id].source = {...sdrv[seri_sdrv.id].source, ...sdrv_temp};
                        sdrv[seri_sdrv.id].source_sum += route.amount;
                    }
                }
            };
            if(fl.used_t){
                let items = Object.keys(fl.used_t);
                if(items.length > 0){
                    for(let item of items){
                        if(item.startsWith('total')) continue;

                        let route = fl.used_t[item];

                        if(item.startsWith('kout')){
                            let seri_kout = makeId('kout');
                            route.id = seri_kout.id;
                            _kas_out[seri_kout.id] = {id:seri_kout.id, row:seri_kout.row, date, pic:route.pic, detail:route.desk,amount:route.amount,reff:seri_sdrv.id,status:'active'}
                        }
                        else if(item.startsWith('bons')){
                            let add = {[seri_sdrv.id]:{id:seri_sdrv.id,amount:route.amount}};
                            let seri = makeId('bons');
                            route.id = seri.id;
                            _bons[seri.id] = {id:seri.id,row:seri.row,detail:route.desk,pic:route.pic,source:add,source_sum:route.amount,used:{},used_sum:0,sisa:route.amount,status:'active'};
                        }
                        else if(item.startsWith('loan')){
                            let seri_loan = makeId('loan');
                            route.id = seri_loan.id;
                            _loan[seri_loan.id] = {id:seri_loan.id,row:seri_loan.row,date,detail:route.desk,pic:route.pic,debit:route.amount,kredit:0,reff:seri_sdrv.id};
                        }
                        else if(item.startsWith('dpst')){
                            route.id = item;
                            calc_status_su(_deposit[item],{},{[seri_sdrv.id]:{id:seri_sdrv.id,amount:route.amount,desk:route.desk}})
                        }

                        let sdrv_temp = {[route.id]:{id:route.id, desk:route.desk, amount:route.amount}}
                        sdrv[seri_sdrv.id].used = {...sdrv[seri_sdrv.id].used, ...sdrv_temp};
                        sdrv[seri_sdrv.id].used_sum += route.amount;
                    }
                }
            };
            let items = Object.keys(fl.source_b);
            if(items.length){
                let id_bons = items[0];
                if(items.length > 1){ //jika item bons lebih dari 1, maka creat id baru dengan source kumpulan id bons awal. used id bon lama diisi id bon baru sesuai nominal kemudia sisanya 0 (done)
                    let seri_bons = makeId('bons');
                    id_bons = seri_bons.id;
                    let source_bons = {}, source_bons_total=0;
                    for(let item of items){
                        source_bons = {...source_bons, ...{[item]:{id:item,amount:fl.source_b[item].source_sum}}};
                        source_bons_total += fl.source_b[item].source_sum;
                        calc_status_su(_bons[item], {}, {[id_bons]:{id:id_bons,amount:fl.source_b[item].source_sum}})
                    }
                    _bons[id_bons] = {id:id_bons, row:seri_bons.row, date, pic:driver,source:source_bons,source_sum:source_bons_total,used:{},used_sum:0}
                }
                let useds = Object.keys(fl.used_b);
                if(useds.length > 4){
                    let used_bons = {}, used_bons_sum=0;
                    for (let used of useds){
                        if(used.startsWith('total')) continue;
                        let route = fl.used_b[used];

                        if(used.startsWith('kout')){
                            let seri_kout = makeId('kout');
                            route.id = seri_kout.id;
                            _kas_out[seri_kout.id] = {id:seri_kout.id, row:seri_kout.row, date, pic:route.pic, detail:route.desk,amount:route.amount,reff:id_bons,status:'active'}
                        }
                        else if(used.startsWith('bons')){
                            let add = {[id_bons]:{id:id_bons,amount:route.amount}};
                            let seri = makeId('bons');
                            route.id = seri.id;
                            _bons[seri.id] = {id:seri.id,row:seri.row,date,detail:route.desk,pic:route.pic,source:add,source_sum:route.amount,used:{},used_sum:0,sisa:route.amount,status:'active'};
                        }
                        else if(used.startsWith('loan')){
                            let seri_loan = makeId('loan');
                            route.id = seri_loan.id;
                            _loan[seri_loan.id] = {id:seri_loan.id,row:seri_loan.row,date,detail:route.desk,pic:route.pic,debit:0,kredit:route.amount,reff:id_bons};
                        }
                        else if(used.startsWith('cash')){
                            let seri_cash = makeId('cash');
                            route.id = seri_cash.id;
                            _cash[seri_cash.id] = {id:seri_cash.id,row:seri_cash.row,date,detail:route.desk,pic:route.pic,debit:0,kredit:route.amount,reff:id_bons};
                        }

                        let add = {[route.id]:{id:route.id,desk:route.desk,amount:route.amount}};
                        used_bons = {...used_bons, ...add}
                        used_bons_sum += route.amount;
                    }
                    _bons[id_bons].used = {..._bons[id_bons].used, ...used_bons};
                    _bons[id_bons].used_sum = used_bons_sum;
                    calc_status_su( _bons[id_bons] )
                }
            };

            calc_status_su(sdrv[seri_sdrv.id])
        };
        if(scab.source_sum != 0){
            calc_status_su(scab);
            let seri = makeId('scab');
            _setoran_cabang[seri.id] = {...scab,id:seri.id,row:seri.row};

            for(let id in sdrv){
                for (let key in sdrv[id].used) {
                    if (!key.startsWith('scab')) continue
                    sdrv[id].used[seri.id] = {...sdrv[id].used[key], id:seri.id}
                    delete sdrv[id].used[key];
                }
            }
        }else scab = {};
        if(scod.source_sum != 0){
            calc_status_su(scod);
            let seri = makeId('scod');
            _setoran_cod[seri.id] = {...scod, id:seri.id, row:seri.row};
        }else scod = {};
        if(sout.source_sum != 0){
            calc_status_su(sout);
            let seri = makeId('sout');
            _setoran_outgoing[seri.id] = {...sout, id:seri.id, row:seri.row};
        }else sout = {};

        _setoran_driver = {..._setoran_driver, ...sdrv}


        await postDatabase('update',{
            'setoran_driver':sdrv,
            'setoran_cabang':_setoran_cabang,
            'setoran_cod':_setoran_cod,
            'setoran_outgoing':_setoran_outgoing,
            'kas_out':_kas_out,
            'deposit':_deposit,
            'loan':_loan,
            'cash':_cash,
            'bons':_bons,
            'todo':{[_todo.id]:{..._todo, setoran_driver:'done'}},
        })

        $('.ui-widget.btnapp[data-option="close"][data-flag="SETORAN BY PIC"]').trigger('click');
        return
    }
};
const showWindow = (datas) => {
    let idDiv = randomId();
    let flag = 'SETORAN BY PIC';

    let card = `<div class="tagihan-container">`;
    let drivers = Object.keys(datas);
    for(let driver of drivers){
        if(driver == 'active' || driver == 'done') continue;
        card += `<div class="tagihan-item btnapp" data-action="setoran" data-option="driver" data-pic="${driver}"><span>${driver}</span><h4>${addCommas(datas[driver].flag.totaltagihan)}</h4></div>`
    }
    card += '</div>'
    let table = `
<div class="table-responsive" style="height: calc(-420px + 100%);margin-bottom: 10px;border: 1px solid silver;">
<table class="table table-hover table-condensed" style="margin-bottom: 0;">
  <thead>
    <tr>
      <th style="width: 85px;">Resi</th><th>Pengirim</th><th>Penerima</th><th>PIC</th>
      <th>Diterima</th><th>Type</th><th style="width: 85px;">Tagihan</th><th style="width:10px;">CH/TF</th><th style="width:70px;">...</th>
    </tr>
  </thead>
  <tbody id="setoran_tbody">
  </tbody>
</table>
</div>`;
    const temp_su = (head,idTbody,idTfoot,btnAttr,style = '') => {
        return `
      <div class="item-header">
        <button type="button" class="btnapp" ${btnAttr}>+</button>
        <label>${head}</label>
      </div>
      <div class="table-responsive" style="height: 150px;">
        <table class="table table-hover table-condensed" style="margin-bottom: 0;${style}">
          <thead>
            <tr><th style="width: 85px;">ID</th><th>Desk</th><th style="width: 70px;">Amount</th><th style="width: 35px;">...</th></tr>
          </thead>
          <tbody id="${idTbody}">
          </tbody>
          <tfoot>
            <tr><td colspan=2 class="text-right">TOTAL</td><td id="${idTfoot}" class="text-right">0</td><td></td></tr>
          </tfoot>
        </table>
      </div>
                    `;
    };
    let table_su = `
<div id="detail-container">
  <div class="container tagihan">
    <div class="item">
    ${temp_su('SOURCE // Tagihan','tbody_tagihan_source','tfoot_tagihan_source','data-action="setoran" data-option="addsource_t" data-type="source_tagihan"','border-right: 1px solid silver;')}
    </div>
    <div class="item">
    ${temp_su('USED // Tagihan','tbody_tagihan_used','tfoot_tagihan_used','data-action="setoran" data-option="addused_t" data-type="used_tagihan"')}
    </div>
  </div>
  <div class="container bons">
    <div class="item">
    ${temp_su('SOURCE // Bon Sementara','tbody_bons_source','tfoot_bons_source','data-action="setoran" data-option="addsource_b" data-type="source_bons"','border-right: 1px solid silver;')}
    </div>
    <div class="item">
    ${temp_su('USED // Bon Sementara','tbody_bons_used','tfoot_bons_used','data-action="setoran" data-option="addused_b" data-type="used_bons"')}
    </div>
  </div>
</div>
                `;
    let dt_left = [
        {label:'DATE',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="date" value="${dayFrom(1)}" disabled`,style:''}},
        {label:'PIC',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="pic" value="DRIVER" disabled`,style:''}},
        {label:'COD',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="cod" value="Rp. 0" disabled`,style:''}},
        {label:'TUNAI',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="tunai" value="Rp. 0" disabled`,style:''}},
        {label:'TRANSFER',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="transfer" value="Rp. 0" disabled`,style:''}},
    ];
    let tbody_left = renderBodyTableDialog(dt_left);
    let dt_right = [
        {label:'Tagihan Cash',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="tagihan" value="Rp. 0" disabled`,style:''}},
        {label:'Deposit',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="dpst" value="Rp. 0" disabled`,style:''}},
        {label:'Lain-lain',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="loan" value="Rp. 0" disabled`,style:''}},
        {label:'Pemakaian',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="pemakaian" value="Rp. 0" disabled`,style:'color: darkred;'}},
        {label:'CASH DITERIMA',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="cash" value="Rp. 0" disabled`,style:'font-weight: bolder;font-size: 2vh;'}},
    ];
    let tbody_right = renderBodyTableDialog(dt_right);
    let foot = `
<div id="resulttagihan">
  <div class="table-responsive" style="height:100%;width: 40%;">
    <table class="table-dialog">
    ${tbody_left}
    </table>
  </div>
  <div class="table-responsive" style="height:100%;width: 40%;">
    <table class="table-dialog">
    ${tbody_right}
    </table>
  </div>
  <div class="" style="height:100%;width: 20%;padding: 15px 10px;">
    <div style="display: grid;">
      <button type="button" class="ui-button ui-corner-all ui-widget btnapp" data-action="setoran" data-option="simpan">Simpan</button>
      <button type="button" class="ui-button ui-corner-all ui-widget btnapp" disabled="" style="color: silver;">Edit</button>
      <button type="button" class="ui-button ui-corner-all ui-widget btnapp" disabled="" style="color: silver;">Lock</button>
      <button type="button" class="ui-button ui-corner-all ui-widget btnapp" disabled="" style="color: silver;">Unlock</button>
    </div>
  </div>
</div>
`;
    let body = card + table + table_su + foot;
    return newWindow(idDiv,flag,1000,665,body)
}
const updateDetailTagihan = (pic, data) => {
    let flag = data.flag;
    let targetcod = flag.totaltagihan;
    let tunai = flag.tunai_total;
    let transfer = flag.transfer_total;
    let source_b = flag.source_b_total;
    let used_b = flag.used_b_total;

    $('#tfoot_tagihan_source').text(addCommas(flag.source_t_total));
    $('#tfoot_tagihan_used').text(addCommas(flag.used_t_total));
    $('#tfoot_bons_source').text(addCommas(source_b));
    $('#tfoot_bons_used').text(addCommas(used_b));

    $('.detail_tagihan[data-type="pic"]').val(pic);
    $('.detail_tagihan[data-type="cod"]').val('Rp. '+addCommas( targetcod ));
    $('.detail_tagihan[data-type="tunai"]').val('Rp. '+addCommas( tunai ));
    $('.detail_tagihan[data-type="transfer"]').val('Rp. '+addCommas( transfer ));
    $('.detail_tagihan[data-type="pemakaian"]').val('Rp. '+addCommas( flag.used_t_total ));

    let fst = flag.source_t;
    $('.detail_tagihan[data-type="tagihan"]').val('Rp. '+addCommas(fst.total_resi));
    $('.detail_tagihan[data-type="dpst"]').val('Rp. '+addCommas(fst.total_dpst));
    $('.detail_tagihan[data-type="loan"]').val('Rp. '+addCommas(fst.total_loan));
    flag.cash = ( tunai + fst.total_dpst + fst.total_loan ) - flag.used_t_total;
    $('.detail_tagihan[data-type="cash"]').val('Rp. '+addCommas(flag.cash));
    $('.tagihan-item[data-pic="'+pic+'"] h4').text(addCommas(flag.cash))

    let s = tagihanData.done;
    if((tunai == 0 && transfer == 0) || ((tunai + transfer) != targetcod) || (source_b != used_b)){
        if(s.includes(pic)) s.splice(s.indexOf(pic),1);
    }
    else {
        if(!s.includes(pic)) s.push(pic);
    }
    return
}
//=========================================


//========================================= SETORAN CABANG
// action : scabang
let _setoran_cabang = {};
const updateSetoranCabang = async () => {
    let d = await getDatabase('SELECT * WHERE K = "active"','setoran_cabang');
    _setoran_cabang = {..._setoran_cabang, ...gsConvertToJson(d,'su')}
}
const scabangHandler = async ($el) => {
    let option = $el.attr('data-option');
    if(option == 'new'){
        if(isEmpty(_setoran_cabang)){
            await updateSetoranCabang();
            if(isEmpty(_setoran_cabang)) return dialogAlert('INFO','Data Not Found, Try Again !');
        }
        let items = Object.keys(_setoran_cabang);
        _setoran_cabang[items[0]].used_sum = toInt(_setoran_cabang[items[0]].used_sum)
        showSetoranCabang(_setoran_cabang[items[0]]);
        addbotton('SETORAN CABANG','Simpan','btnapp','data-action="scabang" data-option="simpan"')
        return
    }
    if(option == 'addused'){
        let title = 'ADD USED - SETORAN CABANG';
        let body = `<div class="table-responsive" style="height:100%"><table class="table-dialog">`;
        let s_type = [
            {key:'bank',value:'Setor Tunai (BANK)'},
            {key:'cash',value:'Kas Tunai (CASH)'},
        ];
        let data = [
            {label:'DATE',element:'input',obj:{class:'dialog_scabang',attribute:`type="text" data-type="date" value="${dayFrom()}" disabled`,style:''}},
            {label:'USED TYPE',element:'select',obj:{class:'dialog_scabang',attribute:'data-type="used"',style:'',option:s_type}},
            {label:'PIC',element:'input',obj:{class:'dialog_scabang',attribute:`type="text" data-type="pic" value="Admin" disabled`,style:''}},
            {label:'NOMINAL',element:'input',obj:{class:'dialog_scabang',attribute:`type="ribuan" data-type="nominal" `,style:''}},
            {label:'DESKRIPSI',element:'textarea',obj:{class:'dialog_scabang',attribute:`data-type="desk" `,style:''}},
        ];
        body += renderBodyTableDialog(data);
        body += '</table><hr><span class="dialog_scabang" data-type="err" style="font-style: italic;"></span></div>';
        let button = {
            'Simpan':function(){
                let numb = $('.dialog_scabang[data-type="nominal"]').val();
                if(numb == '') {
                    $('.dialog_scabang[data-type="err"]').text('Input Amount !');
                    return $('.dialog_scabang[data-type="nominal"]').focus();
                }
                let used = $('.dialog_scabang[data-type="used"]').val();
                let id = used + randomId();
                let pic = $('.dialog_scabang[data-type="pic"]').val();
                let amount = toInt(numb.replace(/,/g,''));
                let desk = $('.dialog_scabang[data-type="desk"]').val();
                $('.tbody_used').append(`<tr class="tr_used" data-resi="${id}"><td>${id}</td><td>${desk}</td><td class="text-right">${addCommas(amount)}</td>
                <td><button class="btnapp" type="button" data-action="scabang" data-option="removetr" data-id="${id}" data-type="used">x</button></td></tr>`);
                let current_id = $('.window[data-flag="SETORAN CABANG"] input[data-type="currentid"]').val();
                _setoran_cabang[current_id].used[id] =  {id,desk,pic,amount}
                _setoran_cabang[current_id].used_sum += amount;
                $('.scabang[data-type="used_sum"]').text(addCommas(_setoran_cabang[current_id].used_sum))
                $( this ).dialog("destroy");
            },
            'Batal':function(){
                $( this ).dialog("destroy");
            }
        };
        newDialog(title,body,400,400,button)
        return
    }
    if(option == 'removetr'){
        let id = $el.attr('data-id');
        let type = $el.attr('data-type');
        let current_id = $('.window[data-flag="SETORAN CABANG"] input[data-type="currentid"]').val();
        _setoran_cabang[current_id].used_sum -= _setoran_cabang[current_id][type][id].amount;
        $('.scabang[data-type="used_sum"]').text(addCommas(_setoran_cabang[current_id].used_sum))
        delete _setoran_cabang[current_id][type][id]
        $el.closest('tr').remove();
        console.log(_setoran_cabang)
        return
    }
    if(option == 'detail'){
        showId($el.attr('data-id'));
        return
    }
    if(option == 'simpan'){
        let idWindow = '';// cari cara untuk mendapatkan id window !!!!!!!!!!!!
        let current_id = $('.window[data-flag="SETORAN CABANG"] input[data-type="currentid"]').val();
        let data = _setoran_cabang[current_id];
        calc_status_su(data);
        console.log(_setoran_cabang)
        if(data.status != 'done') return dialogAlert('INFO','End Point must 0<br> Not Allocate: Rp. '+addCommas(data.sisa));
        $el.prop('disabled');
        let date=dayFrom(), bank={}, cash={};
        for(let id in data.used){
            let route = data.used[id]
            if(id.startsWith('bank')){
                let seri = makeId('bank');
                data.used[seri.id] = {...route, id:seri.id};
                bank = {...bank, ...{[seri.id]:{id:seri.id, row:seri.row, date, pic:route.pic,detail:route.desk,debit:0,kredit:route.amount,reff:data.id}}}
                delete data.used[id];
            }
            else{
                let seri = makeId('cash');
                data.used[seri.id] = {...route, id:seri.id};
                cash = {...cash, ...{[seri.id]:{id:seri.id, row:seri.row, date, pic:route.pic,detail:route.desk,debit:0,kredit:route.amount,reff:data.id}}}
                delete data.used[id]
            }
        }
        //await postDatabase('update',{bank,cash, setoran_cabang:_setoran_cabang, todo:{[_todo.id]:{..._todo, setoran_cabang:data.id}}})
        $('.window[data-id="'+idWindow+'"] .ui-widget.btnapp[data-option="close"]').trigger('click');
        return
    }
}
const showSetoranCabang = (data, flag = 'SETORAN CABANG') => {
    let idDiv = randomId();

    let val = '';
    for (let item in data.source){
        val += `<tr><td class="cursor btnapp" data-action="scabang" data-option="detail" data-id="${data.source[item].id}">${data.source[item].id}</td>
        <td>${data.source[item].desk}</td><td class="text-right">${addCommas(data.source[item].amount)}</td></tr>`;
    };

    let valu = '';
    for (let item in data.used){
        valu += `<tr><td class="cursor btnapp" data-action="scabang" data-option="detail" data-id="${data.used[item].id}">${data.used[item].id}</td>
        <td>${data.used[item].desk}</td><td class="text-right">${addCommas(data.used[item].amount)}</td></tr>`;
    }

    let body = `
<div id="detail-container" style="height:calc(-140px + 100%);">
  <div class="container">
    <div class="item">
      <div class="item-header">
        <button type="button" class="btnapp" disabled style="color: silver;">+</button>
        <label>SOURCE FROM</label>
      </div>
      <div class="table-responsive" style="height: calc(100% - 30px);">
        <table class="table table-hover table-condensed" style="margin-bottom: 0;">
          <thead>
            <tr><th style="width: 85px;">ID</th><th>Desk</th><th style="width: 70px;">Amount</th><th style="width: 35px;">...</th></tr>
          </thead>
          <tbody class="tbody_source">${val}
          </tbody>
          <tfoot>
            <tr><td colspan=2 class="text-right" style="font-weight: bold;">TOTAL</td><td class="text-right" style="font-weight: bold;">${addCommas(data.source_sum)}</td><td></td></tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="item">
      <div class="item-header">
        <button type="button" class="btnapp" data-action="scabang" data-option="addused" ${(data.status == 'done') ? 'disabled style="color: silver;"' : ''}>+</button>
        <label>USED FOR</label>
      </div>
      <div class="table-responsive" style="height: calc(100% - 30px);">
        <table class="table table-hover table-condensed" style="margin-bottom: 0;">
          <thead>
            <tr><th style="width: 85px;">ID</th><th>Desk</th><th style="width: 70px;">Amount</th><th style="width: 35px;">...</th></tr>
          </thead>
          <tbody class="tbody_used">${valu}
          </tbody>
          <tfoot>
            <tr><td colspan=2 class="text-right" style="font-weight: bold;">TOTAL</td><td class="text-right scabang" data-type="used_sum" style="font-weight: bold;">${addCommas(data.used_sum)}</td><td></td></tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</div>
    `;
    let s = [
        {label:'ID',element:'input',obj:{class:'',attribute:`type="text" data-type="currentid" value="${data.id}" disabled`,style:''}},
        {label:'DATE',element:'input',obj:{class:'',attribute:`type="text" data-type="date" value="${data.date}" disabled`,style:''}},
        {label:'PIC/DRIVER',element:'input',obj:{class:'',attribute:`type="text" data-type="date" value="${data.pic}" disabled`,style:''}},
        {label:'DESKRIPSI',element:'input',obj:{class:'',attribute:`type="text" data-type="date" value="${data.detail}" disabled`,style:''}},
        {label:'STATUS',element:'input',obj:{class:'',attribute:`type="text" data-type="date" value="${data.status}" disabled`,style:''}},
    ];
    let top = '<div class="table-responsive" style="height:140px;"><table class="table-dialog">'+renderBodyTableDialog(s)+'</table></div>';
    return newWindow(idDiv,flag,600,450,top+body)
}
const toInt = str => {
    if (!Number.isInteger(str)) {
        str = parseInt(str, 10);
        if (isNaN(str)) str = 0
    }
    return str
}
//=========================================


//========================================= SHOW ID TRANSAKSI
const showId = async (id) => {
    if(!id) return dialogAlert('ERROR','Transaction IDs Not Found !');
    let route_id = {
    sdrv:{data:_setoran_driver,sheet:'setoran_driver'},
    scab:{data:_setoran_cabang,sheet:'setoran_cabang'},
    scod:{data:_setoran_cod, sheet:'setoran_cod'},
    sout:{data:_setoran_outgoing, sheet:'setoran_outgoing'},
    bons:{data:_bons,sheet:'bons'},
    bnus:{data:_bonus, sheet:'bonus'},
    kout:{data:_kas_out, sheet:'kas_out'},
    bank:{data:_bank, sheet:'bank'},
    cash:{data:_cash, sheet:'cash'},
    etol:{data:_etol, sheet:'etol'},
    loan:{data:_loan, sheet:'loan'},
    dpst:{data:_deposit, sheet:'deposit'},
    }
    if(id.length == 8){
        let type = id.slice(0,4)
        if(type == 'sdrv' ||
           type == 'scab' ||
           type == 'scod' ||
           type == 'sout' ||
           type == 'bons' ||
           type == 'dpst' ||
           type == 'bnus'){
            let result = route_id[type].data[id];
            if(!result){
                let rsp = await getDatabase(`SELECT * WHERE A = "${id}"`,route_id[type].sheet);
                 console.log(rsp);
                let dt = gsConvertToJson(rsp,'su');
                result = dt[id];
            }
            if(!result) return dialogAlert('ERROR',id + ' ID not registed !')
            console.log(result);
            showIdWindow(result, 'DETAIL :' + id);
            return
        }
        else if(type == 'loan' ||
           type == 'bank' ||
           type == 'cash' ||
           type == 'etol' ){
           return alert('TYPE ID : '+type+' - DK')
        }
        else if(type == 'kout'){
            alert('TYPE ID : '+type)
            console.log(route_id[type][id])
        }
        else if(type == 'rkas'){
            alert('TYPE ID : '+type)
        }
        else if(type == 'ptcs'){
            alert('TYPE ID : '+type)
        }
        else if(type == 'opnm'){
            alert('TYPE ID : '+type)
        }
        else return dialogAlert('ERROR',type + ' IDs not recognize !')
    }
    else if(id.length == 11){
        let result = _manifest && _manifest[id] ? _manifest[id] : null;
        if(!result){
            let rsp = await getDatabase(`SELECT * WHERE A = "mnfs${id}"`,'manifest');
            let dt = gsConvertToJson(rsp);
            result = dt['mnfs'+id];
        }
        if(!result) return dialogAlert('ERROR',id + ' ID not registed !')
        showResiWindow(result)
    }
    return
}
const showIdWindow = (data, flag) => {
    let idDiv = randomId();

    let val = '';
    for (let item in data.source){
        val += `<tr><td class="cursor btnapp" data-action="scabang" data-option="detail" data-id="${data.source[item].id}">${data.source[item].id}</td>
        <td>${data.source[item].desk}</td><td class="text-right">${addCommas(data.source[item].amount)}</td></tr>`;
    };
    let valu = '';
    for (let item in data.used){
        valu += `<tr><td class="cursor btnapp" data-action="scabang" data-option="detail" data-id="${data.used[item].id}">${data.used[item].id}</td>
        <td>${data.used[item].desk}</td><td class="text-right">${addCommas(data.used[item].amount)}</td></tr>`;
    }
    let body = `
<div id="detail-container" style="height:calc(-140px + 100%);">
  <div class="container">
    <div class="item">
      <div class="item-header">
        <button type="button" class="btnapp" disabled style="color: silver;">+</button>
        <label>SOURCE FROM</label>
      </div>
      <div class="table-responsive" style="height: calc(100% - 30px);">
        <table class="table table-hover table-condensed" style="margin-bottom: 0;">
          <thead>
            <tr><th style="width: 85px;">ID</th><th>Desk</th><th style="width: 70px;">Amount</th><th style="width: 35px;">...</th></tr>
          </thead>
          <tbody class="tbody_source">${val}
          </tbody>
          <tfoot>
            <tr><td colspan=2 class="text-right" style="font-weight: bold;">TOTAL</td><td class="text-right" style="font-weight: bold;">${addCommas(data.source_sum)}</td><td></td></tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="item">
      <div class="item-header">
        <button type="button" class="btnapp" data-action="scabang" data-option="addused" ${(data.status == 'done') ? 'disabled style="color: silver;"' : ''}>+</button>
        <label>USED FOR</label>
      </div>
      <div class="table-responsive" style="height: calc(100% - 30px);">
        <table class="table table-hover table-condensed" style="margin-bottom: 0;">
          <thead>
            <tr><th style="width: 85px;">ID</th><th>Desk</th><th style="width: 70px;">Amount</th><th style="width: 35px;">...</th></tr>
          </thead>
          <tbody class="tbody_used">${valu}
          </tbody>
          <tfoot>
            <tr><td colspan=2 class="text-right" style="font-weight: bold;">TOTAL</td><td class="text-right" style="font-weight: bold;">${addCommas(data.used_sum)}</td><td></td></tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</div>
    `;
    let s = [
        {label:'ID',element:'input',obj:{class:'',attribute:`type="text" data-type="id" value="${data.id}" disabled`,style:''}},
        {label:'DATE',element:'input',obj:{class:'',attribute:`type="text" data-type="date" value="${data.date}" disabled`,style:''}},
        {label:'PIC/DRIVER',element:'input',obj:{class:'',attribute:`type="text" data-type="pic" value="${data.pic}" disabled`,style:''}},
        {label:'DESKRIPSI',element:'input',obj:{class:'',attribute:`type="text" data-type="desk" value="${data.detail}" disabled`,style:''}},
        {label:'STATUS',element:'input',obj:{class:'',attribute:`type="text" data-type="status" value="${data.status}" disabled`,style:''}},
    ];
    let top = '<div class="table-responsive" style="height:140px;"><table class="table-dialog">'+renderBodyTableDialog(s)+'</table></div>';
    return newWindow(idDiv,flag,800,500,top+body)
}
const showTableWindow = (data, flag) => {
    let idDiv = randomId();
    let th=null;
    let tr ='';
    let dt = null;
    for(let id in data){
        let route = data[id];
        if(dt != route.date){
            dt = route.date;
            tr += '<tr style="border-top: 4px double grey;">';
        }
        else tr += '<tr>';
        let items = Object.keys(route);
        if(!th) {
            th='';
            items.forEach(i => {
                if(i == 'debug' || i == 'row') return;
                th += `<th class="text-center">${i.toUpperCase()}</th>`
            })
        }
        for(let item of items){
            if(item == 'debug' || item == 'row') continue;
            else if(item == 'id') tr +=`<td class="cursor btnapp" data-action="scabang" data-option="detail" data-id="${route[item]}" >${route[item]}</td>`;
            else if(item == 'reff') tr +=`<td class="cursor btnapp" data-action="scabang" data-option="detail" data-id="${route[item]}" >${route[item]}</td>`;
            else if(item == 'debit' || item == 'kredit' || item == 'sisa' ) tr +=`<td class="text-right">${addCommas(route[item])}</td>`;
            else if(item == 'saldo' || item == 'source_sum' || item == 'used_sum' ) tr +=`<td class="text-right" style="background: #e9e9e9;font-weight: bold;">${addCommas(route[item])}</td>`;
            else if(item == 'detail') tr +=`<td style="max-width:300px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;">${route[item]}</td>`;
            else if(item == 'date') tr +=`<td>${readTime(route[item],'date')}</td>`;
            else if(typeof(route[item]) === 'object'){
                let attrs = Object.keys(route[item])
                if(!attrs.length){
                    tr +='<td></td>'
                }
                else {
                    tr +='<td>'
                    for(let attr of attrs){
                        tr +='<div style="display:flex;justify-content: space-between;">';
                        if(attr == route[item][attr].id) tr +=`<label class="cursor btnapp" data-action="scabang" data-option="detail" data-id="${route[item][attr].id}" >${route[item][attr].id}</label>`;
                        tr +=`<label>${addCommas(route[item][attr].amount)}</label>`;
                         tr +='</div>';
                    }
                    tr +='</td>'
                }
            }
            else tr +=`<td>${route[item]}</td>`;
        }
    }
    let body =`
<div class="table-responsive" style="height:100%">
  <table class="table table-hover table-condensed table-bordered" style="border-top:none;">
    <thead>
      <tr>${th}</tr>
    </thead>
    <tbody>${tr}
    </tbody>
  </table>
</div>
    `;
    newWindow(idDiv,flag,'1100','600',body)
    return
}
const showResiWindow = (data, flag = 'Detail : Unknow') => {
    let idDiv = randomId();
    newWindow(idDiv,flag,800,500, stringify(data))
    return
}
//=========================================


//========================================= TESTER
const testHandlerFunction = () => {
    let _test = {}
    let tagihanData = {};
    return async ($el) => {
        if (Object.keys(_test).length === 0) {
            _test = {
                action:{},
            };
        }
        //let tagihanData = {};
        let option = $el.attr('data-option')
        if(option == 'new'){
            _test.action.option = option;
            return console.log('new')
        }
        if(option == 'add'){
            _test.action.add = option;
            return console.log('add')
        }
        if(option == 'testing'){
            let referse = (str) => {
                let [dd,mm,yy] = str.split('-')
                return `${yy}-${mm}-${dd}`
            }
            let formDataArray = [
                { name: 'ctl00$cphBody$ddlOffice', value: '20122' },
                { name: 'ctl00$cphBody$txtRcvDtFrom', value: referse(dayFrom(5)) },
                { name: 'ctl00$cphBody$txtRcvDtTo', value: referse(dayFrom()) }
            ];
            let rsp = await fetchpost('https://bo.sentralcargo.co.id/Delivery/DeliveryReceiveItemMonitorFormPaging.aspx', "ctl00$cphBody$btnSearch", formDataArray);
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(rsp, 'text/html');
            let table = xmlDoc.getElementById('cphBody_gvData');
            let code = [];
            if(table){
                let rows = table.querySelectorAll('tbody tr');
                rows.forEach(row => {
                    code.push(parseInt((row.querySelector('td:nth-child(1)')).textContent.trim()));
                })
            }
            if(!code.length) return
            let mnfs = {}
            for(let i = 0; i < code.length; i++){
                let response = await fetchget(`https://bo.sentralcargo.co.id/Delivery/DeliveryReceiveItemMonitorForm.aspx?DelRcvHId=${code[i]}`);
                parser = new DOMParser();
                xmlDoc = parser.parseFromString(response, 'text/html');
                let terima = xmlDoc.getElementById("cphBody_lblRcvDt").textContent.trim();
                let t = terimaTime(terima)
                console.log(t)
                let masuk = formatTimestamp(t);
                let tgl = masuk.substring(0,10)
                let jam = masuk.slice(11)
                table = xmlDoc.getElementById("cphBody_gvData");
                if(table){
                    let rows = table.querySelectorAll('tbody tr');
                    rows.forEach(row => {
                        let resi = (row.querySelector('td:nth-child(1)')).textContent.trim();
                        let kolike = (row.querySelector('td:nth-child(3)')).textContent.trim();
                        let status = (row.querySelector('td:nth-child(5)')).textContent.trim();
                        if(!mnfs[resi]){
                            mnfs[resi] = {
                                total:1,
                                [kolike] : {
                                    kolike,
                                    masuk:{tgl,jam},
                                    info:''
                                }
                            }
                        }
                        else{
                            let k = {
                                [kolike] : {
                                    kolike,
                                    masuk:{tgl,jam},
                                    info:''
                                }
                            }
                            mnfs[resi] = {...mnfs[resi], ...k}
                        }
                    })
                }
            }
            console.log(mnfs)
            return
        }
        if(option == 'setorandriver'){
            const formatDate = str => {
                let [d,m,y] = str.split('-')
                return `${m}/${d}/${y}`
            }
            let urlTagihanIncoming = `/Dashboard/BranchResiForm.aspx?KeyId=20122&TrxDtFrom=${formatDate(dayFrom(10))}%2012:00:00%20AM&TrxDtTo=${formatDate(dayFrom())}%2012:00:00%20AM&SisaTagihTujuan=1&PODStat=Report`;
            let response = await fetchget(baseUrl+urlTagihanIncoming);
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(response, 'text/html');
            let table = xmlDoc.getElementById("cphBody_gvData");
            if(table){
                let rows = table.querySelectorAll('tbody tr');
                let t = dayFrom().split('-')[0];
                rows.forEach(row => {
                    let statusbayar = (row.querySelector('td:nth-child(10)')).textContent.trim();
                    if(statusbayar === 'Request Recon') return
                    let spod = (row.querySelector('td:nth-child(13)')).textContent.trim();
                    let n = spod.substring(3,5);
                    if(n == t) return
                    let resi = (row.querySelector('td:nth-child(1)')).textContent.trim();
                    let sender = (row.querySelector('td:nth-child(3)')).textContent.trim();
                    let receiver = (row.querySelector('td:nth-child(4)')).textContent.trim();
                    let tagih = (row.querySelector('td:nth-child(9)')).textContent.trim();
                    let tagihan = parseInt(tagih.replace(/,/g, ''))
                    let track = (row.querySelector('td:nth-child(12)')).textContent.trim();
                    let siku = [];
                    track.replace(/\[(.*?)\]/g, function(match, captureGroup) {
                        siku.push(captureGroup);
                    });
                    let diterima = siku[0];
                    let pic = siku[1];
                    if(!tagihanData[pic]){
                        tagihanData[pic] = {
                            [resi]:{resi,sender,receiver,tagihan,pic,diterima,type:'INC'},
                            flag:{totaltagihan:tagihan}
                        }
                    }
                    else if (!tagihanData[pic][resi]){
                        let k = {[resi]:{resi,sender,receiver,tagihan,pic,diterima,type:'INC'}}
                        tagihanData[pic].flag.totaltagihan += tagihan;
                        tagihanData[pic] = {...tagihanData[pic], ...k}
                    }
                })
            }
            let driver = Object.keys(tagihanData);
            if(!driver.length) return dialogAlert('INFO','Tidak ada tagihan !')
            const show = (datas) => {
                let style = `
<style>
.tagihan-container {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid silver;
    margin-bottom: 10px;
    padding: 5px;
}
.tagihan-item {
  padding:10px;
background: #f3f3f3;
    border-radius: 10px;
    width: 150px;
    cursor: pointer;
    margin-bottom: 5px;
    text-align: center;
}
.tagihan-item h4{
    margin:0;
    font-weight: bold;
}
#detail-container {
    height: 180px;
    display: flex;
    margin-bottom: 10px;
}
#detail-container .container {
    flex: 1;
    display: flex;
    border: 1px solid silver;
    padding: 0;
}
#detail-container .container.tagihan {
    margin-right: 10px;
}
#detail-container .container .item {
    flex: 1;
    height: 100%;
}
#detail-container .item .item-header button {
    border-radius: 5px;
    border: 1px solid darkgrey;
}
#detail-container .item .item-header label {
    margin-left: 5px;
}
#resulttagihan {
    display: flex;
    border: 1px solid silver;
}
</style>
                `
                let idDiv = randomId();
                let flag = 'SETORAN BY PIC';

                let card = `<div class="tagihan-container">`;
                let drivers = Object.keys(datas);
                for(let driver of drivers){
                    card += `<div class="tagihan-item btnapp" data-action="test" data-option="driver" data-pic="${driver}"><span>${driver}</span><h4>${addCommas(datas[driver].flag.totaltagihan)}</h4></div>`
                }
                card += '</div>'
                let table = `
<div class="table-responsive" style="height: 150px;margin-bottom: 10px;border: 1px solid silver;">
<table class="table table-hover table-condensed" style="margin-bottom: 0;">
  <thead>
    <tr><th>Resi</th><th>Pengirim</th><th>Penerima</th><th>Tagihan</th><th>PIC</th><th>Diterima</th><th>Type</th><th>CH/TF</th><th>...</th></tr>
  </thead>
  <tbody id="setoran_tbody">
  </tbody>
</table>
</div>`;
                const temp_su = (head,idTbody,idTfoot,btnAttr) => {
                    return `
      <div class="item-header">
        <button type="button" class="btnapp" ${btnAttr}>+</button>
        <label>${head}</label>
      </div>
      <div class="table-responsive" style="height: 150px;">
        <table class="table table-hover table-condensed" style="margin-bottom: 0;">
          <thead>
            <tr><th style="width: 100px;">ID</th><th>Desk</th><th style="width: 80px;">Amount</th><th>...</th></tr>
          </thead>
          <tbody id="${idTbody}">
          </tbody>
          <tfoot id="${idTfoot}">
          </tfoot>
        </table>
      </div>
                    `;
                };
                let table_su = `
<div id="detail-container">
  <div class="container tagihan">
    <div class="item">
    ${temp_su('SOURCE // Tagihan','tbody_tagihan_source','tfoot_tagihan_source','data-action="tagihan" data-option="add" data-type="source_tagihan"')}
    </div>
    <div class="item">
    ${temp_su('USED // Tagihan','tbody_tagihan_used','tfoot_tagihan_used','data-action="tagihan" data-option="add" data-type="used_tagihan"')}
    </div>
  </div>
  <div class="container bons">
    <div class="item">
    ${temp_su('SOURCE // Bon Sementara','tbody_bons_source','tfoot_bons_source','data-action="tagihan" data-option="add" data-type="source_bons"')}
    </div>
    <div class="item">
    ${temp_su('USED // Bon Sementara','tbody_bons_used','tfoot_bons_used','data-action="tagihan" data-option="add" data-type="used_bons"')}
    </div>
  </div>
</div>
                `;
        let dt_left = [
            {label:'DATE',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="date" value="${dayFrom(1)}" disabled`,style:''}},
            {label:'PIC',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="pic" value="DRIVER" disabled`,style:''}},
            {label:'COD',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="cod" value="Rp. 0" disabled`,style:''}},
            {label:'TUNAI',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="tunai" value="Rp. 0" disabled`,style:''}},
            {label:'TRANSFER',element:'input',obj:{class:'text-right detail_tagihan',attribute:`type="text" data-type="transfer" value="Rp. 0" disabled`,style:''}},
        ];
        let tbody_left = renderBodyTableDialog(dt_left);
        let dt_right = [
            {label:'Tagihan Cash',element:'input',obj:{class:'text-right',attribute:`type="text" data-type="tunai" value="Rp. 0" disabled`,style:''}},
            {label:'Deposit',element:'input',obj:{class:'text-right',attribute:`type="text" data-type="dpst" value="Rp. 0" disabled`,style:''}},
            {label:'Lain-lain',element:'input',obj:{class:'text-right',attribute:`type="text" data-type="loan" value="Rp. 0" disabled`,style:''}},
            {label:'Pemakaian',element:'input',obj:{class:'text-right',attribute:`type="text" data-type="cod" value="Rp. 0" disabled`,style:''}},
            {label:'DUIT NYE',element:'input',obj:{class:'text-right',attribute:`type="text" data-type="cod" value="Rp. 0" disabled`,style:''}},
        ];
        let tbody_right = renderBodyTableDialog(dt_right);
let foot = `
<div id="resulttagihan">
  <div class="table-responsive" style="height:100%;width: 40%;">
    <table class="table-dialog">
    ${tbody_left}
    </table>
  </div>
  <div class="table-responsive" style="height:100%;width: 40%;">
    <table class="table-dialog">
    ${tbody_right}
    </table>
  </div>
  <div class="" style="height:100%;width: 20%;padding: 15px 10px;">
    <div style="display: grid;">
      <button type="button" class="ui-button ui-corner-all ui-widget btnapp">Simpan</button>
      <button type="button" class="ui-button ui-corner-all ui-widget btnapp" disabled="" style="color: silver;">Edit</button>
      <button type="button" class="ui-button ui-corner-all ui-widget btnapp" disabled="" style="color: silver;">Lock</button>
      <button type="button" class="ui-button ui-corner-all ui-widget btnapp" disabled="" style="color: silver;">Unlock</button>
    </div>
  </div>
</div>
`;
                let body = style + card + table + table_su + foot;
                return newWindow(idDiv,flag,1000,670,body)
            }
            console.log(tagihanData)
            show(tagihanData)
            return
        }
        if(option == 'driver'){
            let pic = $el.attr('data-pic');
            let dt = tagihanData[pic];
            let resis = Object.keys(dt)
            let tr = '';
            for(let resi of resis){ //resi,sender,receiver,tagihan,pic,diterima,type:'incoming'
                if(resi == 'flag') continue
                tr += `
<tr>
  <td>${dt[resi].resi}</td><td>${dt[resi].sender}</td><td>${dt[resi].receiver}</td><td>${addCommas(dt[resi].tagihan)}</td><td>${dt[resi].pic}</td><td>${dt[resi].diterima}</td><td>${dt[resi].type}</td>
  <td>
    <input type="checkbox" class="handleapp" data-action="tagihan" data-option="tunai" data-pic="${dt[resi].pic}" data-resi="${resi}">
    <input type="checkbox" class="handleapp" data-action="tagihan" data-option="transfer" data-pic="${dt[resi].pic}" data-resi="${resi}">
  </td>
  <td style="display: flex;">
    <button type="button" class="btnimageupload btnapp" data-action="tagihan" data-option="upload" data-type="outgoing"  data-pic="${dt[resi].pic}" style="display:none;">
      <span class="glyphicon glyphicon-floppy-open"></span>
    </button>
    <button type="button" class="btnimagedelete btnapp" data-action="tagihan" data-option="delete" data-type="outgoing"  data-pic="${dt[resi].pic}" style="display:none;">
       <span class="glyphicon glyphicon-floppy-remove"></span>
    </button>
  </td>
</tr>`
            }
            $('#setoran_tbody').html(tr)
            let flag = dt.flag;
            $('.detail_tagihan[data-type="pic"]').val(pic);
            $('.detail_tagihan[data-type="cod"]').val('Rp. '+addCommas(flag.totaltagihan));
            console.log(flag)
            return
        }
        return console.log('no-one')
    }
}
const testHandler = testHandlerFunction()
const test = async() => {
    let rsp = await getDatabase('select *  WHERE H = "active"','resi_tagihan_incoming');
    console.log(rsp)
}
const terimaTime = (str) => {
    let [date, time] = str.split(' - ');
    let cyear = new Date().getFullYear();
    let fdate = `${date} ${cyear} ${time}`;
    let dt = new Date(fdate);
    if(isNaN(dt)) return str
    return dt.getTime()
}
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear())
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}-${month}-${year} ${hours}:${minutes}`;
}
//=========================================


//========================================= INITIAL FUNCTION
const init = async () => {

    await updateIdow();
    bootloader()
    //updateManifest()
    fmInit()
    await updatepic();
    //await chatwaUpdate();
    //await updateposh();
    //await test()
    //==============panel
    await panelTodo()
}
//=========================================

//========================================= IIFE to triger app
(function() {
    'use strict';
const firtsHtml = () => {
let modal = `
<style>
@keyframes blink {
    0% { background: darkred ; }
    50% { background: none ; }
    100% { background: darkred ; }
}
.blink {
    color : white;
    transition: background 0.2s;
    animation: blink 0.2s infinite;
}
@keyframes fadeintitle {
    from { opacity: 0 ; }
    to   { opacity: 1 ; }
}
.fadeintitle {
    animation: fadeintitle 0.2s;
}
div#fsociety {height: calc(-50.67px + 100vh);margin: 0 -15px;}
div#fsociety * {font-family: monospace; user-select: none;}
div#fsociety span.glyphicon {font-family: 'Glyphicons Halflings';}
div#fsociety .window .btn {
    outline:0;
}
div#fsociety #topview {
    height: 70%;
    display: flex;
}
div#fsociety #topleft {
    flex: 1;
    display: flex;
    flex-direction: column;
}
div#fsociety #topright {
    flex: 2;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 2.5px;
}
div#tl-top, div#tl-bottom {
    flex:1;
    display: flex;
    overflow: hidden;
}
div#tlt-left, div#tlt-right, div#tlb-left, div#tlb-right {
    flex: 1;
    overflow: hidden;
    padding: 2.5px 5px;
}
div#fsociety #bottomview {
    height: 30%;
    display: flex;
    overflow: hidden;
}
div#bottomleft, div#bottomright {
    flex: 1;
}
div#fsociety .card {
    border-top: 1px solid darkred;
    border-bottom: 1px solid darkred;
    padding: 5px 0;
    width: 100%;
    height: 100%;
}
div#fsociety .card .card-title {
    font-size: 2vh;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 25px;
    padding: 0 5px;
}
div#fsociety .card .card-body {
    height: calc(-50px + 100%);
}
div#fsociety .card .card-body.full {
    height: calc(-25px + 100%);
}
div#fsociety .card .card-footer {
    background: #ececec;
    height: 25px;
    padding: 0 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
div#fsociety .btn:focus {
    outline: 0;
}
div#bottomleft .icon-container {
    padding: 10px;
    height: 50%;
    width: calc(100% / 9);
}
div#bottomleft .icon-container .icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    cursor: pointer;
}
div#bottomleft .icon-container .icon span.glyphicon {
    font-size: 3vh;
    color: darkred;
}
div#bottomleft .icon-container .icon h5 {
    margin: 5px 0;
}
.chat-container {
    max-width: 600px;
    margin: auto;
}
.message {
    padding: 10px 15px;
    border-radius: 10px;
    margin: 10px 0;
    clear: both;
    word-wrap: break-word;
}
.sender {
    background-color: #dcf8c6;
    float: right;
}
.receiver {
    background-color: #f0f0f0;
    float: left;
}
div#load {
    display:none;
    width: 100%;
    height: 100%;
    position: fixed;
    text-indent: 100%;
    background: url('https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif') no-repeat center;
    background-size: 100px 100px;
    z-index: 999;
}
#taskview {
    position: fixed;
    bottom: 10px;
    left: 15px;
    z-index: 1000;
}
div#taskview .dropdown-menu li a{
    width: 200px;
    text-overflow: ellipsis;
    overflow: hidden;
}
div.window {
    position: fixed;
}
table.table-small {
    width: 100%;
}
table.table-small thead {
    background-color: grey;
}
table.table-small thead th, table.table-dialog thead th{
    color: white;
    text-transform: uppercase;
    padding: 0 5px;
    text-align: center;
}
table.table-small tbody td, table.table-dialog tbody td {
    padding: 0 5px;
}
table.table-dialog {
    width: 100%;
}
table.table-dialog thead {
    background: #e9e9e9;
}
table.table-dialog thead th {
    height: 25px;
    font-size: 1.7vh;
}
table.table-dialog tbody td {
    height: 25px;
}
table.table-dialog tbody td input {
    width: 100%;
    outline: 0;
}
table.table-dialog tbody td select {
    width: 100%;
    height: 25px;
    outline: 0;
}
table.table-dialog tbody td textarea {
    width: 100%;
    height: 100px;
    resize:none;
    outline: 0;
}
.tbl-container {
    height: calc(100% - 40px);
}
.tbl-container .tbl-fixed {
    overflow-x: auto;
    overflow-y: auto;
    height: 100%;
}
.tbl-fixed thead, .tbl-fixed tfoot {
    position: sticky;
    background: #b4b4b4;
}
.tbl-fixed thead {
    top: -1px;
}
.tbl-fixed tfoot {
    bottom: -1px;
}
.tbl-fixed thead th {
    text-align: center;
    text-transform: uppercase;
}
.tbl-fixed::-webkit-scrollbar {width: 6px;height: 6px;}
.tbl-fixed::-webkit-scrollbar-thumb {background-color: rgb(174 124 124);cursor: pointer;}
.tbl-fixed::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);background-color: white;}

.table-responsive::-webkit-scrollbar {width: 6px;height: 6px;}
.table-responsive::-webkit-scrollbar-thumb {background-color: rgb(174 124 124);cursor: pointer;}
.table-responsive::-webkit-scrollbar-track {-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);background-color: white;}

div#fsociety .card .card-body .table-responsive {
    min-height: .01%;
    overflow: hidden auto;
    height: 100%;
}

.table-responsive thead,  .table-responsive tfoot{
    position: sticky;
    background-color: #fbe1e1;
}
.table-responsive thead{
    top: 0;
}
.table-responsive tfoot{
    bottom: 0;
}
div.table th, .table td {
vertical-align: middle !important;
}
.table-responsive button{
    border: 0;
    background: grey;
    color: white;
}

.ui-dialog {box-shadow: 2px 2px 7px 1px #917e7e;}
div.ui-dialog * {font-family: monospace !important;}
div.ui-dialog span.glyphicon {font-family: 'Glyphicons Halflings' !important;}
div.ui-dialog .dialog-body {
    height: 100%;
    overflow: hidden;
}
div.ui-dialog .btn {
    outline:0;
}
div.ui-dialog .dialog-body .ui-button:active {
    border: 1px solid red;
    background: darkred;
}
div.ui-dialog .ui-dialog-buttonset .ui-button:active {
    border: 1px solid red;
    background: darkred;
}
.ui-dialog .ui-dialog-buttonpane {padding: 0;}

/*==================================style setoran driver*/
.tagihan-container {
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border: 1px solid silver;
    margin-bottom: 10px;
    padding: 5px;
}
.tagihan-item {
  padding:10px;
background: #f3f3f3;
    border-radius: 10px;
    width: 150px;
    cursor: pointer;
    margin-bottom: 5px;
    text-align: center;
}
.tagihan-item h4{
    margin:0;
    font-weight: bold;
}
#detail-container {
    height: 180px;
    display: flex;
    margin-bottom: 10px;
}
#detail-container .container {
    flex: 1;
    display: flex;
    border: 1px solid silver;
    padding: 0;
}
#detail-container .container.tagihan {
    margin-right: 10px;
}
#detail-container .container .item {
    flex: 1;
    height: 100%;
}
#detail-container .item .item-header button {
    border-radius: 5px;
    border: 1px solid darkgrey;
}
#detail-container .item .item-header label {
    margin-left: 5px;
}
#resulttagihan {
    display: flex;
    border: 1px solid silver;
}
.cursor{
    cursor:pointer;
}
</style>

<script src="https://code.jquery.com/ui/1.13.3/jquery-ui.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<div id="load"></div>
<div id="xmodal" class="modal fade" tabindex="-1" role="dialog" data-backdrop="static">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title">Set cookies</h4>
      </div>
      <div class="modal-body">
        <input id="input_cookie" type="text" class="form-control">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Batal</button>
        <button type="button" class="btn btn-success" id="startapp" >Start</button>
      </div>
    </div>
  </div>
</div>
`;
$('body').append(modal);
};
    $('head').append('<link rel="stylesheet" href="https://code.jquery.com/ui/1.13.3/themes/base/jquery-ui.css">')
    firtsHtml();
    delay(5000)
    $('#content .container').append(`
    <div class="col-sm-offset-5 col-sm-2">
       <button onclick="$('#xmodal').modal('show');" type="button" class="btn btn-success btn-block" title="Run BO with custom menus for easy access !" >Start SC Monitor</button>
    </div>
    `);

    //===============================================START APP
    $('#startapp').one('click',async ()=>{
        let cookie = $('#input_cookie');
        if(cookie.val() == '') return cookie.focus();
        await delay(800)
        $('.navbar-left').append(`<span class="noti glyphicon glyphicon-signal btnapp" data-action="showcookie"></span><label id="lbl_cookie" style="display: none;">${cookie.val()}</label>`);
        $('#sidebarCollapse').trigger('click');
        injecting();
        await delay(800)
        //loopingCookie(cookie.val());
        $('#xmodal').modal('hide');
        await init();
    });

     //=============listener
     $('body').on('click', '.btnapp',async function(){
         $(this).addClass('blink');
         await delay(200)
         $(this).removeClass('blink');
         let action = $(this).attr('data-action');
         switch(action){
             case 'showcookie':{
                 $('#lbl_cookie').toggle();
                 return
             };
             case 'window':{
                 return handleWindow($(this));
             };
             case 'resi':{
                 return resiHandler($(this));
             };
             case 'finance':{
                 return financeHandler($(this));
             };
             case 'reqkas':{
                 return requestkas($(this));
             };
             case 'absensi':{
                 return absensiHandler($(this));
             };
             case 'uploadimage':{
                 return uploadImage($(this));
             };
             case 'addsource':{
                 return addSource($(this));
             };
             case 'addused':{
                 return addUsed($(this));
             };
             case 'addbons':{
                 return addBons($(this));
             };
             case 'setorandriver':{
                 return setoranDriver($(this));
             };
             case 'database':{
                 return dataBase($(this));
             };
             case 'task':{
                 return task($(this));
             };
             case 'showid':{
                 return showId($(this));
             };
             case 'map':{
                 return gmap($(this))
             };
             case 'tagihan':{
                 return tagihanHandler($(this))
             };
             case 'chatwa':{
                 return chatwaHandler($(this))
             };
             case 'bo':{
                 return boHandler($(this))
             };
             case 'posh':{
                 return poshHandler($(this))
             };
             case 'notepad':{
                 return notepad($(this));
             };
             case 'chart':{
                 return chartHandler($(this));
             }
             case 'test':{
                 return testHandler($(this))
             };
             case 'setcolor':{
                 return setColorHandler($(this))
             }
             case 'filemanager':{
                 return fmHandler($(this))
             }
             case 'monitor':{
                 return monitorHandler($(this))
             }
             case 'setoran':{
                 return setoranHandler($(this))
             }
             case 'scabang':{
                 return scabangHandler($(this));
             }
         }
     });

     $('body').on('change', '.handleapp',async function(){
         let action = $(this).attr('data-action');
         switch(action){
             case 'uploadimage':{
                 return uploadImage($(this));
             };
             case 'addsource':{
                 return addSource($(this));
             };
             case 'addused':{
                 return addUsed($(this));
             };
             case 'addbons':{
                 return addBons($(this));
             };
             case 'chatwa':{
                 return chatwaHandler($(this));
             };
             case 'tagihan':{
                 return tagihanHandler($(this));
             };
             case 'chart':{
                 return chartHandler($(this));
             }
             case 'setcolor':{
                 return setColorHandler($(this))
             }
             case 'setoran':{
                 return setoranHandler($(this))
             }
         }
     })

    $('body').on('input', 'input[type="ribuan"]', function() {
        let val = $(this).val();
        $(this).val(addCommas(val.replace(/[^0-9]/g, '')));
    })
     document.addEventListener("paste", e => {
        if($("#imgAdd").length == 0 || $("#imgAdd").is(':hidden')) return
        if (e.clipboardData.files.length > 0) {
            var fileInput = document.querySelector("#imgAdd");
            fileInput.files = e.clipboardData.files;
            if (e.clipboardData.files[0].type.startsWith("image/")){
                setPriviewImage(e.clipboardData.files[0]);
            }
        }
    });
})();

