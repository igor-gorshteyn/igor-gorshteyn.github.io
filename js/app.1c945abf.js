(function(t){function e(e){for(var s,o,a=e[0],c=e[1],l=e[2],u=0,m=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,a=1;a<i.length;a++){var c=i[a];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0025":function(t,e,i){},"04ce":function(t,e,i){"use strict";var s=i("a3db"),r=i.n(s);r.a},"21bb":function(t,e,i){"use strict";var s=i("2dad"),r=i.n(s);r.a},"237e":function(t,e,i){},"2dad":function(t,e,i){},"30db":function(t,e,i){"use strict";var s=i("0025"),r=i.n(s);r.a},"456a":function(t,e,i){"use strict";var s=i("6752"),r=i.n(s);r.a},"4d12":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);var s=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container",attrs:{id:"app"}},[i("div",{staticClass:"d-flex justify-content-between navigation-wrap"},[i("Navigation"),i("div",{staticClass:"btn-wrap"},[i("button",{staticClass:"btn btn-primary",attrs:{disabled:0===t.currentIndex},on:{click:t.cancel}},[i("span",{staticClass:"material-icons"},[t._v("arrow_back_ios")])]),i("button",{staticClass:"btn btn-primary",attrs:{disabled:t.currentIndex===t.history.length-1},on:{click:t.forward}},[i("span",{staticClass:"material-icons"},[t._v("arrow_forward_ios")])])])],1),i("router-view"),i("Modal")],1)},n=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-container",class:{active:t.visible}},[i("div",{staticClass:"modal"},[i("div",{staticClass:"modal-title mb-1 mt-1"},[i("p",[t._v("Вы действительно хотите "+t._s(t.title)+" элемент?")])]),i("div",{staticClass:"modal-control btn-wrap "},[i("button",{staticClass:"btn btn-success",on:{click:t.successHandler}},[t._v("Да")]),i("button",{staticClass:"btn btn-danger",on:{click:t.closeModal}},[t._v("Нет")])])])])},a=[];const c=new s["a"]({methods:{modal(t,e){this.$emit(t,e)}}}),l={install(t){t.prototype.$modal=function(t,e){c.modal(t,e)}}},d={delete:"delete-item",edit:"edit-item"},u={id:null,text:null,checked:null};var m={name:"Modal",data:()=>({direction:null,title:null,visible:!1,editItem:u,deleteItemById:null}),methods:{toggleVisible(){this.visible=!this.visible},successHandler(){"delete"===this.direction?(this.$store.dispatch("deleteItem",this.deleteItemById),this.$router.push("/")):(this.$store.dispatch("editItem",this.editItem),this.$router.push("/")),this.closeModal()},clearData(){this.editItem=u,this.deleteItemById=null,this.title=null,this.direction=null},closeModal(){this.toggleVisible(),this.clearData()}},created(){c.$on(d.edit,t=>{this.toggleVisible(),this.title="изменить",this.direction="edit",this.editItem=t}),c.$on(d.delete,t=>{this.toggleVisible(),this.title="удалить",this.direction="delete",this.deleteItemById=t})},beforeDestroy(){c.$off(d.edit),c.$off(d.delete)}},h=m,f=(i("30db"),i("2877")),p=Object(f["a"])(h,o,a,!1,null,null,null),b=p.exports,v=i("8a5b");const y="my-todo-key";class g{static findTodoItems(){return JSON.parse(localStorage.getItem(y))}static writeTodoItems(t){localStorage.setItem(y,JSON.stringify(t))}}var x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("nav",[i("router-link",{attrs:{to:"/"}},[t._v("Главная")]),i("router-link",{attrs:{to:"/form"}},[t._v("Добавить")])],1)},_=[],k={name:"Navigation"},I=k,C=(i("a4e1"),Object(f["a"])(I,x,_,!1,null,null,null)),w=C.exports,$=i("2f62"),O={components:{Navigation:w,Modal:b},methods:{cancel(){this.$store.commit("historyBack")},forward(){this.$store.commit("forward")}},computed:{...Object($["c"])(["currentIndex","history"])},created(){const t=g.findTodoItems();this.$store.dispatch("addHistory",t||v)}},j=O,T=(i("5c0b"),Object(f["a"])(j,r,n,!1,null,null,null)),H=T.exports,S=i("8c4f"),M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("h1",{staticClass:"mb-1"},[t._v("Список задач")]),i("TodoContainer")],1)},P=[],E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todo-container"},t._l(t.items,(function(t){return i("TodoItem",{key:t.id,attrs:{prop:t}})})),1)},N=[],L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"todo-item-box"},[i("span",{staticClass:"icon material-icons",class:t.prop.checked?"color-success":"color-danger"},[t._v(" "+t._s(t.prop.checked?"done":"close")+" ")]),i("div",{staticClass:"text-wrap"},[i("p",[t._v(t._s(t.prop.text))])]),i("div",{staticClass:"btn-wrap"},[i("button",{staticClass:"btn btn-outline-primary",attrs:{title:"Изменить задачу"},on:{click:t.changeItem}},[i("i",{staticClass:"material-icons"},[t._v("edit")])])])])},q=[],B={name:"TodoItem",props:["prop"],components:{},methods:{changeItem(){this.$router.push({path:"/form",query:{id:this.prop.id}})}}},D=B,J=(i("456a"),Object(f["a"])(D,L,q,!1,null,null,null)),A=J.exports,V={name:"TodoContainer",components:{TodoItem:A},computed:{...Object($["b"])(["items"])}},F=V,z=(i("9af4"),Object(f["a"])(F,E,N,!1,null,null,null)),G=z.exports,K={name:"Home",components:{TodoContainer:G}},Q=K,R=(i("21bb"),Object(f["a"])(Q,M,P,!1,null,null,null)),U=R.exports,W=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticClass:"mb-1"},[t._v(t._s("edit"===t.current?"Редактировать":"Добавить"))]),i("div",[i("div",{staticClass:"d-flex justify-content-between align-items-center mb-1"},[i("div",{staticClass:"btn-wrap"},[i("button",{staticClass:"btn btn-success material-icons",class:{"btn-current":"edit"===t.current},attrs:{disabled:t.form.text.length<t.valueLength,title:"Сохранить"},on:{click:t.sendForm}},[t._v("save")]),i("button",{staticClass:"btn btn-danger",attrs:{title:"Удалить"},on:{click:t.deleteItem}},[i("i",{staticClass:"material-icons"},[t._v("delete")])]),"add"===t.current?i("button",{staticClass:"btn btn-primary",attrs:{disabled:0===t.form.text.length,title:"Очистить"},on:{click:t.clear}},[i("i",{staticClass:"material-icons"},[t._v("backspace")])]):t._e()]),t.form.text.length<t.valueLength?i("span",{staticClass:"color-danger ml-1"},[t._v("Минимальная длина "+t._s(t.valueLength)+" символов")]):t._e()]),"edit"===t.current?i("div",{staticClass:"checkbox-wrap mb-1"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.form.checked,expression:"form.checked"}],attrs:{type:"checkbox",id:t.form.id},domProps:{checked:t.form.checked,checked:Array.isArray(t.form.checked)?t._i(t.form.checked,null)>-1:t.form.checked},on:{change:function(e){var i=t.form.checked,s=e.target,r=!!s.checked;if(Array.isArray(i)){var n=null,o=t._i(i,n);s.checked?o<0&&t.$set(t.form,"checked",i.concat([n])):o>-1&&t.$set(t.form,"checked",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(t.form,"checked",r)}}}),i("label",{attrs:{for:t.form.id}},[i("span",{class:t.form.checked?"color-success":"color-danger"},[t._v("Задача "+t._s(t.form.checked?"выполнена":"не выполнена"))])])]):t._e(),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.text,expression:"form.text"}],staticClass:"textarea",class:{"area-danger":t.form.text.length<t.valueLength},domProps:{value:t.form.text},on:{input:function(e){e.target.composing||t.$set(t.form,"text",e.target.value)}}})])])},X=[],Y=i("ec26"),Z={name:"EditPage",data:()=>({valueLength:6,current:"",form:{text:"",checked:!1,id:null}}),computed:{...Object($["b"])(["items"])},created(){const t=this.$route.query.id;void 0!==t?(this.current="edit",this.form={...this.items.find(e=>e.id===t)}):this.current="add"},methods:{clear(){this.form.text=""},deleteItem(){this.$modal(d.delete,this.form.id)},sendForm(){const{text:t,checked:e}=this.form,i={checked:e,text:t,id:this.form.id?this.form.id:Object(Y["a"])()};"edit"===this.current?this.$modal(d.edit,i):(this.$store.dispatch("addItem",i),this.form.text="")}}},tt=Z,et=(i("04ce"),Object(f["a"])(tt,W,X,!1,null,null,null)),it=et.exports;s["a"].use(S["a"]);const st=[{path:"/",name:"Home",component:U},{path:"/form",name:"Form",component:it}],rt=new S["a"]({mode:"history",base:"/",routes:st});var nt=rt;s["a"].use($["a"]);const ot=new $["a"].Store({state:{currentIndex:0,history:[]},getters:{items:t=>t.history[t.currentIndex]},mutations:{addHistory(t,e){t.history=[...e],t.currentIndex+=1},editHistory(t,e){t.history=[...t.history,[...e]],t.currentIndex=t.history.length-1},historyBack(t){t.currentIndex>=0&&(t.currentIndex-=1)},forward(t){t.history.length-1!==t.currentIndex&&(t.currentIndex+=1)}},actions:{addHistory({commit:t,state:e},i){t("editHistory",i)},addItem({commit:t,state:e},i){const s=[...e.history[e.currentIndex],i];t("editHistory",s)},editItem({commit:t,state:e},i){const s=e.history[e.currentIndex].filter(t=>t.id!==i.id);t("editHistory",[...s,i])},deleteItem({commit:t,state:e},i){const s=e.history[e.currentIndex].filter(t=>t.id!==i);t("editHistory",s)}}});ot.subscribe((t,{history:e,currentIndex:i})=>{g.writeTodoItems(e[i])}),s["a"].use(l),s["a"].config.productionTip=!1,new s["a"]({router:nt,store:ot,render:t=>t(H)}).$mount("#app")},"5c0b":function(t,e,i){"use strict";var s=i("9c0c"),r=i.n(s);r.a},6752:function(t,e,i){},"8a5b":function(t){t.exports=JSON.parse('[{"id":"0","checked":false,"text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est impedit minima modi nam, necessitatibus possimus quia sed sequi vitae."},{"id":"1","checked":false,"text":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est impedit minima modi nam, necessitatibus possimus quia sed sequi vitae."},{"id":"2","checked":false,"text":"Отдахнуть"}]')},"9af4":function(t,e,i){"use strict";var s=i("237e"),r=i.n(s);r.a},"9c0c":function(t,e,i){},a3db:function(t,e,i){},a4e1:function(t,e,i){"use strict";var s=i("4d12"),r=i.n(s);r.a}});
//# sourceMappingURL=app.1c945abf.js.map