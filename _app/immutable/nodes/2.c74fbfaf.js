import{S as eg,i as tg,s as ng,k as p,q as T,a as E,l as _,m as v,r as C,h as m,c as w,n as g,p as fi,J as We,K as ig,b as bn,G as u,L as tr,M as Gh,N as Ve,O as sg,u as xt,H as ys,P as zh,Q as rg,o as og,R as ag}from"../chunks/index.6801ed78.js";import{b as pt}from"../chunks/paths.46244a8b.js";const lg=!1,cg=!0,FT=Object.freeze(Object.defineProperty({__proto__:null,prerender:cg,ssr:lg},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vf={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(n,e){if(!n)throw Ri(e)},Ri=function(n){return new Error("Firebase Database ("+vf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ug=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Rc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(f=64)),i.push(t[d],t[h],t[f],t[y])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ug(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new hg;const f=r<<2|a>>4;if(i.push(f),c!==64){const y=a<<4&240|c>>2;if(i.push(y),h!==64){const b=c<<6&192|h;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class hg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const If=function(n){const e=yf(n);return Rc.encodeByteArray(e,!0)},cr=function(n){return If(n).replace(/\./g,"")},ur=function(n){try{return Rc.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dg(n){return Ef(void 0,n)}function Ef(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!fg(t)||(n[t]=Ef(n[t],e[t]));return n}function fg(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=()=>pg().__FIREBASE_DEFAULTS__,gg=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},mg=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ur(n[1]);return e&&JSON.parse(e)},Ac=()=>{try{return _g()||gg()||mg()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wf=n=>{var e,t;return(t=(e=Ac())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},vg=n=>{const e=wf(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},bf=()=>{var n;return(n=Ac())===null||n===void 0?void 0:n.config},Tf=n=>{var e;return(e=Ac())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[cr(JSON.stringify(t)),cr(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Nc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())}function Cf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Sf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ig(){const n=le();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function kf(){return vf.NODE_ADMIN===!0}function Rf(){try{return typeof indexedDB=="object"}catch{return!1}}function Af(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function Eg(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="FirebaseError";class ct extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=wg,Object.setPrototypeOf(this,ct.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mn.prototype.create)}}class Mn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?bg(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ct(s,a,i)}}function bg(n,e){return n.replace(Tg,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Tg=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(n){return JSON.parse(n)}function te(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Is(ur(r[0])||""),t=Is(ur(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Cg=function(n){const e=Nf(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Sg=function(n){const e=Nf(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function bi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function sc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function hr(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Es(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Kh(r)&&Kh(o)){if(!Es(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Kh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):h<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const f=(s<<5|s>>>27)+c+l+d+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Rg(n,e){const t=new Ag(n,e);return t.subscribe.bind(t)}class Ag{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Ng(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Ul),s.error===void 0&&(s.error=Ul),s.complete===void 0&&(s.complete=Ul);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ng(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ul(){}function Pc(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,I(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Mr=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dg=1e3,Og=2,Mg=4*60*60*1e3,Lg=.5;function Yh(n,e=Dg,t=Og){const i=e*Math.pow(t,n),s=Math.round(Lg*i*(Math.random()-.5)*2);return Math.min(Mg,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n){return n&&n._delegate?n._delegate:n}class Ge{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Or;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ug(e))try{this.getOrInitializeService({instanceIdentifier:vn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=vn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vn){return this.instances.has(e)}getOptions(e=vn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Fg(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=vn){return this.component?this.component.multipleInstances?e:vn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Fg(n){return n===vn?void 0:n}function Ug(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new xg(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(U||(U={}));const Vg={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Wg=U.INFO,Hg={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},$g=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Hg[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lr{constructor(e){this.name=e,this._logLevel=Wg,this._logHandler=$g,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const jg=(n,e)=>e.some(t=>n instanceof t);let Jh,Qh;function qg(){return Jh||(Jh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Gg(){return Qh||(Qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pf=new WeakMap,rc=new WeakMap,Df=new WeakMap,Bl=new WeakMap,Dc=new WeakMap;function zg(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Wt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Pf.set(t,n)}).catch(()=>{}),Dc.set(e,n),e}function Kg(n){if(rc.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});rc.set(n,e)}let oc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return rc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Df.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Yg(n){oc=n(oc)}function Jg(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Vl(this),e,...t);return Df.set(i,e.sort?e.sort():[e]),Wt(i)}:Gg().includes(n)?function(...e){return n.apply(Vl(this),e),Wt(Pf.get(this))}:function(...e){return Wt(n.apply(Vl(this),e))}}function Qg(n){return typeof n=="function"?Jg(n):(n instanceof IDBTransaction&&Kg(n),jg(n,qg())?new Proxy(n,oc):n)}function Wt(n){if(n instanceof IDBRequest)return zg(n);if(Bl.has(n))return Bl.get(n);const e=Qg(n);return e!==n&&(Bl.set(n,e),Dc.set(e,n)),e}const Vl=n=>Dc.get(n);function Xg(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Wt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Wt(o.result),l.oldVersion,l.newVersion,Wt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Zg=["get","getKey","getAll","getAllKeys","count"],em=["put","add","delete","clear"],Wl=new Map;function Xh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Wl.get(e))return Wl.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=em.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Zg.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Wl.set(e,r),r}Yg(n=>({...n,get:(e,t,i)=>Xh(e,t)||n.get(e,t,i),has:(e,t)=>!!Xh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(nm(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function nm(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ac="@firebase/app",Zh="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Lr("@firebase/app"),im="@firebase/app-compat",sm="@firebase/analytics-compat",rm="@firebase/analytics",om="@firebase/app-check-compat",am="@firebase/app-check",lm="@firebase/auth",cm="@firebase/auth-compat",um="@firebase/database",hm="@firebase/database-compat",dm="@firebase/functions",fm="@firebase/functions-compat",pm="@firebase/installations",_m="@firebase/installations-compat",gm="@firebase/messaging",mm="@firebase/messaging-compat",vm="@firebase/performance",ym="@firebase/performance-compat",Im="@firebase/remote-config",Em="@firebase/remote-config-compat",wm="@firebase/storage",bm="@firebase/storage-compat",Tm="@firebase/firestore",Cm="@firebase/firestore-compat",Sm="firebase",km="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="[DEFAULT]",Rm={[ac]:"fire-core",[im]:"fire-core-compat",[rm]:"fire-analytics",[sm]:"fire-analytics-compat",[am]:"fire-app-check",[om]:"fire-app-check-compat",[lm]:"fire-auth",[cm]:"fire-auth-compat",[um]:"fire-rtdb",[hm]:"fire-rtdb-compat",[dm]:"fire-fn",[fm]:"fire-fn-compat",[pm]:"fire-iid",[_m]:"fire-iid-compat",[gm]:"fire-fcm",[mm]:"fire-fcm-compat",[vm]:"fire-perf",[ym]:"fire-perf-compat",[Im]:"fire-rc",[Em]:"fire-rc-compat",[wm]:"fire-gcs",[bm]:"fire-gcs-compat",[Tm]:"fire-fst",[Cm]:"fire-fst-compat","fire-js":"fire-js",[Sm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new Map,cc=new Map;function Am(n,e){try{n.container.addComponent(e)}catch(t){Sn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function lt(n){const e=n.name;if(cc.has(e))return Sn.debug(`There were multiple attempts to register component ${e}.`),!1;cc.set(e,n);for(const t of dr.values())Am(t,n);return!0}function Ln(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ht=new Mn("app","Firebase",Nm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=km;function Of(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:lc,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ht.create("bad-app-name",{appName:String(s)});if(t||(t=bf()),!t)throw Ht.create("no-options");const r=dr.get(s);if(r){if(Es(t,r.options)&&Es(i,r.config))return r;throw Ht.create("duplicate-app",{appName:s})}const o=new Bg(s);for(const l of cc.values())o.addComponent(l);const a=new Pm(t,i,o);return dr.set(s,a),a}function Oc(n=lc){const e=dr.get(n);if(!e&&n===lc&&bf())return Of();if(!e)throw Ht.create("no-app",{appName:n});return e}function Pe(n,e,t){var i;let s=(i=Rm[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Sn.warn(a.join(" "));return}lt(new Ge(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dm="firebase-heartbeat-database",Om=1,ws="firebase-heartbeat-store";let Hl=null;function Mf(){return Hl||(Hl=Xg(Dm,Om,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ws)}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),Hl}async function Mm(n){try{return await(await Mf()).transaction(ws).objectStore(ws).get(Lf(n))}catch(e){if(e instanceof ct)Sn.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Sn.warn(t.message)}}}async function ed(n,e){try{const i=(await Mf()).transaction(ws,"readwrite");await i.objectStore(ws).put(e,Lf(n)),await i.done}catch(t){if(t instanceof ct)Sn.warn(t.message);else{const i=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Sn.warn(i.message)}}}function Lf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm=1024,xm=30*24*60*60*1e3;class Fm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Bm(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=td();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=xm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=td(),{heartbeatsToSend:t,unsentEntries:i}=Um(this._heartbeatsCache.heartbeats),s=cr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function td(){return new Date().toISOString().substring(0,10)}function Um(n,e=Lm){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),nd(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),nd(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Bm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rf()?Af().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Mm(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ed(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return ed(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nd(n){return cr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(n){lt(new Ge("platform-logger",e=>new tm(e),"PRIVATE")),lt(new Ge("heartbeat",e=>new Fm(e),"PRIVATE")),Pe(ac,Zh,n),Pe(ac,Zh,"esm2017"),Pe("fire-js","")}Vm("");var Wm="firebase",Hm="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(Wm,Hm,"app");const $m=(n,e)=>e.some(t=>n instanceof t);let id,sd;function jm(){return id||(id=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qm(){return sd||(sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xf=new WeakMap,uc=new WeakMap,Ff=new WeakMap,$l=new WeakMap,Mc=new WeakMap;function Gm(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t($t(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&xf.set(t,n)}).catch(()=>{}),Mc.set(e,n),e}function zm(n){if(uc.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});uc.set(n,e)}let hc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return uc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ff.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $t(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Km(n){hc=n(hc)}function Ym(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(jl(this),e,...t);return Ff.set(i,e.sort?e.sort():[e]),$t(i)}:qm().includes(n)?function(...e){return n.apply(jl(this),e),$t(xf.get(this))}:function(...e){return $t(n.apply(jl(this),e))}}function Jm(n){return typeof n=="function"?Ym(n):(n instanceof IDBTransaction&&zm(n),$m(n,jm())?new Proxy(n,hc):n)}function $t(n){if(n instanceof IDBRequest)return Gm(n);if($l.has(n))return $l.get(n);const e=Jm(n);return e!==n&&($l.set(n,e),Mc.set(e,n)),e}const jl=n=>Mc.get(n);function Qm(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=$t(o);return i&&o.addEventListener("upgradeneeded",l=>{i($t(o.result),l.oldVersion,l.newVersion,$t(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Xm=["get","getKey","getAll","getAllKeys","count"],Zm=["put","add","delete","clear"],ql=new Map;function rd(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ql.get(e))return ql.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Zm.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Xm.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return ql.set(e,r),r}Km(n=>({...n,get:(e,t,i)=>rd(e,t)||n.get(e,t,i),has:(e,t)=>!!rd(e,t)||n.has(e,t)}));const Uf="@firebase/installations",Lc="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=1e4,Vf=`w:${Lc}`,Wf="FIS_v2",ev="https://firebaseinstallations.googleapis.com/v1",tv=60*60*1e3,nv="installations",iv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},kn=new Mn(nv,iv,sv);function Hf(n){return n instanceof ct&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f({projectId:n}){return`${ev}/projects/${n}/installations`}function jf(n){return{token:n.token,requestStatus:2,expiresIn:ov(n.expiresIn),creationTime:Date.now()}}async function qf(n,e){const i=(await e.json()).error;return kn.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function Gf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function rv(n,{refreshToken:e}){const t=Gf(n);return t.append("Authorization",av(e)),t}async function zf(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ov(n){return Number(n.replace("s","000"))}function av(n){return`${Wf} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=$f(n),s=Gf(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:t,authVersion:Wf,appId:n.appId,sdkVersion:Vf},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await zf(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:jf(c.authToken)}}else throw await qf("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv=/^[cdef][\w-]{21}$/,dc="";function hv(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=dv(n);return uv.test(t)?t:dc}catch{return dc}}function dv(n){return cv(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf=new Map;function Jf(n,e){const t=xr(n);Qf(t,e),fv(t,e)}function Qf(n,e){const t=Yf.get(n);if(t)for(const i of t)i(e)}function fv(n,e){const t=pv();t&&t.postMessage({key:n,fid:e}),_v()}let In=null;function pv(){return!In&&"BroadcastChannel"in self&&(In=new BroadcastChannel("[Firebase] FID Change"),In.onmessage=n=>{Qf(n.data.key,n.data.fid)}),In}function _v(){Yf.size===0&&In&&(In.close(),In=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv="firebase-installations-database",mv=1,Rn="firebase-installations-store";let Gl=null;function xc(){return Gl||(Gl=Qm(gv,mv,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Rn)}}})),Gl}async function fr(n,e){const t=xr(n),s=(await xc()).transaction(Rn,"readwrite"),r=s.objectStore(Rn),o=await r.get(t);return await r.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Jf(n,e.fid),e}async function Xf(n){const e=xr(n),i=(await xc()).transaction(Rn,"readwrite");await i.objectStore(Rn).delete(e),await i.done}async function Fr(n,e){const t=xr(n),s=(await xc()).transaction(Rn,"readwrite"),r=s.objectStore(Rn),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await s.done,a&&(!o||o.fid!==a.fid)&&Jf(n,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fc(n){let e;const t=await Fr(n.appConfig,i=>{const s=vv(i),r=yv(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===dc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function vv(n){const e=n||{fid:hv(),registrationStatus:0};return Zf(e)}function yv(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(kn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Iv(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ev(n)}:{installationEntry:e}}async function Iv(n,e){try{const t=await lv(n,e);return fr(n.appConfig,t)}catch(t){throw Hf(t)&&t.customData.serverCode===409?await Xf(n.appConfig):await fr(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Ev(n){let e=await od(n.appConfig);for(;e.registrationStatus===1;)await Kf(100),e=await od(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await Fc(n);return i||t}return e}function od(n){return Fr(n,e=>{if(!e)throw kn.create("installation-not-found");return Zf(e)})}function Zf(n){return wv(n)?{fid:n.fid,registrationStatus:0}:n}function wv(n){return n.registrationStatus===1&&n.registrationTime+Bf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv({appConfig:n,heartbeatServiceProvider:e},t){const i=Tv(n,t),s=rv(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Vf,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await zf(()=>fetch(i,a));if(l.ok){const c=await l.json();return jf(c)}else throw await qf("Generate Auth Token",l)}function Tv(n,{fid:e}){return`${$f(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uc(n,e=!1){let t;const i=await Fr(n.appConfig,r=>{if(!ep(r))throw kn.create("not-registered");const o=r.authToken;if(!e&&kv(o))return r;if(o.requestStatus===1)return t=Cv(n,e),r;{if(!navigator.onLine)throw kn.create("app-offline");const a=Av(r);return t=Sv(n,a),a}});return t?await t:i.authToken}async function Cv(n,e){let t=await ad(n.appConfig);for(;t.authToken.requestStatus===1;)await Kf(100),t=await ad(n.appConfig);const i=t.authToken;return i.requestStatus===0?Uc(n,e):i}function ad(n){return Fr(n,e=>{if(!ep(e))throw kn.create("not-registered");const t=e.authToken;return Nv(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Sv(n,e){try{const t=await bv(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await fr(n.appConfig,i),t}catch(t){if(Hf(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Xf(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fr(n.appConfig,i)}throw t}}function ep(n){return n!==void 0&&n.registrationStatus===2}function kv(n){return n.requestStatus===2&&!Rv(n)}function Rv(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+tv}function Av(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Nv(n){return n.requestStatus===1&&n.requestTime+Bf<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pv(n){const e=n,{installationEntry:t,registrationPromise:i}=await Fc(e);return i?i.catch(console.error):Uc(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(n,e=!1){const t=n;return await Ov(t),(await Uc(t,e)).token}async function Ov(n){const{registrationPromise:e}=await Fc(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(n){if(!n||!n.options)throw zl("App Configuration");if(!n.name)throw zl("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw zl(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function zl(n){return kn.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="installations",Lv="installations-internal",xv=n=>{const e=n.getProvider("app").getImmediate(),t=Mv(e),i=Ln(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Fv=n=>{const e=n.getProvider("app").getImmediate(),t=Ln(e,tp).getImmediate();return{getId:()=>Pv(t),getToken:s=>Dv(t,s)}};function Uv(){lt(new Ge(tp,xv,"PUBLIC")),lt(new Ge(Lv,Fv,"PRIVATE"))}Uv();Pe(Uf,Lc);Pe(Uf,Lc,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="analytics",Bv="firebase_id",Vv="origin",Wv=60*1e3,Hv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bc="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=new Lr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ce=new Mn("analytics","Analytics",$v);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jv(n){if(!n.startsWith(Bc)){const e=Ce.create("invalid-gtag-resource",{gtagURL:n});return ye.warn(e.message),""}return n}function np(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function qv(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Gv(n,e){const t=qv("firebase-js-sdk-policy",{createScriptURL:jv}),i=document.createElement("script"),s=`${Bc}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function zv(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Kv(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await np(t)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){ye.error(a)}n("config",s,r)}async function Yv(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await np(t);for(const l of o){const c=a.find(h=>h.measurementId===l),d=c&&e[c.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){ye.error(r)}}function Jv(n,e,t,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await Yv(n,e,t,a,l)}else if(r==="config"){const[a,l]=o;await Kv(n,e,t,i,a,l)}else if(r==="consent"){const[a]=o;n("consent","update",a)}else if(r==="get"){const[a,l,c]=o;n("get",a,l,c)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){ye.error(a)}}return s}function Qv(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=Jv(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function Xv(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Bc)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv=30,ey=1e3;class ty{constructor(e={},t=ey){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ip=new ty;function ny(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function iy(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:ny(i)},r=Hv.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Ce.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function sy(n,e=ip,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw Ce.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw Ce.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ay;return setTimeout(async()=>{a.abort()},t!==void 0?t:Wv),sp({appId:i,apiKey:s,measurementId:r},o,a,e)}async function sp(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=ip){var r;const{appId:o,measurementId:a}=n;try{await ry(i,e)}catch(l){if(a)return ye.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await iy(n);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!oy(c)){if(s.deleteThrottleMetadata(o),a)return ye.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const d=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?Yh(t,s.intervalMillis,Zv):Yh(t,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(o,h),ye.debug(`Calling attemptFetch again in ${d} millis`),sp(n,h,i,s)}}function ry(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(Ce.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function oy(n){if(!(n instanceof ct)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ay{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ly(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(){if(Rf())try{await Af()}catch(n){return ye.warn(Ce.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return ye.warn(Ce.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uy(n,e,t,i,s,r,o){var a;const l=sy(n);l.then(y=>{t[y.measurementId]=y.appId,n.options.measurementId&&y.measurementId!==n.options.measurementId&&ye.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>ye.error(y)),e.push(l);const c=cy().then(y=>{if(y)return i.getId()}),[d,h]=await Promise.all([l,c]);Xv(r)||Gv(r,d.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[Vv]="firebase",f.update=!0,h!=null&&(f[Bv]=h),s("config",d.measurementId,f),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e){this.app=e}_delete(){return delete fs[this.app.options.appId],Promise.resolve()}}let fs={},ld=[];const cd={};let Kl="dataLayer",dy="gtag",ud,rp,hd=!1;function fy(){const n=[];if(Cf()&&n.push("This is a browser extension environment."),Eg()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=Ce.create("invalid-analytics-context",{errorInfo:e});ye.warn(t.message)}}function py(n,e,t){fy();const i=n.options.appId;if(!i)throw Ce.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)ye.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ce.create("no-api-key");if(fs[i]!=null)throw Ce.create("already-exists",{id:i});if(!hd){zv(Kl);const{wrappedGtag:r,gtagCore:o}=Qv(fs,ld,cd,Kl,dy);rp=r,ud=o,hd=!0}return fs[i]=uy(n,ld,cd,e,ud,Kl,t),new hy(n)}function _y(n=Oc()){n=ue(n);const e=Ln(n,pr);return e.isInitialized()?e.getImmediate():gy(n)}function gy(n,e={}){const t=Ln(n,pr);if(t.isInitialized()){const s=t.getImmediate();if(Es(e,t.getOptions()))return s;throw Ce.create("already-initialized")}return t.initialize({options:e})}function my(n,e,t,i){n=ue(n),ly(rp,fs[n.app.options.appId],e,t,i).catch(s=>ye.error(s))}const dd="@firebase/analytics",fd="0.10.0";function vy(){lt(new Ge(pr,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return py(i,s,t)},"PUBLIC")),lt(new Ge("analytics-internal",n,"PRIVATE")),Pe(dd,fd),Pe(dd,fd,"esm2017");function n(e){try{const t=e.getProvider(pr).getImmediate();return{logEvent:(i,s,r)=>my(t,i,s,r)}}catch(t){throw Ce.create("interop-component-reg-failed",{reason:t})}}}vy();function Vc(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function op(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yy=op,ap=new Mn("auth","Firebase",op());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Lr("@firebase/auth");function Iy(n,...e){_r.logLevel<=U.WARN&&_r.warn(`Auth (${Ni}): ${n}`,...e)}function rr(n,...e){_r.logLevel<=U.ERROR&&_r.error(`Auth (${Ni}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(n,...e){throw Wc(n,...e)}function ot(n,...e){return Wc(n,...e)}function Ey(n,e,t){const i=Object.assign(Object.assign({},yy()),{[e]:t});return new Mn("auth","Firebase",i).create(e,{appName:n.name})}function Wc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ap.create(n,...e)}function R(n,e,...t){if(!n)throw Wc(e,...t)}function _t(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rr(e),new Error(e)}function It(n,e){n||_t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function wy(){return pd()==="http:"||pd()==="https:"}function pd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wy()||Cf()||"connection"in navigator)?navigator.onLine:!0}function Ty(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.shortDelay=e,this.longDelay=t,It(t>e,"Short delay should be less than long delay!"),this.isMobile=Nc()||Sf()}get(){return by()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(n,e){It(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;_t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;_t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;_t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=new Ps(3e4,6e4);function $c(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pi(n,e,t,i,s={}){return cp(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Ai(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),lp.fetch()(hp(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function cp(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Cy),e);try{const s=new ky(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw nr(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw nr(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw nr(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw nr(n,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ey(n,d,c);yt(n,d)}}catch(s){if(s instanceof ct)throw s;yt(n,"network-request-failed",{message:String(s)})}}async function up(n,e,t,i,s={}){const r=await Pi(n,e,t,i,s);return"mfaPendingCredential"in r&&yt(n,"multi-factor-auth-required",{_serverResponse:r}),r}function hp(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Hc(n.config,s):`${n.config.apiScheme}://${s}`}class ky{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ot(this.auth,"network-request-failed")),Sy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nr(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ot(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ry(n,e){return Pi(n,"POST","/v1/accounts:delete",e)}async function Ay(n,e){return Pi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ny(n,e=!1){const t=ue(n),i=await t.getIdToken(e),s=jc(i);R(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:ps(Yl(s.auth_time)),issuedAtTime:ps(Yl(s.iat)),expirationTime:ps(Yl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Yl(n){return Number(n)*1e3}function jc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return rr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ur(t);return s?JSON.parse(s):(rr("Failed to decode base64 JWT payload"),null)}catch(s){return rr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Py(n){const e=jc(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof ct&&Dy(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Dy({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ps(this.lastLoginAt),this.creationTime=ps(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gr(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Ti(n,Ay(t,{idToken:i}));R(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?xy(r.providerUserInfo):[],a=Ly(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new dp(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function My(n){const e=ue(n);await gr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ly(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function xy(n){return n.map(e=>{var{providerId:t}=e,i=Vc(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fy(n,e){const t=await cp(n,{},async()=>{const i=Ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=hp(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",lp.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Py(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Fy(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new bs;return i&&(R(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(R(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(R(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bs,this.toJSON())}_performRefresh(){return _t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Tn{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Vc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Oy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new dp(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ti(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ny(this,e)}reload(){return My(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await gr(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ti(this,Ry(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,d;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,y=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,b=(o=t.photoURL)!==null&&o!==void 0?o:void 0,A=(a=t.tenantId)!==null&&a!==void 0?a:void 0,O=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,L=(c=t.createdAt)!==null&&c!==void 0?c:void 0,G=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:z,emailVerified:we,isAnonymous:he,providerData:be,stsTokenManager:Ct}=t;R(z&&Ct,e,"internal-error");const De=bs.fromJSON(this.name,Ct);R(typeof z=="string",e,"internal-error"),Lt(h,e.name),Lt(f,e.name),R(typeof we=="boolean",e,"internal-error"),R(typeof he=="boolean",e,"internal-error"),Lt(y,e.name),Lt(b,e.name),Lt(A,e.name),Lt(O,e.name),Lt(L,e.name),Lt(G,e.name);const St=new Tn({uid:z,auth:e,email:f,emailVerified:we,displayName:h,isAnonymous:he,photoURL:b,phoneNumber:y,tenantId:A,stsTokenManager:De,createdAt:L,lastLoginAt:G});return be&&Array.isArray(be)&&(St.providerData=be.map(Kt=>Object.assign({},Kt))),O&&(St._redirectEventId=O),St}static async _fromIdTokenResponse(e,t,i=!1){const s=new bs;s.updateFromServerResponse(t);const r=new Tn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await gr(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=new Map;function gt(n){It(n instanceof Function,"Expected a class definition");let e=_d.get(n);return e?(It(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,_d.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fp.type="NONE";const gd=fp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(n,e,t){return`firebase:${n}:${e}:${t}`}class mi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=or(this.userKey,s.apiKey,r),this.fullPersistenceKey=or("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new mi(gt(gd),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||gt(gd);const o=or(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const h=Tn._fromJSON(e,d);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new mi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new mi(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vp(e))return"Blackberry";if(yp(e))return"Webos";if(qc(e))return"Safari";if((e.includes("chrome/")||_p(e))&&!e.includes("edge/"))return"Chrome";if(mp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function pp(n=le()){return/firefox\//i.test(n)}function qc(n=le()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function _p(n=le()){return/crios\//i.test(n)}function gp(n=le()){return/iemobile/i.test(n)}function mp(n=le()){return/android/i.test(n)}function vp(n=le()){return/blackberry/i.test(n)}function yp(n=le()){return/webos/i.test(n)}function Ur(n=le()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Uy(n=le()){var e;return Ur(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function By(){return Ig()&&document.documentMode===10}function Ip(n=le()){return Ur(n)||mp(n)||yp(n)||vp(n)||/windows phone/i.test(n)||gp(n)}function Vy(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n,e=[]){let t;switch(n){case"Browser":t=md(le());break;case"Worker":t=`${md(le())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ni}/${i}`}async function wp(n,e){return Pi(n,"GET","/v2/recaptchaConfig",$c(n,e))}function vd(n){return n!==void 0&&n.enterprise!==void 0}class bp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Tp(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=ot("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Wy().appendChild(i)})}function Hy(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const $y="https://www.google.com/recaptcha/enterprise.js?render=",jy="recaptcha-enterprise",qy="NO_RECAPTCHA";class Gy{constructor(e){this.type=jy,this.auth=Ds(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{wp(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new bp(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;vd(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(qy)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&vd(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Tp($y+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yd(this),this.idTokenSubscription=new yd(this),this.beforeStateQueue=new zy(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ap,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gt(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await gr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ty()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ue(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gt(e))})}async initializeRecaptchaConfig(){const e=await wp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new bp(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Gy(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gt(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ep(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Iy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ds(n){return ue(n)}class yd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rg(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yy(n,e){const t=Ln(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Es(r,e??{}))return s;yt(s,"already-initialized")}return t.initialize({options:e})}function Jy(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(gt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Qy(n,e,t){const i=Ds(n);R(i._canInitEmulator,i,"emulator-config-failed"),R(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Cp(e),{host:o,port:a}=Xy(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Zy()}function Cp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Xy(n){const e=Cp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Id(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Id(o)}}}function Id(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _t("not implemented")}_getIdTokenResponse(e){return _t("not implemented")}_linkToIdToken(e,t){return _t("not implemented")}_getReauthenticationResolver(e){return _t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(n,e){return up(n,"POST","/v1/accounts:signInWithIdp",$c(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI="http://localhost";class An extends Sp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new An(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):yt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Vc(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new An(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return vi(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,vi(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vi(e,t)}buildRequest(){const e={requestUri:eI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ai(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends kp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Os{constructor(){super("facebook.com")}static credential(e){return An._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Os{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return An._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Ut.credential(t,i)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Os{constructor(){super("github.com")}static credential(e){return An._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Os{constructor(){super("twitter.com")}static credential(e,t){return An._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Vt.credential(t,i)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tI(n,e){return up(n,"POST","/v1/accounts:signUp",$c(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await Tn._fromIdTokenResponse(e,i,s),o=Ed(i);return new qt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Ed(i);return new qt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Ed(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(n){var e;const t=Ds(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new qt({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await tI(t,{returnSecureToken:!0}),s=await qt._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends ct{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,mr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new mr(e,t,i,s)}}function Rp(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?mr._fromErrorAndOperation(n,r,e,i):r})}async function iI(n,e,t=!1){const i=await Ti(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await Ti(n,Rp(i,s,e,n),t);R(r.idToken,i,"internal-error");const o=jc(r.idToken);R(o,i,"internal-error");const{sub:a}=o;return R(n.uid===a,i,"user-mismatch"),qt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&yt(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rI(n,e,t=!1){const i="signIn",s=await Rp(n,i,e),r=await qt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(n,e){return Pi(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=ue(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Ti(i,oI(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function lI(n,e,t,i){return ue(n).onIdTokenChanged(e,t,i)}function cI(n,e,t){return ue(n).beforeAuthStateChanged(e,t)}function uI(n,e,t,i){return ue(n).onAuthStateChanged(e,t,i)}const vr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(){const n=le();return qc(n)||Ur(n)}const dI=1e3,fI=10;class Np extends Ap{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=hI()&&Vy(),this.fallbackToPolling=Ip(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);By()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fI):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},dI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Np.type="LOCAL";const pI=Np;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp extends Ap{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pp.type="SESSION";const Dp=Pp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Br(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await _I(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Br.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Gc("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function mI(n){at().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function vI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function II(){return Op()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp="firebaseLocalStorageDb",EI=1,yr="firebaseLocalStorage",Lp="fbase_key";class Ms{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Vr(n,e){return n.transaction([yr],e?"readwrite":"readonly").objectStore(yr)}function wI(){const n=indexedDB.deleteDatabase(Mp);return new Ms(n).toPromise()}function pc(){const n=indexedDB.open(Mp,EI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(yr,{keyPath:Lp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(yr)?e(i):(i.close(),await wI(),e(await pc()))})})}async function wd(n,e,t){const i=Vr(n,!0).put({[Lp]:e,value:t});return new Ms(i).toPromise()}async function bI(n,e){const t=Vr(n,!1).get(e),i=await new Ms(t).toPromise();return i===void 0?null:i.value}function bd(n,e){const t=Vr(n,!0).delete(e);return new Ms(t).toPromise()}const TI=800,CI=3;class xp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>CI)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Op()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Br._getInstance(II()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await vI(),!this.activeServiceWorker)return;this.sender=new gI(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pc();return await wd(e,vr,"1"),await bd(e,vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>wd(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>bI(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Vr(s,!1).getAll();return new Ms(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),TI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xp.type="LOCAL";const SI=xp;new Ps(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(n,e){return e?gt(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc extends Sp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vi(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vi(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function RI(n){return rI(n.auth,new zc(n),n.bypassAuthState)}function AI(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),sI(t,new zc(n),n.bypassAuthState)}async function NI(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),iI(t,new zc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RI;case"linkViaPopup":case"linkViaRedirect":return NI;case"reauthViaPopup":case"reauthViaRedirect":return AI;default:yt(this.auth,"internal-error")}}resolve(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){It(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new Ps(2e3,1e4);class _i extends Fp{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){It(this.filter.length===1,"Popup operations only handle one event");const e=Gc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PI.get())};e()}}_i.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DI="pendingRedirect",ar=new Map;class OI extends Fp{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ar.get(this.auth._key());if(!e){try{const i=await MI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ar.set(this.auth._key(),e)}return this.bypassAuthState||ar.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function MI(n,e){const t=FI(e),i=xI(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function LI(n,e){ar.set(n._key(),e)}function xI(n){return gt(n._redirectPersistence)}function FI(n){return or(DI,n.config.apiKey,n.name)}async function UI(n,e,t=!1){const i=Ds(n),s=kI(i,e),o=await new OI(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=10*60*1e3;class VI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Up(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Td(e))}saveEventToCache(e){this.cachedEventUids.add(Td(e)),this.lastProcessedEventTime=Date.now()}}function Td(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Up({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function WI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Up(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(n,e={}){return Pi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jI=/^https?/;async function qI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await HI(n);for(const t of e)try{if(GI(t))return}catch{}yt(n,"unauthorized-domain")}function GI(n){const e=fc(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!jI.test(t))return!1;if($I.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zI=new Ps(3e4,6e4);function Cd(){const n=at().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function KI(n){return new Promise((e,t)=>{var i,s,r;function o(){Cd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cd(),t(ot(n,"network-request-failed"))},timeout:zI.get()})}if(!((s=(i=at().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=at().gapi)===null||r===void 0)&&r.load)o();else{const a=Hy("iframefcb");return at()[a]=()=>{gapi.load?o():t(ot(n,"network-request-failed"))},Tp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw lr=null,e})}let lr=null;function YI(n){return lr=lr||KI(n),lr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=new Ps(5e3,15e3),QI="__/auth/iframe",XI="emulator/auth/iframe",ZI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tE(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Hc(e,XI):`https://${n.config.authDomain}/${QI}`,i={apiKey:e.apiKey,appName:n.name,v:Ni},s=eE.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Ai(i).slice(1)}`}async function nE(n){const e=await YI(n),t=at().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:tE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ZI,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ot(n,"network-request-failed"),a=at().setTimeout(()=>{r(o)},JI.get());function l(){at().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sE=500,rE=600,oE="_blank",aE="http://localhost";class Sd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lE(n,e,t,i=sE,s=rE){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},iE),{width:i.toString(),height:s.toString(),top:r,left:o}),c=le().toLowerCase();t&&(a=_p(c)?oE:t),pp(c)&&(e=e||aE,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[y,b])=>`${f}${y}=${b},`,"");if(Uy(c)&&a!=="_self")return cE(e||"",a),new Sd(null);const h=window.open(e||"",a,d);R(h,n,"popup-blocked");try{h.focus()}catch{}return new Sd(h)}function cE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uE="__/auth/handler",hE="emulator/auth/handler",dE=encodeURIComponent("fac");async function kd(n,e,t,i,s,r){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ni,eventId:s};if(e instanceof kp){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",sc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(r||{}))o[d]=h}if(e instanceof Os){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),c=l?`#${dE}=${encodeURIComponent(l)}`:"";return`${fE(n)}?${Ai(a).slice(1)}${c}`}function fE({config:n}){return n.emulator?Hc(n,hE):`https://${n.authDomain}/${uE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="webStorageSupport";class pE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dp,this._completeRedirectFn=UI,this._overrideRedirectResult=LI}async _openPopup(e,t,i,s){var r;It((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await kd(e,t,i,fc(),s);return lE(e,o,Gc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await kd(e,t,i,fc(),s);return mI(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(It(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await nE(e),i=new VI(e);return t.register("authEvent",s=>(R(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Jl,{type:Jl},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Jl];o!==void 0&&t(!!o),yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ip()||qc()||Ur()}}const _E=pE;var Rd="@firebase/auth",Ad="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function vE(n){lt(new Ge("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ep(n)},c=new Ky(i,s,r,l);return Jy(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),lt(new Ge("auth-internal",e=>{const t=Ds(e.getProvider("auth").getImmediate());return(i=>new gE(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pe(Rd,Ad,mE(n)),Pe(Rd,Ad,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yE=5*60,IE=Tf("authIdTokenMaxAge")||yE;let Nd=null;const EE=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>IE)return;const s=t==null?void 0:t.token;Nd!==s&&(Nd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wE(n=Oc()){const e=Ln(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Yy(n,{popupRedirectResolver:_E,persistence:[SI,pI,Dp]}),i=Tf("authTokenSyncURL");if(i){const r=EE(i);cI(t,r,()=>r(t.currentUser)),lI(t,o=>r(o))}const s=wf("auth");return s&&Qy(t,`http://${s}`),t}vE("Browser");const Pd="@firebase/database",Dd="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bp="";function bE(n){Bp=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TE{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),te(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Is(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return bt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vp=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new TE(e)}}catch{}return new CE},En=Vp("localStorage"),_c=Vp("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new Lr("@firebase/database"),SE=function(){let n=1;return function(){return n++}}(),Wp=function(n){const e=Pg(n),t=new kg;t.update(e);const i=t.digest();return Rc.encodeByteArray(i)},Ls=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Ls.apply(null,i):typeof i=="object"?e+=te(i):e+=i,e+=" "}return e};let Cn=null,Od=!0;const kE=function(n,e){I(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(yi.logLevel=U.VERBOSE,Cn=yi.log.bind(yi),e&&_c.set("logging_enabled",!0)):typeof n=="function"?Cn=n:(Cn=null,_c.remove("logging_enabled"))},ae=function(...n){if(Od===!0&&(Od=!1,Cn===null&&_c.get("logging_enabled")===!0&&kE(!0)),Cn){const e=Ls.apply(null,n);Cn(e)}},xs=function(n){return function(...e){ae(n,...e)}},gc=function(...n){const e="FIREBASE INTERNAL ERROR: "+Ls(...n);yi.error(e)},Et=function(...n){const e=`FIREBASE FATAL ERROR: ${Ls(...n)}`;throw yi.error(e),new Error(e)},Ie=function(...n){const e="FIREBASE WARNING: "+Ls(...n);yi.warn(e)},RE=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ie("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Hp=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},AE=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Ci="[MIN_NAME]",Nn="[MAX_NAME]",Di=function(n,e){if(n===e)return 0;if(n===Ci||e===Nn)return-1;if(e===Ci||n===Nn)return 1;{const t=Md(n),i=Md(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},NE=function(n,e){return n===e?0:n<e?-1:1},ls=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+te(e))},Kc=function(n){if(typeof n!="object"||n===null)return te(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=te(e[i]),t+=":",t+=Kc(n[e[i]]);return t+="}",t},$p=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Ee(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const jp=function(n){I(!Hp(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},PE=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},DE=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function OE(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const ME=new RegExp("^-?(0*)\\d{1,10}$"),LE=-2147483648,xE=2147483647,Md=function(n){if(ME.test(n)){const e=Number(n);if(e>=LE&&e<=xE)return e}return null},Oi=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Ie("Exception was thrown by user callback.",t),e},Math.floor(0))}},FE=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},_s=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Ie(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BE{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ae("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ie(e)}}class Ii{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ii.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="5",qp="v",Gp="s",zp="r",Kp="f",Yp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jp="ls",Qp="p",mc="ac",Xp="websocket",Zp="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=En.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&En.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function VE(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function t_(n,e,t){I(typeof e=="string","typeof type must == string"),I(typeof t=="object","typeof params must == object");let i;if(e===Xp)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Zp)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);VE(n)&&(t.ns=n.namespace);const s=[];return Ee(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(){this.counters_={}}incrementCounter(e,t=1){bt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return dg(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={},Xl={};function Jc(n){const e=n.toString();return Ql[e]||(Ql[e]=new WE),Ql[e]}function HE(n,e){const t=n.toString();return Xl[t]||(Xl[t]=e()),Xl[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Oi(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="start",jE="close",qE="pLPCommand",GE="pRTLPCB",n_="id",i_="pw",s_="ser",zE="cb",KE="seg",YE="ts",JE="d",QE="dframe",r_=1870,o_=30,XE=r_-o_,ZE=25e3,ew=3e4;class gi{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xs(e),this.stats_=Jc(t),this.urlFn=l=>(this.appCheckToken&&(l[mc]=this.appCheckToken),t_(t,Zp,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new $E(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ew)),AE(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qc((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Ld)this.id=a,this.password=l;else if(o===jE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Ld]="t",i[s_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[zE]=this.scriptTagHolder.uniqueCallbackIdentifier),i[qp]=Yc,this.transportSessionId&&(i[Gp]=this.transportSessionId),this.lastSessionId&&(i[Jp]=this.lastSessionId),this.applicationId&&(i[Qp]=this.applicationId),this.appCheckToken&&(i[mc]=this.appCheckToken),typeof location<"u"&&location.hostname&&Yp.test(location.hostname)&&(i[zp]=Kp);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gi.forceAllow_=!0}static forceDisallow(){gi.forceDisallow_=!0}static isAvailable(){return gi.forceAllow_?!0:!gi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PE()&&!DE()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=te(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=If(t),s=$p(i,XE);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[QE]="t",i[n_]=e,i[i_]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=te(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Qc{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=SE(),window[qE+this.uniqueCallbackIdentifier]=e,window[GE+this.uniqueCallbackIdentifier]=t,this.myIFrame=Qc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ae("frame writing exception"),a.stack&&ae(a.stack),ae(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ae("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[n_]=this.myID,e[i_]=this.myPW,e[s_]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+o_+i.length<=r_;){const o=this.pendingSegs.shift();i=i+"&"+KE+s+"="+o.seg+"&"+YE+s+"="+o.ts+"&"+JE+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(ZE)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ae("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw=16384,nw=45e3;let Ir=null;typeof MozWebSocket<"u"?Ir=MozWebSocket:typeof WebSocket<"u"&&(Ir=WebSocket);class He{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xs(this.connId),this.stats_=Jc(t),this.connURL=He.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[qp]=Yc,typeof location<"u"&&location.hostname&&Yp.test(location.hostname)&&(o[zp]=Kp),t&&(o[Gp]=t),i&&(o[Jp]=i),s&&(o[mc]=s),r&&(o[Qp]=r),t_(e,Xp,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,En.set("previous_websocket_failure",!0);try{let i;kf(),this.mySock=new Ir(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){He.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&Ir!==null&&!He.forceDisallow_}static previouslyFailed(){return En.isInMemoryStorage||En.get("previous_websocket_failure")===!0}markConnectionHealthy(){En.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Is(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=te(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=$p(t,tw);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nw))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}He.responsesRequiredToBeHealthy=2;He.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[gi,He]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=He&&He.isAvailable();let i=t&&!He.previouslyFailed();if(e.webSocketOnly&&(t||Ie("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[He];else{const s=this.transports_=[];for(const r of Ts.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Ts.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ts.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=6e4,sw=5e3,rw=10*1024,ow=100*1024,Zl="t",xd="d",aw="s",Fd="r",lw="e",Ud="o",Bd="a",Vd="n",Wd="p",cw="h";class uw{constructor(e,t,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xs("c:"+this.id+":"),this.transportManager_=new Ts(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=_s(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ow?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>rw?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Zl in e){const t=e[Zl];t===Bd?this.upgradeIfSecondaryHealthy_():t===Fd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ud&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ls("t",e),i=ls("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Wd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ls("t",e),i=ls("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ls(Zl,e);if(xd in e){const i=e[xd];if(t===cw){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Vd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===aw?this.onConnectionShutdown_(i):t===Fd?this.onReset_(i):t===lw?gc("Server Error: "+i):t===Ud?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):gc("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Yc!==i&&Ie("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),_s(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iw))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):_s(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sw))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Wd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(En.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er extends l_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Nc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Er}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd=32,$d=768;class B{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function x(){return new B("")}function P(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Gt(n){return n.pieces_.length-n.pieceNum_}function V(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new B(n.pieces_,e)}function c_(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function hw(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function u_(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function h_(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new B(e,0)}function J(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof B)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new B(t,0)}function M(n){return n.pieceNum_>=n.pieces_.length}function me(n,e){const t=P(n),i=P(e);if(t===null)return e;if(t===i)return me(V(n),V(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Xc(n,e){if(Gt(n)!==Gt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function $e(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Gt(n)>Gt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class dw{constructor(e,t){this.errorPrefix_=t,this.parts_=u_(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Mr(this.parts_[i]);d_(this)}}function fw(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Mr(e),d_(n)}function pw(n){const e=n.parts_.pop();n.byteLength_-=Mr(e),n.parts_.length>0&&(n.byteLength_-=1)}function d_(n){if(n.byteLength_>$d)throw new Error(n.errorPrefix_+"has a key path longer than "+$d+" bytes ("+n.byteLength_+").");if(n.parts_.length>Hd)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Hd+") or object contains a cycle "+yn(n))}function yn(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends l_{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Zc}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs=1e3,_w=60*5*1e3,jd=30*1e3,gw=1.3,mw=3e4,vw="server_kill",qd=3;class vt extends a_{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=vt.nextPersistentConnectionId_++,this.log_=xs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=cs,this.maxReconnectDelay_=_w,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!kf())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Zc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Er.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(te(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Or,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;vt.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&bt(e,"w")){const i=bi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Ie(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Sg(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Cg(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+te(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):gc("Unrecognized action received from server: "+te(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=cs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=cs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>mw&&(this.reconnectDelay_=cs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gw)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+vt.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ae("getToken() completed but was canceled"):(ae("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new uw(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,y=>{Ie(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(vw)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ie(h),l())}}}interrupt(e){ae("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ae("Resuming connection for reason: "+e),delete this.interruptReasons_[e],sc(this.interruptReasons_)&&(this.reconnectDelay_=cs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Kc(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new B(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){ae("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qd&&(this.reconnectDelay_=jd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ae("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Bp.replace(/\./g,"-")]=1,Nc()?e["framework.cordova"]=1:Sf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Er.getInstance().currentlyOnline();return sc(this.interruptReasons_)&&e}}vt.nextPersistentConnectionId_=0;vt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new D(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new D(Ci,e),s=new D(Ci,t);return this.compare(i,s)!==0}minPost(){return D.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ir;class f_ extends Wr{static get __EMPTY_NODE(){return ir}static set __EMPTY_NODE(e){ir=e}compare(e,t){return Di(e.name,t.name)}isDefinedOn(e){throw Ri("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return D.MIN}maxPost(){return new D(Nn,ir)}makePost(e,t){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new D(e,ir)}toString(){return".key"}}const Ei=new f_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ee{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??ee.RED,this.left=s??ve.EMPTY_NODE,this.right=r??ve.EMPTY_NODE}copy(e,t,i,s,r){return new ee(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ve.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ve.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ee.RED=!0;ee.BLACK=!1;class yw{copy(e,t,i,s,r){return this}insert(e,t,i){return new ee(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ve{constructor(e,t=ve.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ve(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,ee.BLACK,null,null))}remove(e){return new ve(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ee.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new sr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new sr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new sr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new sr(this.root_,null,this.comparator_,!0,e)}}ve.EMPTY_NODE=new yw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(n,e){return Di(n.name,e.name)}function eu(n,e){return Di(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vc;function Ew(n){vc=n}const p_=function(n){return typeof n=="number"?"number:"+jp(n):"string:"+n},__=function(n){if(n.isLeafNode()){const e=n.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bt(e,".sv"),"Priority must be a string or number.")}else I(n===vc||n.isEmpty(),"priority of unexpected type.");I(n===vc||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gd;class Z{constructor(e,t=Z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),__(this.priorityNode_)}static set __childrenNodeConstructor(e){Gd=e}static get __childrenNodeConstructor(){return Gd}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return M(e)?this:P(e)===".priority"?this.priorityNode_:Z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=P(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||Gt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Z.__childrenNodeConstructor.EMPTY_NODE.updateChild(V(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+p_(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=jp(this.value_):e+=this.value_,this.lazyHash_=Wp(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Z.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=Z.VALUE_TYPE_ORDER.indexOf(t),r=Z.VALUE_TYPE_ORDER.indexOf(i);return I(s>=0,"Unknown leaf type: "+t),I(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let g_,m_;function ww(n){g_=n}function bw(n){m_=n}class Tw extends Wr{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Di(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return D.MIN}maxPost(){return new D(Nn,new Z("[PRIORITY-POST]",m_))}makePost(e,t){const i=g_(e);return new D(t,new Z("[PRIORITY-POST]",i))}toString(){return".priority"}}const q=new Tw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=Math.log(2);class Sw{constructor(e){const t=r=>parseInt(Math.log(r)/Cw,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const wr=function(n,e,t,i){n.sort(e);const s=function(l,c){const d=c-l;let h,f;if(d===0)return null;if(d===1)return h=n[l],f=t?t(h):h,new ee(f,h.node,ee.BLACK,null,null);{const y=parseInt(d/2,10)+l,b=s(l,y),A=s(y+1,c);return h=n[y],f=t?t(h):h,new ee(f,h.node,ee.BLACK,b,A)}},r=function(l){let c=null,d=null,h=n.length;const f=function(b,A){const O=h-b,L=h;h-=b;const G=s(O+1,L),z=n[O],we=t?t(z):z;y(new ee(we,z.node,A,null,G))},y=function(b){c?(c.left=b,c=b):(d=b,c=b)};for(let b=0;b<l.count;++b){const A=l.nextBitIsOne(),O=Math.pow(2,l.count-(b+1));A?f(O,ee.BLACK):(f(O,ee.BLACK),f(O,ee.RED))}return d},o=new Sw(n.length),a=r(o);return new ve(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec;const pi={};class mt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return I(pi&&q,"ChildrenNode.ts has not been loaded"),ec=ec||new mt({".priority":pi},{".priority":q}),ec}get(e){const t=bi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ve?t:null}hasIndex(e){return bt(this.indexSet_,e.toString())}addIndex(e,t){I(e!==Ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(D.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=wr(i,e.getCompare()):a=pi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new mt(d,c)}addToIndexes(e,t){const i=hr(this.indexes_,(s,r)=>{const o=bi(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),s===pi)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(D.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),wr(a,o.getCompare())}else return pi;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new D(e.name,a))),l.insert(e,e.node)}});return new mt(i,this.indexSet_)}removeFromIndexes(e,t){const i=hr(this.indexes_,s=>{if(s===pi)return s;{const r=t.get(e.name);return r?s.remove(new D(e.name,r)):s}});return new mt(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us;class k{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&__(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return us||(us=new k(new ve(eu),null,mt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||us}updatePriority(e){return this.children_.isEmpty()?this:new k(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?us:t}}getChild(e){const t=P(e);return t===null?this:this.getImmediateChild(t).getChild(V(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(I(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new D(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?us:this.priorityNode_;return new k(s,o,r)}}updateChild(e,t){const i=P(e);if(i===null)return t;{I(P(e)!==".priority"||Gt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(V(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(q,(o,a)=>{t[o]=a.val(e),i++,r&&k.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+p_(this.getPriority().val())+":"),this.forEachChild(q,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Wp(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new D(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new D(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new D(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,D.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fs?-1:0}withIndex(e){if(e===Ei||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new k(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(q),s=t.getIterator(q);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ei?null:this.indexMap_.get(e.toString())}}k.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kw extends k{constructor(){super(new ve(eu),k.EMPTY_NODE,mt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return k.EMPTY_NODE}isEmpty(){return!1}}const Fs=new kw;Object.defineProperties(D,{MIN:{value:new D(Ci,k.EMPTY_NODE)},MAX:{value:new D(Nn,Fs)}});f_.__EMPTY_NODE=k.EMPTY_NODE;Z.__childrenNodeConstructor=k;Ew(Fs);bw(Fs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=!0;function ie(n,e=null){if(n===null)return k.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Z(t,ie(e))}if(!(n instanceof Array)&&Rw){const t=[];let i=!1;if(Ee(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ie(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new D(o,l)))}}),t.length===0)return k.EMPTY_NODE;const r=wr(t,Iw,o=>o.name,eu);if(i){const o=wr(t,q.getCompare());return new k(r,ie(e),new mt({".priority":o},{".priority":q}))}else return new k(r,ie(e),mt.Default)}else{let t=k.EMPTY_NODE;return Ee(n,(i,s)=>{if(bt(n,i)&&i.substring(0,1)!=="."){const r=ie(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(ie(e))}}ww(ie);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw extends Wr{constructor(e){super(),this.indexPath_=e,I(!M(e)&&P(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Di(e.name,t.name):r}makePost(e,t){const i=ie(e),s=k.EMPTY_NODE.updateChild(this.indexPath_,i);return new D(t,s)}maxPost(){const e=k.EMPTY_NODE.updateChild(this.indexPath_,Fs);return new D(Nn,e)}toString(){return u_(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw extends Wr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Di(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return D.MIN}maxPost(){return D.MAX}makePost(e,t){const i=ie(e);return new D(t,i)}toString(){return".value"}}const Pw=new Nw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(n){return{type:"value",snapshotNode:n}}function Si(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Cs(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Ss(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Dw(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Cs(t,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Si(t,i)):o.trackChildChange(Ss(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(q,(s,r)=>{t.hasChild(s)||i.trackChildChange(Cs(s,r))}),t.isLeafNode()||t.forEachChild(q,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(Ss(s,r,o))}else i.trackChildChange(Si(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?k.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.indexedFilter_=new tu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ks.getStartPost_(e),this.endPost_=ks.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new D(t,i))||(i=k.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=k.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(k.EMPTY_NODE);const r=this;return t.forEachChild(q,(o,a)=>{r.matches(new D(o,a))||(s=s.updateImmediateChild(o,k.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ow{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new ks(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new D(t,i))||(i=k.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=k.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=k.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(k.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,k.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,y)=>h(y,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new D(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const y=f==null?1:o(f,l);if(d&&!i.isEmpty()&&y>=0)return r!=null&&r.trackChildChange(Ss(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Cs(t,h));const A=a.updateImmediateChild(t,k.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Si(f.name,f.node)),A.updateImmediateChild(f.name,f.node)):A}}else return i.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Cs(c.name,c.node)),r.trackChildChange(Si(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,k.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ci}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new nu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Mw(n){return n.loadsAllData()?new tu(n.getIndex()):n.hasLimit()?new Ow(n):new ks(n)}function zd(n){const e={};if(n.isDefault())return e;let t;if(n.index_===q?t="$priority":n.index_===Pw?t="$value":n.index_===Ei?t="$key":(I(n.index_ instanceof Aw,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=te(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=te(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+te(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=te(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+te(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Kd(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends a_{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=xs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=br.getListenId_(e,i),a={};this.listens_[o]=a;const l=zd(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),bi(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,t){const i=br.getListenId_(e,t);delete this.listens_[i]}get(e){const t=zd(e._queryParams),i=e._path.toString(),s=new Or;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ai(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Is(a.responseText)}catch{Ie("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Ie("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(){this.rootNode_=k.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(){return{value:null,children:new Map}}function y_(n,e,t){if(M(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=P(e);n.children.has(i)||n.children.set(i,Tr());const s=n.children.get(i);e=V(e),y_(s,e,t)}}function yc(n,e,t){n.value!==null?t(e,n.value):xw(n,(i,s)=>{const r=new B(e.toString()+"/"+i);yc(s,r,t)})}function xw(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ee(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=10*1e3,Uw=30*1e3,Bw=5*60*1e3;class Vw{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Fw(e);const i=Yd+(Uw-Yd)*Math.random();_s(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Ee(e,(s,r)=>{r>0&&bt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),_s(this.reportStats_.bind(this),Math.floor(Math.random()*2*Bw))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(je||(je={}));function I_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function iu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function su(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=je.ACK_USER_WRITE,this.source=I_()}operationForChild(e){if(M(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new B(e));return new Cr(x(),t,this.revert)}}else return I(P(this.path)===e,"operationForChild called for unrelated child."),new Cr(V(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.source=e,this.path=t,this.type=je.LISTEN_COMPLETE}operationForChild(e){return M(this.path)?new Rs(this.source,x()):new Rs(this.source,V(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=je.OVERWRITE}operationForChild(e){return M(this.path)?new Pn(this.source,x(),this.snap.getImmediateChild(e)):new Pn(this.source,V(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=je.MERGE}operationForChild(e){if(M(this.path)){const t=this.children.subtree(new B(e));return t.isEmpty()?null:t.value?new Pn(this.source,x(),t.value):new As(this.source,x(),t)}else return I(P(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new As(this.source,V(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(M(e))return this.isFullyInitialized()&&!this.filtered_;const t=P(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Hw(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Dw(o.childName,o.snapshotNode))}),hs(n,s,"child_removed",e,i,t),hs(n,s,"child_added",e,i,t),hs(n,s,"child_moved",r,i,t),hs(n,s,"child_changed",e,i,t),hs(n,s,"value",e,i,t),s}function hs(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>jw(n,a,l)),o.forEach(a=>{const l=$w(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function $w(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function jw(n,e,t){if(e.childName==null||t.childName==null)throw Ri("Should only compare child_ events.");const i=new D(e.childName,e.snapshotNode),s=new D(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(n,e){return{eventCache:n,serverCache:e}}function gs(n,e,t,i){return Hr(new Dn(e,t,i),n.serverCache)}function E_(n,e,t,i){return Hr(n.eventCache,new Dn(e,t,i))}function Ic(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function On(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tc;const qw=()=>(tc||(tc=new ve(NE)),tc);class ${constructor(e,t=qw()){this.value=e,this.children=t}static fromObject(e){let t=new $(null);return Ee(e,(i,s)=>{t=t.set(new B(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:x(),value:this.value};if(M(e))return null;{const i=P(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(V(e),t);return r!=null?{path:J(new B(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(M(e))return this;{const t=P(e),i=this.children.get(t);return i!==null?i.subtree(V(e)):new $(null)}}set(e,t){if(M(e))return new $(t,this.children);{const i=P(e),r=(this.children.get(i)||new $(null)).set(V(e),t),o=this.children.insert(i,r);return new $(this.value,o)}}remove(e){if(M(e))return this.children.isEmpty()?new $(null):new $(null,this.children);{const t=P(e),i=this.children.get(t);if(i){const s=i.remove(V(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new $(null):new $(this.value,r)}else return this}}get(e){if(M(e))return this.value;{const t=P(e),i=this.children.get(t);return i?i.get(V(e)):null}}setTree(e,t){if(M(e))return t;{const i=P(e),r=(this.children.get(i)||new $(null)).setTree(V(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new $(this.value,o)}}fold(e){return this.fold_(x(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(J(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,x(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(M(e))return null;{const r=P(e),o=this.children.get(r);return o?o.findOnPath_(V(e),J(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,x(),t)}foreachOnPath_(e,t,i){if(M(e))return this;{this.value&&i(t,this.value);const s=P(e),r=this.children.get(s);return r?r.foreachOnPath_(V(e),J(t,s),i):new $(null)}}foreach(e){this.foreach_(x(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(J(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.writeTree_=e}static empty(){return new qe(new $(null))}}function ms(n,e,t){if(M(e))return new qe(new $(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=me(s,e);return r=r.updateChild(o,t),new qe(n.writeTree_.set(s,r))}else{const s=new $(t),r=n.writeTree_.setTree(e,s);return new qe(r)}}}function Jd(n,e,t){let i=n;return Ee(t,(s,r)=>{i=ms(i,J(e,s),r)}),i}function Qd(n,e){if(M(e))return qe.empty();{const t=n.writeTree_.setTree(e,new $(null));return new qe(t)}}function Ec(n,e){return xn(n,e)!=null}function xn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(me(t.path,e)):null}function Xd(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(q,(i,s)=>{e.push(new D(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new D(i,s.value))}),e}function jt(n,e){if(M(e))return n;{const t=xn(n,e);return t!=null?new qe(new $(t)):new qe(n.writeTree_.subtree(e))}}function wc(n){return n.writeTree_.isEmpty()}function ki(n,e){return w_(x(),n.writeTree_,e)}function w_(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=w_(J(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(J(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ru(n,e){return S_(e,n)}function Gw(n,e,t,i,s){I(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=ms(n.visibleWrites,e,t)),n.lastWriteId=i}function zw(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Kw(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);I(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Yw(a,i.path)?s=!1:$e(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Jw(n),!0;if(i.snap)n.visibleWrites=Qd(n.visibleWrites,i.path);else{const a=i.children;Ee(a,l=>{n.visibleWrites=Qd(n.visibleWrites,J(i.path,l))})}return!0}else return!1}function Yw(n,e){if(n.snap)return $e(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&$e(J(n.path,t),e))return!0;return!1}function Jw(n){n.visibleWrites=b_(n.allWrites,Qw,x()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Qw(n){return n.visible}function b_(n,e,t){let i=qe.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)$e(t,o)?(a=me(t,o),i=ms(i,a,r.snap)):$e(o,t)&&(a=me(o,t),i=ms(i,x(),r.snap.getChild(a)));else if(r.children){if($e(t,o))a=me(t,o),i=Jd(i,a,r.children);else if($e(o,t))if(a=me(o,t),M(a))i=Jd(i,x(),r.children);else{const l=bi(r.children,P(a));if(l){const c=l.getChild(V(a));i=ms(i,x(),c)}}}else throw Ri("WriteRecord should have .snap or .children")}}return i}function T_(n,e,t,i,s){if(!i&&!s){const r=xn(n.visibleWrites,e);if(r!=null)return r;{const o=jt(n.visibleWrites,e);if(wc(o))return t;if(t==null&&!Ec(o,x()))return null;{const a=t||k.EMPTY_NODE;return ki(o,a)}}}else{const r=jt(n.visibleWrites,e);if(!s&&wc(r))return t;if(!s&&t==null&&!Ec(r,x()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&($e(c.path,e)||$e(e,c.path))},a=b_(n.allWrites,o,e),l=t||k.EMPTY_NODE;return ki(a,l)}}}function Xw(n,e,t){let i=k.EMPTY_NODE;const s=xn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(q,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=jt(n.visibleWrites,e);return t.forEachChild(q,(o,a)=>{const l=ki(jt(r,new B(o)),a);i=i.updateImmediateChild(o,l)}),Xd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=jt(n.visibleWrites,e);return Xd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Zw(n,e,t,i,s){I(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=J(e,t);if(Ec(n.visibleWrites,r))return null;{const o=jt(n.visibleWrites,r);return wc(o)?s.getChild(t):ki(o,s.getChild(t))}}function eb(n,e,t,i){const s=J(e,t),r=xn(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=jt(n.visibleWrites,s);return ki(o,i.getNode().getImmediateChild(t))}else return null}function tb(n,e){return xn(n.visibleWrites,e)}function nb(n,e,t,i,s,r,o){let a;const l=jt(n.visibleWrites,e),c=xn(l,x());if(c!=null)a=c;else if(t!=null)a=ki(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let y=f.getNext();for(;y&&d.length<s;)h(y,i)!==0&&d.push(y),y=f.getNext();return d}else return[]}function ib(){return{visibleWrites:qe.empty(),allWrites:[],lastWriteId:-1}}function Sr(n,e,t,i){return T_(n.writeTree,n.treePath,e,t,i)}function ou(n,e){return Xw(n.writeTree,n.treePath,e)}function Zd(n,e,t,i){return Zw(n.writeTree,n.treePath,e,t,i)}function kr(n,e){return tb(n.writeTree,J(n.treePath,e))}function sb(n,e,t,i,s,r){return nb(n.writeTree,n.treePath,e,t,i,s,r)}function au(n,e,t){return eb(n.writeTree,n.treePath,e,t)}function C_(n,e){return S_(J(n.treePath,e),n.writeTree)}function S_(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;I(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,Ss(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Cs(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Si(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,Ss(i,e.snapshotNode,s.oldSnap));else throw Ri("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const k_=new ob;class lu{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Dn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return au(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:On(this.viewCache_),r=sb(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ab(n){return{filter:n}}function lb(n,e){I(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function cb(n,e,t,i,s){const r=new rb;let o,a;if(t.type===je.OVERWRITE){const c=t;c.source.fromUser?o=bc(n,e,c.path,c.snap,i,s,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!M(c.path),o=Rr(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===je.MERGE){const c=t;c.source.fromUser?o=hb(n,e,c.path,c.children,i,s,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Tc(n,e,c.path,c.children,i,s,a,r))}else if(t.type===je.ACK_USER_WRITE){const c=t;c.revert?o=pb(n,e,c.path,i,s,r):o=db(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===je.LISTEN_COMPLETE)o=fb(n,e,t.path,i,r);else throw Ri("Unknown operation type: "+t.type);const l=r.getChanges();return ub(e,o,l),{viewCache:o,changes:l}}function ub(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ic(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(v_(Ic(e)))}}function R_(n,e,t,i,s,r){const o=e.eventCache;if(kr(i,t)!=null)return e;{let a,l;if(M(t))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=On(e),d=c instanceof k?c:k.EMPTY_NODE,h=ou(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=Sr(i,On(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=P(t);if(c===".priority"){I(Gt(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=Zd(i,t,d,l);h!=null?a=n.filter.updatePriority(d,h):a=o.getNode()}else{const d=V(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=Zd(i,t,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(d,f):h=o.getNode().getImmediateChild(c)}else h=au(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,d,s,r):a=o.getNode()}}return gs(e,a,o.isFullyInitialized()||M(t),n.filter.filtersNodes())}}function Rr(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(M(t))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(t,i);c=d.updateFullNode(l.getNode(),y,null)}else{const y=P(t);if(!l.isCompleteForPath(t)&&Gt(t)>1)return e;const b=V(t),O=l.getNode().getImmediateChild(y).updateChild(b,i);y===".priority"?c=d.updatePriority(l.getNode(),O):c=d.updateChild(l.getNode(),y,O,b,k_,null)}const h=E_(e,c,l.isFullyInitialized()||M(t),d.filtersNodes()),f=new lu(s,h,r);return R_(n,h,t,s,f,a)}function bc(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const d=new lu(s,e,r);if(M(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=gs(e,c,!0,n.filter.filtersNodes());else{const h=P(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=gs(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=V(t),y=a.getNode().getImmediateChild(h);let b;if(M(f))b=i;else{const A=d.getCompleteChild(h);A!=null?c_(f)===".priority"&&A.getChild(h_(f)).isEmpty()?b=A:b=A.updateChild(f,i):b=k.EMPTY_NODE}if(y.equals(b))l=e;else{const A=n.filter.updateChild(a.getNode(),h,b,f,d,o);l=gs(e,A,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function ef(n,e){return n.eventCache.isCompleteForChild(e)}function hb(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=J(t,l);ef(e,P(d))&&(a=bc(n,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=J(t,l);ef(e,P(d))||(a=bc(n,a,d,c,s,r,o))}),a}function tf(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Tc(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;M(t)?c=i:c=new $(null).setTree(t,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const y=e.serverCache.getNode().getImmediateChild(h),b=tf(n,y,f);l=Rr(n,l,new B(h),b,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const y=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!y){const b=e.serverCache.getNode().getImmediateChild(h),A=tf(n,b,f);l=Rr(n,l,new B(h),A,s,r,o,a)}}),l}function db(n,e,t,i,s,r,o){if(kr(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(M(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Rr(n,e,t,l.getNode().getChild(t),s,r,a,o);if(M(t)){let c=new $(null);return l.getNode().forEachChild(Ei,(d,h)=>{c=c.set(new B(d),h)}),Tc(n,e,t,c,s,r,a,o)}else return e}else{let c=new $(null);return i.foreach((d,h)=>{const f=J(t,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),Tc(n,e,t,c,s,r,a,o)}}function fb(n,e,t,i,s){const r=e.serverCache,o=E_(e,r.getNode(),r.isFullyInitialized()||M(t),r.isFiltered());return R_(n,o,t,i,k_,s)}function pb(n,e,t,i,s,r){let o;if(kr(i,t)!=null)return e;{const a=new lu(i,e,s),l=e.eventCache.getNode();let c;if(M(t)||P(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Sr(i,On(e));else{const h=e.serverCache.getNode();I(h instanceof k,"serverChildren would be complete if leaf node"),d=ou(i,h)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=P(t);let h=au(i,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=n.filter.updateChild(l,d,h,V(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,k.EMPTY_NODE,V(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sr(i,On(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||kr(i,x())!=null,gs(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _b{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new tu(i.getIndex()),r=Mw(i);this.processor_=ab(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(k.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(k.EMPTY_NODE,a.getNode(),null),d=new Dn(l,o.isFullyInitialized(),s.filtersNodes()),h=new Dn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Hr(h,d),this.eventGenerator_=new Ww(this.query_)}get query(){return this.query_}}function gb(n){return n.viewCache_.serverCache.getNode()}function mb(n,e){const t=On(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!M(e)&&!t.getImmediateChild(P(e)).isEmpty())?t.getChild(e):null}function nf(n){return n.eventRegistrations_.length===0}function vb(n,e){n.eventRegistrations_.push(e)}function sf(n,e,t){const i=[];if(t){I(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function rf(n,e,t,i){e.type===je.MERGE&&e.source.queryId!==null&&(I(On(n.viewCache_),"We should always have a full cache before handling merges"),I(Ic(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=cb(n.processor_,s,e,t,i);return lb(n.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,A_(n,r.changes,r.viewCache.eventCache.getNode(),null)}function yb(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(q,(r,o)=>{i.push(Si(r,o))}),t.isFullyInitialized()&&i.push(v_(t.getNode())),A_(n,i,t.getNode(),e)}function A_(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Hw(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ar;class Ib{constructor(){this.views=new Map}}function Eb(n){I(!Ar,"__referenceConstructor has already been defined"),Ar=n}function wb(){return I(Ar,"Reference.ts has not been loaded"),Ar}function bb(n){return n.views.size===0}function cu(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return I(r!=null,"SyncTree gave us an op for an invalid query."),rf(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(rf(o,e,t,i));return r}}function Tb(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Sr(t,s?i:null),l=!1;a?l=!0:i instanceof k?(a=ou(t,i),l=!1):(a=k.EMPTY_NODE,l=!1);const c=Hr(new Dn(a,l,!1),new Dn(i,s,!1));return new _b(e,c)}return o}function Cb(n,e,t,i,s,r){const o=Tb(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),vb(o,t),yb(o,t)}function Sb(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=zt(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(sf(c,t,i)),nf(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(sf(l,t,i)),nf(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!zt(n)&&r.push(new(wb())(e._repo,e._path)),{removed:r,events:o}}function N_(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function wi(n,e){let t=null;for(const i of n.views.values())t=t||mb(i,e);return t}function P_(n,e){if(e._queryParams.loadsAllData())return $r(n);{const i=e._queryIdentifier;return n.views.get(i)}}function D_(n,e){return P_(n,e)!=null}function zt(n){return $r(n)!=null}function $r(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nr;function kb(n){I(!Nr,"__referenceConstructor has already been defined"),Nr=n}function Rb(){return I(Nr,"Reference.ts has not been loaded"),Nr}let Ab=1;class of{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $(null),this.pendingWriteTree_=ib(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function O_(n,e,t,i,s){return Gw(n.pendingWriteTree_,e,t,i,s),s?Us(n,new Pn(I_(),e,t)):[]}function wn(n,e,t=!1){const i=zw(n.pendingWriteTree_,e);if(Kw(n.pendingWriteTree_,e)){let r=new $(null);return i.snap!=null?r=r.set(x(),!0):Ee(i.children,o=>{r=r.set(new B(o),!0)}),Us(n,new Cr(i.path,r,t))}else return[]}function jr(n,e,t){return Us(n,new Pn(iu(),e,t))}function Nb(n,e,t){const i=$.fromObject(t);return Us(n,new As(iu(),e,i))}function Pb(n,e){return Us(n,new Rs(iu(),e))}function Db(n,e,t){const i=hu(n,t);if(i){const s=du(i),r=s.path,o=s.queryId,a=me(r,e),l=new Rs(su(o),a);return fu(n,r,l)}else return[]}function Cc(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||D_(o,e))){const l=Sb(o,e,t,i);bb(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(f,y)=>zt(y));if(d&&!h){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const y=Lb(f);for(let b=0;b<y.length;++b){const A=y[b],O=A.query,L=x_(n,A);n.listenProvider_.startListening(vs(O),Pr(n,O),L.hashFn,L.onComplete)}}}!h&&c.length>0&&!i&&(d?n.listenProvider_.stopListening(vs(e),null):c.forEach(f=>{const y=n.queryToTagMap.get(qr(f));n.listenProvider_.stopListening(vs(f),y)}))}xb(n,c)}return a}function Ob(n,e,t,i){const s=hu(n,i);if(s!=null){const r=du(s),o=r.path,a=r.queryId,l=me(o,e),c=new Pn(su(a),l,t);return fu(n,o,c)}else return[]}function Mb(n,e,t,i){const s=hu(n,i);if(s){const r=du(s),o=r.path,a=r.queryId,l=me(o,e),c=$.fromObject(t),d=new As(su(a),l,c);return fu(n,o,d)}else return[]}function af(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(f,y)=>{const b=me(f,s);r=r||wi(y,b),o=o||zt(y)});let a=n.syncPointTree_.get(s);a?(o=o||zt(a),r=r||wi(a,x())):(a=new Ib,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=k.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((y,b)=>{const A=wi(b,x());A&&(r=r.updateImmediateChild(y,A))}));const c=D_(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=qr(e);I(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const y=Fb();n.queryToTagMap.set(f,y),n.tagToQueryMap.set(y,f)}const d=ru(n.pendingWriteTree_,s);let h=Cb(a,e,t,d,r,l);if(!c&&!o&&!i){const f=P_(a,e);h=h.concat(Ub(n,e,f))}return h}function uu(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=me(o,e),c=wi(a,l);if(c)return c});return T_(s,e,r,t,!0)}function Us(n,e){return M_(e,n.syncPointTree_,null,ru(n.pendingWriteTree_,x()))}function M_(n,e,t,i){if(M(n.path))return L_(n,e,t,i);{const s=e.get(x());t==null&&s!=null&&(t=wi(s,x()));let r=[];const o=P(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=C_(i,o);r=r.concat(M_(a,l,c,d))}return s&&(r=r.concat(cu(s,n,i,t))),r}}function L_(n,e,t,i){const s=e.get(x());t==null&&s!=null&&(t=wi(s,x()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=C_(i,o),d=n.operationForChild(o);d&&(r=r.concat(L_(d,a,l,c)))}),s&&(r=r.concat(cu(s,n,i,t))),r}function x_(n,e){const t=e.query,i=Pr(n,t);return{hashFn:()=>(gb(e)||k.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Db(n,t._path,i):Pb(n,t._path);{const r=OE(s,t);return Cc(n,t,null,r)}}}}function Pr(n,e){const t=qr(e);return n.queryToTagMap.get(t)}function qr(n){return n._path.toString()+"$"+n._queryIdentifier}function hu(n,e){return n.tagToQueryMap.get(e)}function du(n){const e=n.indexOf("$");return I(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new B(n.substr(0,e))}}function fu(n,e,t){const i=n.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const s=ru(n.pendingWriteTree_,e);return cu(i,t,s,null)}function Lb(n){return n.fold((e,t,i)=>{if(t&&zt(t))return[$r(t)];{let s=[];return t&&(s=N_(t)),Ee(i,(r,o)=>{s=s.concat(o)}),s}})}function vs(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Rb())(n._repo,n._path):n}function xb(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=qr(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Fb(){return Ab++}function Ub(n,e,t){const i=e._path,s=Pr(n,e),r=x_(n,t),o=n.listenProvider_.startListening(vs(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)I(!zt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!M(c)&&d&&zt(d))return[$r(d).query];{let f=[];return d&&(f=f.concat(N_(d).map(y=>y.query))),Ee(h,(y,b)=>{f=f.concat(b)}),f}});for(let c=0;c<l.length;++c){const d=l[c];n.listenProvider_.stopListening(vs(d),Pr(n,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new pu(t)}node(){return this.node_}}class _u{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=J(this.path_,e);return new _u(this.syncTree_,t)}node(){return uu(this.syncTree_,this.path_)}}const Bb=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},lf=function(n,e,t){if(!n||typeof n!="object")return n;if(I(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Vb(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Wb(n[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Vb=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:I(!1,"Unexpected server value: "+n)}},Wb=function(n,e,t){n.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const s=e.node();if(I(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Hb=function(n,e,t,i){return gu(e,new _u(t,n),i)},F_=function(n,e,t){return gu(n,new pu(e),t)};function gu(n,e,t){const i=n.getPriority().val(),s=lf(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=lf(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new Z(a,ie(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new Z(s))),o.forEachChild(q,(a,l)=>{const c=gu(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function vu(n,e){let t=e instanceof B?e:new B(e),i=n,s=P(t);for(;s!==null;){const r=bi(i.node.children,s)||{children:{},childCount:0};i=new mu(s,i,r),t=V(t),s=P(t)}return i}function Mi(n){return n.node.value}function U_(n,e){n.node.value=e,Sc(n)}function B_(n){return n.node.childCount>0}function $b(n){return Mi(n)===void 0&&!B_(n)}function Gr(n,e){Ee(n.node.children,(t,i)=>{e(new mu(t,n,i))})}function V_(n,e,t,i){t&&!i&&e(n),Gr(n,s=>{V_(s,e,!0,i)}),t&&i&&e(n)}function jb(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Bs(n){return new B(n.parent===null?n.name:Bs(n.parent)+"/"+n.name)}function Sc(n){n.parent!==null&&qb(n.parent,n.name,n)}function qb(n,e,t){const i=$b(t),s=bt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Sc(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Sc(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=/[\[\].#$\/\u0000-\u001F\u007F]/,zb=/[\[\].#$\u0000-\u001F\u007F]/,nc=10*1024*1024,W_=function(n){return typeof n=="string"&&n.length!==0&&!Gb.test(n)},H_=function(n){return typeof n=="string"&&n.length!==0&&!zb.test(n)},Kb=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),H_(n)},Yb=function(n,e,t,i){i&&e===void 0||yu(Pc(n,"value"),e,t)},yu=function(n,e,t){const i=t instanceof B?new dw(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+yn(i));if(typeof e=="function")throw new Error(n+"contains a function "+yn(i)+" with contents = "+e.toString());if(Hp(e))throw new Error(n+"contains "+e.toString()+" "+yn(i));if(typeof e=="string"&&e.length>nc/3&&Mr(e)>nc)throw new Error(n+"contains a string greater than "+nc+" utf8 bytes "+yn(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Ee(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!W_(o)))throw new Error(n+" contains an invalid key ("+o+") "+yn(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fw(i,o),yu(n,a,i),pw(i)}),s&&r)throw new Error(n+' contains ".value" child '+yn(i)+" in addition to actual children.")}},$_=function(n,e,t,i){if(!(i&&t===void 0)&&!H_(t))throw new Error(Pc(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Jb=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$_(n,e,t,i)},Qb=function(n,e){if(P(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Xb=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!W_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Kb(t))throw new Error(Pc(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Iu(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Xc(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function j_(n,e,t){Iu(n,t),q_(n,i=>Xc(i,e))}function wt(n,e,t){Iu(n,t),q_(n,i=>$e(i,e)||$e(e,i))}function q_(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(eT(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function eT(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Cn&&ae("event: "+t.toString()),Oi(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="repo_interrupt",nT=25;class iT{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Zb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tr(),this.transactionQueueTree_=new mu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function sT(n,e,t){if(n.stats_=Jc(n.repoInfo_),n.forceRestClient_||FE())n.server_=new br(n.repoInfo_,(i,s,r,o)=>{cf(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>uf(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{te(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new vt(n.repoInfo_,e,(i,s,r,o)=>{cf(n,i,s,r,o)},i=>{uf(n,i)},i=>{oT(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=HE(n.repoInfo_,()=>new Vw(n.stats_,n.server_)),n.infoData_=new Lw,n.infoSyncTree_=new of({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=jr(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),wu(n,"connected",!1),n.serverSyncTree_=new of({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);wt(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function rT(n){const t=n.infoData_.getNode(new B(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Eu(n){return Bb({timestamp:rT(n)})}function cf(n,e,t,i,s){n.dataUpdateCount++;const r=new B(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=hr(t,c=>ie(c));o=Mb(n.serverSyncTree_,r,l,s)}else{const l=ie(t);o=Ob(n.serverSyncTree_,r,l,s)}else if(i){const l=hr(t,c=>ie(c));o=Nb(n.serverSyncTree_,r,l)}else{const l=ie(t);o=jr(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=zr(n,r)),wt(n.eventQueue_,a,o)}function uf(n,e){wu(n,"connected",e),e===!1&&lT(n)}function oT(n,e){Ee(e,(t,i)=>{wu(n,t,i)})}function wu(n,e,t){const i=new B("/.info/"+e),s=ie(t);n.infoData_.updateSnapshot(i,s);const r=jr(n.infoSyncTree_,i,s);wt(n.eventQueue_,i,r)}function G_(n){return n.nextWriteId_++}function aT(n,e,t,i,s){bu(n,"set",{path:e.toString(),value:t,priority:i});const r=Eu(n),o=ie(t,i),a=uu(n.serverSyncTree_,e),l=F_(o,a,r),c=G_(n),d=O_(n.serverSyncTree_,e,l,c,!0);Iu(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(f,y)=>{const b=f==="ok";b||Ie("set at "+e+" failed: "+f);const A=wn(n.serverSyncTree_,c,!b);wt(n.eventQueue_,e,A),hT(n,s,f,y)});const h=Q_(n,e);zr(n,h),wt(n.eventQueue_,h,[])}function lT(n){bu(n,"onDisconnectEvents");const e=Eu(n),t=Tr();yc(n.onDisconnect_,x(),(s,r)=>{const o=Hb(s,r,n.serverSyncTree_,e);y_(t,s,o)});let i=[];yc(t,x(),(s,r)=>{i=i.concat(jr(n.serverSyncTree_,s,r));const o=Q_(n,s);zr(n,o)}),n.onDisconnect_=Tr(),wt(n.eventQueue_,x(),i)}function cT(n,e,t){let i;P(e._path)===".info"?i=af(n.infoSyncTree_,e,t):i=af(n.serverSyncTree_,e,t),j_(n.eventQueue_,e._path,i)}function hf(n,e,t){let i;P(e._path)===".info"?i=Cc(n.infoSyncTree_,e,t):i=Cc(n.serverSyncTree_,e,t),j_(n.eventQueue_,e._path,i)}function uT(n){n.persistentConnection_&&n.persistentConnection_.interrupt(tT)}function bu(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ae(t,...e)}function hT(n,e,t,i){e&&Oi(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function z_(n,e,t){return uu(n.serverSyncTree_,e,t)||k.EMPTY_NODE}function Tu(n,e=n.transactionQueueTree_){if(e||Kr(n,e),Mi(e)){const t=Y_(n,e);I(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&dT(n,Bs(e),t)}else B_(e)&&Gr(e,t=>{Tu(n,t)})}function dT(n,e,t){const i=t.map(c=>c.currentWriteId),s=z_(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const d=t[c];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=me(e,d.path);r=r.updateChild(h,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{bu(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,d=d.concat(wn(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Kr(n,vu(n.transactionQueueTree_,e)),Tu(n,n.transactionQueueTree_),wt(n.eventQueue_,e,d);for(let f=0;f<h.length;f++)Oi(h[f])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{Ie("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}zr(n,e)}},o)}function zr(n,e){const t=K_(n,e),i=Bs(t),s=Y_(n,t);return fT(n,s,i),i}function fT(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=me(t,l.path);let d=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,s=s.concat(wn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=nT)d=!0,h="maxretry",s=s.concat(wn(n.serverSyncTree_,l.currentWriteId,!0));else{const f=z_(n,l.path,o);l.currentInputSnapshot=f;const y=e[a].update(f.val());if(y!==void 0){yu("transaction failed: Data returned ",y,l.path);let b=ie(y);typeof y=="object"&&y!=null&&bt(y,".priority")||(b=b.updatePriority(f.getPriority()));const O=l.currentWriteId,L=Eu(n),G=F_(b,f,L);l.currentOutputSnapshotRaw=b,l.currentOutputSnapshotResolved=G,l.currentWriteId=G_(n),o.splice(o.indexOf(O),1),s=s.concat(O_(n.serverSyncTree_,l.path,G,l.currentWriteId,l.applyLocally)),s=s.concat(wn(n.serverSyncTree_,O,!0))}else d=!0,h="nodata",s=s.concat(wn(n.serverSyncTree_,l.currentWriteId,!0))}wt(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Kr(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Oi(i[a]);Tu(n,n.transactionQueueTree_)}function K_(n,e){let t,i=n.transactionQueueTree_;for(t=P(e);t!==null&&Mi(i)===void 0;)i=vu(i,t),e=V(e),t=P(e);return i}function Y_(n,e){const t=[];return J_(n,e,t),t.sort((i,s)=>i.order-s.order),t}function J_(n,e,t){const i=Mi(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Gr(e,s=>{J_(n,s,t)})}function Kr(n,e){const t=Mi(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,U_(e,t.length>0?t:void 0)}Gr(e,i=>{Kr(n,i)})}function Q_(n,e){const t=Bs(K_(n,e)),i=vu(n.transactionQueueTree_,e);return jb(i,s=>{ic(n,s)}),ic(n,i),V_(i,s=>{ic(n,s)}),t}function ic(n,e){const t=Mi(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(I(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(wn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?U_(e,void 0):t.length=r+1,wt(n.eventQueue_,Bs(e),s);for(let o=0;o<i.length;o++)Oi(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function _T(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ie(`Invalid query segment '${t}' in query '${n}'`)}return e}const df=function(n,e){const t=gT(n),i=t.namespace;t.domain==="firebase.com"&&Et(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Et("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||RE();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new e_(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new B(t.pathString)}},gT=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(d,h)),d<h&&(s=pT(n.substring(d,h)));const f=_T(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")t="localhost";else if(y.split(".").length<=2)t=y;else{const b=e.indexOf(".");i=e.substring(0,b).toLowerCase(),t=e.substring(b+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+te(this.snapshot.exportVal())}}class Z_{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return M(this._path)?null:c_(this._path)}get ref(){return new Tt(this._repo,this._path)}get _queryIdentifier(){const e=Kd(this._queryParams),t=Kc(e);return t==="{}"?"default":t}get _queryObject(){return Kd(this._queryParams)}isEqual(e){if(e=ue(e),!(e instanceof Cu))return!1;const t=this._repo===e._repo,i=Xc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+hw(this._path)}}class Tt extends Cu{constructor(e,t){super(e,t,new nu,!1)}get parent(){const e=h_(this._path);return e===null?null:new Tt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ns{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new B(e),i=Dr(this.ref,e);return new Ns(this._node.getChild(t),i,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Ns(s,Dr(this.ref,i),q)))}hasChild(e){const t=new B(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ff(n,e){return n=ue(n),n._checkNotDeleted("ref"),e!==void 0?Dr(n._root,e):n._root}function Dr(n,e){return n=ue(n),P(n._path)===null?Jb("child","path",e,!1):$_("child","path",e,!1),new Tt(n._repo,J(n._path,e))}function vT(n,e){n=ue(n),Qb("set",n._path),Yb("set",e,n._path,!1);const t=new Or;return aT(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Su{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new X_("value",this,new Ns(e.snapshotNode,new Tt(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Z_(this,e,t):null}matches(e){return e instanceof Su?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class ku{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Z_(this,e,t):null}createEvent(e,t){I(e.childName!=null,"Child events should have a childName.");const i=Dr(new Tt(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new X_(e.type,this,new Ns(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ku?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function yT(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(d,h)=>{hf(n._repo,n,a),l(d,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new mT(t,r||void 0),a=e==="value"?new Su(o):new ku(e,o);return cT(n._repo,n,a),()=>hf(n._repo,n,a)}function IT(n,e,t,i){return yT(n,"value",e,t,i)}Eb(Tt);kb(Tt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET="FIREBASE_DATABASE_EMULATOR_HOST",kc={};let wT=!1;function bT(n,e,t,i){n.repoInfo_=new e_(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function TT(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Et("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ae("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=df(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[ET]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=df(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const d=s&&l?new Ii(Ii.OWNER):new BE(n.name,n.options,e);Xb("Invalid Firebase Database URL",o),M(o.path)||Et("Database URL must point to the root of a Firebase Database (not including a child path).");const h=ST(a,n,d,new UE(n.name,t));return new kT(h,n)}function CT(n,e){const t=kc[e];(!t||t[n.key]!==n)&&Et(`Database ${e}(${n.repoInfo_}) has already been deleted.`),uT(n),delete t[n.key]}function ST(n,e,t,i){let s=kc[e.name];s||(s={},kc[e.name]=s);let r=s[n.toURLString()];return r&&Et("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new iT(n,wT,t,i),s[n.toURLString()]=r,r}class kT{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(sT(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Tt(this._repo,x())),this._rootInternal}_delete(){return this._rootInternal!==null&&(CT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Et("Cannot call "+e+" on a deleted database.")}}function RT(n=Oc(),e){const t=Ln(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=vg("database");i&&AT(t,...i)}return t}function AT(n,e,t,i={}){n=ue(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Et("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Et('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Ii(Ii.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:yg(i.mockUserToken,n.app.options.projectId);r=new Ii(o)}bT(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(n){bE(Ni),lt(new Ge("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return TT(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Pe(Pd,Dd,n),Pe(Pd,Dd,"esm2017")}vt.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};vt.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};NT();function pf(n,e,t){const i=n.slice();return i[27]=e[t][0],i[28]=e[t][1],i}function _f(n,e,t){const i=n.slice();return i[31]=e[t],i}function PT(n){let e,t;return{c(){e=p("img"),this.h()},l(i){e=_(i,"IMG",{src:!0,alt:!0,height:!0}),this.h()},h(){We(e.src,t=pt+"/images/musik-mute.png")||g(e,"src",t),g(e,"alt",""),g(e,"height","24")},m(i,s){bn(i,e,s)},p:ys,d(i){i&&m(e)}}}function DT(n){let e,t;return{c(){e=p("img"),this.h()},l(i){e=_(i,"IMG",{src:!0,alt:!0,height:!0}),this.h()},h(){We(e.src,t=pt+"/images/musik-play.png")||g(e,"src",t),g(e,"alt",""),g(e,"height","24")},m(i,s){bn(i,e,s)},p:ys,d(i){i&&m(e)}}}function gf(n){let e,t,i,s;return{c(){e=p("div"),t=p("img"),s=E(),this.h()},l(r){e=_(r,"DIV",{class:!0});var o=v(e);t=_(o,"IMG",{src:!0,alt:!0}),s=w(o),o.forEach(m),this.h()},h(){We(t.src,i=pt+"/images/prewed/img-"+n[31]+".JPG")||g(t,"src",i),g(t,"alt",""),g(e,"class","gallery-item")},m(r,o){bn(r,e,o),u(e,t),u(e,s)},p:ys,d(r){r&&m(e)}}}function mf(n){let e,t,i,s=n[28].nama+"",r,o,a,l,c=n[28].kedatangan=="datang"?"Datang":"Tidak Datang",d,h,f,y=n[28].pesan+"",b,A;return{c(){e=p("div"),t=p("div"),i=p("div"),r=T(s),o=E(),a=p("div"),l=p("span"),d=T(c),h=E(),f=p("div"),b=T(y),A=E(),this.h()},l(O){e=_(O,"DIV",{class:!0});var L=v(e);t=_(L,"DIV",{class:!0});var G=v(t);i=_(G,"DIV",{class:!0});var z=v(i);r=C(z,s),z.forEach(m),o=w(G),a=_(G,"DIV",{});var we=v(a);l=_(we,"SPAN",{class:!0});var he=v(l);d=C(he,c),he.forEach(m),we.forEach(m),G.forEach(m),h=w(L),f=_(L,"DIV",{class:!0});var be=v(f);b=C(be,y),be.forEach(m),A=w(L),L.forEach(m),this.h()},h(){g(i,"class","pesan-nama"),g(l,"class","pesan-kedatangan"),g(t,"class","pesan-header"),g(f,"class","pesan-body"),g(e,"class","pesan")},m(O,L){bn(O,e,L),u(e,t),u(t,i),u(i,r),u(t,o),u(t,a),u(a,l),u(l,d),u(e,h),u(e,f),u(f,b),u(e,A)},p(O,L){L[0]&256&&s!==(s=O[28].nama+"")&&xt(r,s),L[0]&256&&c!==(c=O[28].kedatangan=="datang"?"Datang":"Tidak Datang")&&xt(d,c),L[0]&256&&y!==(y=O[28].pesan+"")&&xt(b,y)},d(O){O&&m(e)}}}function OT(n){let e,t,i,s,r,o,a,l,c,d,h,f,y,b,A,O,L,G,z,we,he,be,Ct,De,St,Kt,Vs,ze,F,Yt,ut,Oe,Li,Q,W,Me,ht,se,Jt,Qt,Yr,xi,Jr,Qr,Xr,Zr,eo,to,de,Fn,no,io,so,ro,Un,oo,ao,lo,co,Ke,Ye,Bn,Xt,Ru,uo,Fi,ho,fo,Ui,po,_o,Bi,go,Je,Vn,Zt,Au,mo,Vi,vo,yo,Wi,Io,Eo,en,Wn,X,Hi,wo,bo,$i,To,Co,tn,So,ko,Ro,Ao,ji,No,Po,fe,Do,Oo,Mo,Lo,xo,Hn,Fo,Uo,Bo,Vo,Se,Nu,Wo,qi,Ho,$o,pe,jo,qo,Go,zo,Ko,$n,Yo,Jo,Qo,Xo,ke,Pu,Zo,nn,jn,j,Gi,ea,ta,zi,na,ia,Re,sn,Ws,sa,ra,rn,Hs,oa,aa,on,$s,la,ca,an,js,ua,ha,da,fa,pa,_a,Ae,Ki,ga,ma,Yi,va,ya,Ia,Ea,Ji,wa,ba,Ta,Ca,Sa,ka,Qi,Ra,Aa,ln,Na,cn,qn,K,Xi,Pa,Da,un,Oa,Ma,La,xa,Fa,Ua,Qe,hn,Du,Ba,Va,Wa,Ha,$a,ja,qa,Ga,Xe,dn,Ou,za,Ka,Ya,Ja,Qa,Xa,Za,el,Ze,fn,Mu,tl,nl,il,sl,rl,ol,dt,Gn,ce,zn,al,ll,kt,Zi,cl,ul,Le,hl,et,es,dl,fl,pl,_l,_e,Rt,gl,At,ml,Nt,vl,yl,Pt,ts,Il,El,xe,wl,Kn,Yn,bl,Tl,ft,Jn,Cl,Sl,kl,Qn,ns,Te,is,Xn,Zn,Rl,ss,ei,ti,Al,rs,ni,ii,Nl,os,si,ri,Pl,as,oi,ai,Dl,Lu;function xu(S,H){return S[10]?DT:PT}let qs=xu(n),Fe=qs(n),Ol=[1,2,3,4,5,6,7,8,9,10],Ne=[];for(let S=0;S<10;S+=1)Ne[S]=gf(_f(n,Ol,S));let li=Object.entries(n[8]),ne=[];for(let S=0;S<li.length;S+=1)ne[S]=mf(pf(n,li,S));return{c(){e=p("div"),t=p("h2"),i=T("Loading data"),s=E(),r=p("div"),o=p("div"),a=p("div"),l=p("div"),c=T("Bayu Rofid Fanani"),d=E(),h=p("div"),f=T("&"),y=E(),b=p("div"),A=T("Erinta Eka Ruliyanti"),O=E(),L=p("div"),G=p("div"),z=T("Kepada Yth. Sdr/Sdri:"),we=E(),he=p("div"),be=T(n[5]),Ct=E(),De=p("button"),St=T("Buka undangan"),Vs=E(),ze=p("audio"),Yt=E(),ut=p("div"),Oe=p("button"),Fe.c(),Q=E(),W=p("div"),Me=p("div"),ht=p("div"),se=p("div"),Jt=p("p"),Qt=T("The wedding of"),Yr=E(),xi=p("h1"),Jr=T("Erinta & Bayu"),Qr=E(),Xr=p("br"),Zr=E(),eo=p("br"),to=E(),de=p("div"),Fn=p("p"),no=T("بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ"),io=E(),so=p("br"),ro=E(),Un=p("p"),oo=T(`Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah,
					perkenankanlah kami merangkaikan kasih sayang yang kau ciptakan diantara kami untuk
					mengikuti Sunnah Rasul-Mu dalam rangka membentuk keluarga yang sakinah, mawaddah,
					warahmah.`),ao=E(),lo=p("br"),co=E(),Ke=p("div"),Ye=p("div"),Bn=p("div"),Xt=p("img"),uo=E(),Fi=p("h3"),ho=T("Erinta Eka Ruliyanti"),fo=E(),Ui=p("p"),po=T("Putri Bapak Sumirin & (Almh.) Ibu Sri Lestari"),_o=E(),Bi=p("div"),go=E(),Je=p("div"),Vn=p("div"),Zt=p("img"),mo=E(),Vi=p("h3"),vo=T("Bayu Rofid Fanani"),yo=E(),Wi=p("p"),Io=T("Putra Bapak Samaji dan Ibu Suminah"),Eo=E(),en=p("div"),Wn=p("div"),X=p("div"),Hi=p("h3"),wo=T("Save the date"),bo=E(),$i=p("h4"),To=T("Akad"),Co=E(),tn=p("p"),So=T("27 Juni 2023 "),ko=p("br"),Ro=T(`
						Pukul 08:00 WIB`),Ao=E(),ji=p("h4"),No=T("Resepsi"),Po=E(),fe=p("p"),Do=T("27 Juni 2023 "),Oo=p("br"),Mo=T(`
						Pukul 13:00 WIB `),Lo=p("br"),xo=T(`
						Lokasi: `),Hn=p("a"),Fo=T("Rumah Pengantin Perempuan"),Uo=E(),Bo=p("br"),Vo=E(),Se=p("iframe"),Wo=E(),qi=p("h4"),Ho=T("Ngundhuh Mantu"),$o=E(),pe=p("p"),jo=T("28 Juni 2023 "),qo=p("br"),Go=T(`
						Pukul 14:00 WIB `),zo=p("br"),Ko=T(`
						Lokasi: `),$n=p("a"),Yo=T("Rumah Pengantin Laki-laki"),Jo=E(),Qo=p("br"),Xo=E(),ke=p("iframe"),Zo=E(),nn=p("div"),jn=p("div"),j=p("div"),Gi=p("h3"),ea=T("Count down to"),ta=E(),zi=p("h4"),na=T("Our Happy Day"),ia=E(),Re=p("h2"),sn=p("div"),Ws=T(n[1]),sa=T(" hari"),ra=E(),rn=p("div"),Hs=T(n[2]),oa=T(" jam"),aa=E(),on=p("div"),$s=T(n[3]),la=T(" menit"),ca=E(),an=p("div"),js=T(n[4]),ua=T(" detik"),ha=E(),da=p("br"),fa=E(),pa=p("br"),_a=E(),Ae=p("div"),Ki=p("h4"),ga=T("Kata Mutiara"),ma=E(),Yi=p("p"),va=T(`Aku tak pernah menunggumu. Kamu tak pernah sengaja datang. Tapi kita dipertemukan
							Tuhan. Entah untuk saling duduk berdampingan atau saling memberi pelajaran. Entah
							untuk saling mengirim undangan pernikahan, atau duduk bersama di pelaminan.`),ya=E(),Ia=p("br"),Ea=E(),Ji=p("p"),wa=T("Rohmatikal Maskur"),ba=E(),Ta=p("br"),Ca=E(),Sa=p("br"),ka=E(),Qi=p("h3"),Ra=T("Gallery"),Aa=E(),ln=p("div");for(let S=0;S<10;S+=1)Ne[S].c();Na=E(),cn=p("div"),qn=p("div"),K=p("div"),Xi=p("h3"),Pa=T("Send Gifts"),Da=E(),un=p("p"),Oa=T("Rumah: "),Ma=p("br"),La=T(`
						(Rumah Bpk. Sumirin) Dukuh Bandaralim Tengah RT 003/ RW 002 Desa Bandaralim, Kec. Badegan,
						63455`),xa=E(),Fa=p("br"),Ua=E(),Qe=p("p"),hn=p("img"),Ba=E(),Va=p("br"),Wa=T(`
						Bank BCA: `),Ha=p("br"),$a=T(`
						(Erinta Eka R.) 6720601468`),ja=E(),qa=p("br"),Ga=E(),Xe=p("p"),dn=p("img"),za=E(),Ka=p("br"),Ya=T(`
						Bank BRI: `),Ja=p("br"),Qa=T(`
						(Bayu Rofid F.) 3214-01-055001-53-2`),Xa=E(),Za=p("br"),el=E(),Ze=p("p"),fn=p("img"),tl=E(),nl=p("br"),il=T(`
						Gopay: `),sl=p("br"),rl=T(`
						+6282336670420`),ol=E(),dt=p("div"),Gn=p("div"),ce=p("form"),zn=p("h3"),al=T("RSVP & Send your wishes"),ll=E(),kt=p("div"),Zi=p("small"),cl=T("Nama:"),ul=E(),Le=p("input"),hl=E(),et=p("div"),es=p("small"),dl=T("Status Kedatangan:"),fl=E(),pl=p("br"),_l=E(),_e=p("select"),Rt=p("option"),gl=T("Pilih satu"),At=p("option"),ml=T("Datang"),Nt=p("option"),vl=T("Tidak datang"),yl=E(),Pt=p("div"),ts=p("small"),Il=T("Pesan dan Doa Anda:"),El=E(),xe=p("textarea"),wl=E(),Kn=p("div"),Yn=p("button"),bl=T("Kirim Pesan dan Doa"),Tl=E(),ft=p("div"),Jn=p("h3"),Cl=T("Pesan dari undangan"),Sl=E();for(let S=0;S<ne.length;S+=1)ne[S].c();kl=E(),Qn=p("div"),ns=p("nav"),Te=p("ul"),is=p("li"),Xn=p("button"),Zn=p("div"),Rl=E(),ss=p("li"),ei=p("button"),ti=p("div"),Al=E(),rs=p("li"),ni=p("button"),ii=p("div"),Nl=E(),os=p("li"),si=p("button"),ri=p("div"),Pl=E(),as=p("li"),oi=p("button"),ai=p("div"),this.h()},l(S){e=_(S,"DIV",{class:!0,style:!0});var H=v(e);t=_(H,"H2",{class:!0});var N=v(t);i=C(N,"Loading data"),N.forEach(m),H.forEach(m),s=w(S),r=_(S,"DIV",{style:!0});var re=v(r);o=_(re,"DIV",{id:!0,class:!0});var Fu=v(o);a=_(Fu,"DIV",{class:!0});var tt=v(a);l=_(tt,"DIV",{class:!0});var Uu=v(l);c=C(Uu,"Bayu Rofid Fanani"),Uu.forEach(m),d=w(tt),h=_(tt,"DIV",{class:!0});var Bu=v(h);f=C(Bu,"&"),Bu.forEach(m),y=w(tt),b=_(tt,"DIV",{class:!0});var Vu=v(b);A=C(Vu,"Erinta Eka Ruliyanti"),Vu.forEach(m),O=w(tt),L=_(tt,"DIV",{class:!0});var Gs=v(L);G=_(Gs,"DIV",{});var Wu=v(G);z=C(Wu,"Kepada Yth. Sdr/Sdri:"),Wu.forEach(m),we=w(Gs),he=_(Gs,"DIV",{class:!0});var Hu=v(he);be=C(Hu,n[5]),Hu.forEach(m),Gs.forEach(m),Ct=w(tt),De=_(tt,"BUTTON",{class:!0,id:!0});var $u=v(De);St=C($u,"Buka undangan"),$u.forEach(m),tt.forEach(m),Fu.forEach(m),Vs=w(re),ze=_(re,"AUDIO",{src:!0,id:!0}),v(ze).forEach(m),Yt=w(re),ut=_(re,"DIV",{class:!0});var ju=v(ut);Oe=_(ju,"BUTTON",{class:!0});var qu=v(Oe);Fe.l(qu),qu.forEach(m),ju.forEach(m),Q=w(re),W=_(re,"DIV",{id:!0});var nt=v(W);Me=_(nt,"DIV",{class:!0,id:!0});var zs=v(Me);ht=_(zs,"DIV",{class:!0});var Gu=v(ht);se=_(Gu,"DIV",{class:!0});var Dt=v(se);Jt=_(Dt,"P",{});var zu=v(Jt);Qt=C(zu,"The wedding of"),zu.forEach(m),Yr=w(Dt),xi=_(Dt,"H1",{});var Ku=v(xi);Jr=C(Ku,"Erinta & Bayu"),Ku.forEach(m),Qr=w(Dt),Xr=_(Dt,"BR",{}),Zr=w(Dt),eo=_(Dt,"BR",{}),Dt.forEach(m),Gu.forEach(m),to=w(zs),de=_(zs,"DIV",{class:!0});var it=v(de);Fn=_(it,"P",{class:!0});var Yu=v(Fn);no=C(Yu,"بِسْــــــــــــــــــمِ اللهِ الرَّحْمَنِ الرَّحِيْمِ"),Yu.forEach(m),io=w(it),so=_(it,"BR",{}),ro=w(it),Un=_(it,"P",{class:!0});var Ju=v(Un);oo=C(Ju,`Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah,
					perkenankanlah kami merangkaikan kasih sayang yang kau ciptakan diantara kami untuk
					mengikuti Sunnah Rasul-Mu dalam rangka membentuk keluarga yang sakinah, mawaddah,
					warahmah.`),Ju.forEach(m),ao=w(it),lo=_(it,"BR",{}),co=w(it),Ke=_(it,"DIV",{class:!0});var ci=v(Ke);Ye=_(ci,"DIV",{class:!0});var ui=v(Ye);Bn=_(ui,"DIV",{class:!0});var Qu=v(Bn);Xt=_(Qu,"IMG",{src:!0,alt:!0,width:!0}),Qu.forEach(m),uo=w(ui),Fi=_(ui,"H3",{});var Xu=v(Fi);ho=C(Xu,"Erinta Eka Ruliyanti"),Xu.forEach(m),fo=w(ui),Ui=_(ui,"P",{});var Zu=v(Ui);po=C(Zu,"Putri Bapak Sumirin & (Almh.) Ibu Sri Lestari"),Zu.forEach(m),ui.forEach(m),_o=w(ci),Bi=_(ci,"DIV",{class:!0}),v(Bi).forEach(m),go=w(ci),Je=_(ci,"DIV",{class:!0});var hi=v(Je);Vn=_(hi,"DIV",{class:!0});var eh=v(Vn);Zt=_(eh,"IMG",{src:!0,alt:!0,width:!0}),eh.forEach(m),mo=w(hi),Vi=_(hi,"H3",{});var th=v(Vi);vo=C(th,"Bayu Rofid Fanani"),th.forEach(m),yo=w(hi),Wi=_(hi,"P",{});var nh=v(Wi);Io=C(nh,"Putra Bapak Samaji dan Ibu Suminah"),nh.forEach(m),hi.forEach(m),ci.forEach(m),it.forEach(m),zs.forEach(m),Eo=w(nt),en=_(nt,"DIV",{class:!0,id:!0});var ih=v(en);Wn=_(ih,"DIV",{class:!0});var sh=v(Wn);X=_(sh,"DIV",{class:!0});var ge=v(X);Hi=_(ge,"H3",{});var rh=v(Hi);wo=C(rh,"Save the date"),rh.forEach(m),bo=w(ge),$i=_(ge,"H4",{});var oh=v($i);To=C(oh,"Akad"),oh.forEach(m),Co=w(ge),tn=_(ge,"P",{});var Ks=v(tn);So=C(Ks,"27 Juni 2023 "),ko=_(Ks,"BR",{}),Ro=C(Ks,`
						Pukul 08:00 WIB`),Ks.forEach(m),Ao=w(ge),ji=_(ge,"H4",{});var ah=v(ji);No=C(ah,"Resepsi"),ah.forEach(m),Po=w(ge),fe=_(ge,"P",{});var Ue=v(fe);Do=C(Ue,"27 Juni 2023 "),Oo=_(Ue,"BR",{}),Mo=C(Ue,`
						Pukul 13:00 WIB `),Lo=_(Ue,"BR",{}),xo=C(Ue,`
						Lokasi: `),Hn=_(Ue,"A",{href:!0});var lh=v(Hn);Fo=C(lh,"Rumah Pengantin Perempuan"),lh.forEach(m),Uo=w(Ue),Bo=_(Ue,"BR",{}),Vo=w(Ue),Se=_(Ue,"IFRAME",{src:!0,width:!0,height:!0,style:!0,title:!0,loading:!0,referrerpolicy:!0}),v(Se).forEach(m),Ue.forEach(m),Wo=w(ge),qi=_(ge,"H4",{});var ch=v(qi);Ho=C(ch,"Ngundhuh Mantu"),ch.forEach(m),$o=w(ge),pe=_(ge,"P",{});var Be=v(pe);jo=C(Be,"28 Juni 2023 "),qo=_(Be,"BR",{}),Go=C(Be,`
						Pukul 14:00 WIB `),zo=_(Be,"BR",{}),Ko=C(Be,`
						Lokasi: `),$n=_(Be,"A",{href:!0});var uh=v($n);Yo=C(uh,"Rumah Pengantin Laki-laki"),uh.forEach(m),Jo=w(Be),Qo=_(Be,"BR",{}),Xo=w(Be),ke=_(Be,"IFRAME",{src:!0,width:!0,height:!0,style:!0,title:!0,loading:!0,referrerpolicy:!0}),v(ke).forEach(m),Be.forEach(m),ge.forEach(m),sh.forEach(m),ih.forEach(m),Zo=w(nt),nn=_(nt,"DIV",{class:!0,id:!0});var hh=v(nn);jn=_(hh,"DIV",{class:!0});var dh=v(jn);j=_(dh,"DIV",{class:!0});var Y=v(j);Gi=_(Y,"H3",{});var fh=v(Gi);ea=C(fh,"Count down to"),fh.forEach(m),ta=w(Y),zi=_(Y,"H4",{});var ph=v(zi);na=C(ph,"Our Happy Day"),ph.forEach(m),ia=w(Y),Re=_(Y,"H2",{class:!0});var Ot=v(Re);sn=_(Ot,"DIV",{class:!0});var Ml=v(sn);Ws=C(Ml,n[1]),sa=C(Ml," hari"),Ml.forEach(m),ra=w(Ot),rn=_(Ot,"DIV",{class:!0});var Ll=v(rn);Hs=C(Ll,n[2]),oa=C(Ll," jam"),Ll.forEach(m),aa=w(Ot),on=_(Ot,"DIV",{class:!0});var xl=v(on);$s=C(xl,n[3]),la=C(xl," menit"),xl.forEach(m),ca=w(Ot),an=_(Ot,"DIV",{class:!0});var Fl=v(an);js=C(Fl,n[4]),ua=C(Fl," detik"),Fl.forEach(m),Ot.forEach(m),ha=w(Y),da=_(Y,"BR",{}),fa=w(Y),pa=_(Y,"BR",{}),_a=w(Y),Ae=_(Y,"DIV",{class:!0});var Mt=v(Ae);Ki=_(Mt,"H4",{});var _h=v(Ki);ga=C(_h,"Kata Mutiara"),_h.forEach(m),ma=w(Mt),Yi=_(Mt,"P",{});var gh=v(Yi);va=C(gh,`Aku tak pernah menunggumu. Kamu tak pernah sengaja datang. Tapi kita dipertemukan
							Tuhan. Entah untuk saling duduk berdampingan atau saling memberi pelajaran. Entah
							untuk saling mengirim undangan pernikahan, atau duduk bersama di pelaminan.`),gh.forEach(m),ya=w(Mt),Ia=_(Mt,"BR",{}),Ea=w(Mt),Ji=_(Mt,"P",{});var mh=v(Ji);wa=C(mh,"Rohmatikal Maskur"),mh.forEach(m),Mt.forEach(m),ba=w(Y),Ta=_(Y,"BR",{}),Ca=w(Y),Sa=_(Y,"BR",{}),ka=w(Y),Qi=_(Y,"H3",{});var vh=v(Qi);Ra=C(vh,"Gallery"),vh.forEach(m),Aa=w(Y),ln=_(Y,"DIV",{class:!0});var yh=v(ln);for(let mn=0;mn<10;mn+=1)Ne[mn].l(yh);yh.forEach(m),Y.forEach(m),dh.forEach(m),hh.forEach(m),Na=w(nt),cn=_(nt,"DIV",{class:!0,id:!0});var Ih=v(cn);qn=_(Ih,"DIV",{class:!0});var Eh=v(qn);K=_(Eh,"DIV",{class:!0});var oe=v(K);Xi=_(oe,"H3",{});var wh=v(Xi);Pa=C(wh,"Send Gifts"),wh.forEach(m),Da=w(oe),un=_(oe,"P",{});var Ys=v(un);Oa=C(Ys,"Rumah: "),Ma=_(Ys,"BR",{}),La=C(Ys,`
						(Rumah Bpk. Sumirin) Dukuh Bandaralim Tengah RT 003/ RW 002 Desa Bandaralim, Kec. Badegan,
						63455`),Ys.forEach(m),xa=w(oe),Fa=_(oe,"BR",{}),Ua=w(oe),Qe=_(oe,"P",{});var pn=v(Qe);hn=_(pn,"IMG",{src:!0,alt:!0,width:!0}),Ba=w(pn),Va=_(pn,"BR",{}),Wa=C(pn,`
						Bank BCA: `),Ha=_(pn,"BR",{}),$a=C(pn,`
						(Erinta Eka R.) 6720601468`),pn.forEach(m),ja=w(oe),qa=_(oe,"BR",{}),Ga=w(oe),Xe=_(oe,"P",{});var _n=v(Xe);dn=_(_n,"IMG",{src:!0,alt:!0,width:!0}),za=w(_n),Ka=_(_n,"BR",{}),Ya=C(_n,`
						Bank BRI: `),Ja=_(_n,"BR",{}),Qa=C(_n,`
						(Bayu Rofid F.) 3214-01-055001-53-2`),_n.forEach(m),Xa=w(oe),Za=_(oe,"BR",{}),el=w(oe),Ze=_(oe,"P",{});var gn=v(Ze);fn=_(gn,"IMG",{src:!0,alt:!0,width:!0}),tl=w(gn),nl=_(gn,"BR",{}),il=C(gn,`
						Gopay: `),sl=_(gn,"BR",{}),rl=C(gn,`
						+6282336670420`),gn.forEach(m),oe.forEach(m),Eh.forEach(m),Ih.forEach(m),ol=w(nt),dt=_(nt,"DIV",{class:!0,id:!0});var Js=v(dt);Gn=_(Js,"DIV",{class:!0});var bh=v(Gn);ce=_(bh,"FORM",{action:!0});var st=v(ce);zn=_(st,"H3",{class:!0});var Th=v(zn);al=C(Th,"RSVP & Send your wishes"),Th.forEach(m),ll=w(st),kt=_(st,"DIV",{class:!0});var Qs=v(kt);Zi=_(Qs,"SMALL",{});var Ch=v(Zi);cl=C(Ch,"Nama:"),Ch.forEach(m),ul=w(Qs),Le=_(Qs,"INPUT",{type:!0,autocapitalize:!0,placeholder:!0}),Qs.forEach(m),hl=w(st),et=_(st,"DIV",{class:!0});var di=v(et);es=_(di,"SMALL",{});var Sh=v(es);dl=C(Sh,"Status Kedatangan:"),Sh.forEach(m),fl=w(di),pl=_(di,"BR",{}),_l=w(di),_e=_(di,"SELECT",{name:!0,id:!0});var Xs=v(_e);Rt=_(Xs,"OPTION",{});var kh=v(Rt);gl=C(kh,"Pilih satu"),kh.forEach(m),At=_(Xs,"OPTION",{});var Rh=v(At);ml=C(Rh,"Datang"),Rh.forEach(m),Nt=_(Xs,"OPTION",{});var Ah=v(Nt);vl=C(Ah,"Tidak datang"),Ah.forEach(m),Xs.forEach(m),di.forEach(m),yl=w(st),Pt=_(st,"DIV",{class:!0});var Zs=v(Pt);ts=_(Zs,"SMALL",{});var Nh=v(ts);Il=C(Nh,"Pesan dan Doa Anda:"),Nh.forEach(m),El=w(Zs),xe=_(Zs,"TEXTAREA",{cols:!0,rows:!0,placeholder:!0}),v(xe).forEach(m),Zs.forEach(m),wl=w(st),Kn=_(st,"DIV",{class:!0});var Ph=v(Kn);Yn=_(Ph,"BUTTON",{class:!0});var Dh=v(Yn);bl=C(Dh,"Kirim Pesan dan Doa"),Dh.forEach(m),Ph.forEach(m),st.forEach(m),bh.forEach(m),Tl=w(Js),ft=_(Js,"DIV",{class:!0});var er=v(ft);Jn=_(er,"H3",{class:!0});var Oh=v(Jn);Cl=C(Oh,"Pesan dari undangan"),Oh.forEach(m),Sl=w(er);for(let mn=0;mn<ne.length;mn+=1)ne[mn].l(er);er.forEach(m),Js.forEach(m),nt.forEach(m),kl=w(re),Qn=_(re,"DIV",{id:!0});var Mh=v(Qn);ns=_(Mh,"NAV",{});var Lh=v(ns);Te=_(Lh,"UL",{});var rt=v(Te);is=_(rt,"LI",{});var xh=v(is);Xn=_(xh,"BUTTON",{});var Fh=v(Xn);Zn=_(Fh,"DIV",{class:!0,"data-target":!0}),v(Zn).forEach(m),Fh.forEach(m),xh.forEach(m),Rl=w(rt),ss=_(rt,"LI",{});var Uh=v(ss);ei=_(Uh,"BUTTON",{});var Bh=v(ei);ti=_(Bh,"DIV",{class:!0,"data-target":!0}),v(ti).forEach(m),Bh.forEach(m),Uh.forEach(m),Al=w(rt),rs=_(rt,"LI",{});var Vh=v(rs);ni=_(Vh,"BUTTON",{});var Wh=v(ni);ii=_(Wh,"DIV",{class:!0,"data-target":!0}),v(ii).forEach(m),Wh.forEach(m),Vh.forEach(m),Nl=w(rt),os=_(rt,"LI",{});var Hh=v(os);si=_(Hh,"BUTTON",{});var $h=v(si);ri=_($h,"DIV",{class:!0,"data-target":!0}),v(ri).forEach(m),$h.forEach(m),Hh.forEach(m),Pl=w(rt),as=_(rt,"LI",{});var jh=v(as);oi=_(jh,"BUTTON",{});var qh=v(oi);ai=_(qh,"DIV",{class:!0,"data-target":!0}),v(ai).forEach(m),qh.forEach(m),jh.forEach(m),rt.forEach(m),Lh.forEach(m),Mh.forEach(m),re.forEach(m),this.h()},h(){g(t,"class","center"),g(e,"class","loading"),fi(e,"display",n[9]?"none":"block"),g(l,"class","mempelai satu"),g(h,"class","dan"),g(b,"class","mempelai dua"),g(he,"class","nama-undagan"),g(L,"class","tujuan-undangan"),g(De,"class","btn btn-primary"),g(De,"id","open-btn"),g(a,"class","info-nama"),g(o,"id","cover"),g(o,"class",Kt=n[0]?"opened":""),We(ze.src,F=pt+"/sounds/beautiful_in_white.mp3")||g(ze,"src",F),ze.autoplay=!0,g(ze,"id","musik"),ze.loop=!0,g(Oe,"class","btn-audio"),g(ut,"class",Li="audio-control "+(n[10]?"playing":"")),g(se,"class","center"),g(ht,"class","container"),g(Fn,"class","center"),g(Un,"class","center"),We(Xt.src,Ru=pt+"/images/erinta_thumbnail.JPG")||g(Xt,"src",Ru),g(Xt,"alt",""),g(Xt,"width","100%"),g(Bn,"class","img-mempelai"),g(Ye,"class","mempelai"),g(Bi,"class","mempelai-spacer"),We(Zt.src,Au=pt+"/images/bayu_thumbnail.JPG")||g(Zt,"src",Au),g(Zt,"alt",""),g(Zt,"width","100%"),g(Vn,"class","img-mempelai"),g(Je,"class","mempelai"),g(Ke,"class","center"),g(de,"class","container"),g(Me,"class","slides"),g(Me,"id","slide-1"),g(Hn,"href","https://goo.gl/maps/hLYfCqABuDj75UMs7"),We(Se.src,Nu="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3952.1245232724104!2d111.36967!3d-7.882037999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTInNTUuMyJTIDExMcKwMjInMTAuOCJF!5e0!3m2!1sen!2sid!4v1687399049764!5m2!1sen!2sid")||g(Se,"src",Nu),g(Se,"width","100%"),g(Se,"height","450"),fi(Se,"border","0"),g(Se,"title","Rumah Pengantin Perempuan"),g(Se,"loading","lazy"),g(Se,"referrerpolicy","no-referrer-when-downgrade"),g($n,"href","https://goo.gl/maps/WKEYLe3zZNquCbuk8"),We(ke.src,Pu="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1976.1387543077874!2d111.42253572023773!3d-7.866001360169214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNTEnNTcuMCJTIDExMcKwMjUnMjEuMyJF!5e0!3m2!1sen!2sid!4v1687398907302!5m2!1sen!2sid")||g(ke,"src",Pu),g(ke,"width","100%"),g(ke,"height","450"),fi(ke,"border","0"),g(ke,"title","Rumah Pengantin Laki-laki"),g(ke,"loading","lazy"),g(ke,"referrerpolicy","no-referrer-when-downgrade"),g(X,"class","center"),g(Wn,"class","container"),g(en,"class","slides"),g(en,"id","slide-3"),g(sn,"class","hari"),g(rn,"class","jam"),g(on,"class","menit"),g(an,"class","detik"),g(Re,"class","countdown"),g(Ae,"class","kata-mutiara svelte-1smclxo"),g(ln,"class","gallery"),g(j,"class","center"),g(jn,"class","container"),g(nn,"class","slides"),g(nn,"id","slide-4"),We(hn.src,Du=pt+"/images/bca.svg")||g(hn,"src",Du),g(hn,"alt",""),g(hn,"width","96"),We(dn.src,Ou=pt+"/images/bri.svg")||g(dn,"src",Ou),g(dn,"alt",""),g(dn,"width","80"),We(fn.src,Mu=pt+"/images/gopay.png")||g(fn,"src",Mu),g(fn,"alt",""),g(fn,"width","48"),g(K,"class","center"),g(qn,"class","container"),g(cn,"class","slides"),g(cn,"id","slide-5"),g(zn,"class","center"),Le.required=!0,g(Le,"type","text"),g(Le,"autocapitalize","words"),g(Le,"placeholder","Nama Anda"),g(kt,"class","spacer"),Rt.__value="",Rt.value=Rt.__value,At.__value="datang",At.value=At.__value,Nt.__value="tidak_datang",Nt.value=Nt.__value,g(_e,"name",""),g(_e,"id",""),_e.required=!0,n[6]===void 0&&ig(()=>n[15].call(_e)),g(et,"class","spacer"),xe.required=!0,g(xe,"cols","30"),g(xe,"rows","10"),g(xe,"placeholder","Pesan anda dan doa anda untuk kami"),g(Pt,"class","spacer"),g(Yn,"class","btn btn-primary"),g(Kn,"class","spacer"),g(ce,"action",""),g(Gn,"class","form-container"),g(Jn,"class","center"),g(ft,"class","container"),g(dt,"class","slides"),g(dt,"id","slide-6"),g(W,"id","content"),g(Zn,"class","buttons home-button aktif"),g(Zn,"data-target","slide-1"),g(ti,"class","buttons lokasi-button"),g(ti,"data-target","slide-3"),g(ii,"class","buttons kalender-button"),g(ii,"data-target","slide-4"),g(ri,"class","buttons gift-button"),g(ri,"data-target","slide-5"),g(ai,"class","buttons wish-button"),g(ai,"data-target","slide-6"),g(Qn,"id","navigation"),fi(r,"display",n[9]?"block":"none")},m(S,H){bn(S,e,H),u(e,t),u(t,i),bn(S,s,H),bn(S,r,H),u(r,o),u(o,a),u(a,l),u(l,c),u(a,d),u(a,h),u(h,f),u(a,y),u(a,b),u(b,A),u(a,O),u(a,L),u(L,G),u(G,z),u(L,we),u(L,he),u(he,be),u(a,Ct),u(a,De),u(De,St),u(r,Vs),u(r,ze),u(r,Yt),u(r,ut),u(ut,Oe),Fe.m(Oe,null),u(r,Q),u(r,W),u(W,Me),u(Me,ht),u(ht,se),u(se,Jt),u(Jt,Qt),u(se,Yr),u(se,xi),u(xi,Jr),u(se,Qr),u(se,Xr),u(se,Zr),u(se,eo),u(Me,to),u(Me,de),u(de,Fn),u(Fn,no),u(de,io),u(de,so),u(de,ro),u(de,Un),u(Un,oo),u(de,ao),u(de,lo),u(de,co),u(de,Ke),u(Ke,Ye),u(Ye,Bn),u(Bn,Xt),u(Ye,uo),u(Ye,Fi),u(Fi,ho),u(Ye,fo),u(Ye,Ui),u(Ui,po),u(Ke,_o),u(Ke,Bi),u(Ke,go),u(Ke,Je),u(Je,Vn),u(Vn,Zt),u(Je,mo),u(Je,Vi),u(Vi,vo),u(Je,yo),u(Je,Wi),u(Wi,Io),u(W,Eo),u(W,en),u(en,Wn),u(Wn,X),u(X,Hi),u(Hi,wo),u(X,bo),u(X,$i),u($i,To),u(X,Co),u(X,tn),u(tn,So),u(tn,ko),u(tn,Ro),u(X,Ao),u(X,ji),u(ji,No),u(X,Po),u(X,fe),u(fe,Do),u(fe,Oo),u(fe,Mo),u(fe,Lo),u(fe,xo),u(fe,Hn),u(Hn,Fo),u(fe,Uo),u(fe,Bo),u(fe,Vo),u(fe,Se),u(X,Wo),u(X,qi),u(qi,Ho),u(X,$o),u(X,pe),u(pe,jo),u(pe,qo),u(pe,Go),u(pe,zo),u(pe,Ko),u(pe,$n),u($n,Yo),u(pe,Jo),u(pe,Qo),u(pe,Xo),u(pe,ke),u(W,Zo),u(W,nn),u(nn,jn),u(jn,j),u(j,Gi),u(Gi,ea),u(j,ta),u(j,zi),u(zi,na),u(j,ia),u(j,Re),u(Re,sn),u(sn,Ws),u(sn,sa),u(Re,ra),u(Re,rn),u(rn,Hs),u(rn,oa),u(Re,aa),u(Re,on),u(on,$s),u(on,la),u(Re,ca),u(Re,an),u(an,js),u(an,ua),u(j,ha),u(j,da),u(j,fa),u(j,pa),u(j,_a),u(j,Ae),u(Ae,Ki),u(Ki,ga),u(Ae,ma),u(Ae,Yi),u(Yi,va),u(Ae,ya),u(Ae,Ia),u(Ae,Ea),u(Ae,Ji),u(Ji,wa),u(j,ba),u(j,Ta),u(j,Ca),u(j,Sa),u(j,ka),u(j,Qi),u(Qi,Ra),u(j,Aa),u(j,ln);for(let N=0;N<10;N+=1)Ne[N]&&Ne[N].m(ln,null);u(W,Na),u(W,cn),u(cn,qn),u(qn,K),u(K,Xi),u(Xi,Pa),u(K,Da),u(K,un),u(un,Oa),u(un,Ma),u(un,La),u(K,xa),u(K,Fa),u(K,Ua),u(K,Qe),u(Qe,hn),u(Qe,Ba),u(Qe,Va),u(Qe,Wa),u(Qe,Ha),u(Qe,$a),u(K,ja),u(K,qa),u(K,Ga),u(K,Xe),u(Xe,dn),u(Xe,za),u(Xe,Ka),u(Xe,Ya),u(Xe,Ja),u(Xe,Qa),u(K,Xa),u(K,Za),u(K,el),u(K,Ze),u(Ze,fn),u(Ze,tl),u(Ze,nl),u(Ze,il),u(Ze,sl),u(Ze,rl),u(W,ol),u(W,dt),u(dt,Gn),u(Gn,ce),u(ce,zn),u(zn,al),u(ce,ll),u(ce,kt),u(kt,Zi),u(Zi,cl),u(kt,ul),u(kt,Le),tr(Le,n[5]),u(ce,hl),u(ce,et),u(et,es),u(es,dl),u(et,fl),u(et,pl),u(et,_l),u(et,_e),u(_e,Rt),u(Rt,gl),u(_e,At),u(At,ml),u(_e,Nt),u(Nt,vl),Gh(_e,n[6],!0),u(ce,yl),u(ce,Pt),u(Pt,ts),u(ts,Il),u(Pt,El),u(Pt,xe),tr(xe,n[7]),u(ce,wl),u(ce,Kn),u(Kn,Yn),u(Yn,bl),u(dt,Tl),u(dt,ft),u(ft,Jn),u(Jn,Cl),u(ft,Sl);for(let N=0;N<ne.length;N+=1)ne[N]&&ne[N].m(ft,null);u(r,kl),u(r,Qn),u(Qn,ns),u(ns,Te),u(Te,is),u(is,Xn),u(Xn,Zn),u(Te,Rl),u(Te,ss),u(ss,ei),u(ei,ti),u(Te,Al),u(Te,rs),u(rs,ni),u(ni,ii),u(Te,Nl),u(Te,os),u(os,si),u(si,ri),u(Te,Pl),u(Te,as),u(as,oi),u(oi,ai),Dl||(Lu=[Ve(De,"click",n[11]),Ve(Oe,"click",n[13]),Ve(Le,"input",n[14]),Ve(_e,"change",n[15]),Ve(xe,"input",n[16]),Ve(ce,"submit",sg(n[12])),Ve(Xn,"click",n[17]),Ve(ei,"click",n[18]),Ve(ni,"click",n[19]),Ve(si,"click",n[20]),Ve(oi,"click",n[21])],Dl=!0)},p(S,H){if(H[0]&512&&fi(e,"display",S[9]?"none":"block"),H[0]&32&&xt(be,S[5]),H[0]&1&&Kt!==(Kt=S[0]?"opened":"")&&g(o,"class",Kt),qs===(qs=xu(S))&&Fe?Fe.p(S,H):(Fe.d(1),Fe=qs(S),Fe&&(Fe.c(),Fe.m(Oe,null))),H[0]&1024&&Li!==(Li="audio-control "+(S[10]?"playing":""))&&g(ut,"class",Li),H[0]&2&&xt(Ws,S[1]),H[0]&4&&xt(Hs,S[2]),H[0]&8&&xt($s,S[3]),H[0]&16&&xt(js,S[4]),H&0){Ol=[1,2,3,4,5,6,7,8,9,10];let N;for(N=0;N<10;N+=1){const re=_f(S,Ol,N);Ne[N]?Ne[N].p(re,H):(Ne[N]=gf(re),Ne[N].c(),Ne[N].m(ln,null))}for(;N<10;N+=1)Ne[N].d(1)}if(H[0]&32&&Le.value!==S[5]&&tr(Le,S[5]),H[0]&64&&Gh(_e,S[6]),H[0]&128&&tr(xe,S[7]),H[0]&256){li=Object.entries(S[8]);let N;for(N=0;N<li.length;N+=1){const re=pf(S,li,N);ne[N]?ne[N].p(re,H):(ne[N]=mf(re),ne[N].c(),ne[N].m(ft,null))}for(;N<ne.length;N+=1)ne[N].d(1);ne.length=li.length}H[0]&512&&fi(r,"display",S[9]?"block":"none")},i:ys,o:ys,d(S){S&&m(e),S&&m(s),S&&m(r),Fe.d(),zh(Ne,S),zh(ne,S),Dl=!1,rg(Lu)}}}function ds(n){var e;if(n.target!=null&&n.target instanceof HTMLElement){const t=n.target;t.classList.contains("buttons")&&((e=document.querySelector("#"+t.dataset.target))==null||e.scrollIntoView({behavior:"smooth"}))}}function MT(n,e,t){let i=!1,s="0",r="0",o="0",a="0",l;function c(){t(0,i=!0);const F=document.querySelector("#musik");F==null||F.play()}let d="",h="",f="",y=[],b;async function A(){if(l==null){alert("error, user are not logged in");return}await aI(l,{displayName:d}),console.log("usert profile updated"),await vT(ff(b,"pesan/"+l.uid),{nama:d,kedatangan:h,pesan:f,created:Date.now()}),console.log("insert db"),t(7,f=""),alert("Terimakasih atas doanya 😁")}let O=!1;const L=new Date("Jun 27, 2023 08:00:00").getTime();let G,z=!0;function we(){const F=document.querySelector("#musik");F!=null&&F.paused?(F==null||F.play(),t(10,z=!0)):(F==null||F.pause(),t(10,z=!1)),F!=null&&(F.onplay=function(){t(10,z=!0)},F.onpause=function(){t(10,z=!1)})}og(()=>{G=setInterval(()=>{const W=L-new Date().getTime();if(W<=0){clearInterval(G);return}t(1,s=String(Math.floor(W/(1e3*60*60*24)))),t(2,r=String(Math.floor(W%(1e3*60*60*24)/(1e3*60*60)))),t(3,o=String(Math.floor(W%(1e3*60*60)/(1e3*60)))),t(4,a=String(Math.floor(W%(1e3*60)/1e3)))},1e3);const Yt=Of({apiKey:"AIzaSyDsn_juR5CZ9Cp5I_VjrFnN74ZUMi8Udng",authDomain:"undangan-nikah-6b26a.firebaseapp.com",projectId:"undangan-nikah-6b26a",storageBucket:"undangan-nikah-6b26a.appspot.com",messagingSenderId:"445019700121",appId:"1:445019700121:web:0bdcc5a84c32b6bd82f108",measurementId:"G-K6SMGLK17N",databaseURL:"https://undangan-nikah-6b26a-default-rtdb.asia-southeast1.firebasedatabase.app/"});_y(Yt),b=RT(Yt);const ut=ff(b,"pesan");IT(ut,Q=>{t(8,y=Q.val())});const Oe=wE(Yt);nI(Oe).then(Q=>{console.log("you are signed in as: ",Q.user.uid,"with name",Q.user.displayName),l=Q.user,t(5,d=l.displayName||""),t(9,O=!0)}).catch(Q=>console.log(Q)),uI(Oe,Q=>{}),(()=>{const Q=document.querySelectorAll(".slides"),W=document.querySelector("#content");W.onscroll=()=>{var ht;const Me=(W==null?void 0:W.scrollTop)||document.body.scrollTop;for(let se in Q)if(Q.hasOwnProperty(se)&&Q[se].offsetTop<=Me){const Jt=Q[se].id;(ht=document.querySelector(".aktif"))==null||ht.classList.remove("aktif");const Qt=document.querySelector(`[data-target=${Jt}]`);Qt==null||Qt.classList.add("aktif")}}})()});function he(){d=this.value,t(5,d)}function be(){h=ag(this),t(6,h)}function Ct(){f=this.value,t(7,f)}return[i,s,r,o,a,d,h,f,y,O,z,c,A,we,he,be,Ct,F=>{ds(F)},F=>{ds(F)},F=>{ds(F)},F=>{ds(F)},F=>{ds(F)}]}class UT extends eg{constructor(e){super(),tg(this,e,MT,OT,ng,{},null,[-1,-1])}}export{UT as component,FT as universal};
