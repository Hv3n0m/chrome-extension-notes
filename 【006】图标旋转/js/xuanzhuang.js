function chgIcon(index){
    if(index === undefined){
        index = 0;
    }
    else{
        index = index%20;
    }
    chrome.browserAction.setIcon({path: {'19': 'images/icon19' + index +'.png'}});
    chrome.browserAction.setIcon({path: {'38': 'images/icon38' + index +'.png'}});
    setTimeout(function(){chgIcon(index+1)},50);

}