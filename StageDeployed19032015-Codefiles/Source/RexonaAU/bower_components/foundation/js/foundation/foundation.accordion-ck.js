(function(e,t,n,r){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.3.0",settings:{active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=this.S;n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a",function(r){var i=n(this).closest("["+t.attr_name()+"]"),s=n("#"+this.href.split("#")[1]),o=n("dd > .content",i),u=e("dd",i),a=t.attr_name()+"="+i.attr(t.attr_name()),f=i.data(t.attr_name(!0)+"-init"),l=n("dd > .content."+f.active_class,i);r.preventDefault();if(i.attr(t.attr_name())){o=o.add("["+a+"] dd > .content");u=u.add("["+a+"] dd")}if(f.toggleable&&s.is(l)){s.parent("dd").toggleClass(f.active_class,!1);s.toggleClass(f.active_class,!1);f.callback(s);s.triggerHandler("toggled",[i]);i.triggerHandler("toggled",[s]);return}if(!f.multi_expand){o.removeClass(f.active_class);u.removeClass(f.active_class)}s.addClass(f.active_class).parent().addClass(f.active_class);f.callback(s);s.triggerHandler("toggled",[i]);i.triggerHandler("toggled",[s])})},off:function(){},reflow:function(){}}})(jQuery,window,window.document);