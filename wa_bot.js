function dispatch(target, eventType, char) {
   var evt = document.createEvent("TextEvent");    
   evt.initTextEvent(eventType, true, true, window, char, 0, "en-US");
   target.focus();
   target.dispatchEvent(evt);
}

function geba(attr, value, root) { //get element by attr
    root = root || document.body;
    if(root.hasAttribute(attr) && root.getAttribute(attr) == value) { return root; }
    var children = root.children, element;
    for(var i = children.length; i--;) {
        element = geba(attr, value, children[i]);
        if(element) {return element;}
    }
    return null;
}
String.prototype.more = function(num) { //for spamming -evilface-
    return new Array(num+ 1).join(this);
}


function vClick(element) {
  var event = new MouseEvent('click',{'view':window,'bubbles':true,'cancelable':true});
  element.dispatchEvent(event)
}

function sendText(text, conv) { 
	vClick(conv);
	dispatch(document.querySelector(".input-container div"), "textInput", text); // document.querySelector("")
	vClick(document.querySelector(".icon.btn-icon.icon-send"));
	//should increment the counter
	window.counter++;
}


// settings:
var phone = "---------------"
var observer = new MutationObserver(function(evrec) { MessagesReceiver(); });
var ca = geba("data-reactid", ".0.1:$main.2.3.0.0.$chatlist-"+phone+"@c-us.$chatlist-"+phone+"@c-us");


// x interval:
function BaseRunner() { 
	vClick(ca);
	vClick(document.querySelector(".input-container div"));
	observer.observe(document.querySelector(".message-list"),{subtree: true,childList: true,attribute: true});
}

// execution:
setTimeout(BaseRunner(), 1100);



var messages = document.getElementsByClassName("msg");
var counter  = messages.length;

function MessagesReceiver() { 
	if(counter < messages.length) { 
		for(i = counter; i < messages.length; i++) { 
			//console.log("real:" + messages.length + " counter: "+counter+" i:"+i);
			console.log(geba("class", "emojitext", messages[i/*-1*/]).innerText);
		}
		window.counter = messages.length;
	}
}

function MessageHandler(char) { 
	//appy rules here:
	
}




