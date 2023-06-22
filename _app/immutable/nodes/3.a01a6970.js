import{S,i as D,s as N,k as d,a as E,q as P,l as h,m as b,c as I,h as k,r as R,n as r,b as U,G as p,M as w,O as f,H,R as V}from"../chunks/index.3ed794e4.js";function q(i){let n,e,o,t,a,v,c,_,m,s,y,T,B;return{c(){n=d("div"),e=d("input"),o=E(),t=d("div"),a=d("textarea"),v=E(),c=d("p"),_=E(),m=d("div"),s=d("button"),y=P("Copy template"),this.h()},l(u){n=h(u,"DIV",{class:!0});var l=b(n);e=h(l,"INPUT",{type:!0,placeholder:!0,class:!0}),o=I(l),t=h(l,"DIV",{class:!0});var g=b(t);a=h(g,"TEXTAREA",{name:!0,id:!0,cols:!0,rows:!0,class:!0}),b(a).forEach(k),v=I(g),c=h(g,"P",{class:!0});var M=b(c);M.forEach(k),g.forEach(k),_=I(l),m=h(l,"DIV",{class:!0});var A=b(m);s=h(A,"BUTTON",{class:!0});var C=b(s);y=R(C,"Copy template"),C.forEach(k),A.forEach(k),l.forEach(k),this.h()},h(){r(e,"type","text"),r(e,"placeholder","Nama undangan"),r(e,"class","svelte-10bne7p"),r(a,"name",""),r(a,"id",""),r(a,"cols","30"),r(a,"rows","10"),r(a,"class","svelte-10bne7p"),r(c,"class","svelte-10bne7p"),r(t,"class","row svelte-10bne7p"),r(s,"class","svelte-10bne7p"),r(m,"class","svelte-10bne7p"),r(n,"class","form svelte-10bne7p")},m(u,l){U(u,n,l),p(n,e),w(e,i[0]),p(n,o),p(n,t),p(t,a),w(a,i[1]),p(t,v),p(t,c),c.innerHTML=i[2],p(n,_),p(n,m),p(m,s),p(s,y),T||(B=[f(e,"input",i[5]),f(e,"input",i[3]),f(a,"input",i[6]),f(a,"input",i[3]),f(s,"click",i[4])],T=!0)},p(u,[l]){l&1&&e.value!==u[0]&&w(e,u[0]),l&2&&w(a,u[1]),l&4&&(c.innerHTML=u[2])},i:H,o:H,d(u){u&&k(n),T=!1,V(B)}}}function L(i,n,e){let o="",t=`Assalamualaikum wr. wb.
Bismillahirahmanirrahim.

Yth. {{nama}}

Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara pernikahan kami :

Erinta & Bayu

Berikut link undangan kami untuk info lengkap dari acara bisa kunjungi :

{{url}}

Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu. Atas perhatiannya kami ucapkan terima kasih.

Wassalamualaikum wr. wb.`,a="";function v(){let s=t.replace(/{{nama}}/g,o);s=s.replace(/{{url}}/g,"https://www.sibaydev.com/undangan?to="+encodeURIComponent(o)),e(2,a=s.replace(/(?:\r\n|\r|\n)/g,"<br>"))}v();function c(){let s=a.replace(/(?:<br>)/g,`
`);navigator.clipboard.writeText(s)}function _(){o=this.value,e(0,o)}function m(){t=this.value,e(1,t)}return[o,t,a,v,c,_,m]}class j extends S{constructor(n){super(),D(this,n,L,q,N,{})}}export{j as component};
