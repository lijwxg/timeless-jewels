import{s as we,p as F,f as k,a as $,g as S,h as E,x as q,c as D,d as b,j as w,i as R,z as h,B as K,A as Ae,e as V,C as te,D as se,E as ge,F as Ie,l as I,m as C,n as O,G as Q}from"../chunks/scheduler.a4661fe7.js";import{S as Ce,i as Pe,f as W,b as X,d as Y,m as Z,a as H,t as G,c as ke,e as x,g as Se}from"../chunks/index.0ccbc0e6.js";import{S as ee,e as B,g as Re}from"../chunks/navigation.3a177983.js";import{p as Te}from"../chunks/stores.ac1502fb.js";import{a as je,b as $e}from"../chunks/paths.7dd57e3d.js";import{d as j,c as De}from"../chunks/index.098253ec.js";function ae(n,e,s){const l=n.slice();return l[15]=e[s],l}function ie(n,e,s){const l=n.slice();l[18]=e[s],l[21]=s;const a=j.GetStatByIndex(l[15].AlternatePassiveAddition.StatsKeys[l[21]]);return l[19]=a,l}function ne(n,e,s){const l=n.slice();l[18]=e[s],l[21]=s;const a=j.GetStatByIndex(l[4].AlternatePassiveSkill.StatsKeys[l[21]]);return l[19]=a,l}function oe(n){let e,s,l="Conqueror",a,i,t,o,c=n[1]&&Object.keys(j.TimelessJewelConquerors[n[0].value]).indexOf(n[1].value)>=0,d,f;function _(r){n[10](r)}let p={items:n[5]};n[1]!==void 0&&(p.value=n[1]),i=new ee({props:p}),F.push(()=>W(i,"value",_)),i.$on("select",n[8]);let u=c&&fe(n);return{c(){e=k("div"),s=k("h3"),s.textContent=l,a=$(),X(i.$$.fragment),o=$(),u&&u.c(),d=V(),this.h()},l(r){e=S(r,"DIV",{class:!0});var v=E(e);s=S(v,"H3",{class:!0,"data-svelte-h":!0}),q(s)!=="svelte-1jyt00f"&&(s.textContent=l),a=D(v),Y(i.$$.fragment,v),v.forEach(b),o=D(r),u&&u.l(r),d=V(),this.h()},h(){w(s,"class","mb-2"),w(e,"class","mt-4")},m(r,v){R(r,e,v),h(e,s),h(e,a),Z(i,e,null),R(r,o,v),u&&u.m(r,v),R(r,d,v),f=!0},p(r,v){const g={};v&32&&(g.items=r[5]),!t&&v&2&&(t=!0,g.value=r[1],K(()=>t=!1)),i.$set(g),v&3&&(c=r[1]&&Object.keys(j.TimelessJewelConquerors[r[0].value]).indexOf(r[1].value)>=0),c?u?(u.p(r,v),v&3&&H(u,1)):(u=fe(r),u.c(),H(u,1),u.m(d.parentNode,d)):u&&(Se(),G(u,1,1,()=>{u=null}),ke())},i(r){f||(H(i.$$.fragment,r),H(u),f=!0)},o(r){G(i.$$.fragment,r),G(u),f=!1},d(r){r&&(b(e),b(o),b(d)),x(i),u&&u.d(r)}}}function fe(n){let e,s,l="Passive Skill",a,i,t,o,c,d;function f(u){n[11](u)}let _={items:n[7]};n[2]!==void 0&&(_.value=n[2]),i=new ee({props:_}),F.push(()=>W(i,"value",f)),i.$on("select",n[8]);let p=n[2]&&re(n);return{c(){e=k("div"),s=k("h3"),s.textContent=l,a=$(),X(i.$$.fragment),o=$(),p&&p.c(),c=V(),this.h()},l(u){e=S(u,"DIV",{class:!0});var r=E(e);s=S(r,"H3",{class:!0,"data-svelte-h":!0}),q(s)!=="svelte-1u1bsa3"&&(s.textContent=l),a=D(r),Y(i.$$.fragment,r),r.forEach(b),o=D(u),p&&p.l(u),c=V(),this.h()},h(){w(s,"class","mb-2"),w(e,"class","mt-4")},m(u,r){R(u,e,r),h(e,s),h(e,a),Z(i,e,null),R(u,o,r),p&&p.m(u,r),R(u,c,r),d=!0},p(u,r){const v={};!t&&r&4&&(t=!0,v.value=u[2],K(()=>t=!1)),i.$set(v),u[2]?p?p.p(u,r):(p=re(u),p.c(),p.m(c.parentNode,c)):p&&(p.d(1),p=null)},i(u){d||(H(i.$$.fragment,u),d=!0)},o(u){G(i.$$.fragment,u),d=!1},d(u){u&&(b(e),b(o),b(c)),x(i),p&&p.d(u)}}}function re(n){let e,s,l="Seed",a,i,t,o,c,d,f,_,p,u=(n[3]<j.TimelessJewelSeedRanges[n[0].value].Min||n[3]>j.TimelessJewelSeedRanges[n[0].value].Max)&&ue(n),r=n[4]&&ce(n);return{c(){e=k("div"),s=k("h3"),s.textContent=l,a=$(),i=k("input"),c=$(),u&&u.c(),d=$(),r&&r.c(),f=V(),this.h()},l(v){e=S(v,"DIV",{class:!0});var g=E(e);s=S(g,"H3",{class:!0,"data-svelte-h":!0}),q(s)!=="svelte-12wsj4m"&&(s.textContent=l),a=D(g),i=S(g,"INPUT",{type:!0,class:!0,min:!0,max:!0}),c=D(g),u&&u.l(g),g.forEach(b),d=D(v),r&&r.l(v),f=V(),this.h()},h(){w(s,"class","mb-2"),w(i,"type","number"),w(i,"class","seed"),w(i,"min",t=j.TimelessJewelSeedRanges[n[0].value].Min),w(i,"max",o=j.TimelessJewelSeedRanges[n[0].value].Max),w(e,"class","mt-4")},m(v,g){R(v,e,g),h(e,s),h(e,a),h(e,i),te(i,n[3]),h(e,c),u&&u.m(e,null),R(v,d,g),r&&r.m(v,g),R(v,f,g),_||(p=[se(i,"input",n[12]),se(i,"blur",n[8])],_=!0)},p(v,g){g&1&&t!==(t=j.TimelessJewelSeedRanges[v[0].value].Min)&&w(i,"min",t),g&1&&o!==(o=j.TimelessJewelSeedRanges[v[0].value].Max)&&w(i,"max",o),g&8&&ge(i.value)!==v[3]&&te(i,v[3]),v[3]<j.TimelessJewelSeedRanges[v[0].value].Min||v[3]>j.TimelessJewelSeedRanges[v[0].value].Max?u?u.p(v,g):(u=ue(v),u.c(),u.m(e,null)):u&&(u.d(1),u=null),v[4]?r?r.p(v,g):(r=ce(v),r.c(),r.m(f.parentNode,f)):r&&(r.d(1),r=null)},d(v){v&&(b(e),b(d),b(f)),u&&u.d(),r&&r.d(v),_=!1,Ie(p)}}}function ue(n){let e,s,l=j.TimelessJewelSeedRanges[n[0].value].Min+"",a,i,t=j.TimelessJewelSeedRanges[n[0].value].Max+"",o;return{c(){e=k("div"),s=I("Seed must be between "),a=I(l),i=I(" and "),o=I(t),this.h()},l(c){e=S(c,"DIV",{class:!0});var d=E(e);s=C(d,"Seed must be between "),a=C(d,l),i=C(d," and "),o=C(d,t),d.forEach(b),this.h()},h(){w(e,"class","mt-2")},m(c,d){R(c,e,d),h(e,s),h(e,a),h(e,i),h(e,o)},p(c,d){d&1&&l!==(l=j.TimelessJewelSeedRanges[c[0].value].Min+"")&&O(a,l),d&1&&t!==(t=j.TimelessJewelSeedRanges[c[0].value].Max+"")&&O(o,t)},d(c){c&&b(e)}}}function ce(n){var i;let e,s,l=n[4].AlternatePassiveSkill&&_e(n),a="AlternatePassiveAdditionInformations"in n[4]&&((i=n[4].AlternatePassiveAdditionInformations)==null?void 0:i.length)>0&&me(n);return{c(){l&&l.c(),e=$(),a&&a.c(),s=V()},l(t){l&&l.l(t),e=D(t),a&&a.l(t),s=V()},m(t,o){l&&l.m(t,o),R(t,e,o),a&&a.m(t,o),R(t,s,o)},p(t,o){var c;t[4].AlternatePassiveSkill?l?l.p(t,o):(l=_e(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null),"AlternatePassiveAdditionInformations"in t[4]&&((c=t[4].AlternatePassiveAdditionInformations)==null?void 0:c.length)>0?a?a.p(t,o):(a=me(t),a.c(),a.m(s.parentNode,s)):a&&(a.d(1),a=null)},d(t){t&&(b(e),b(s)),l&&l.d(t),a&&a.d(t)}}}function _e(n){let e,s,l="Alternate Passive Skill",a,i,t=n[4].AlternatePassiveSkill.Name+"",o,c,d=n[4].AlternatePassiveSkill.ID+"",f,_,p=n[4].AlternatePassiveSkill+"",u,r,v,g=n[4].StatRolls&&Object.keys(n[4].StatRolls).length>0,M,m=g&&de(n);return{c(){e=k("div"),s=k("h3"),s.textContent=l,a=$(),i=k("span"),o=I(t),c=I(" ("),f=I(d),_=I(") ("),u=I(p),r=I(")"),v=$(),m&&m.c(),M=V(),this.h()},l(A){e=S(A,"DIV",{class:!0});var P=E(e);s=S(P,"H3",{"data-svelte-h":!0}),q(s)!=="svelte-zgn4l4"&&(s.textContent=l),a=D(P),i=S(P,"SPAN",{});var N=E(i);o=C(N,t),c=C(N," ("),f=C(N,d),_=C(N,") ("),u=C(N,p),r=C(N,")"),N.forEach(b),P.forEach(b),v=D(A),m&&m.l(A),M=V(),this.h()},h(){w(e,"class","mt-4")},m(A,P){R(A,e,P),h(e,s),h(e,a),h(e,i),h(i,o),h(i,c),h(i,f),h(i,_),h(i,u),h(i,r),R(A,v,P),m&&m.m(A,P),R(A,M,P)},p(A,P){P&16&&t!==(t=A[4].AlternatePassiveSkill.Name+"")&&O(o,t),P&16&&d!==(d=A[4].AlternatePassiveSkill.ID+"")&&O(f,d),P&16&&p!==(p=A[4].AlternatePassiveSkill+"")&&O(u,p),P&16&&(g=A[4].StatRolls&&Object.keys(A[4].StatRolls).length>0),g?m?m.p(A,P):(m=de(A),m.c(),m.m(M.parentNode,M)):m&&(m.d(1),m=null)},d(A){A&&(b(e),b(v),b(M)),m&&m.d(A)}}}function de(n){let e,s=B(Object.keys(n[4].StatRolls)),l=[];for(let a=0;a<s.length;a+=1)l[a]=ve(ne(n,s,a));return{c(){e=k("ol");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=S(a,"OL",{class:!0});var i=E(e);for(let t=0;t<l.length;t+=1)l[t].l(i);i.forEach(b),this.h()},h(){w(e,"class","mt-4 list-decimal pl-8")},m(a,i){R(a,e,i);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,null)},p(a,i){if(i&16){s=B(Object.keys(a[4].StatRolls));let t;for(t=0;t<s.length;t+=1){const o=ne(a,s,t);l[t]?l[t].p(o,i):(l[t]=ve(o),l[t].c(),l[t].m(e,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=s.length}},d(a){a&&b(e),Q(l,a)}}}function ve(n){let e,s=(n[19].Text||"<no name>")+"",l,a,i=n[19].ID+"",t,o,c=n[4].StatRolls[n[18]]+"",d;return{c(){e=k("li"),l=I(s),a=I(" ("),t=I(i),o=I(") - "),d=I(c)},l(f){e=S(f,"LI",{});var _=E(e);l=C(_,s),a=C(_," ("),t=C(_,i),o=C(_,") - "),d=C(_,c),_.forEach(b)},m(f,_){R(f,e,_),h(e,l),h(e,a),h(e,t),h(e,o),h(e,d)},p(f,_){_&16&&s!==(s=(f[19].Text||"<no name>")+"")&&O(l,s),_&16&&i!==(i=f[19].ID+"")&&O(t,i),_&16&&c!==(c=f[4].StatRolls[f[18]]+"")&&O(d,c)},d(f){f&&b(e)}}}function me(n){let e,s,l="Additions",a,i,t=B(n[4].AlternatePassiveAdditionInformations),o=[];for(let c=0;c<t.length;c+=1)o[c]=be(ae(n,t,c));return{c(){e=k("div"),s=k("h3"),s.textContent=l,a=$(),i=k("ul");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=S(c,"DIV",{class:!0});var d=E(e);s=S(d,"H3",{"data-svelte-h":!0}),q(s)!=="svelte-3nw52l"&&(s.textContent=l),a=D(d),i=S(d,"UL",{class:!0});var f=E(i);for(let _=0;_<o.length;_+=1)o[_].l(f);f.forEach(b),d.forEach(b),this.h()},h(){w(i,"class","list-disc pl-8"),w(e,"class","mt-4")},m(c,d){R(c,e,d),h(e,s),h(e,a),h(e,i);for(let f=0;f<o.length;f+=1)o[f]&&o[f].m(i,null)},p(c,d){if(d&16){t=B(c[4].AlternatePassiveAdditionInformations);let f;for(f=0;f<t.length;f+=1){const _=ae(c,t,f);o[f]?o[f].p(_,d):(o[f]=be(_),o[f].c(),o[f].m(i,null))}for(;f<o.length;f+=1)o[f].d(1);o.length=t.length}},d(c){c&&b(e),Q(o,c)}}}function he(n){let e,s=B(Object.keys(n[15].StatRolls)),l=[];for(let a=0;a<s.length;a+=1)l[a]=pe(ie(n,s,a));return{c(){e=k("ol");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=S(a,"OL",{class:!0});var i=E(e);for(let t=0;t<l.length;t+=1)l[t].l(i);i.forEach(b),this.h()},h(){w(e,"class","list-decimal pl-8")},m(a,i){R(a,e,i);for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,null)},p(a,i){if(i&16){s=B(Object.keys(a[15].StatRolls));let t;for(t=0;t<s.length;t+=1){const o=ie(a,s,t);l[t]?l[t].p(o,i):(l[t]=pe(o),l[t].c(),l[t].m(e,null))}for(;t<l.length;t+=1)l[t].d(1);l.length=s.length}},d(a){a&&b(e),Q(l,a)}}}function pe(n){let e,s=(n[19].Text||"<no name>")+"",l,a,i=n[19].ID+"",t,o,c=n[15].StatRolls[n[18]]+"",d;return{c(){e=k("li"),l=I(s),a=I(" ("),t=I(i),o=I(") - "),d=I(c)},l(f){e=S(f,"LI",{});var _=E(e);l=C(_,s),a=C(_," ("),t=C(_,i),o=C(_,") - "),d=C(_,c),_.forEach(b)},m(f,_){R(f,e,_),h(e,l),h(e,a),h(e,t),h(e,o),h(e,d)},p(f,_){_&16&&s!==(s=(f[19].Text||"<no name>")+"")&&O(l,s),_&16&&i!==(i=f[19].ID+"")&&O(t,i),_&16&&c!==(c=f[15].StatRolls[f[18]]+"")&&O(d,c)},d(f){f&&b(e)}}}function be(n){let e,s,l=n[15].AlternatePassiveAddition.ID+"",a,i,t=n[15].AlternatePassiveAddition.Index+"",o,c,d,f=n[15].StatRolls&&Object.keys(n[15].StatRolls).length>0,_,p=f&&he(n);return{c(){e=k("li"),s=k("span"),a=I(l),i=I(" ("),o=I(t),c=I(")"),d=$(),p&&p.c(),_=$(),this.h()},l(u){e=S(u,"LI",{class:!0});var r=E(e);s=S(r,"SPAN",{});var v=E(s);a=C(v,l),i=C(v," ("),o=C(v,t),c=C(v,")"),v.forEach(b),d=D(r),p&&p.l(r),_=D(r),r.forEach(b),this.h()},h(){w(e,"class","mt-4")},m(u,r){R(u,e,r),h(e,s),h(s,a),h(s,i),h(s,o),h(s,c),h(e,d),p&&p.m(e,null),h(e,_)},p(u,r){r&16&&l!==(l=u[15].AlternatePassiveAddition.ID+"")&&O(a,l),r&16&&t!==(t=u[15].AlternatePassiveAddition.Index+"")&&O(o,t),r&16&&(f=u[15].StatRolls&&Object.keys(u[15].StatRolls).length>0),f?p?p.p(u,r):(p=he(u),p.c(),p.m(e,_)):p&&(p.d(1),p=null)},d(u){u&&b(e),p&&p.d()}}}function Ee(n){let e,s,l,a,i="Timeless Calculator",t,o,c='<h2 class="text-white mb-10 text-center underline text-orange-500">Skill Tree View</h2>',d,f,_,p="Timeless Jewel",u,r,v,g,M,m,A=`<div class="text-right text-orange-500"><a href="https://discord.gg/mfacademy" target="_blank" rel="noopener" class="flex flex-row align-middle"><img src="${je}/mf-academy-logo.png" width="24px"/> <span class="ml-2">MF Academy</span></a></div> <div class="text-orange-500"><a href="https://github.com/Vilsol/timeless-jewels" target="_blank" rel="noopener">Source (Github)</a></div>`,P;function N(J){n[9](J)}let le={items:n[6]};n[0]!==void 0&&(le.value=n[0]),r=new ee({props:le}),F.push(()=>W(r,"value",N)),r.$on("select",n[8]);let T=n[0]&&oe(n);return{c(){e=k("div"),s=k("div"),l=k("div"),a=k("h1"),a.textContent=i,t=$(),o=k("a"),o.innerHTML=c,d=$(),f=k("div"),_=k("h3"),_.textContent=p,u=$(),X(r.$$.fragment),g=$(),T&&T.c(),M=$(),m=k("div"),m.innerHTML=A,this.h()},l(J){e=S(J,"DIV",{class:!0});var y=E(e);s=S(y,"DIV",{class:!0});var L=E(s);l=S(L,"DIV",{});var U=E(l);a=S(U,"H1",{class:!0,"data-svelte-h":!0}),q(a)!=="svelte-dvt88y"&&(a.textContent=i),t=D(U),o=S(U,"A",{href:!0,"data-svelte-h":!0}),q(o)!=="svelte-1w6zlan"&&(o.innerHTML=c),d=D(U),f=S(U,"DIV",{class:!0});var z=E(f);_=S(z,"H3",{class:!0,"data-svelte-h":!0}),q(_)!=="svelte-1pbfj8"&&(_.textContent=p),u=D(z),Y(r.$$.fragment,z),g=D(z),T&&T.l(z),z.forEach(b),U.forEach(b),M=D(L),m=S(L,"DIV",{class:!0,"data-svelte-h":!0}),q(m)!=="svelte-1drlief"&&(m.innerHTML=A),L.forEach(b),y.forEach(b),this.h()},h(){w(a,"class","text-white mb-10 text-center"),w(o,"href",$e+"/tree"),w(_,"class","mb-2"),w(f,"class","themed"),w(m,"class","flex justify-between"),w(s,"class","flex flex-col justify-between w-1/3"),w(e,"class","py-10 flex flex-row justify-center w-screen h-screen")},m(J,y){R(J,e,y),h(e,s),h(s,l),h(l,a),h(l,t),h(l,o),h(l,d),h(l,f),h(f,_),h(f,u),Z(r,f,null),h(f,g),T&&T.m(f,null),h(s,M),h(s,m),P=!0},p(J,[y]){const L={};!v&&y&1&&(v=!0,L.value=J[0],K(()=>v=!1)),r.$set(L),J[0]?T?(T.p(J,y),y&1&&H(T,1)):(T=oe(J),T.c(),H(T,1),T.m(f,null)):T&&(Se(),G(T,1,1,()=>{T=null}),ke())},i(J){P||(H(r.$$.fragment,J),H(T),P=!0)},o(J){G(r.$$.fragment,J),G(T),P=!1},d(J){J&&b(e),x(r),T&&T.d()}}}function Je(n,e,s){let l,a;Ae(n,Te,m=>s(13,a=m));const i=a.url.searchParams,t=Object.keys(j.TimelessJewels).map(m=>({value:parseInt(m),label:j.TimelessJewels[m]}));let o=i.has("jewel")?t.find(m=>m.value==i.get("jewel")):void 0,c=i.has("conqueror")?{value:i.get("conqueror"),label:i.get("conqueror")}:void 0;const d=Object.values(j.PassiveSkills).map(m=>({value:m.Index,label:m.Name+" ("+m.ID+")"}));let f=i.has("passive_skill")?d.find(m=>m.value==i.get("passive_skill")):void 0,_=i.has("seed")?i.get("seed"):0,p;const u=()=>{{const m={};o&&(m.jewel=o.value),c&&(m.conqueror=c.value),f&&(m.passive_skill=f.value),_&&(m.seed=_);const A=Object.keys(m).map(P=>P+"="+encodeURIComponent(m[P])).join("&");Re(a.url.pathname+"?"+A)}};function r(m){o=m,s(0,o)}function v(m){c=m,s(1,c)}function g(m){f=m,s(2,f)}function M(){_=ge(this.value),s(3,_)}return n.$$.update=()=>{n.$$.dirty&1&&s(5,l=o?Object.keys(j.TimelessJewelConquerors[o.value]).map(m=>({value:m,label:m})):[]),n.$$.dirty&15&&f&&_&&o&&c&&s(4,p=De.Calculate(f.value,typeof _=="string"?parseInt(_):_,o.value,c.value))},[o,c,f,_,p,l,t,d,u,r,v,g,M]}class ye extends Ce{constructor(e){super(),Pe(this,e,Je,Ee,we,{})}}export{ye as component};
