import{S as f_,i as p_,s as __,k as p,q as T,a as w,l as _,m as v,r as C,h as m,c as b,n as g,p as oi,J as et,K as g_,b as ui,G as u,L as qs,M as ah,N as Me,O as m_,u as At,H as lh,P as v_,Q as y_,o as I_,R as E_}from"../chunks/index.6801ed78.js";import"../chunks/paths.27cc134a.js";const w_=!1,b_=!0,Jb=Object.freeze(Object.defineProperty({__proto__:null,prerender:b_,ssr:w_},Symbol.toStringTag,{value:"Module"}));/**
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
 */const Nd={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(n,e){if(!n)throw wi(e)},wi=function(n){return new Error("Firebase Database ("+Nd.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Pd=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},T_=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},zl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,d=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(f=64)),i.push(t[d],t[h],t[f],t[y])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Pd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):T_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new C_;const f=r<<2|a>>4;if(i.push(f),c!==64){const y=a<<4&240|c>>2;if(i.push(y),h!==64){const E=c<<6&192|h;i.push(E)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class C_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dd=function(n){const e=Pd(n);return zl.encodeByteArray(e,!0)},Zs=function(n){return Dd(n).replace(/\./g,"")},er=function(n){try{return zl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function S_(n){return Od(void 0,n)}function Od(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!k_(t)||(n[t]=Od(n[t],e[t]));return n}function k_(n){return n!=="__proto__"}/**
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
 */function R_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const A_=()=>R_().__FIREBASE_DEFAULTS__,N_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},P_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&er(n[1]);return e&&JSON.parse(e)},Kl=()=>{try{return A_()||N_()||P_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Md=n=>{var e,t;return(t=(e=Kl())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},D_=n=>{const e=Md(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Ld=()=>{var n;return(n=Kl())===null||n===void 0?void 0:n.config},xd=n=>{var e;return(e=Kl())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class br{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function O_(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Zs(JSON.stringify(t)),Zs(JSON.stringify(o)),a].join(".")}/**
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
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function Fd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Ud(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function M_(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Bd(){return Nd.NODE_ADMIN===!0}function Vd(){try{return typeof indexedDB=="object"}catch{return!1}}function Wd(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}function L_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const x_="FirebaseError";class st extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=x_,Object.setPrototypeOf(this,st.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Tn.prototype.create)}}class Tn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?F_(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new st(s,a,i)}}function F_(n,e){return n.replace(U_,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const U_=/\{\$([^}]+)}/g;/**
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
 */function us(n){return JSON.parse(n)}function Z(n){return JSON.stringify(n)}/**
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
 */const Hd=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=us(er(r[0])||""),t=us(er(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},B_=function(n){const e=Hd(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},V_=function(n){const e=Hd(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function vt(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function mi(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function bl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function tr(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function hs(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(ch(r)&&ch(o)){if(!hs(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function ch(n){return n!==null&&typeof n=="object"}/**
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
 */function bi(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class W_{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),d=1518500249):(c=r^o^a,d=1859775393):h<60?(c=r&o|a&(r|o),d=2400959708):(c=r^o^a,d=3395469782);const f=(s<<5|s>>>27)+c+l+d+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function H_(n,e){const t=new $_(n,e);return t.subscribe.bind(t)}class $_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");j_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=il),s.error===void 0&&(s.error=il),s.complete===void 0&&(s.complete=il);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function il(){}function Ql(n,e){return`${n} failed: ${e} argument `}/**
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
 */const q_=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,I(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Tr=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const G_=1e3,z_=2,K_=4*60*60*1e3,Y_=.5;function uh(n,e=G_,t=z_){const i=e*Math.pow(t,n),s=Math.round(Y_*i*(Math.random()-.5)*2);return Math.min(K_,i+s)}/**
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
 */function oe(n){return n&&n._delegate?n._delegate:n}class Be{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cn="[DEFAULT]";/**
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
 */class Q_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new br;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(X_(e))try{this.getOrInitializeService({instanceIdentifier:cn})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=cn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cn){return this.instances.has(e)}getOptions(e=cn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:J_(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=cn){return this.component?this.component.multipleInstances?e:cn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J_(n){return n===cn?void 0:n}function X_(n){return n.instantiationMode==="EAGER"}/**
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
 */class Z_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Q_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var x;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(x||(x={}));const eg={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},tg=x.INFO,ng={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},ig=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=ng[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cr{constructor(e){this.name=e,this._logLevel=tg,this._logHandler=ig,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eg[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const sg=(n,e)=>e.some(t=>n instanceof t);let hh,dh;function rg(){return hh||(hh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function og(){return dh||(dh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $d=new WeakMap,Tl=new WeakMap,jd=new WeakMap,sl=new WeakMap,Jl=new WeakMap;function ag(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Mt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&$d.set(t,n)}).catch(()=>{}),Jl.set(e,n),e}function lg(n){if(Tl.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Tl.set(n,e)}let Cl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Tl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||jd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cg(n){Cl=n(Cl)}function ug(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(rl(this),e,...t);return jd.set(i,e.sort?e.sort():[e]),Mt(i)}:og().includes(n)?function(...e){return n.apply(rl(this),e),Mt($d.get(this))}:function(...e){return Mt(n.apply(rl(this),e))}}function hg(n){return typeof n=="function"?ug(n):(n instanceof IDBTransaction&&lg(n),sg(n,rg())?new Proxy(n,Cl):n)}function Mt(n){if(n instanceof IDBRequest)return ag(n);if(sl.has(n))return sl.get(n);const e=hg(n);return e!==n&&(sl.set(n,e),Jl.set(e,n)),e}const rl=n=>Jl.get(n);function dg(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Mt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Mt(o.result),l.oldVersion,l.newVersion,Mt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const fg=["get","getKey","getAll","getAllKeys","count"],pg=["put","add","delete","clear"],ol=new Map;function fh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ol.get(e))return ol.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=pg.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||fg.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return ol.set(e,r),r}cg(n=>({...n,get:(e,t,i)=>fh(e,t)||n.get(e,t,i),has:(e,t)=>!!fh(e,t)||n.has(e,t)}));/**
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
 */class _g{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gg(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function gg(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sl="@firebase/app",ph="0.9.11";/**
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
 */const gn=new Cr("@firebase/app"),mg="@firebase/app-compat",vg="@firebase/analytics-compat",yg="@firebase/analytics",Ig="@firebase/app-check-compat",Eg="@firebase/app-check",wg="@firebase/auth",bg="@firebase/auth-compat",Tg="@firebase/database",Cg="@firebase/database-compat",Sg="@firebase/functions",kg="@firebase/functions-compat",Rg="@firebase/installations",Ag="@firebase/installations-compat",Ng="@firebase/messaging",Pg="@firebase/messaging-compat",Dg="@firebase/performance",Og="@firebase/performance-compat",Mg="@firebase/remote-config",Lg="@firebase/remote-config-compat",xg="@firebase/storage",Fg="@firebase/storage-compat",Ug="@firebase/firestore",Bg="@firebase/firestore-compat",Vg="firebase",Wg="9.22.1";/**
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
 */const kl="[DEFAULT]",Hg={[Sl]:"fire-core",[mg]:"fire-core-compat",[yg]:"fire-analytics",[vg]:"fire-analytics-compat",[Eg]:"fire-app-check",[Ig]:"fire-app-check-compat",[wg]:"fire-auth",[bg]:"fire-auth-compat",[Tg]:"fire-rtdb",[Cg]:"fire-rtdb-compat",[Sg]:"fire-fn",[kg]:"fire-fn-compat",[Rg]:"fire-iid",[Ag]:"fire-iid-compat",[Ng]:"fire-fcm",[Pg]:"fire-fcm-compat",[Dg]:"fire-perf",[Og]:"fire-perf-compat",[Mg]:"fire-rc",[Lg]:"fire-rc-compat",[xg]:"fire-gcs",[Fg]:"fire-gcs-compat",[Ug]:"fire-fst",[Bg]:"fire-fst-compat","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
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
 */const nr=new Map,Rl=new Map;function $g(n,e){try{n.container.addComponent(e)}catch(t){gn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function it(n){const e=n.name;if(Rl.has(e))return gn.debug(`There were multiple attempts to register component ${e}.`),!1;Rl.set(e,n);for(const t of nr.values())$g(t,n);return!0}function Cn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const jg={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Lt=new Tn("app","Firebase",jg);/**
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
 */class qg{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ti=Wg;function qd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:kl,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Lt.create("bad-app-name",{appName:String(s)});if(t||(t=Ld()),!t)throw Lt.create("no-options");const r=nr.get(s);if(r){if(hs(t,r.options)&&hs(i,r.config))return r;throw Lt.create("duplicate-app",{appName:s})}const o=new Z_(s);for(const l of Rl.values())o.addComponent(l);const a=new qg(t,i,o);return nr.set(s,a),a}function Xl(n=kl){const e=nr.get(n);if(!e&&n===kl&&Ld())return qd();if(!e)throw Lt.create("no-app",{appName:n});return e}function Se(n,e,t){var i;let s=(i=Hg[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gn.warn(a.join(" "));return}it(new Be(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Gg="firebase-heartbeat-database",zg=1,ds="firebase-heartbeat-store";let al=null;function Gd(){return al||(al=dg(Gg,zg,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ds)}}}).catch(n=>{throw Lt.create("idb-open",{originalErrorMessage:n.message})})),al}async function Kg(n){try{return await(await Gd()).transaction(ds).objectStore(ds).get(zd(n))}catch(e){if(e instanceof st)gn.warn(e.message);else{const t=Lt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gn.warn(t.message)}}}async function _h(n,e){try{const i=(await Gd()).transaction(ds,"readwrite");await i.objectStore(ds).put(e,zd(n)),await i.done}catch(t){if(t instanceof st)gn.warn(t.message);else{const i=Lt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gn.warn(i.message)}}}function zd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Yg=1024,Qg=30*24*60*60*1e3;class Jg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Zg(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=gh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Qg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=gh(),{heartbeatsToSend:t,unsentEntries:i}=Xg(this._heartbeatsCache.heartbeats),s=Zs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function gh(){return new Date().toISOString().substring(0,10)}function Xg(n,e=Yg){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),mh(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),mh(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Zg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vd()?Wd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Kg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return _h(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return _h(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function mh(n){return Zs(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function em(n){it(new Be("platform-logger",e=>new _g(e),"PRIVATE")),it(new Be("heartbeat",e=>new Jg(e),"PRIVATE")),Se(Sl,ph,n),Se(Sl,ph,"esm2017"),Se("fire-js","")}em("");var tm="firebase",nm="9.22.1";/**
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
 */Se(tm,nm,"app");const im=(n,e)=>e.some(t=>n instanceof t);let vh,yh;function sm(){return vh||(vh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rm(){return yh||(yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kd=new WeakMap,Al=new WeakMap,Yd=new WeakMap,ll=new WeakMap,Zl=new WeakMap;function om(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(xt(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Kd.set(t,n)}).catch(()=>{}),Zl.set(e,n),e}function am(n){if(Al.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Al.set(n,e)}let Nl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Al.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function lm(n){Nl=n(Nl)}function cm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(cl(this),e,...t);return Yd.set(i,e.sort?e.sort():[e]),xt(i)}:rm().includes(n)?function(...e){return n.apply(cl(this),e),xt(Kd.get(this))}:function(...e){return xt(n.apply(cl(this),e))}}function um(n){return typeof n=="function"?cm(n):(n instanceof IDBTransaction&&am(n),im(n,sm())?new Proxy(n,Nl):n)}function xt(n){if(n instanceof IDBRequest)return om(n);if(ll.has(n))return ll.get(n);const e=um(n);return e!==n&&(ll.set(n,e),Zl.set(e,n)),e}const cl=n=>Zl.get(n);function hm(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=xt(o);return i&&o.addEventListener("upgradeneeded",l=>{i(xt(o.result),l.oldVersion,l.newVersion,xt(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const dm=["get","getKey","getAll","getAllKeys","count"],fm=["put","add","delete","clear"],ul=new Map;function Ih(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ul.get(e))return ul.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=fm.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||dm.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return ul.set(e,r),r}lm(n=>({...n,get:(e,t,i)=>Ih(e,t)||n.get(e,t,i),has:(e,t)=>!!Ih(e,t)||n.has(e,t)}));const Qd="@firebase/installations",ec="0.6.4";/**
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
 */const Jd=1e4,Xd=`w:${ec}`,Zd="FIS_v2",pm="https://firebaseinstallations.googleapis.com/v1",_m=60*60*1e3,gm="installations",mm="Installations";/**
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
 */const vm={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},mn=new Tn(gm,mm,vm);function ef(n){return n instanceof st&&n.code.includes("request-failed")}/**
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
 */function tf({projectId:n}){return`${pm}/projects/${n}/installations`}function nf(n){return{token:n.token,requestStatus:2,expiresIn:Im(n.expiresIn),creationTime:Date.now()}}async function sf(n,e){const i=(await e.json()).error;return mn.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function rf({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ym(n,{refreshToken:e}){const t=rf(n);return t.append("Authorization",Em(e)),t}async function of(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Im(n){return Number(n.replace("s","000"))}function Em(n){return`${Zd} ${n}`}/**
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
 */async function wm({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=tf(n),s=rf(n),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:t,authVersion:Zd,appId:n.appId,sdkVersion:Xd},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await of(()=>fetch(i,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:nf(c.authToken)}}else throw await sf("Create Installation",l)}/**
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
 */function af(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function bm(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Tm=/^[cdef][\w-]{21}$/,Pl="";function Cm(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Sm(n);return Tm.test(t)?t:Pl}catch{return Pl}}function Sm(n){return bm(n).substr(0,22)}/**
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
 */function Sr(n){return`${n.appName}!${n.appId}`}/**
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
 */const lf=new Map;function cf(n,e){const t=Sr(n);uf(t,e),km(t,e)}function uf(n,e){const t=lf.get(n);if(t)for(const i of t)i(e)}function km(n,e){const t=Rm();t&&t.postMessage({key:n,fid:e}),Am()}let hn=null;function Rm(){return!hn&&"BroadcastChannel"in self&&(hn=new BroadcastChannel("[Firebase] FID Change"),hn.onmessage=n=>{uf(n.data.key,n.data.fid)}),hn}function Am(){lf.size===0&&hn&&(hn.close(),hn=null)}/**
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
 */const Nm="firebase-installations-database",Pm=1,vn="firebase-installations-store";let hl=null;function tc(){return hl||(hl=hm(Nm,Pm,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(vn)}}})),hl}async function ir(n,e){const t=Sr(n),s=(await tc()).transaction(vn,"readwrite"),r=s.objectStore(vn),o=await r.get(t);return await r.put(e,t),await s.done,(!o||o.fid!==e.fid)&&cf(n,e.fid),e}async function hf(n){const e=Sr(n),i=(await tc()).transaction(vn,"readwrite");await i.objectStore(vn).delete(e),await i.done}async function kr(n,e){const t=Sr(n),s=(await tc()).transaction(vn,"readwrite"),r=s.objectStore(vn),o=await r.get(t),a=e(o);return a===void 0?await r.delete(t):await r.put(a,t),await s.done,a&&(!o||o.fid!==a.fid)&&cf(n,a.fid),a}/**
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
 */async function nc(n){let e;const t=await kr(n.appConfig,i=>{const s=Dm(i),r=Om(n,s);return e=r.registrationPromise,r.installationEntry});return t.fid===Pl?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Dm(n){const e=n||{fid:Cm(),registrationStatus:0};return df(e)}function Om(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(mn.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=Mm(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Lm(n)}:{installationEntry:e}}async function Mm(n,e){try{const t=await wm(n,e);return ir(n.appConfig,t)}catch(t){throw ef(t)&&t.customData.serverCode===409?await hf(n.appConfig):await ir(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Lm(n){let e=await Eh(n.appConfig);for(;e.registrationStatus===1;)await af(100),e=await Eh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await nc(n);return i||t}return e}function Eh(n){return kr(n,e=>{if(!e)throw mn.create("installation-not-found");return df(e)})}function df(n){return xm(n)?{fid:n.fid,registrationStatus:0}:n}function xm(n){return n.registrationStatus===1&&n.registrationTime+Jd<Date.now()}/**
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
 */async function Fm({appConfig:n,heartbeatServiceProvider:e},t){const i=Um(n,t),s=ym(n,t),r=e.getImmediate({optional:!0});if(r){const c=await r.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Xd,appId:n.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await of(()=>fetch(i,a));if(l.ok){const c=await l.json();return nf(c)}else throw await sf("Generate Auth Token",l)}function Um(n,{fid:e}){return`${tf(n)}/${e}/authTokens:generate`}/**
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
 */async function ic(n,e=!1){let t;const i=await kr(n.appConfig,r=>{if(!ff(r))throw mn.create("not-registered");const o=r.authToken;if(!e&&Wm(o))return r;if(o.requestStatus===1)return t=Bm(n,e),r;{if(!navigator.onLine)throw mn.create("app-offline");const a=$m(r);return t=Vm(n,a),a}});return t?await t:i.authToken}async function Bm(n,e){let t=await wh(n.appConfig);for(;t.authToken.requestStatus===1;)await af(100),t=await wh(n.appConfig);const i=t.authToken;return i.requestStatus===0?ic(n,e):i}function wh(n){return kr(n,e=>{if(!ff(e))throw mn.create("not-registered");const t=e.authToken;return jm(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Vm(n,e){try{const t=await Fm(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await ir(n.appConfig,i),t}catch(t){if(ef(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await hf(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ir(n.appConfig,i)}throw t}}function ff(n){return n!==void 0&&n.registrationStatus===2}function Wm(n){return n.requestStatus===2&&!Hm(n)}function Hm(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+_m}function $m(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function jm(n){return n.requestStatus===1&&n.requestTime+Jd<Date.now()}/**
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
 */async function qm(n){const e=n,{installationEntry:t,registrationPromise:i}=await nc(e);return i?i.catch(console.error):ic(e).catch(console.error),t.fid}/**
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
 */async function Gm(n,e=!1){const t=n;return await zm(t),(await ic(t,e)).token}async function zm(n){const{registrationPromise:e}=await nc(n);e&&await e}/**
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
 */function Km(n){if(!n||!n.options)throw dl("App Configuration");if(!n.name)throw dl("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw dl(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function dl(n){return mn.create("missing-app-config-values",{valueName:n})}/**
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
 */const pf="installations",Ym="installations-internal",Qm=n=>{const e=n.getProvider("app").getImmediate(),t=Km(e),i=Cn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Jm=n=>{const e=n.getProvider("app").getImmediate(),t=Cn(e,pf).getImmediate();return{getId:()=>qm(t),getToken:s=>Gm(t,s)}};function Xm(){it(new Be(pf,Qm,"PUBLIC")),it(new Be(Ym,Jm,"PRIVATE"))}Xm();Se(Qd,ec);Se(Qd,ec,"esm2017");/**
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
 */const sr="analytics",Zm="firebase_id",ev="origin",tv=60*1e3,nv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",sc="https://www.googletagmanager.com/gtag/js";/**
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
 */const _e=new Cr("@firebase/analytics");/**
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
 */const iv={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},we=new Tn("analytics","Analytics",iv);/**
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
 */function sv(n){if(!n.startsWith(sc)){const e=we.create("invalid-gtag-resource",{gtagURL:n});return _e.warn(e.message),""}return n}function _f(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function rv(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function ov(n,e){const t=rv("firebase-js-sdk-policy",{createScriptURL:sv}),i=document.createElement("script"),s=`${sc}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function av(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function lv(n,e,t,i,s,r){const o=i[s];try{if(o)await e[o];else{const l=(await _f(t)).find(c=>c.measurementId===s);l&&await e[l.appId]}}catch(a){_e.error(a)}n("config",s,r)}async function cv(n,e,t,i,s){try{let r=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await _f(t);for(const l of o){const c=a.find(h=>h.measurementId===l),d=c&&e[c.appId];if(d)r.push(d);else{r=[];break}}}r.length===0&&(r=Object.values(e)),await Promise.all(r),n("event",i,s||{})}catch(r){_e.error(r)}}function uv(n,e,t,i){async function s(r,...o){try{if(r==="event"){const[a,l]=o;await cv(n,e,t,a,l)}else if(r==="config"){const[a,l]=o;await lv(n,e,t,i,a,l)}else if(r==="consent"){const[a]=o;n("consent","update",a)}else if(r==="get"){const[a,l,c]=o;n("get",a,l,c)}else if(r==="set"){const[a]=o;n("set",a)}else n(r,...o)}catch(a){_e.error(a)}}return s}function hv(n,e,t,i,s){let r=function(...o){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(r=window[s]),window[s]=uv(r,n,e,t),{gtagCore:r,wrappedGtag:window[s]}}function dv(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(sc)&&t.src.includes(n))return t;return null}/**
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
 */const fv=30,pv=1e3;class _v{constructor(e={},t=pv){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const gf=new _v;function gv(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function mv(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:gv(i)},r=nv.replace("{app-id}",t),o=await fetch(r,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw we.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function vv(n,e=gf,t){const{appId:i,apiKey:s,measurementId:r}=n.options;if(!i)throw we.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw we.create("no-api-key")}const o=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ev;return setTimeout(async()=>{a.abort()},t!==void 0?t:tv),mf({appId:i,apiKey:s,measurementId:r},o,a,e)}async function mf(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=gf){var r;const{appId:o,measurementId:a}=n;try{await yv(i,e)}catch(l){if(a)return _e.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await mv(n);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!Iv(c)){if(s.deleteThrottleMetadata(o),a)return _e.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const d=Number((r=c==null?void 0:c.customData)===null||r===void 0?void 0:r.httpStatus)===503?uh(t,s.intervalMillis,fv):uh(t,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return s.setThrottleMetadata(o,h),_e.debug(`Calling attemptFetch again in ${d} millis`),mf(n,h,i,s)}}function yv(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(r),i(we.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Iv(n){if(!(n instanceof st)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Ev{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function wv(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const r=await e,o=Object.assign(Object.assign({},i),{send_to:r});n("event",t,o)}}/**
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
 */async function bv(){if(Vd())try{await Wd()}catch(n){return _e.warn(we.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return _e.warn(we.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Tv(n,e,t,i,s,r,o){var a;const l=vv(n);l.then(y=>{t[y.measurementId]=y.appId,n.options.measurementId&&y.measurementId!==n.options.measurementId&&_e.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>_e.error(y)),e.push(l);const c=bv().then(y=>{if(y)return i.getId()}),[d,h]=await Promise.all([l,c]);dv(r)||ov(r,d.measurementId),s("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[ev]="firebase",f.update=!0,h!=null&&(f[Zm]=h),s("config",d.measurementId,f),d.measurementId}/**
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
 */class Cv{constructor(e){this.app=e}_delete(){return delete ss[this.app.options.appId],Promise.resolve()}}let ss={},bh=[];const Th={};let fl="dataLayer",Sv="gtag",Ch,vf,Sh=!1;function kv(){const n=[];if(Fd()&&n.push("This is a browser extension environment."),L_()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=we.create("invalid-analytics-context",{errorInfo:e});_e.warn(t.message)}}function Rv(n,e,t){kv();const i=n.options.appId;if(!i)throw we.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)_e.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw we.create("no-api-key");if(ss[i]!=null)throw we.create("already-exists",{id:i});if(!Sh){av(fl);const{wrappedGtag:r,gtagCore:o}=hv(ss,bh,Th,fl,Sv);vf=r,Ch=o,Sh=!0}return ss[i]=Tv(n,bh,Th,e,Ch,fl,t),new Cv(n)}function Av(n=Xl()){n=oe(n);const e=Cn(n,sr);return e.isInitialized()?e.getImmediate():Nv(n)}function Nv(n,e={}){const t=Cn(n,sr);if(t.isInitialized()){const s=t.getImmediate();if(hs(e,t.getOptions()))return s;throw we.create("already-initialized")}return t.initialize({options:e})}function Pv(n,e,t,i){n=oe(n),wv(vf,ss[n.app.options.appId],e,t,i).catch(s=>_e.error(s))}const kh="@firebase/analytics",Rh="0.10.0";function Dv(){it(new Be(sr,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Rv(i,s,t)},"PUBLIC")),it(new Be("analytics-internal",n,"PRIVATE")),Se(kh,Rh),Se(kh,Rh,"esm2017");function n(e){try{const t=e.getProvider(sr).getImmediate();return{logEvent:(i,s,r)=>Pv(t,i,s,r)}}catch(t){throw we.create("interop-component-reg-failed",{reason:t})}}}Dv();function rc(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function yf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ov=yf,If=new Tn("auth","Firebase",yf());/**
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
 */const rr=new Cr("@firebase/auth");function Mv(n,...e){rr.logLevel<=x.WARN&&rr.warn(`Auth (${Ti}): ${n}`,...e)}function Ys(n,...e){rr.logLevel<=x.ERROR&&rr.error(`Auth (${Ti}): ${n}`,...e)}/**
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
 */function pt(n,...e){throw oc(n,...e)}function tt(n,...e){return oc(n,...e)}function Lv(n,e,t){const i=Object.assign(Object.assign({},Ov()),{[e]:t});return new Tn("auth","Firebase",i).create(e,{appName:n.name})}function oc(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return If.create(n,...e)}function k(n,e,...t){if(!n)throw oc(e,...t)}function ut(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ys(e),new Error(e)}function _t(n,e){n||ut(e)}/**
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
 */function Dl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function xv(){return Ah()==="http:"||Ah()==="https:"}function Ah(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Fv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(xv()||Fd()||"connection"in navigator)?navigator.onLine:!0}function Uv(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Es{constructor(e,t){this.shortDelay=e,this.longDelay=t,_t(t>e,"Short delay should be less than long delay!"),this.isMobile=Yl()||Ud()}get(){return Fv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ac(n,e){_t(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Ef{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Vv=new Es(3e4,6e4);function lc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ci(n,e,t,i,s={}){return wf(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=bi(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Ef.fetch()(Tf(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function wf(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Bv),e);try{const s=new Wv(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Gs(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gs(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Gs(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Gs(n,"user-disabled",o);const d=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Lv(n,d,c);pt(n,d)}}catch(s){if(s instanceof st)throw s;pt(n,"network-request-failed",{message:String(s)})}}async function bf(n,e,t,i,s={}){const r=await Ci(n,e,t,i,s);return"mfaPendingCredential"in r&&pt(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Tf(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?ac(n.config,s):`${n.config.apiScheme}://${s}`}class Wv{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(tt(this.auth,"network-request-failed")),Vv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gs(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=tt(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function Hv(n,e){return Ci(n,"POST","/v1/accounts:delete",e)}async function $v(n,e){return Ci(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function rs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jv(n,e=!1){const t=oe(n),i=await t.getIdToken(e),s=cc(i);k(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:rs(pl(s.auth_time)),issuedAtTime:rs(pl(s.iat)),expirationTime:rs(pl(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function pl(n){return Number(n)*1e3}function cc(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ys("JWT malformed, contained fewer than 3 sections"),null;try{const s=er(t);return s?JSON.parse(s):(Ys("Failed to decode base64 JWT payload"),null)}catch(s){return Ys("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function qv(n){const e=cc(n);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vi(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof st&&Gv(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Gv({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class zv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rs(this.lastLoginAt),this.creationTime=rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function or(n){var e;const t=n.auth,i=await n.getIdToken(),s=await vi(n,$v(t,{idToken:i}));k(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Qv(r.providerUserInfo):[],a=Yv(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Cf(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(n,h)}async function Kv(n){const e=oe(n);await or(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yv(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Qv(n){return n.map(e=>{var{providerId:t}=e,i=rc(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Jv(n,e){const t=await wf(n,{},async()=>{const i=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Tf(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ef.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):qv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Jv(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new fs;return i&&(k(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(k(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(k(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fs,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
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
 */function Rt(n,e){k(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class pn{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=rc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Cf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await vi(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jv(this,e)}reload(){return Kv(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new pn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await or(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vi(this,Hv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,d;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,f=(s=t.email)!==null&&s!==void 0?s:void 0,y=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,E=(o=t.photoURL)!==null&&o!==void 0?o:void 0,A=(a=t.tenantId)!==null&&a!==void 0?a:void 0,D=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,M=(c=t.createdAt)!==null&&c!==void 0?c:void 0,j=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:K,emailVerified:ve,isAnonymous:ae,providerData:ye,stsTokenManager:It}=t;k(K&&It,e,"internal-error");const ke=fs.fromJSON(this.name,It);k(typeof K=="string",e,"internal-error"),Rt(h,e.name),Rt(f,e.name),k(typeof ve=="boolean",e,"internal-error"),k(typeof ae=="boolean",e,"internal-error"),Rt(y,e.name),Rt(E,e.name),Rt(A,e.name),Rt(D,e.name),Rt(M,e.name),Rt(j,e.name);const Et=new pn({uid:K,auth:e,email:f,emailVerified:ve,displayName:h,isAnonymous:ae,photoURL:E,phoneNumber:y,tenantId:A,stsTokenManager:ke,createdAt:M,lastLoginAt:j});return ye&&Array.isArray(ye)&&(Et.providerData=ye.map(Wt=>Object.assign({},Wt))),D&&(Et._redirectEventId=D),Et}static async _fromIdTokenResponse(e,t,i=!1){const s=new fs;s.updateFromServerResponse(t);const r=new pn({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await or(r),r}}/**
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
 */const Nh=new Map;function ht(n){_t(n instanceof Function,"Expected a class definition");let e=Nh.get(n);return e?(_t(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Nh.set(n,e),e)}/**
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
 */class Sf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Sf.type="NONE";const Ph=Sf;/**
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
 */function Qs(n,e,t){return`firebase:${n}:${e}:${t}`}class hi{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Qs(this.userKey,s.apiKey,r),this.fullPersistenceKey=Qs("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new hi(ht(Ph),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||ht(Ph);const o=Qs(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){const h=pn._fromJSON(e,d);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new hi(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new hi(r,e,i))}}/**
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
 */function Dh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Af(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(kf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pf(e))return"Blackberry";if(Df(e))return"Webos";if(uc(e))return"Safari";if((e.includes("chrome/")||Rf(e))&&!e.includes("edge/"))return"Chrome";if(Nf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function kf(n=se()){return/firefox\//i.test(n)}function uc(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rf(n=se()){return/crios\//i.test(n)}function Af(n=se()){return/iemobile/i.test(n)}function Nf(n=se()){return/android/i.test(n)}function Pf(n=se()){return/blackberry/i.test(n)}function Df(n=se()){return/webos/i.test(n)}function Rr(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Xv(n=se()){var e;return Rr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zv(){return M_()&&document.documentMode===10}function Of(n=se()){return Rr(n)||Nf(n)||Df(n)||Pf(n)||/windows phone/i.test(n)||Af(n)}function ey(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Mf(n,e=[]){let t;switch(n){case"Browser":t=Dh(se());break;case"Worker":t=`${Dh(se())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ti}/${i}`}async function Lf(n,e){return Ci(n,"GET","/v2/recaptchaConfig",lc(n,e))}function Oh(n){return n!==void 0&&n.enterprise!==void 0}class xf{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function ty(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Ff(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=tt("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",ty().appendChild(i)})}function ny(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const iy="https://www.google.com/recaptcha/enterprise.js?render=",sy="recaptcha-enterprise",ry="NO_RECAPTCHA";class oy{constructor(e){this.type=sy,this.auth=ws(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{Lf(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new xf(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Oh(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(ry)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&Oh(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ff(iy+a).then(()=>{s(a,r,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
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
 */class ay{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class ly{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mh(this),this.idTokenSubscription=new Mh(this),this.beforeStateQueue=new ay(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=If,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ht(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await hi.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await or(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Uv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?oe(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}async initializeRecaptchaConfig(){const e=await Lf(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new xf(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new oy(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Tn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ht(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return k(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Mv(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ws(n){return oe(n)}class Mh{constructor(e){this.auth=e,this.observer=null,this.addObserver=H_(t=>this.observer=t)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function cy(n,e){const t=Cn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(hs(r,e??{}))return s;pt(s,"already-initialized")}return t.initialize({options:e})}function uy(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ht);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function hy(n,e,t){const i=ws(n);k(i._canInitEmulator,i,"emulator-config-failed"),k(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Uf(e),{host:o,port:a}=dy(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||fy()}function Uf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function dy(n){const e=Uf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Lh(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Lh(o)}}}function Lh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function fy(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Bf{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ut("not implemented")}_getIdTokenResponse(e){return ut("not implemented")}_linkToIdToken(e,t){return ut("not implemented")}_getReauthenticationResolver(e){return ut("not implemented")}}/**
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
 */async function di(n,e){return bf(n,"POST","/v1/accounts:signInWithIdp",lc(n,e))}/**
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
 */const py="http://localhost";class yn extends Bf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=rc(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new yn(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return di(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,di(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,di(e,t)}buildRequest(){const e={requestUri:py,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=bi(t)}return e}}/**
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
 */class Vf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bs extends Vf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nt extends bs{constructor(){super("facebook.com")}static credential(e){return yn._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
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
 */class Pt extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Pt.credential(t,i)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
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
 */class Dt extends bs{constructor(){super("github.com")}static credential(e){return yn._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.GITHUB_SIGN_IN_METHOD="github.com";Dt.PROVIDER_ID="github.com";/**
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
 */class Ot extends bs{constructor(){super("twitter.com")}static credential(e,t){return yn._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ot.credential(t,i)}catch{return null}}}Ot.TWITTER_SIGN_IN_METHOD="twitter.com";Ot.PROVIDER_ID="twitter.com";/**
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
 */async function _y(n,e){return bf(n,"POST","/v1/accounts:signUp",lc(n,e))}/**
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
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await pn._fromIdTokenResponse(e,i,s),o=xh(i);return new Ut({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=xh(i);return new Ut({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function xh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function gy(n){var e;const t=ws(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ut({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await _y(t,{returnSecureToken:!0}),s=await Ut._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class ar extends st{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ar.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new ar(e,t,i,s)}}function Wf(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ar._fromErrorAndOperation(n,r,e,i):r})}async function my(n,e,t=!1){const i=await vi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ut._forOperation(n,"link",i)}/**
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
 */async function vy(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await vi(n,Wf(i,s,e,n),t);k(r.idToken,i,"internal-error");const o=cc(r.idToken);k(o,i,"internal-error");const{sub:a}=o;return k(n.uid===a,i,"user-mismatch"),Ut._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&pt(i,"user-mismatch"),r}}/**
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
 */async function yy(n,e,t=!1){const i="signIn",s=await Wf(n,i,e),r=await Ut._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}/**
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
 */async function Iy(n,e){return Ci(n,"POST","/v1/accounts:update",e)}/**
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
 */async function Ey(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=oe(n),r={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await vi(i,Iy(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function wy(n,e,t,i){return oe(n).onIdTokenChanged(e,t,i)}function by(n,e,t){return oe(n).beforeAuthStateChanged(e,t)}function Ty(n,e,t,i){return oe(n).onAuthStateChanged(e,t,i)}const lr="__sak";/**
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
 */class Hf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(lr,"1"),this.storage.removeItem(lr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Cy(){const n=se();return uc(n)||Rr(n)}const Sy=1e3,ky=10;class $f extends Hf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cy()&&ey(),this.fallbackToPolling=Of(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Zv()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ky):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Sy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$f.type="LOCAL";const Ry=$f;/**
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
 */class jf extends Hf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jf.type="SESSION";const qf=jf;/**
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
 */function Ay(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ar{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Ar(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await Ay(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ar.receivers=[];/**
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
 */function hc(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Ny{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=hc("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(f.data.response);break;default:clearTimeout(d),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function Py(n){nt().location.href=n}/**
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
 */function Gf(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function Dy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Oy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function My(){return Gf()?self:null}/**
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
 */const zf="firebaseLocalStorageDb",Ly=1,cr="firebaseLocalStorage",Kf="fbase_key";class Ts{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nr(n,e){return n.transaction([cr],e?"readwrite":"readonly").objectStore(cr)}function xy(){const n=indexedDB.deleteDatabase(zf);return new Ts(n).toPromise()}function Ol(){const n=indexedDB.open(zf,Ly);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(cr,{keyPath:Kf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(cr)?e(i):(i.close(),await xy(),e(await Ol()))})})}async function Fh(n,e,t){const i=Nr(n,!0).put({[Kf]:e,value:t});return new Ts(i).toPromise()}async function Fy(n,e){const t=Nr(n,!1).get(e),i=await new Ts(t).toPromise();return i===void 0?null:i.value}function Uh(n,e){const t=Nr(n,!0).delete(e);return new Ts(t).toPromise()}const Uy=800,By=3;class Yf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ol(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>By)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ar._getInstance(My()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Dy(),!this.activeServiceWorker)return;this.sender=new Ny(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Oy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ol();return await Fh(e,lr,"1"),await Uh(e,lr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Fh(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Fy(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Uh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Nr(s,!1).getAll();return new Ts(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Uy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yf.type="LOCAL";const Vy=Yf;new Es(3e4,6e4);/**
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
 */function Wy(n,e){return e?ht(e):(k(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class dc extends Bf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,t){return di(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hy(n){return yy(n.auth,new dc(n),n.bypassAuthState)}function $y(n){const{auth:e,user:t}=n;return k(t,e,"internal-error"),vy(t,new dc(n),n.bypassAuthState)}async function jy(n){const{auth:e,user:t}=n;return k(t,e,"internal-error"),my(t,new dc(n),n.bypassAuthState)}/**
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
 */class Qf{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hy;case"linkViaPopup":case"linkViaRedirect":return jy;case"reauthViaPopup":case"reauthViaRedirect":return $y;default:pt(this.auth,"internal-error")}}resolve(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_t(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qy=new Es(2e3,1e4);class li extends Qf{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,li.currentPopupAction&&li.currentPopupAction.cancel(),li.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){_t(this.filter.length===1,"Popup operations only handle one event");const e=hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,li.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qy.get())};e()}}li.currentPopupAction=null;/**
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
 */const Gy="pendingRedirect",Js=new Map;class zy extends Qf{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Js.get(this.auth._key());if(!e){try{const i=await Ky(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Js.set(this.auth._key(),e)}return this.bypassAuthState||Js.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ky(n,e){const t=Jy(e),i=Qy(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Yy(n,e){Js.set(n._key(),e)}function Qy(n){return ht(n._redirectPersistence)}function Jy(n){return Qs(Gy,n.config.apiKey,n.name)}async function Xy(n,e,t=!1){const i=ws(n),s=Wy(i,e),o=await new zy(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Zy=10*60*1e3;class eI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Jf(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(tt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bh(e))}saveEventToCache(e){this.cachedEventUids.add(Bh(e)),this.lastProcessedEventTime=Date.now()}}function Bh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Jf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jf(n);default:return!1}}/**
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
 */async function nI(n,e={}){return Ci(n,"GET","/v1/projects",e)}/**
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
 */const iI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sI=/^https?/;async function rI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await nI(n);for(const t of e)try{if(oI(t))return}catch{}pt(n,"unauthorized-domain")}function oI(n){const e=Dl(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!sI.test(t))return!1;if(iI.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const aI=new Es(3e4,6e4);function Vh(){const n=nt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lI(n){return new Promise((e,t)=>{var i,s,r;function o(){Vh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vh(),t(tt(n,"network-request-failed"))},timeout:aI.get()})}if(!((s=(i=nt().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=nt().gapi)===null||r===void 0)&&r.load)o();else{const a=ny("iframefcb");return nt()[a]=()=>{gapi.load?o():t(tt(n,"network-request-failed"))},Ff(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Xs=null,e})}let Xs=null;function cI(n){return Xs=Xs||lI(n),Xs}/**
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
 */const uI=new Es(5e3,15e3),hI="__/auth/iframe",dI="emulator/auth/iframe",fI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _I(n){const e=n.config;k(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ac(e,dI):`https://${n.config.authDomain}/${hI}`,i={apiKey:e.apiKey,appName:n.name,v:Ti},s=pI.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${bi(i).slice(1)}`}async function gI(n){const e=await cI(n),t=nt().gapi;return k(t,n,"internal-error"),e.open({where:document.body,url:_I(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fI,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=tt(n,"network-request-failed"),a=nt().setTimeout(()=>{r(o)},uI.get());function l(){nt().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const mI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vI=500,yI=600,II="_blank",EI="http://localhost";class Wh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wI(n,e,t,i=vI,s=yI){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},mI),{width:i.toString(),height:s.toString(),top:r,left:o}),c=se().toLowerCase();t&&(a=Rf(c)?II:t),kf(c)&&(e=e||EI,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[y,E])=>`${f}${y}=${E},`,"");if(Xv(c)&&a!=="_self")return bI(e||"",a),new Wh(null);const h=window.open(e||"",a,d);k(h,n,"popup-blocked");try{h.focus()}catch{}return new Wh(h)}function bI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const TI="__/auth/handler",CI="emulator/auth/handler",SI=encodeURIComponent("fac");async function Hh(n,e,t,i,s,r){k(n.config.authDomain,n,"auth-domain-config-required"),k(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ti,eventId:s};if(e instanceof Vf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",bl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries(r||{}))o[d]=h}if(e instanceof bs){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),c=l?`#${SI}=${encodeURIComponent(l)}`:"";return`${kI(n)}?${bi(a).slice(1)}${c}`}function kI({config:n}){return n.emulator?ac(n,CI):`https://${n.authDomain}/${TI}`}/**
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
 */const _l="webStorageSupport";class RI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qf,this._completeRedirectFn=Xy,this._overrideRedirectResult=Yy}async _openPopup(e,t,i,s){var r;_t((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Hh(e,t,i,Dl(),s);return wI(e,o,hc())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Hh(e,t,i,Dl(),s);return Py(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(_t(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await gI(e),i=new eI(e);return t.register("authEvent",s=>(k(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(_l,{type:_l},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[_l];o!==void 0&&t(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=rI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Of()||uc()||Rr()}}const AI=RI;var $h="@firebase/auth",jh="0.23.2";/**
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
 */class NI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function PI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function DI(n){it(new Be("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;k(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mf(n)},c=new ly(i,s,r,l);return uy(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),it(new Be("auth-internal",e=>{const t=ws(e.getProvider("auth").getImmediate());return(i=>new NI(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Se($h,jh,PI(n)),Se($h,jh,"esm2017")}/**
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
 */const OI=5*60,MI=xd("authIdTokenMaxAge")||OI;let qh=null;const LI=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>MI)return;const s=t==null?void 0:t.token;qh!==s&&(qh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function xI(n=Xl()){const e=Cn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=cy(n,{popupRedirectResolver:AI,persistence:[Vy,Ry,qf]}),i=xd("authTokenSyncURL");if(i){const r=LI(i);by(t,r,()=>r(t.currentUser)),wy(t,o=>r(o))}const s=Md("auth");return s&&hy(t,`http://${s}`),t}DI("Browser");const Gh="@firebase/database",zh="0.14.4";/**
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
 */let Xf="";function FI(n){Xf=n}/**
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
 */class UI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Z(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:us(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class BI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return vt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Zf=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new UI(e)}}catch{}return new BI},dn=Zf("localStorage"),Ml=Zf("sessionStorage");/**
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
 */const fi=new Cr("@firebase/database"),VI=function(){let n=1;return function(){return n++}}(),ep=function(n){const e=q_(n),t=new W_;t.update(e);const i=t.digest();return zl.encodeByteArray(i)},Cs=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Cs.apply(null,i):typeof i=="object"?e+=Z(i):e+=i,e+=" "}return e};let _n=null,Kh=!0;const WI=function(n,e){I(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(fi.logLevel=x.VERBOSE,_n=fi.log.bind(fi),e&&Ml.set("logging_enabled",!0)):typeof n=="function"?_n=n:(_n=null,Ml.remove("logging_enabled"))},ie=function(...n){if(Kh===!0&&(Kh=!1,_n===null&&Ml.get("logging_enabled")===!0&&WI(!0)),_n){const e=Cs.apply(null,n);_n(e)}},Ss=function(n){return function(...e){ie(n,...e)}},Ll=function(...n){const e="FIREBASE INTERNAL ERROR: "+Cs(...n);fi.error(e)},gt=function(...n){const e=`FIREBASE FATAL ERROR: ${Cs(...n)}`;throw fi.error(e),new Error(e)},ge=function(...n){const e="FIREBASE WARNING: "+Cs(...n);fi.warn(e)},HI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ge("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},tp=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},$I=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},yi="[MIN_NAME]",In="[MAX_NAME]",Si=function(n,e){if(n===e)return 0;if(n===yi||e===In)return-1;if(e===yi||n===In)return 1;{const t=Yh(n),i=Yh(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},jI=function(n,e){return n===e?0:n<e?-1:1},Zi=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Z(e))},fc=function(n){if(typeof n!="object"||n===null)return Z(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Z(e[i]),t+=":",t+=fc(n[e[i]]);return t+="}",t},np=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function me(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ip=function(n){I(!tp(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},qI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},GI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function zI(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const KI=new RegExp("^-?(0*)\\d{1,10}$"),YI=-2147483648,QI=2147483647,Yh=function(n){if(KI.test(n)){const e=Number(n);if(e>=YI&&e<=QI)return e}return null},ki=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ge("Exception was thrown by user callback.",t),e},Math.floor(0))}},JI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},os=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class XI{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ge(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ZI{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ie("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ge(e)}}class pi{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pi.OWNER="owner";/**
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
 */const pc="5",sp="v",rp="s",op="r",ap="f",lp=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cp="ls",up="p",xl="ac",hp="websocket",dp="long_polling";/**
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
 */class fp{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=dn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&dn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function eE(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function pp(n,e,t){I(typeof e=="string","typeof type must == string"),I(typeof t=="object","typeof params must == object");let i;if(e===hp)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===dp)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);eE(n)&&(t.ns=n.namespace);const s=[];return me(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class tE{constructor(){this.counters_={}}incrementCounter(e,t=1){vt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return S_(this.counters_)}}/**
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
 */const gl={},ml={};function _c(n){const e=n.toString();return gl[e]||(gl[e]=new tE),gl[e]}function nE(n,e){const t=n.toString();return ml[t]||(ml[t]=e()),ml[t]}/**
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
 */class iE{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&ki(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Qh="start",sE="close",rE="pLPCommand",oE="pRTLPCB",_p="id",gp="pw",mp="ser",aE="cb",lE="seg",cE="ts",uE="d",hE="dframe",vp=1870,yp=30,dE=vp-yp,fE=25e3,pE=3e4;class ci{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ss(e),this.stats_=_c(t),this.urlFn=l=>(this.appCheckToken&&(l[xl]=this.appCheckToken),pp(t,dp,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new iE(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(pE)),$I(()=>{if(this.isClosed_)return;this.scriptTagHolder=new gc((...r)=>{const[o,a,l,c,d]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qh)this.id=a,this.password=l;else if(o===sE)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[Qh]="t",i[mp]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[aE]=this.scriptTagHolder.uniqueCallbackIdentifier),i[sp]=pc,this.transportSessionId&&(i[rp]=this.transportSessionId),this.lastSessionId&&(i[cp]=this.lastSessionId),this.applicationId&&(i[up]=this.applicationId),this.appCheckToken&&(i[xl]=this.appCheckToken),typeof location<"u"&&location.hostname&&lp.test(location.hostname)&&(i[op]=ap);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ci.forceAllow_=!0}static forceDisallow(){ci.forceDisallow_=!0}static isAvailable(){return ci.forceAllow_?!0:!ci.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!qI()&&!GI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Dd(t),s=np(i,dE);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[hE]="t",i[_p]=e,i[gp]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Z(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class gc{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=VI(),window[rE+this.uniqueCallbackIdentifier]=e,window[oE+this.uniqueCallbackIdentifier]=t,this.myIFrame=gc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ie("frame writing exception"),a.stack&&ie(a.stack),ie(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ie("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_p]=this.myID,e[gp]=this.myPW,e[mp]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yp+i.length<=vp;){const o=this.pendingSegs.shift();i=i+"&"+lE+s+"="+o.seg+"&"+cE+s+"="+o.ts+"&"+uE+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(fE)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{ie("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const _E=16384,gE=45e3;let ur=null;typeof MozWebSocket<"u"?ur=MozWebSocket:typeof WebSocket<"u"&&(ur=WebSocket);class Le{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ss(this.connId),this.stats_=_c(t),this.connURL=Le.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[sp]=pc,typeof location<"u"&&location.hostname&&lp.test(location.hostname)&&(o[op]=ap),t&&(o[rp]=t),i&&(o[cp]=i),s&&(o[xl]=s),r&&(o[up]=r),pp(e,hp,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,dn.set("previous_websocket_failure",!0);try{let i;Bd(),this.mySock=new ur(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){Le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ur!==null&&!Le.forceDisallow_}static previouslyFailed(){return dn.isInMemoryStorage||dn.get("previous_websocket_failure")===!0}markConnectionHealthy(){dn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=us(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=np(t,_E);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(gE))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Le.responsesRequiredToBeHealthy=2;Le.healthyTimeout=3e4;/**
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
 */class ps{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ci,Le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Le&&Le.isAvailable();let i=t&&!Le.previouslyFailed();if(e.webSocketOnly&&(t||ge("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Le];else{const s=this.transports_=[];for(const r of ps.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);ps.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ps.globalTransportInitialized_=!1;/**
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
 */const mE=6e4,vE=5e3,yE=10*1024,IE=100*1024,vl="t",Jh="d",EE="s",Xh="r",wE="e",Zh="o",ed="a",td="n",nd="p",bE="h";class TE{constructor(e,t,i,s,r,o,a,l,c,d){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ss("c:"+this.id+":"),this.transportManager_=new ps(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=os(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>IE?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>yE?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(vl in e){const t=e[vl];t===ed?this.upgradeIfSecondaryHealthy_():t===Xh?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Zh&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Zi("t",e),i=Zi("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ed,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:td,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Zi("t",e),i=Zi("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Zi(vl,e);if(Jh in e){const i=e[Jh];if(t===bE){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===td){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===EE?this.onConnectionShutdown_(i):t===Xh?this.onReset_(i):t===wE?Ll("Server Error: "+i):t===Zh?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ll("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),pc!==i&&ge("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),os(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mE))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):os(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(vE))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(dn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Ip{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Ep{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){I(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class hr extends Ep{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new hr}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const id=32,sd=768;class U{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function L(){return new U("")}function N(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Bt(n){return n.pieces_.length-n.pieceNum_}function B(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new U(n.pieces_,e)}function wp(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function CE(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function bp(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Tp(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new U(e,0)}function z(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof U)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new U(t,0)}function O(n){return n.pieceNum_>=n.pieces_.length}function fe(n,e){const t=N(n),i=N(e);if(t===null)return e;if(t===i)return fe(B(n),B(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function mc(n,e){if(Bt(n)!==Bt(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function xe(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Bt(n)>Bt(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class SE{constructor(e,t){this.errorPrefix_=t,this.parts_=bp(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Tr(this.parts_[i]);Cp(this)}}function kE(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Tr(e),Cp(n)}function RE(n){const e=n.parts_.pop();n.byteLength_-=Tr(e),n.parts_.length>0&&(n.byteLength_-=1)}function Cp(n){if(n.byteLength_>sd)throw new Error(n.errorPrefix_+"has a key path longer than "+sd+" bytes ("+n.byteLength_+").");if(n.parts_.length>id)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+id+") or object contains a cycle "+un(n))}function un(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class vc extends Ep{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new vc}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const es=1e3,AE=60*5*1e3,rd=30*1e3,NE=1.3,PE=3e4,DE="server_kill",od=3;class ft extends Ip{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ft.nextPersistentConnectionId_++,this.log_=Ss("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=es,this.maxReconnectDelay_=AE,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Bd())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Z(r)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new br,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ft.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&vt(e,"w")){const i=mi(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ge(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||V_(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=rd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=B_(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Z(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ll("Unrecognized action received from server: "+Z(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>PE&&(this.reconnectDelay_=es),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NE)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+ft.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?ie("getToken() completed but was canceled"):(ie("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new TE(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,y=>{ge(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(DE)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&ge(h),l())}}}interrupt(e){ie("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ie("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bl(this.interruptReasons_)&&(this.reconnectDelay_=es,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>fc(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new U(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){ie("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=od&&(this.reconnectDelay_=rd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ie("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=od&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Xf.replace(/\./g,"-")]=1,Yl()?e["framework.cordova"]=1:Ud()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hr.getInstance().currentlyOnline();return bl(this.interruptReasons_)&&e}}ft.nextPersistentConnectionId_=0;ft.nextConnectionId_=0;/**
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
 */class P{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new P(e,t)}}/**
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
 */class Pr{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new P(yi,e),s=new P(yi,t);return this.compare(i,s)!==0}minPost(){return P.MIN}}/**
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
 */let zs;class Sp extends Pr{static get __EMPTY_NODE(){return zs}static set __EMPTY_NODE(e){zs=e}compare(e,t){return Si(e.name,t.name)}isDefinedOn(e){throw wi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return P.MIN}maxPost(){return new P(In,zs)}makePost(e,t){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new P(e,zs)}toString(){return".key"}}const _i=new Sp;/**
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
 */class Ks{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class X{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??X.RED,this.left=s??pe.EMPTY_NODE,this.right=r??pe.EMPTY_NODE}copy(e,t,i,s,r){return new X(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return pe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return pe.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,X.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,X.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}X.RED=!0;X.BLACK=!1;class OE{copy(e,t,i,s,r){return this}insert(e,t,i){return new X(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class pe{constructor(e,t=pe.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new pe(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,X.BLACK,null,null))}remove(e){return new pe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,X.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Ks(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Ks(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Ks(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Ks(this.root_,null,this.comparator_,!0,e)}}pe.EMPTY_NODE=new OE;/**
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
 */function ME(n,e){return Si(n.name,e.name)}function yc(n,e){return Si(n,e)}/**
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
 */let Fl;function LE(n){Fl=n}const kp=function(n){return typeof n=="number"?"number:"+ip(n):"string:"+n},Rp=function(n){if(n.isLeafNode()){const e=n.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vt(e,".sv"),"Priority must be a string or number.")}else I(n===Fl||n.isEmpty(),"priority of unexpected type.");I(n===Fl||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ad;class J{constructor(e,t=J.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Rp(this.priorityNode_)}static set __childrenNodeConstructor(e){ad=e}static get __childrenNodeConstructor(){return ad}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new J(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return O(e)?this:N(e)===".priority"?this.priorityNode_:J.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:J.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=N(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(I(i!==".priority"||Bt(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,J.__childrenNodeConstructor.EMPTY_NODE.updateChild(B(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kp(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ip(this.value_):e+=this.value_,this.lazyHash_=ep(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===J.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof J.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=J.VALUE_TYPE_ORDER.indexOf(t),r=J.VALUE_TYPE_ORDER.indexOf(i);return I(s>=0,"Unknown leaf type: "+t),I(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}J.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ap,Np;function xE(n){Ap=n}function FE(n){Np=n}class UE extends Pr{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Si(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return P.MIN}maxPost(){return new P(In,new J("[PRIORITY-POST]",Np))}makePost(e,t){const i=Ap(e);return new P(t,new J("[PRIORITY-POST]",i))}toString(){return".priority"}}const $=new UE;/**
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
 */const BE=Math.log(2);class VE{constructor(e){const t=r=>parseInt(Math.log(r)/BE,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const dr=function(n,e,t,i){n.sort(e);const s=function(l,c){const d=c-l;let h,f;if(d===0)return null;if(d===1)return h=n[l],f=t?t(h):h,new X(f,h.node,X.BLACK,null,null);{const y=parseInt(d/2,10)+l,E=s(l,y),A=s(y+1,c);return h=n[y],f=t?t(h):h,new X(f,h.node,X.BLACK,E,A)}},r=function(l){let c=null,d=null,h=n.length;const f=function(E,A){const D=h-E,M=h;h-=E;const j=s(D+1,M),K=n[D],ve=t?t(K):K;y(new X(ve,K.node,A,null,j))},y=function(E){c?(c.left=E,c=E):(d=E,c=E)};for(let E=0;E<l.count;++E){const A=l.nextBitIsOne(),D=Math.pow(2,l.count-(E+1));A?f(D,X.BLACK):(f(D,X.BLACK),f(D,X.RED))}return d},o=new VE(n.length),a=r(o);return new pe(i||e,a)};/**
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
 */let yl;const ai={};class dt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return I(ai&&$,"ChildrenNode.ts has not been loaded"),yl=yl||new dt({".priority":ai},{".priority":$}),yl}get(e){const t=mi(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof pe?t:null}hasIndex(e){return vt(this.indexSet_,e.toString())}addIndex(e,t){I(e!==_i,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(P.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=dr(i,e.getCompare()):a=ai;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new dt(d,c)}addToIndexes(e,t){const i=tr(this.indexes_,(s,r)=>{const o=mi(this.indexSet_,r);if(I(o,"Missing index implementation for "+r),s===ai)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(P.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),dr(a,o.getCompare())}else return ai;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new P(e.name,a))),l.insert(e,e.node)}});return new dt(i,this.indexSet_)}removeFromIndexes(e,t){const i=tr(this.indexes_,s=>{if(s===ai)return s;{const r=t.get(e.name);return r?s.remove(new P(e.name,r)):s}});return new dt(i,this.indexSet_)}}/**
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
 */let ts;class S{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Rp(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ts||(ts=new S(new pe(yc),null,dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ts}updatePriority(e){return this.children_.isEmpty()?this:new S(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?ts:t}}getChild(e){const t=N(e);return t===null?this:this.getImmediateChild(t).getChild(B(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(I(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new P(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?ts:this.priorityNode_;return new S(s,o,r)}}updateChild(e,t){const i=N(e);if(i===null)return t;{I(N(e)!==".priority"||Bt(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(B(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild($,(o,a)=>{t[o]=a.val(e),i++,r&&S.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kp(this.getPriority().val())+":"),this.forEachChild($,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":ep(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new P(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new P(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new P(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,P.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,P.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ks?-1:0}withIndex(e){if(e===_i||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new S(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===_i||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator($),s=t.getIterator($);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_i?null:this.indexMap_.get(e.toString())}}S.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class WE extends S{constructor(){super(new pe(yc),S.EMPTY_NODE,dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return S.EMPTY_NODE}isEmpty(){return!1}}const ks=new WE;Object.defineProperties(P,{MIN:{value:new P(yi,S.EMPTY_NODE)},MAX:{value:new P(In,ks)}});Sp.__EMPTY_NODE=S.EMPTY_NODE;J.__childrenNodeConstructor=S;LE(ks);FE(ks);/**
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
 */const HE=!0;function te(n,e=null){if(n===null)return S.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new J(t,te(e))}if(!(n instanceof Array)&&HE){const t=[];let i=!1;if(me(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=te(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new P(o,l)))}}),t.length===0)return S.EMPTY_NODE;const r=dr(t,ME,o=>o.name,yc);if(i){const o=dr(t,$.getCompare());return new S(r,te(e),new dt({".priority":o},{".priority":$}))}else return new S(r,te(e),dt.Default)}else{let t=S.EMPTY_NODE;return me(n,(i,s)=>{if(vt(n,i)&&i.substring(0,1)!=="."){const r=te(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(te(e))}}xE(te);/**
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
 */class $E extends Pr{constructor(e){super(),this.indexPath_=e,I(!O(e)&&N(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Si(e.name,t.name):r}makePost(e,t){const i=te(e),s=S.EMPTY_NODE.updateChild(this.indexPath_,i);return new P(t,s)}maxPost(){const e=S.EMPTY_NODE.updateChild(this.indexPath_,ks);return new P(In,e)}toString(){return bp(this.indexPath_,0).join("/")}}/**
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
 */class jE extends Pr{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Si(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return P.MIN}maxPost(){return P.MAX}makePost(e,t){const i=te(e);return new P(t,i)}toString(){return".value"}}const qE=new jE;/**
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
 */function Pp(n){return{type:"value",snapshotNode:n}}function Ii(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function _s(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function gs(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function GE(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Ic{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(_s(t,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ii(t,i)):o.trackChildChange(gs(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild($,(s,r)=>{t.hasChild(s)||i.trackChildChange(_s(s,r))}),t.isLeafNode()||t.forEachChild($,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(gs(s,r,o))}else i.trackChildChange(Ii(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?S.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ms{constructor(e){this.indexedFilter_=new Ic(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ms.getStartPost_(e),this.endPost_=ms.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new P(t,i))||(i=S.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=S.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(S.EMPTY_NODE);const r=this;return t.forEachChild($,(o,a)=>{r.matches(new P(o,a))||(s=s.updateImmediateChild(o,S.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class zE{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new ms(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new P(t,i))||(i=S.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=S.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=S.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(S.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,S.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,y)=>h(y,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new P(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const y=f==null?1:o(f,l);if(d&&!i.isEmpty()&&y>=0)return r!=null&&r.trackChildChange(gs(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(_s(t,h));const A=a.updateImmediateChild(t,S.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Ii(f.name,f.node)),A.updateImmediateChild(f.name,f.node)):A}}else return i.isEmpty()?e:d&&o(c,l)>=0?(r!=null&&(r.trackChildChange(_s(c.name,c.node)),r.trackChildChange(Ii(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,S.EMPTY_NODE)):e}}/**
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
 */class Ec{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=$}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:yi}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:In}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===$}copy(){const e=new Ec;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function KE(n){return n.loadsAllData()?new Ic(n.getIndex()):n.hasLimit()?new zE(n):new ms(n)}function ld(n){const e={};if(n.isDefault())return e;let t;if(n.index_===$?t="$priority":n.index_===qE?t="$value":n.index_===_i?t="$key":(I(n.index_ instanceof $E,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Z(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Z(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Z(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Z(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Z(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function cd(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==$&&(e.i=n.index_.toString()),e}/**
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
 */class fr extends Ip{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Ss("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=fr.getListenId_(e,i),a={};this.listens_[o]=a;const l=ld(e._queryParams);this.restRequest_(r+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),mi(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,t){const i=fr.getListenId_(e,t);delete this.listens_[i]}get(e){const t=ld(e._queryParams),i=e._path.toString(),s=new br;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bi(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=us(a.responseText)}catch{ge("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&ge("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class YE{constructor(){this.rootNode_=S.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function pr(){return{value:null,children:new Map}}function Dp(n,e,t){if(O(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=N(e);n.children.has(i)||n.children.set(i,pr());const s=n.children.get(i);e=B(e),Dp(s,e,t)}}function Ul(n,e,t){n.value!==null?t(e,n.value):QE(n,(i,s)=>{const r=new U(e.toString()+"/"+i);Ul(s,r,t)})}function QE(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class JE{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&me(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const ud=10*1e3,XE=30*1e3,ZE=5*60*1e3;class ew{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new JE(e);const i=ud+(XE-ud)*Math.random();os(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;me(e,(s,r)=>{r>0&&vt(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),os(this.reportStats_.bind(this),Math.floor(Math.random()*2*ZE))}}/**
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
 */var Fe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Fe||(Fe={}));function Op(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function wc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function bc(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class _r{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=Fe.ACK_USER_WRITE,this.source=Op()}operationForChild(e){if(O(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new U(e));return new _r(L(),t,this.revert)}}else return I(N(this.path)===e,"operationForChild called for unrelated child."),new _r(B(this.path),this.affectedTree,this.revert)}}/**
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
 */class vs{constructor(e,t){this.source=e,this.path=t,this.type=Fe.LISTEN_COMPLETE}operationForChild(e){return O(this.path)?new vs(this.source,L()):new vs(this.source,B(this.path))}}/**
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
 */class En{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=Fe.OVERWRITE}operationForChild(e){return O(this.path)?new En(this.source,L(),this.snap.getImmediateChild(e)):new En(this.source,B(this.path),this.snap)}}/**
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
 */class ys{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=Fe.MERGE}operationForChild(e){if(O(this.path)){const t=this.children.subtree(new U(e));return t.isEmpty()?null:t.value?new En(this.source,L(),t.value):new ys(this.source,L(),t)}else return I(N(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ys(this.source,B(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class wn{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(O(e))return this.isFullyInitialized()&&!this.filtered_;const t=N(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class tw{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function nw(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(GE(o.childName,o.snapshotNode))}),ns(n,s,"child_removed",e,i,t),ns(n,s,"child_added",e,i,t),ns(n,s,"child_moved",r,i,t),ns(n,s,"child_changed",e,i,t),ns(n,s,"value",e,i,t),s}function ns(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>sw(n,a,l)),o.forEach(a=>{const l=iw(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function iw(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function sw(n,e,t){if(e.childName==null||t.childName==null)throw wi("Should only compare child_ events.");const i=new P(e.childName,e.snapshotNode),s=new P(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function Dr(n,e){return{eventCache:n,serverCache:e}}function as(n,e,t,i){return Dr(new wn(e,t,i),n.serverCache)}function Mp(n,e,t,i){return Dr(n.eventCache,new wn(e,t,i))}function Bl(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function bn(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Il;const rw=()=>(Il||(Il=new pe(jI)),Il);class W{constructor(e,t=rw()){this.value=e,this.children=t}static fromObject(e){let t=new W(null);return me(e,(i,s)=>{t=t.set(new U(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:L(),value:this.value};if(O(e))return null;{const i=N(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(B(e),t);return r!=null?{path:z(new U(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(O(e))return this;{const t=N(e),i=this.children.get(t);return i!==null?i.subtree(B(e)):new W(null)}}set(e,t){if(O(e))return new W(t,this.children);{const i=N(e),r=(this.children.get(i)||new W(null)).set(B(e),t),o=this.children.insert(i,r);return new W(this.value,o)}}remove(e){if(O(e))return this.children.isEmpty()?new W(null):new W(null,this.children);{const t=N(e),i=this.children.get(t);if(i){const s=i.remove(B(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new W(null):new W(this.value,r)}else return this}}get(e){if(O(e))return this.value;{const t=N(e),i=this.children.get(t);return i?i.get(B(e)):null}}setTree(e,t){if(O(e))return t;{const i=N(e),r=(this.children.get(i)||new W(null)).setTree(B(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new W(this.value,o)}}fold(e){return this.fold_(L(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(z(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,L(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(O(e))return null;{const r=N(e),o=this.children.get(r);return o?o.findOnPath_(B(e),z(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,L(),t)}foreachOnPath_(e,t,i){if(O(e))return this;{this.value&&i(t,this.value);const s=N(e),r=this.children.get(s);return r?r.foreachOnPath_(B(e),z(t,s),i):new W(null)}}foreach(e){this.foreach_(L(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(z(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Ue{constructor(e){this.writeTree_=e}static empty(){return new Ue(new W(null))}}function ls(n,e,t){if(O(e))return new Ue(new W(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=fe(s,e);return r=r.updateChild(o,t),new Ue(n.writeTree_.set(s,r))}else{const s=new W(t),r=n.writeTree_.setTree(e,s);return new Ue(r)}}}function hd(n,e,t){let i=n;return me(t,(s,r)=>{i=ls(i,z(e,s),r)}),i}function dd(n,e){if(O(e))return Ue.empty();{const t=n.writeTree_.setTree(e,new W(null));return new Ue(t)}}function Vl(n,e){return Sn(n,e)!=null}function Sn(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(fe(t.path,e)):null}function fd(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild($,(i,s)=>{e.push(new P(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new P(i,s.value))}),e}function Ft(n,e){if(O(e))return n;{const t=Sn(n,e);return t!=null?new Ue(new W(t)):new Ue(n.writeTree_.subtree(e))}}function Wl(n){return n.writeTree_.isEmpty()}function Ei(n,e){return Lp(L(),n.writeTree_,e)}function Lp(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(I(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Lp(z(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(z(n,".priority"),i)),t}}/**
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
 */function Tc(n,e){return Bp(e,n)}function ow(n,e,t,i,s){I(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=ls(n.visibleWrites,e,t)),n.lastWriteId=i}function aw(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function lw(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);I(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&cw(a,i.path)?s=!1:xe(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return uw(n),!0;if(i.snap)n.visibleWrites=dd(n.visibleWrites,i.path);else{const a=i.children;me(a,l=>{n.visibleWrites=dd(n.visibleWrites,z(i.path,l))})}return!0}else return!1}function cw(n,e){if(n.snap)return xe(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&xe(z(n.path,t),e))return!0;return!1}function uw(n){n.visibleWrites=xp(n.allWrites,hw,L()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function hw(n){return n.visible}function xp(n,e,t){let i=Ue.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)xe(t,o)?(a=fe(t,o),i=ls(i,a,r.snap)):xe(o,t)&&(a=fe(o,t),i=ls(i,L(),r.snap.getChild(a)));else if(r.children){if(xe(t,o))a=fe(t,o),i=hd(i,a,r.children);else if(xe(o,t))if(a=fe(o,t),O(a))i=hd(i,L(),r.children);else{const l=mi(r.children,N(a));if(l){const c=l.getChild(B(a));i=ls(i,L(),c)}}}else throw wi("WriteRecord should have .snap or .children")}}return i}function Fp(n,e,t,i,s){if(!i&&!s){const r=Sn(n.visibleWrites,e);if(r!=null)return r;{const o=Ft(n.visibleWrites,e);if(Wl(o))return t;if(t==null&&!Vl(o,L()))return null;{const a=t||S.EMPTY_NODE;return Ei(o,a)}}}else{const r=Ft(n.visibleWrites,e);if(!s&&Wl(r))return t;if(!s&&t==null&&!Vl(r,L()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(xe(c.path,e)||xe(e,c.path))},a=xp(n.allWrites,o,e),l=t||S.EMPTY_NODE;return Ei(a,l)}}}function dw(n,e,t){let i=S.EMPTY_NODE;const s=Sn(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild($,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ft(n.visibleWrites,e);return t.forEachChild($,(o,a)=>{const l=Ei(Ft(r,new U(o)),a);i=i.updateImmediateChild(o,l)}),fd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ft(n.visibleWrites,e);return fd(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function fw(n,e,t,i,s){I(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=z(e,t);if(Vl(n.visibleWrites,r))return null;{const o=Ft(n.visibleWrites,r);return Wl(o)?s.getChild(t):Ei(o,s.getChild(t))}}function pw(n,e,t,i){const s=z(e,t),r=Sn(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ft(n.visibleWrites,s);return Ei(o,i.getNode().getImmediateChild(t))}else return null}function _w(n,e){return Sn(n.visibleWrites,e)}function gw(n,e,t,i,s,r,o){let a;const l=Ft(n.visibleWrites,e),c=Sn(l,L());if(c!=null)a=c;else if(t!=null)a=Ei(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let y=f.getNext();for(;y&&d.length<s;)h(y,i)!==0&&d.push(y),y=f.getNext();return d}else return[]}function mw(){return{visibleWrites:Ue.empty(),allWrites:[],lastWriteId:-1}}function gr(n,e,t,i){return Fp(n.writeTree,n.treePath,e,t,i)}function Cc(n,e){return dw(n.writeTree,n.treePath,e)}function pd(n,e,t,i){return fw(n.writeTree,n.treePath,e,t,i)}function mr(n,e){return _w(n.writeTree,z(n.treePath,e))}function vw(n,e,t,i,s,r){return gw(n.writeTree,n.treePath,e,t,i,s,r)}function Sc(n,e,t){return pw(n.writeTree,n.treePath,e,t)}function Up(n,e){return Bp(z(n.treePath,e),n.writeTree)}function Bp(n,e){return{treePath:n,writeTree:e}}/**
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
 */class yw{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;I(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),I(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,gs(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,_s(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Ii(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,gs(i,e.snapshotNode,s.oldSnap));else throw wi("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Iw{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Vp=new Iw;class kc{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new wn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Sc(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:bn(this.viewCache_),r=vw(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Ew(n){return{filter:n}}function ww(n,e){I(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function bw(n,e,t,i,s){const r=new yw;let o,a;if(t.type===Fe.OVERWRITE){const c=t;c.source.fromUser?o=Hl(n,e,c.path,c.snap,i,s,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!O(c.path),o=vr(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===Fe.MERGE){const c=t;c.source.fromUser?o=Cw(n,e,c.path,c.children,i,s,r):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=$l(n,e,c.path,c.children,i,s,a,r))}else if(t.type===Fe.ACK_USER_WRITE){const c=t;c.revert?o=Rw(n,e,c.path,i,s,r):o=Sw(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===Fe.LISTEN_COMPLETE)o=kw(n,e,t.path,i,r);else throw wi("Unknown operation type: "+t.type);const l=r.getChanges();return Tw(e,o,l),{viewCache:o,changes:l}}function Tw(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Bl(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Pp(Bl(e)))}}function Wp(n,e,t,i,s,r){const o=e.eventCache;if(mr(i,t)!=null)return e;{let a,l;if(O(t))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=bn(e),d=c instanceof S?c:S.EMPTY_NODE,h=Cc(i,d);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=gr(i,bn(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=N(t);if(c===".priority"){I(Bt(t)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=pd(i,t,d,l);h!=null?a=n.filter.updatePriority(d,h):a=o.getNode()}else{const d=B(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=pd(i,t,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(d,f):h=o.getNode().getImmediateChild(c)}else h=Sc(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,d,s,r):a=o.getNode()}}return as(e,a,o.isFullyInitialized()||O(t),n.filter.filtersNodes())}}function vr(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const d=o?n.filter:n.filter.getIndexedFilter();if(O(t))c=d.updateFullNode(l.getNode(),i,null);else if(d.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(t,i);c=d.updateFullNode(l.getNode(),y,null)}else{const y=N(t);if(!l.isCompleteForPath(t)&&Bt(t)>1)return e;const E=B(t),D=l.getNode().getImmediateChild(y).updateChild(E,i);y===".priority"?c=d.updatePriority(l.getNode(),D):c=d.updateChild(l.getNode(),y,D,E,Vp,null)}const h=Mp(e,c,l.isFullyInitialized()||O(t),d.filtersNodes()),f=new kc(s,h,r);return Wp(n,h,t,s,f,a)}function Hl(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const d=new kc(s,e,r);if(O(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=as(e,c,!0,n.filter.filtersNodes());else{const h=N(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=as(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=B(t),y=a.getNode().getImmediateChild(h);let E;if(O(f))E=i;else{const A=d.getCompleteChild(h);A!=null?wp(f)===".priority"&&A.getChild(Tp(f)).isEmpty()?E=A:E=A.updateChild(f,i):E=S.EMPTY_NODE}if(y.equals(E))l=e;else{const A=n.filter.updateChild(a.getNode(),h,E,f,d,o);l=as(e,A,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function _d(n,e){return n.eventCache.isCompleteForChild(e)}function Cw(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const d=z(t,l);_d(e,N(d))&&(a=Hl(n,a,d,c,s,r,o))}),i.foreach((l,c)=>{const d=z(t,l);_d(e,N(d))||(a=Hl(n,a,d,c,s,r,o))}),a}function gd(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function $l(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;O(t)?c=i:c=new W(null).setTree(t,i);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const y=e.serverCache.getNode().getImmediateChild(h),E=gd(n,y,f);l=vr(n,l,new U(h),E,s,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const y=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!y){const E=e.serverCache.getNode().getImmediateChild(h),A=gd(n,E,f);l=vr(n,l,new U(h),A,s,r,o,a)}}),l}function Sw(n,e,t,i,s,r,o){if(mr(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(O(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return vr(n,e,t,l.getNode().getChild(t),s,r,a,o);if(O(t)){let c=new W(null);return l.getNode().forEachChild(_i,(d,h)=>{c=c.set(new U(d),h)}),$l(n,e,t,c,s,r,a,o)}else return e}else{let c=new W(null);return i.foreach((d,h)=>{const f=z(t,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),$l(n,e,t,c,s,r,a,o)}}function kw(n,e,t,i,s){const r=e.serverCache,o=Mp(e,r.getNode(),r.isFullyInitialized()||O(t),r.isFiltered());return Wp(n,o,t,i,Vp,s)}function Rw(n,e,t,i,s,r){let o;if(mr(i,t)!=null)return e;{const a=new kc(i,e,s),l=e.eventCache.getNode();let c;if(O(t)||N(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=gr(i,bn(e));else{const h=e.serverCache.getNode();I(h instanceof S,"serverChildren would be complete if leaf node"),d=Cc(i,h)}d=d,c=n.filter.updateFullNode(l,d,r)}else{const d=N(t);let h=Sc(i,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=n.filter.updateChild(l,d,h,B(t),a,r):e.eventCache.getNode().hasChild(d)?c=n.filter.updateChild(l,d,S.EMPTY_NODE,B(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=gr(i,bn(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||mr(i,L())!=null,as(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Aw{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Ic(i.getIndex()),r=KE(i);this.processor_=Ew(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(S.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(S.EMPTY_NODE,a.getNode(),null),d=new wn(l,o.isFullyInitialized(),s.filtersNodes()),h=new wn(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Dr(h,d),this.eventGenerator_=new tw(this.query_)}get query(){return this.query_}}function Nw(n){return n.viewCache_.serverCache.getNode()}function Pw(n,e){const t=bn(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!O(e)&&!t.getImmediateChild(N(e)).isEmpty())?t.getChild(e):null}function md(n){return n.eventRegistrations_.length===0}function Dw(n,e){n.eventRegistrations_.push(e)}function vd(n,e,t){const i=[];if(t){I(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function yd(n,e,t,i){e.type===Fe.MERGE&&e.source.queryId!==null&&(I(bn(n.viewCache_),"We should always have a full cache before handling merges"),I(Bl(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=bw(n.processor_,s,e,t,i);return ww(n.processor_,r.viewCache),I(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Hp(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Ow(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild($,(r,o)=>{i.push(Ii(r,o))}),t.isFullyInitialized()&&i.push(Pp(t.getNode())),Hp(n,i,t.getNode(),e)}function Hp(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return nw(n.eventGenerator_,e,t,s)}/**
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
 */let yr;class Mw{constructor(){this.views=new Map}}function Lw(n){I(!yr,"__referenceConstructor has already been defined"),yr=n}function xw(){return I(yr,"Reference.ts has not been loaded"),yr}function Fw(n){return n.views.size===0}function Rc(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return I(r!=null,"SyncTree gave us an op for an invalid query."),yd(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(yd(o,e,t,i));return r}}function Uw(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=gr(t,s?i:null),l=!1;a?l=!0:i instanceof S?(a=Cc(t,i),l=!1):(a=S.EMPTY_NODE,l=!1);const c=Dr(new wn(a,l,!1),new wn(i,s,!1));return new Aw(e,c)}return o}function Bw(n,e,t,i,s,r){const o=Uw(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Dw(o,t),Ow(o,t)}function Vw(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Vt(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(vd(c,t,i)),md(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(vd(l,t,i)),md(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Vt(n)&&r.push(new(xw())(e._repo,e._path)),{removed:r,events:o}}function $p(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function gi(n,e){let t=null;for(const i of n.views.values())t=t||Pw(i,e);return t}function jp(n,e){if(e._queryParams.loadsAllData())return Or(n);{const i=e._queryIdentifier;return n.views.get(i)}}function qp(n,e){return jp(n,e)!=null}function Vt(n){return Or(n)!=null}function Or(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ir;function Ww(n){I(!Ir,"__referenceConstructor has already been defined"),Ir=n}function Hw(){return I(Ir,"Reference.ts has not been loaded"),Ir}let $w=1;class Id{constructor(e){this.listenProvider_=e,this.syncPointTree_=new W(null),this.pendingWriteTree_=mw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Gp(n,e,t,i,s){return ow(n.pendingWriteTree_,e,t,i,s),s?Rs(n,new En(Op(),e,t)):[]}function fn(n,e,t=!1){const i=aw(n.pendingWriteTree_,e);if(lw(n.pendingWriteTree_,e)){let r=new W(null);return i.snap!=null?r=r.set(L(),!0):me(i.children,o=>{r=r.set(new U(o),!0)}),Rs(n,new _r(i.path,r,t))}else return[]}function Mr(n,e,t){return Rs(n,new En(wc(),e,t))}function jw(n,e,t){const i=W.fromObject(t);return Rs(n,new ys(wc(),e,i))}function qw(n,e){return Rs(n,new vs(wc(),e))}function Gw(n,e,t){const i=Nc(n,t);if(i){const s=Pc(i),r=s.path,o=s.queryId,a=fe(r,e),l=new vs(bc(o),a);return Dc(n,r,l)}else return[]}function jl(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||qp(o,e))){const l=Vw(o,e,t,i);Fw(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(f,y)=>Vt(y));if(d&&!h){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const y=Yw(f);for(let E=0;E<y.length;++E){const A=y[E],D=A.query,M=Yp(n,A);n.listenProvider_.startListening(cs(D),Er(n,D),M.hashFn,M.onComplete)}}}!h&&c.length>0&&!i&&(d?n.listenProvider_.stopListening(cs(e),null):c.forEach(f=>{const y=n.queryToTagMap.get(Lr(f));n.listenProvider_.stopListening(cs(f),y)}))}Qw(n,c)}return a}function zw(n,e,t,i){const s=Nc(n,i);if(s!=null){const r=Pc(s),o=r.path,a=r.queryId,l=fe(o,e),c=new En(bc(a),l,t);return Dc(n,o,c)}else return[]}function Kw(n,e,t,i){const s=Nc(n,i);if(s){const r=Pc(s),o=r.path,a=r.queryId,l=fe(o,e),c=W.fromObject(t),d=new ys(bc(a),l,c);return Dc(n,o,d)}else return[]}function Ed(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(f,y)=>{const E=fe(f,s);r=r||gi(y,E),o=o||Vt(y)});let a=n.syncPointTree_.get(s);a?(o=o||Vt(a),r=r||gi(a,L())):(a=new Mw,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=S.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((y,E)=>{const A=gi(E,L());A&&(r=r.updateImmediateChild(y,A))}));const c=qp(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Lr(e);I(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const y=Jw();n.queryToTagMap.set(f,y),n.tagToQueryMap.set(y,f)}const d=Tc(n.pendingWriteTree_,s);let h=Bw(a,e,t,d,r,l);if(!c&&!o&&!i){const f=jp(a,e);h=h.concat(Xw(n,e,f))}return h}function Ac(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=fe(o,e),c=gi(a,l);if(c)return c});return Fp(s,e,r,t,!0)}function Rs(n,e){return zp(e,n.syncPointTree_,null,Tc(n.pendingWriteTree_,L()))}function zp(n,e,t,i){if(O(n.path))return Kp(n,e,t,i);{const s=e.get(L());t==null&&s!=null&&(t=gi(s,L()));let r=[];const o=N(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,d=Up(i,o);r=r.concat(zp(a,l,c,d))}return s&&(r=r.concat(Rc(s,n,i,t))),r}}function Kp(n,e,t,i){const s=e.get(L());t==null&&s!=null&&(t=gi(s,L()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Up(i,o),d=n.operationForChild(o);d&&(r=r.concat(Kp(d,a,l,c)))}),s&&(r=r.concat(Rc(s,n,i,t))),r}function Yp(n,e){const t=e.query,i=Er(n,t);return{hashFn:()=>(Nw(e)||S.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Gw(n,t._path,i):qw(n,t._path);{const r=zI(s,t);return jl(n,t,null,r)}}}}function Er(n,e){const t=Lr(e);return n.queryToTagMap.get(t)}function Lr(n){return n._path.toString()+"$"+n._queryIdentifier}function Nc(n,e){return n.tagToQueryMap.get(e)}function Pc(n){const e=n.indexOf("$");return I(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new U(n.substr(0,e))}}function Dc(n,e,t){const i=n.syncPointTree_.get(e);I(i,"Missing sync point for query tag that we're tracking");const s=Tc(n.pendingWriteTree_,e);return Rc(i,t,s,null)}function Yw(n){return n.fold((e,t,i)=>{if(t&&Vt(t))return[Or(t)];{let s=[];return t&&(s=$p(t)),me(i,(r,o)=>{s=s.concat(o)}),s}})}function cs(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Hw())(n._repo,n._path):n}function Qw(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Lr(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Jw(){return $w++}function Xw(n,e,t){const i=e._path,s=Er(n,e),r=Yp(n,t),o=n.listenProvider_.startListening(cs(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)I(!Vt(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!O(c)&&d&&Vt(d))return[Or(d).query];{let f=[];return d&&(f=f.concat($p(d).map(y=>y.query))),me(h,(y,E)=>{f=f.concat(E)}),f}});for(let c=0;c<l.length;++c){const d=l[c];n.listenProvider_.stopListening(cs(d),Er(n,d))}}return o}/**
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
 */class Oc{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Oc(t)}node(){return this.node_}}class Mc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=z(this.path_,e);return new Mc(this.syncTree_,t)}node(){return Ac(this.syncTree_,this.path_)}}const Zw=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},wd=function(n,e,t){if(!n||typeof n!="object")return n;if(I(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return eb(n[".sv"],e,t);if(typeof n[".sv"]=="object")return tb(n[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},eb=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:I(!1,"Unexpected server value: "+n)}},tb=function(n,e,t){n.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&I(!1,"Unexpected increment value: "+i);const s=e.node();if(I(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},nb=function(n,e,t,i){return Lc(e,new Mc(t,n),i)},Qp=function(n,e,t){return Lc(n,new Oc(e),t)};function Lc(n,e,t){const i=n.getPriority().val(),s=wd(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=wd(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new J(a,te(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new J(s))),o.forEachChild($,(a,l)=>{const c=Lc(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class xc{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Fc(n,e){let t=e instanceof U?e:new U(e),i=n,s=N(t);for(;s!==null;){const r=mi(i.node.children,s)||{children:{},childCount:0};i=new xc(s,i,r),t=B(t),s=N(t)}return i}function Ri(n){return n.node.value}function Jp(n,e){n.node.value=e,ql(n)}function Xp(n){return n.node.childCount>0}function ib(n){return Ri(n)===void 0&&!Xp(n)}function xr(n,e){me(n.node.children,(t,i)=>{e(new xc(t,n,i))})}function Zp(n,e,t,i){t&&!i&&e(n),xr(n,s=>{Zp(s,e,!0,i)}),t&&i&&e(n)}function sb(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function As(n){return new U(n.parent===null?n.name:As(n.parent)+"/"+n.name)}function ql(n){n.parent!==null&&rb(n.parent,n.name,n)}function rb(n,e,t){const i=ib(t),s=vt(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,ql(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,ql(n))}/**
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
 */const ob=/[\[\].#$\/\u0000-\u001F\u007F]/,ab=/[\[\].#$\u0000-\u001F\u007F]/,El=10*1024*1024,e_=function(n){return typeof n=="string"&&n.length!==0&&!ob.test(n)},t_=function(n){return typeof n=="string"&&n.length!==0&&!ab.test(n)},lb=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),t_(n)},cb=function(n,e,t,i){i&&e===void 0||Uc(Ql(n,"value"),e,t)},Uc=function(n,e,t){const i=t instanceof U?new SE(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+un(i));if(typeof e=="function")throw new Error(n+"contains a function "+un(i)+" with contents = "+e.toString());if(tp(e))throw new Error(n+"contains "+e.toString()+" "+un(i));if(typeof e=="string"&&e.length>El/3&&Tr(e)>El)throw new Error(n+"contains a string greater than "+El+" utf8 bytes "+un(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(me(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!e_(o)))throw new Error(n+" contains an invalid key ("+o+") "+un(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);kE(i,o),Uc(n,a,i),RE(i)}),s&&r)throw new Error(n+' contains ".value" child '+un(i)+" in addition to actual children.")}},n_=function(n,e,t,i){if(!(i&&t===void 0)&&!t_(t))throw new Error(Ql(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ub=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),n_(n,e,t,i)},hb=function(n,e){if(N(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},db=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!e_(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!lb(t))throw new Error(Ql(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class fb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bc(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!mc(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function i_(n,e,t){Bc(n,t),s_(n,i=>mc(i,e))}function mt(n,e,t){Bc(n,t),s_(n,i=>xe(i,e)||xe(e,i))}function s_(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(pb(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function pb(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();_n&&ie("event: "+t.toString()),ki(i)}}}/**
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
 */const _b="repo_interrupt",gb=25;class mb{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new fb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pr(),this.transactionQueueTree_=new xc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function vb(n,e,t){if(n.stats_=_c(n.repoInfo_),n.forceRestClient_||JI())n.server_=new fr(n.repoInfo_,(i,s,r,o)=>{bd(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Td(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Z(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new ft(n.repoInfo_,e,(i,s,r,o)=>{bd(n,i,s,r,o)},i=>{Td(n,i)},i=>{Ib(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=nE(n.repoInfo_,()=>new ew(n.stats_,n.server_)),n.infoData_=new YE,n.infoSyncTree_=new Id({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Mr(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Wc(n,"connected",!1),n.serverSyncTree_=new Id({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);mt(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function yb(n){const t=n.infoData_.getNode(new U(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Vc(n){return Zw({timestamp:yb(n)})}function bd(n,e,t,i,s){n.dataUpdateCount++;const r=new U(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=tr(t,c=>te(c));o=Kw(n.serverSyncTree_,r,l,s)}else{const l=te(t);o=zw(n.serverSyncTree_,r,l,s)}else if(i){const l=tr(t,c=>te(c));o=jw(n.serverSyncTree_,r,l)}else{const l=te(t);o=Mr(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Fr(n,r)),mt(n.eventQueue_,a,o)}function Td(n,e){Wc(n,"connected",e),e===!1&&wb(n)}function Ib(n,e){me(e,(t,i)=>{Wc(n,t,i)})}function Wc(n,e,t){const i=new U("/.info/"+e),s=te(t);n.infoData_.updateSnapshot(i,s);const r=Mr(n.infoSyncTree_,i,s);mt(n.eventQueue_,i,r)}function r_(n){return n.nextWriteId_++}function Eb(n,e,t,i,s){Hc(n,"set",{path:e.toString(),value:t,priority:i});const r=Vc(n),o=te(t,i),a=Ac(n.serverSyncTree_,e),l=Qp(o,a,r),c=r_(n),d=Gp(n.serverSyncTree_,e,l,c,!0);Bc(n.eventQueue_,d),n.server_.put(e.toString(),o.val(!0),(f,y)=>{const E=f==="ok";E||ge("set at "+e+" failed: "+f);const A=fn(n.serverSyncTree_,c,!E);mt(n.eventQueue_,e,A),Cb(n,s,f,y)});const h=u_(n,e);Fr(n,h),mt(n.eventQueue_,h,[])}function wb(n){Hc(n,"onDisconnectEvents");const e=Vc(n),t=pr();Ul(n.onDisconnect_,L(),(s,r)=>{const o=nb(s,r,n.serverSyncTree_,e);Dp(t,s,o)});let i=[];Ul(t,L(),(s,r)=>{i=i.concat(Mr(n.serverSyncTree_,s,r));const o=u_(n,s);Fr(n,o)}),n.onDisconnect_=pr(),mt(n.eventQueue_,L(),i)}function bb(n,e,t){let i;N(e._path)===".info"?i=Ed(n.infoSyncTree_,e,t):i=Ed(n.serverSyncTree_,e,t),i_(n.eventQueue_,e._path,i)}function Cd(n,e,t){let i;N(e._path)===".info"?i=jl(n.infoSyncTree_,e,t):i=jl(n.serverSyncTree_,e,t),i_(n.eventQueue_,e._path,i)}function Tb(n){n.persistentConnection_&&n.persistentConnection_.interrupt(_b)}function Hc(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ie(t,...e)}function Cb(n,e,t,i){e&&ki(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function o_(n,e,t){return Ac(n.serverSyncTree_,e,t)||S.EMPTY_NODE}function $c(n,e=n.transactionQueueTree_){if(e||Ur(n,e),Ri(e)){const t=l_(n,e);I(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Sb(n,As(e),t)}else Xp(e)&&xr(e,t=>{$c(n,t)})}function Sb(n,e,t){const i=t.map(c=>c.currentWriteId),s=o_(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const d=t[c];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=fe(e,d.path);r=r.updateChild(h,d.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{Hc(n,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,d=d.concat(fn(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Ur(n,Fc(n.transactionQueueTree_,e)),$c(n,n.transactionQueueTree_),mt(n.eventQueue_,e,d);for(let f=0;f<h.length;f++)ki(h[f])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{ge("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Fr(n,e)}},o)}function Fr(n,e){const t=a_(n,e),i=As(t),s=l_(n,t);return kb(n,s,i),i}function kb(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=fe(t,l.path);let d=!1,h;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,s=s.concat(fn(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=gb)d=!0,h="maxretry",s=s.concat(fn(n.serverSyncTree_,l.currentWriteId,!0));else{const f=o_(n,l.path,o);l.currentInputSnapshot=f;const y=e[a].update(f.val());if(y!==void 0){Uc("transaction failed: Data returned ",y,l.path);let E=te(y);typeof y=="object"&&y!=null&&vt(y,".priority")||(E=E.updatePriority(f.getPriority()));const D=l.currentWriteId,M=Vc(n),j=Qp(E,f,M);l.currentOutputSnapshotRaw=E,l.currentOutputSnapshotResolved=j,l.currentWriteId=r_(n),o.splice(o.indexOf(D),1),s=s.concat(Gp(n.serverSyncTree_,l.path,j,l.currentWriteId,l.applyLocally)),s=s.concat(fn(n.serverSyncTree_,D,!0))}else d=!0,h="nodata",s=s.concat(fn(n.serverSyncTree_,l.currentWriteId,!0))}mt(n.eventQueue_,t,s),s=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ur(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)ki(i[a]);$c(n,n.transactionQueueTree_)}function a_(n,e){let t,i=n.transactionQueueTree_;for(t=N(e);t!==null&&Ri(i)===void 0;)i=Fc(i,t),e=B(e),t=N(e);return i}function l_(n,e){const t=[];return c_(n,e,t),t.sort((i,s)=>i.order-s.order),t}function c_(n,e,t){const i=Ri(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);xr(e,s=>{c_(n,s,t)})}function Ur(n,e){const t=Ri(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Jp(e,t.length>0?t:void 0)}xr(e,i=>{Ur(n,i)})}function u_(n,e){const t=As(a_(n,e)),i=Fc(n.transactionQueueTree_,e);return sb(i,s=>{wl(n,s)}),wl(n,i),Zp(i,s=>{wl(n,s)}),t}function wl(n,e){const t=Ri(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(I(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(I(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(fn(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Jp(e,void 0):t.length=r+1,mt(n.eventQueue_,As(e),s);for(let o=0;o<i.length;o++)ki(i[o])}}/**
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
 */function Rb(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function Ab(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ge(`Invalid query segment '${t}' in query '${n}'`)}return e}const Sd=function(n,e){const t=Nb(n),i=t.namespace;t.domain==="firebase.com"&&gt(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||HI();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new fp(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new U(t.pathString)}},Nb=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let d=n.indexOf("/");d===-1&&(d=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(d,h)),d<h&&(s=Rb(n.substring(d,h)));const f=Ab(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")t="localhost";else if(y.split(".").length<=2)t=y;else{const E=e.indexOf(".");i=e.substring(0,E).toLowerCase(),t=e.substring(E+1),r=i}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */class h_{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Z(this.snapshot.exportVal())}}class d_{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Pb{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class jc{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return O(this._path)?null:wp(this._path)}get ref(){return new yt(this._repo,this._path)}get _queryIdentifier(){const e=cd(this._queryParams),t=fc(e);return t==="{}"?"default":t}get _queryObject(){return cd(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof jc))return!1;const t=this._repo===e._repo,i=mc(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+CE(this._path)}}class yt extends jc{constructor(e,t){super(e,t,new Ec,!1)}get parent(){const e=Tp(this._path);return e===null?null:new yt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Is{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new U(e),i=wr(this.ref,e);return new Is(this._node.getChild(t),i,$)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Is(s,wr(this.ref,i),$)))}hasChild(e){const t=new U(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function kd(n,e){return n=oe(n),n._checkNotDeleted("ref"),e!==void 0?wr(n._root,e):n._root}function wr(n,e){return n=oe(n),N(n._path)===null?ub("child","path",e,!1):n_("child","path",e,!1),new yt(n._repo,z(n._path,e))}function Db(n,e){n=oe(n),hb("set",n._path),cb("set",e,n._path,!1);const t=new br;return Eb(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class qc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new h_("value",this,new Is(e.snapshotNode,new yt(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new d_(this,e,t):null}matches(e){return e instanceof qc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Gc{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new d_(this,e,t):null}createEvent(e,t){I(e.childName!=null,"Child events should have a childName.");const i=wr(new yt(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new h_(e.type,this,new Is(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Gc?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Ob(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(d,h)=>{Cd(n._repo,n,a),l(d,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Pb(t,r||void 0),a=e==="value"?new qc(o):new Gc(e,o);return bb(n._repo,n,a),()=>Cd(n._repo,n,a)}function Mb(n,e,t,i){return Ob(n,"value",e,t,i)}Lw(yt);Ww(yt);/**
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
 */const Lb="FIREBASE_DATABASE_EMULATOR_HOST",Gl={};let xb=!1;function Fb(n,e,t,i){n.repoInfo_=new fp(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Ub(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ie("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Sd(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Lb]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Sd(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const d=s&&l?new pi(pi.OWNER):new ZI(n.name,n.options,e);db("Invalid Firebase Database URL",o),O(o.path)||gt("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Vb(a,n,d,new XI(n.name,t));return new Wb(h,n)}function Bb(n,e){const t=Gl[e];(!t||t[n.key]!==n)&&gt(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Tb(n),delete t[n.key]}function Vb(n,e,t,i){let s=Gl[e.name];s||(s={},Gl[e.name]=s);let r=s[n.toURLString()];return r&&gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new mb(n,xb,t,i),s[n.toURLString()]=r,r}class Wb{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(vb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new yt(this._repo,L())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Bb(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&gt("Cannot call "+e+" on a deleted database.")}}function Hb(n=Xl(),e){const t=Cn(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=D_("database");i&&$b(t,...i)}return t}function $b(n,e,t,i={}){n=oe(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&gt("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new pi(pi.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:O_(i.mockUserToken,n.app.options.projectId);r=new pi(o)}Fb(s,e,t,r)}/**
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
 */function jb(n){FI(Ti),it(new Be("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ub(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Se(Gh,zh,n),Se(Gh,zh,"esm2017")}ft.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ft.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};jb();function Rd(n,e,t){const i=n.slice();return i[27]=e[t][0],i[28]=e[t][1],i}function qb(n){let e,t;return{c(){e=p("img"),this.h()},l(i){e=_(i,"IMG",{src:!0,alt:!0,height:!0}),this.h()},h(){et(e.src,t="/images/musik-mute.png")||g(e,"src",t),g(e,"alt",""),g(e,"height","24")},m(i,s){ui(i,e,s)},d(i){i&&m(e)}}}function Gb(n){let e,t;return{c(){e=p("img"),this.h()},l(i){e=_(i,"IMG",{src:!0,alt:!0,height:!0}),this.h()},h(){et(e.src,t="/images/musik-play.png")||g(e,"src",t),g(e,"alt",""),g(e,"height","24")},m(i,s){ui(i,e,s)},d(i){i&&m(e)}}}function Ad(n){let e,t,i,s=n[28].nama+"",r,o,a,l,c=n[28].kedatangan=="datang"?"Datang":"Tidak Datang",d,h,f,y=n[28].pesan+"",E,A;return{c(){e=p("div"),t=p("div"),i=p("div"),r=T(s),o=w(),a=p("div"),l=p("span"),d=T(c),h=w(),f=p("div"),E=T(y),A=w(),this.h()},l(D){e=_(D,"DIV",{class:!0});var M=v(e);t=_(M,"DIV",{class:!0});var j=v(t);i=_(j,"DIV",{class:!0});var K=v(i);r=C(K,s),K.forEach(m),o=b(j),a=_(j,"DIV",{});var ve=v(a);l=_(ve,"SPAN",{class:!0});var ae=v(l);d=C(ae,c),ae.forEach(m),ve.forEach(m),j.forEach(m),h=b(M),f=_(M,"DIV",{class:!0});var ye=v(f);E=C(ye,y),ye.forEach(m),A=b(M),M.forEach(m),this.h()},h(){g(i,"class","pesan-nama"),g(l,"class","pesan-kedatangan"),g(t,"class","pesan-header"),g(f,"class","pesan-body"),g(e,"class","pesan")},m(D,M){ui(D,e,M),u(e,t),u(t,i),u(i,r),u(t,o),u(t,a),u(a,l),u(l,d),u(e,h),u(e,f),u(f,E),u(e,A)},p(D,M){M&256&&s!==(s=D[28].nama+"")&&At(r,s),M&256&&c!==(c=D[28].kedatangan=="datang"?"Datang":"Tidak Datang")&&At(d,c),M&256&&y!==(y=D[28].pesan+"")&&At(E,y)},d(D){D&&m(e)}}}function zb(n){let e,t,i,s,r,o,a,l,c,d,h,f,y,E,A,D,M,j,K,ve,ae,ye,It,ke,Et,Wt,Ns,Ve,F,Ht,rt,Re,Ai,Y,V,Ae,ot,le,$t,jt,Br,Ni,Vr,Wr,Pi,Hr,$r,We,kn,jr,qr,Rn,Gr,zr,He,$e,An,qt,zc,Kr,Di,Yr,Qr,Oi,Jr,Xr,Mi,Zr,je,Nn,Gt,Kc,eo,Li,to,no,xi,io,so,zt,Pn,Q,Fi,ro,oo,Ui,ao,lo,Kt,co,uo,ho,fo,Bi,po,_o,ce,go,mo,vo,yo,Io,Dn,Eo,wo,bo,To,be,Yc,Co,Vi,So,ko,ue,Ro,Ao,No,Po,Do,On,Oo,Mo,Lo,xo,Te,Qc,Fo,Yt,Mn,qe,Wi,Uo,Bo,Hi,Vo,Wo,Ce,Qt,Ps,Ho,$o,Jt,Ds,jo,qo,Xt,Os,Go,zo,Zt,Ms,Ko,Yo,en,Ln,q,$i,Qo,Jo,tn,Xo,Zo,ea,ta,na,ia,Ge,nn,Jc,sa,ra,oa,aa,la,ca,ua,ha,ze,sn,Xc,da,fa,pa,_a,ga,ma,va,ya,Ke,rn,Zc,Ia,Ea,wa,ba,Ta,Ca,at,xn,re,Fn,Sa,ka,wt,ji,Ra,Aa,Ne,Na,Ye,qi,Pa,Da,Oa,Ma,he,bt,La,Tt,xa,Ct,Fa,Ua,St,Gi,Ba,Va,Pe,Wa,Un,Bn,Ha,$a,lt,Vn,ja,qa,Ga,Wn,zi,Ie,Ki,Hn,$n,za,Yi,jn,qn,Ka,Qi,Gn,zn,Ya,Ji,Kn,Yn,Qa,Xi,Qn,Jn,Ja,eu;function tu(R,H){return R[10]?Gb:qb}let Ls=tu(n),ct=Ls(n),Xn=Object.entries(n[8]),ee=[];for(let R=0;R<Xn.length;R+=1)ee[R]=Ad(Rd(n,Xn,R));return{c(){e=p("div"),t=p("h2"),i=T("Loading data"),s=w(),r=p("div"),o=p("div"),a=p("div"),l=p("div"),c=T("Bayu Rofid Fanani"),d=w(),h=p("div"),f=T("&"),y=w(),E=p("div"),A=T("Erinta Eka Ruliyanti"),D=w(),M=p("div"),j=p("div"),K=T("Kepada Yth. Sdr/Sdri:"),ve=w(),ae=p("div"),ye=T(n[5]),It=w(),ke=p("button"),Et=T("Buka undangan"),Ns=w(),Ve=p("audio"),Ht=w(),rt=p("div"),Re=p("button"),ct.c(),Y=w(),V=p("div"),Ae=p("div"),ot=p("div"),le=p("div"),$t=p("p"),jt=T("The wedding of"),Br=w(),Ni=p("h1"),Vr=T("Erinta & Bayu"),Wr=w(),Pi=p("p"),Hr=T("Putri Bapak Sumirin & (Almh.) Ibu Lestari Beserta Putra Bapak Samaji dan Ibu Suminah"),$r=w(),We=p("div"),kn=p("p"),jr=T("اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ"),qr=w(),Rn=p("p"),Gr=T(`Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah,
					perkenankanlah kami merangkaikan kasih sayang yang kau ciptakan diantara kami untuk
					mengikuti Sunnah Rasul-Mu dalam rangka membentuk keluarga yang sakinah, mawaddah,
					warahmah.`),zr=w(),He=p("div"),$e=p("div"),An=p("div"),qt=p("img"),Kr=w(),Di=p("h3"),Yr=T("Erinta Eka Ruliyanti"),Qr=w(),Oi=p("p"),Jr=T("Putri Bapak S umirin & (Almh.) Ibu Sri Lestari"),Xr=w(),Mi=p("div"),Zr=w(),je=p("div"),Nn=p("div"),Gt=p("img"),eo=w(),Li=p("h3"),to=T("Bayu Rofid Fanani"),no=w(),xi=p("p"),io=T("Putra Bapak Samaji dan Ibu Suminah"),so=w(),zt=p("div"),Pn=p("div"),Q=p("div"),Fi=p("h3"),ro=T("Save the date"),oo=w(),Ui=p("h4"),ao=T("Akad"),lo=w(),Kt=p("p"),co=T("27 Juni 2023 "),uo=p("br"),ho=T(`
						Pukul 08:00 WIB`),fo=w(),Bi=p("h4"),po=T("Resepsi"),_o=w(),ce=p("p"),go=T("27 Juni 2023 "),mo=p("br"),vo=T(`
						Pukul 13:00 WIB `),yo=p("br"),Io=T(`
						Lokasi: `),Dn=p("a"),Eo=T("Rumah Pengantin Perempuan"),wo=w(),bo=p("br"),To=w(),be=p("iframe"),Co=w(),Vi=p("h4"),So=T("Unduh Manten"),ko=w(),ue=p("p"),Ro=T("28 Juni 2023 "),Ao=p("br"),No=T(`
						Pukul 14:00 WIB `),Po=p("br"),Do=T(`
						Lokasi: `),On=p("a"),Oo=T("Rumah Pengantin Laki-laki"),Mo=w(),Lo=p("br"),xo=w(),Te=p("iframe"),Fo=w(),Yt=p("div"),Mn=p("div"),qe=p("div"),Wi=p("h3"),Uo=T("Count down to"),Bo=w(),Hi=p("h4"),Vo=T("Our Happy Day"),Wo=w(),Ce=p("h2"),Qt=p("div"),Ps=T(n[1]),Ho=T(" hari"),$o=w(),Jt=p("div"),Ds=T(n[2]),jo=T(" jam"),qo=w(),Xt=p("div"),Os=T(n[3]),Go=T(" menit"),zo=w(),Zt=p("div"),Ms=T(n[4]),Ko=T(" detik"),Yo=w(),en=p("div"),Ln=p("div"),q=p("div"),$i=p("h3"),Qo=T("Send Gifts"),Jo=w(),tn=p("p"),Xo=T("Rumah: "),Zo=p("br"),ea=T(`
						(Rumah Bpk. Sumirin) Dukuh Bandaralim Tengah RT 003/ RW 002 Desa Bandaralim, Kec. Badegan,
						63455`),ta=w(),na=p("br"),ia=w(),Ge=p("p"),nn=p("img"),sa=w(),ra=p("br"),oa=T(`
						Bank BCA: `),aa=p("br"),la=T(`
						(Erinta Eka E.) 6720601468`),ca=w(),ua=p("br"),ha=w(),ze=p("p"),sn=p("img"),da=w(),fa=p("br"),pa=T(`
						Bank BRI: `),_a=p("br"),ga=T(`
						(Bayu Rofid F.) 3214-01-055001-53-2`),ma=w(),va=p("br"),ya=w(),Ke=p("p"),rn=p("img"),Ia=w(),Ea=p("br"),wa=T(`
						Gopay: `),ba=p("br"),Ta=T(`
						+6282336670420`),Ca=w(),at=p("div"),xn=p("div"),re=p("form"),Fn=p("h3"),Sa=T("RSVP & Send your wishes"),ka=w(),wt=p("div"),ji=p("small"),Ra=T("Nama:"),Aa=w(),Ne=p("input"),Na=w(),Ye=p("div"),qi=p("small"),Pa=T("Status Kedatangan:"),Da=w(),Oa=p("br"),Ma=w(),he=p("select"),bt=p("option"),La=T("Pilih satu"),Tt=p("option"),xa=T("Datang"),Ct=p("option"),Fa=T("Tidak datang"),Ua=w(),St=p("div"),Gi=p("small"),Ba=T("Pesan dan Doa Anda:"),Va=w(),Pe=p("textarea"),Wa=w(),Un=p("div"),Bn=p("button"),Ha=T("Kirim Pesan dan Doa"),$a=w(),lt=p("div"),Vn=p("h3"),ja=T("Pesan dari undangan"),qa=w();for(let R=0;R<ee.length;R+=1)ee[R].c();Ga=w(),Wn=p("div"),zi=p("nav"),Ie=p("ul"),Ki=p("li"),Hn=p("button"),$n=p("div"),za=w(),Yi=p("li"),jn=p("button"),qn=p("div"),Ka=w(),Qi=p("li"),Gn=p("button"),zn=p("div"),Ya=w(),Ji=p("li"),Kn=p("button"),Yn=p("div"),Qa=w(),Xi=p("li"),Qn=p("button"),Jn=p("div"),this.h()},l(R){e=_(R,"DIV",{class:!0,style:!0});var H=v(e);t=_(H,"H2",{class:!0});var G=v(t);i=C(G,"Loading data"),G.forEach(m),H.forEach(m),s=b(R),r=_(R,"DIV",{style:!0});var Ee=v(r);o=_(Ee,"DIV",{id:!0,class:!0});var nu=v(o);a=_(nu,"DIV",{class:!0});var Qe=v(a);l=_(Qe,"DIV",{class:!0});var iu=v(l);c=C(iu,"Bayu Rofid Fanani"),iu.forEach(m),d=b(Qe),h=_(Qe,"DIV",{class:!0});var su=v(h);f=C(su,"&"),su.forEach(m),y=b(Qe),E=_(Qe,"DIV",{class:!0});var ru=v(E);A=C(ru,"Erinta Eka Ruliyanti"),ru.forEach(m),D=b(Qe),M=_(Qe,"DIV",{class:!0});var xs=v(M);j=_(xs,"DIV",{});var ou=v(j);K=C(ou,"Kepada Yth. Sdr/Sdri:"),ou.forEach(m),ve=b(xs),ae=_(xs,"DIV",{class:!0});var au=v(ae);ye=C(au,n[5]),au.forEach(m),xs.forEach(m),It=b(Qe),ke=_(Qe,"BUTTON",{class:!0,id:!0});var lu=v(ke);Et=C(lu,"Buka undangan"),lu.forEach(m),Qe.forEach(m),nu.forEach(m),Ns=b(Ee),Ve=_(Ee,"AUDIO",{src:!0,id:!0}),v(Ve).forEach(m),Ht=b(Ee),rt=_(Ee,"DIV",{class:!0});var cu=v(rt);Re=_(cu,"BUTTON",{class:!0});var uu=v(Re);ct.l(uu),uu.forEach(m),cu.forEach(m),Y=b(Ee),V=_(Ee,"DIV",{id:!0});var Je=v(V);Ae=_(Je,"DIV",{class:!0,id:!0});var Fs=v(Ae);ot=_(Fs,"DIV",{class:!0});var hu=v(ot);le=_(hu,"DIV",{class:!0});var Zn=v(le);$t=_(Zn,"P",{});var du=v($t);jt=C(du,"The wedding of"),du.forEach(m),Br=b(Zn),Ni=_(Zn,"H1",{});var fu=v(Ni);Vr=C(fu,"Erinta & Bayu"),fu.forEach(m),Wr=b(Zn),Pi=_(Zn,"P",{});var pu=v(Pi);Hr=C(pu,"Putri Bapak Sumirin & (Almh.) Ibu Lestari Beserta Putra Bapak Samaji dan Ibu Suminah"),pu.forEach(m),Zn.forEach(m),hu.forEach(m),$r=b(Fs),We=_(Fs,"DIV",{class:!0});var ei=v(We);kn=_(ei,"P",{class:!0});var _u=v(kn);jr=C(_u,"اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ"),_u.forEach(m),qr=b(ei),Rn=_(ei,"P",{class:!0});var gu=v(Rn);Gr=C(gu,`Maha suci Allah yang telah menciptakan mahluk-Nya berpasang-pasangan. Ya Allah,
					perkenankanlah kami merangkaikan kasih sayang yang kau ciptakan diantara kami untuk
					mengikuti Sunnah Rasul-Mu dalam rangka membentuk keluarga yang sakinah, mawaddah,
					warahmah.`),gu.forEach(m),zr=b(ei),He=_(ei,"DIV",{class:!0});var ti=v(He);$e=_(ti,"DIV",{class:!0});var ni=v($e);An=_(ni,"DIV",{class:!0});var mu=v(An);qt=_(mu,"IMG",{src:!0,alt:!0,width:!0}),mu.forEach(m),Kr=b(ni),Di=_(ni,"H3",{});var vu=v(Di);Yr=C(vu,"Erinta Eka Ruliyanti"),vu.forEach(m),Qr=b(ni),Oi=_(ni,"P",{});var yu=v(Oi);Jr=C(yu,"Putri Bapak S umirin & (Almh.) Ibu Sri Lestari"),yu.forEach(m),ni.forEach(m),Xr=b(ti),Mi=_(ti,"DIV",{class:!0}),v(Mi).forEach(m),Zr=b(ti),je=_(ti,"DIV",{class:!0});var ii=v(je);Nn=_(ii,"DIV",{class:!0});var Iu=v(Nn);Gt=_(Iu,"IMG",{src:!0,alt:!0,width:!0}),Iu.forEach(m),eo=b(ii),Li=_(ii,"H3",{});var Eu=v(Li);to=C(Eu,"Bayu Rofid Fanani"),Eu.forEach(m),no=b(ii),xi=_(ii,"P",{});var wu=v(xi);io=C(wu,"Putra Bapak Samaji dan Ibu Suminah"),wu.forEach(m),ii.forEach(m),ti.forEach(m),ei.forEach(m),Fs.forEach(m),so=b(Je),zt=_(Je,"DIV",{class:!0,id:!0});var bu=v(zt);Pn=_(bu,"DIV",{class:!0});var Tu=v(Pn);Q=_(Tu,"DIV",{class:!0});var de=v(Q);Fi=_(de,"H3",{});var Cu=v(Fi);ro=C(Cu,"Save the date"),Cu.forEach(m),oo=b(de),Ui=_(de,"H4",{});var Su=v(Ui);ao=C(Su,"Akad"),Su.forEach(m),lo=b(de),Kt=_(de,"P",{});var Us=v(Kt);co=C(Us,"27 Juni 2023 "),uo=_(Us,"BR",{}),ho=C(Us,`
						Pukul 08:00 WIB`),Us.forEach(m),fo=b(de),Bi=_(de,"H4",{});var ku=v(Bi);po=C(ku,"Resepsi"),ku.forEach(m),_o=b(de),ce=_(de,"P",{});var De=v(ce);go=C(De,"27 Juni 2023 "),mo=_(De,"BR",{}),vo=C(De,`
						Pukul 13:00 WIB `),yo=_(De,"BR",{}),Io=C(De,`
						Lokasi: `),Dn=_(De,"A",{href:!0});var Ru=v(Dn);Eo=C(Ru,"Rumah Pengantin Perempuan"),Ru.forEach(m),wo=b(De),bo=_(De,"BR",{}),To=b(De),be=_(De,"IFRAME",{src:!0,width:!0,height:!0,style:!0,title:!0,loading:!0,referrerpolicy:!0}),v(be).forEach(m),De.forEach(m),Co=b(de),Vi=_(de,"H4",{});var Au=v(Vi);So=C(Au,"Unduh Manten"),Au.forEach(m),ko=b(de),ue=_(de,"P",{});var Oe=v(ue);Ro=C(Oe,"28 Juni 2023 "),Ao=_(Oe,"BR",{}),No=C(Oe,`
						Pukul 14:00 WIB `),Po=_(Oe,"BR",{}),Do=C(Oe,`
						Lokasi: `),On=_(Oe,"A",{href:!0});var Nu=v(On);Oo=C(Nu,"Rumah Pengantin Laki-laki"),Nu.forEach(m),Mo=b(Oe),Lo=_(Oe,"BR",{}),xo=b(Oe),Te=_(Oe,"IFRAME",{src:!0,width:!0,height:!0,style:!0,title:!0,loading:!0,referrerpolicy:!0}),v(Te).forEach(m),Oe.forEach(m),de.forEach(m),Tu.forEach(m),bu.forEach(m),Fo=b(Je),Yt=_(Je,"DIV",{class:!0,id:!0});var Pu=v(Yt);Mn=_(Pu,"DIV",{class:!0});var Du=v(Mn);qe=_(Du,"DIV",{class:!0});var si=v(qe);Wi=_(si,"H3",{});var Ou=v(Wi);Uo=C(Ou,"Count down to"),Ou.forEach(m),Bo=b(si),Hi=_(si,"H4",{});var Mu=v(Hi);Vo=C(Mu,"Our Happy Day"),Mu.forEach(m),Wo=b(si),Ce=_(si,"H2",{class:!0});var kt=v(Ce);Qt=_(kt,"DIV",{class:!0});var Xa=v(Qt);Ps=C(Xa,n[1]),Ho=C(Xa," hari"),Xa.forEach(m),$o=b(kt),Jt=_(kt,"DIV",{class:!0});var Za=v(Jt);Ds=C(Za,n[2]),jo=C(Za," jam"),Za.forEach(m),qo=b(kt),Xt=_(kt,"DIV",{class:!0});var el=v(Xt);Os=C(el,n[3]),Go=C(el," menit"),el.forEach(m),zo=b(kt),Zt=_(kt,"DIV",{class:!0});var tl=v(Zt);Ms=C(tl,n[4]),Ko=C(tl," detik"),tl.forEach(m),kt.forEach(m),si.forEach(m),Du.forEach(m),Pu.forEach(m),Yo=b(Je),en=_(Je,"DIV",{class:!0,id:!0});var Lu=v(en);Ln=_(Lu,"DIV",{class:!0});var xu=v(Ln);q=_(xu,"DIV",{class:!0});var ne=v(q);$i=_(ne,"H3",{});var Fu=v($i);Qo=C(Fu,"Send Gifts"),Fu.forEach(m),Jo=b(ne),tn=_(ne,"P",{});var Bs=v(tn);Xo=C(Bs,"Rumah: "),Zo=_(Bs,"BR",{}),ea=C(Bs,`
						(Rumah Bpk. Sumirin) Dukuh Bandaralim Tengah RT 003/ RW 002 Desa Bandaralim, Kec. Badegan,
						63455`),Bs.forEach(m),ta=b(ne),na=_(ne,"BR",{}),ia=b(ne),Ge=_(ne,"P",{});var on=v(Ge);nn=_(on,"IMG",{src:!0,alt:!0,width:!0}),sa=b(on),ra=_(on,"BR",{}),oa=C(on,`
						Bank BCA: `),aa=_(on,"BR",{}),la=C(on,`
						(Erinta Eka E.) 6720601468`),on.forEach(m),ca=b(ne),ua=_(ne,"BR",{}),ha=b(ne),ze=_(ne,"P",{});var an=v(ze);sn=_(an,"IMG",{src:!0,alt:!0,width:!0}),da=b(an),fa=_(an,"BR",{}),pa=C(an,`
						Bank BRI: `),_a=_(an,"BR",{}),ga=C(an,`
						(Bayu Rofid F.) 3214-01-055001-53-2`),an.forEach(m),ma=b(ne),va=_(ne,"BR",{}),ya=b(ne),Ke=_(ne,"P",{});var ln=v(Ke);rn=_(ln,"IMG",{src:!0,alt:!0,width:!0}),Ia=b(ln),Ea=_(ln,"BR",{}),wa=C(ln,`
						Gopay: `),ba=_(ln,"BR",{}),Ta=C(ln,`
						+6282336670420`),ln.forEach(m),ne.forEach(m),xu.forEach(m),Lu.forEach(m),Ca=b(Je),at=_(Je,"DIV",{class:!0,id:!0});var Vs=v(at);xn=_(Vs,"DIV",{class:!0});var Uu=v(xn);re=_(Uu,"FORM",{action:!0});var Xe=v(re);Fn=_(Xe,"H3",{class:!0});var Bu=v(Fn);Sa=C(Bu,"RSVP & Send your wishes"),Bu.forEach(m),ka=b(Xe),wt=_(Xe,"DIV",{class:!0});var Ws=v(wt);ji=_(Ws,"SMALL",{});var Vu=v(ji);Ra=C(Vu,"Nama:"),Vu.forEach(m),Aa=b(Ws),Ne=_(Ws,"INPUT",{type:!0,autocapitalize:!0,placeholder:!0}),Ws.forEach(m),Na=b(Xe),Ye=_(Xe,"DIV",{class:!0});var ri=v(Ye);qi=_(ri,"SMALL",{});var Wu=v(qi);Pa=C(Wu,"Status Kedatangan:"),Wu.forEach(m),Da=b(ri),Oa=_(ri,"BR",{}),Ma=b(ri),he=_(ri,"SELECT",{name:!0,id:!0});var Hs=v(he);bt=_(Hs,"OPTION",{});var Hu=v(bt);La=C(Hu,"Pilih satu"),Hu.forEach(m),Tt=_(Hs,"OPTION",{});var $u=v(Tt);xa=C($u,"Datang"),$u.forEach(m),Ct=_(Hs,"OPTION",{});var ju=v(Ct);Fa=C(ju,"Tidak datang"),ju.forEach(m),Hs.forEach(m),ri.forEach(m),Ua=b(Xe),St=_(Xe,"DIV",{class:!0});var $s=v(St);Gi=_($s,"SMALL",{});var qu=v(Gi);Ba=C(qu,"Pesan dan Doa Anda:"),qu.forEach(m),Va=b($s),Pe=_($s,"TEXTAREA",{cols:!0,rows:!0,placeholder:!0}),v(Pe).forEach(m),$s.forEach(m),Wa=b(Xe),Un=_(Xe,"DIV",{class:!0});var Gu=v(Un);Bn=_(Gu,"BUTTON",{class:!0});var zu=v(Bn);Ha=C(zu,"Kirim Pesan dan Doa"),zu.forEach(m),Gu.forEach(m),Xe.forEach(m),Uu.forEach(m),$a=b(Vs),lt=_(Vs,"DIV",{class:!0});var js=v(lt);Vn=_(js,"H3",{class:!0});var Ku=v(Vn);ja=C(Ku,"Pesan dari undangan"),Ku.forEach(m),qa=b(js);for(let nl=0;nl<ee.length;nl+=1)ee[nl].l(js);js.forEach(m),Vs.forEach(m),Je.forEach(m),Ga=b(Ee),Wn=_(Ee,"DIV",{id:!0});var Yu=v(Wn);zi=_(Yu,"NAV",{});var Qu=v(zi);Ie=_(Qu,"UL",{});var Ze=v(Ie);Ki=_(Ze,"LI",{});var Ju=v(Ki);Hn=_(Ju,"BUTTON",{});var Xu=v(Hn);$n=_(Xu,"DIV",{class:!0,"data-target":!0}),v($n).forEach(m),Xu.forEach(m),Ju.forEach(m),za=b(Ze),Yi=_(Ze,"LI",{});var Zu=v(Yi);jn=_(Zu,"BUTTON",{});var eh=v(jn);qn=_(eh,"DIV",{class:!0,"data-target":!0}),v(qn).forEach(m),eh.forEach(m),Zu.forEach(m),Ka=b(Ze),Qi=_(Ze,"LI",{});var th=v(Qi);Gn=_(th,"BUTTON",{});var nh=v(Gn);zn=_(nh,"DIV",{class:!0,"data-target":!0}),v(zn).forEach(m),nh.forEach(m),th.forEach(m),Ya=b(Ze),Ji=_(Ze,"LI",{});var ih=v(Ji);Kn=_(ih,"BUTTON",{});var sh=v(Kn);Yn=_(sh,"DIV",{class:!0,"data-target":!0}),v(Yn).forEach(m),sh.forEach(m),ih.forEach(m),Qa=b(Ze),Xi=_(Ze,"LI",{});var rh=v(Xi);Qn=_(rh,"BUTTON",{});var oh=v(Qn);Jn=_(oh,"DIV",{class:!0,"data-target":!0}),v(Jn).forEach(m),oh.forEach(m),rh.forEach(m),Ze.forEach(m),Qu.forEach(m),Yu.forEach(m),Ee.forEach(m),this.h()},h(){g(t,"class","center"),g(e,"class","loading"),oi(e,"display",n[9]?"none":"block"),g(l,"class","mempelai satu"),g(h,"class","dan"),g(E,"class","mempelai dua"),g(ae,"class","nama-undagan"),g(M,"class","tujuan-undangan"),g(ke,"class","btn btn-primary"),g(ke,"id","open-btn"),g(a,"class","info-nama"),g(o,"id","cover"),g(o,"class",Wt=n[0]?"opened":""),et(Ve.src,F="/sounds/beautiful_in_white.mp3")||g(Ve,"src",F),Ve.autoplay=!0,g(Ve,"id","musik"),Ve.loop=!0,g(Re,"class","btn-audio"),g(rt,"class",Ai="audio-control "+(n[10]?"playing":"")),g(le,"class","center"),g(ot,"class","container"),g(kn,"class","center"),g(Rn,"class","center"),et(qt.src,zc="/images/erinta_thumbnail.JPG")||g(qt,"src",zc),g(qt,"alt",""),g(qt,"width","100%"),g(An,"class","img-mempelai"),g($e,"class","mempelai"),g(Mi,"class","mempelai-spacer"),et(Gt.src,Kc="/images/bayu_thumbnail.JPG")||g(Gt,"src",Kc),g(Gt,"alt",""),g(Gt,"width","100%"),g(Nn,"class","img-mempelai"),g(je,"class","mempelai"),g(He,"class","center"),g(We,"class","container"),g(Ae,"class","slides"),g(Ae,"id","slide-1"),g(Dn,"href","https://goo.gl/maps/hLYfCqABuDj75UMs7"),et(be.src,Yc="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d853.7801058816258!2d111.36982072264286!3d-7.882078960908485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1687271517904!5m2!1sen!2sid")||g(be,"src",Yc),g(be,"width","100%"),g(be,"height","450"),oi(be,"border","0"),g(be,"title","Rumah Pengantin Perempuan"),g(be,"loading","lazy"),g(be,"referrerpolicy","no-referrer-when-downgrade"),g(On,"href","https://goo.gl/maps/WKEYLe3zZNquCbuk8"),et(Te.src,Qc="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d393.8288718481701!2d111.42235525784497!3d-7.865852920366883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1687271670038!5m2!1sen!2sid")||g(Te,"src",Qc),g(Te,"width","100%"),g(Te,"height","450"),oi(Te,"border","0"),g(Te,"title","Rumah Pengantin Laki-laki"),g(Te,"loading","lazy"),g(Te,"referrerpolicy","no-referrer-when-downgrade"),g(Q,"class","center"),g(Pn,"class","container"),g(zt,"class","slides"),g(zt,"id","slide-3"),g(Qt,"class","hari"),g(Jt,"class","jam"),g(Xt,"class","menit"),g(Zt,"class","detik"),g(Ce,"class","countdown"),g(qe,"class","center"),g(Mn,"class","container"),g(Yt,"class","slides"),g(Yt,"id","slide-4"),et(nn.src,Jc="/images/bca.svg")||g(nn,"src",Jc),g(nn,"alt",""),g(nn,"width","96"),et(sn.src,Xc="/images/bri.svg")||g(sn,"src",Xc),g(sn,"alt",""),g(sn,"width","80"),et(rn.src,Zc="/images/gopay.png")||g(rn,"src",Zc),g(rn,"alt",""),g(rn,"width","48"),g(q,"class","center"),g(Ln,"class","container"),g(en,"class","slides"),g(en,"id","slide-5"),g(Fn,"class","center"),Ne.required=!0,g(Ne,"type","text"),g(Ne,"autocapitalize","words"),g(Ne,"placeholder","Nama Anda"),g(wt,"class","spacer"),bt.__value="",bt.value=bt.__value,Tt.__value="datang",Tt.value=Tt.__value,Ct.__value="tidak_datang",Ct.value=Ct.__value,g(he,"name",""),g(he,"id",""),he.required=!0,n[6]===void 0&&g_(()=>n[15].call(he)),g(Ye,"class","spacer"),Pe.required=!0,g(Pe,"cols","30"),g(Pe,"rows","10"),g(Pe,"placeholder","Pesan anda dan doa anda untuk kami"),g(St,"class","spacer"),g(Bn,"class","btn btn-primary"),g(Un,"class","spacer"),g(re,"action",""),g(xn,"class","form-container"),g(Vn,"class","center"),g(lt,"class","container"),g(at,"class","slides"),g(at,"id","slide-6"),g(V,"id","content"),g($n,"class","buttons home-button aktif svelte-11mmgb5"),g($n,"data-target","slide-1"),g(qn,"class","buttons lokasi-button svelte-11mmgb5"),g(qn,"data-target","slide-3"),g(zn,"class","buttons kalender-button svelte-11mmgb5"),g(zn,"data-target","slide-4"),g(Yn,"class","buttons gift-button svelte-11mmgb5"),g(Yn,"data-target","slide-5"),g(Jn,"class","buttons wish-button svelte-11mmgb5"),g(Jn,"data-target","slide-6"),g(Wn,"id","navigation"),oi(r,"display",n[9]?"block":"none")},m(R,H){ui(R,e,H),u(e,t),u(t,i),ui(R,s,H),ui(R,r,H),u(r,o),u(o,a),u(a,l),u(l,c),u(a,d),u(a,h),u(h,f),u(a,y),u(a,E),u(E,A),u(a,D),u(a,M),u(M,j),u(j,K),u(M,ve),u(M,ae),u(ae,ye),u(a,It),u(a,ke),u(ke,Et),u(r,Ns),u(r,Ve),u(r,Ht),u(r,rt),u(rt,Re),ct.m(Re,null),u(r,Y),u(r,V),u(V,Ae),u(Ae,ot),u(ot,le),u(le,$t),u($t,jt),u(le,Br),u(le,Ni),u(Ni,Vr),u(le,Wr),u(le,Pi),u(Pi,Hr),u(Ae,$r),u(Ae,We),u(We,kn),u(kn,jr),u(We,qr),u(We,Rn),u(Rn,Gr),u(We,zr),u(We,He),u(He,$e),u($e,An),u(An,qt),u($e,Kr),u($e,Di),u(Di,Yr),u($e,Qr),u($e,Oi),u(Oi,Jr),u(He,Xr),u(He,Mi),u(He,Zr),u(He,je),u(je,Nn),u(Nn,Gt),u(je,eo),u(je,Li),u(Li,to),u(je,no),u(je,xi),u(xi,io),u(V,so),u(V,zt),u(zt,Pn),u(Pn,Q),u(Q,Fi),u(Fi,ro),u(Q,oo),u(Q,Ui),u(Ui,ao),u(Q,lo),u(Q,Kt),u(Kt,co),u(Kt,uo),u(Kt,ho),u(Q,fo),u(Q,Bi),u(Bi,po),u(Q,_o),u(Q,ce),u(ce,go),u(ce,mo),u(ce,vo),u(ce,yo),u(ce,Io),u(ce,Dn),u(Dn,Eo),u(ce,wo),u(ce,bo),u(ce,To),u(ce,be),u(Q,Co),u(Q,Vi),u(Vi,So),u(Q,ko),u(Q,ue),u(ue,Ro),u(ue,Ao),u(ue,No),u(ue,Po),u(ue,Do),u(ue,On),u(On,Oo),u(ue,Mo),u(ue,Lo),u(ue,xo),u(ue,Te),u(V,Fo),u(V,Yt),u(Yt,Mn),u(Mn,qe),u(qe,Wi),u(Wi,Uo),u(qe,Bo),u(qe,Hi),u(Hi,Vo),u(qe,Wo),u(qe,Ce),u(Ce,Qt),u(Qt,Ps),u(Qt,Ho),u(Ce,$o),u(Ce,Jt),u(Jt,Ds),u(Jt,jo),u(Ce,qo),u(Ce,Xt),u(Xt,Os),u(Xt,Go),u(Ce,zo),u(Ce,Zt),u(Zt,Ms),u(Zt,Ko),u(V,Yo),u(V,en),u(en,Ln),u(Ln,q),u(q,$i),u($i,Qo),u(q,Jo),u(q,tn),u(tn,Xo),u(tn,Zo),u(tn,ea),u(q,ta),u(q,na),u(q,ia),u(q,Ge),u(Ge,nn),u(Ge,sa),u(Ge,ra),u(Ge,oa),u(Ge,aa),u(Ge,la),u(q,ca),u(q,ua),u(q,ha),u(q,ze),u(ze,sn),u(ze,da),u(ze,fa),u(ze,pa),u(ze,_a),u(ze,ga),u(q,ma),u(q,va),u(q,ya),u(q,Ke),u(Ke,rn),u(Ke,Ia),u(Ke,Ea),u(Ke,wa),u(Ke,ba),u(Ke,Ta),u(V,Ca),u(V,at),u(at,xn),u(xn,re),u(re,Fn),u(Fn,Sa),u(re,ka),u(re,wt),u(wt,ji),u(ji,Ra),u(wt,Aa),u(wt,Ne),qs(Ne,n[5]),u(re,Na),u(re,Ye),u(Ye,qi),u(qi,Pa),u(Ye,Da),u(Ye,Oa),u(Ye,Ma),u(Ye,he),u(he,bt),u(bt,La),u(he,Tt),u(Tt,xa),u(he,Ct),u(Ct,Fa),ah(he,n[6],!0),u(re,Ua),u(re,St),u(St,Gi),u(Gi,Ba),u(St,Va),u(St,Pe),qs(Pe,n[7]),u(re,Wa),u(re,Un),u(Un,Bn),u(Bn,Ha),u(at,$a),u(at,lt),u(lt,Vn),u(Vn,ja),u(lt,qa);for(let G=0;G<ee.length;G+=1)ee[G]&&ee[G].m(lt,null);u(r,Ga),u(r,Wn),u(Wn,zi),u(zi,Ie),u(Ie,Ki),u(Ki,Hn),u(Hn,$n),u(Ie,za),u(Ie,Yi),u(Yi,jn),u(jn,qn),u(Ie,Ka),u(Ie,Qi),u(Qi,Gn),u(Gn,zn),u(Ie,Ya),u(Ie,Ji),u(Ji,Kn),u(Kn,Yn),u(Ie,Qa),u(Ie,Xi),u(Xi,Qn),u(Qn,Jn),Ja||(eu=[Me(ke,"click",n[11]),Me(Re,"click",n[13]),Me(Ne,"input",n[14]),Me(he,"change",n[15]),Me(Pe,"input",n[16]),Me(re,"submit",m_(n[12])),Me(Hn,"click",n[17]),Me(jn,"click",n[18]),Me(Gn,"click",n[19]),Me(Kn,"click",n[20]),Me(Qn,"click",n[21])],Ja=!0)},p(R,[H]){if(H&512&&oi(e,"display",R[9]?"none":"block"),H&32&&At(ye,R[5]),H&1&&Wt!==(Wt=R[0]?"opened":"")&&g(o,"class",Wt),Ls!==(Ls=tu(R))&&(ct.d(1),ct=Ls(R),ct&&(ct.c(),ct.m(Re,null))),H&1024&&Ai!==(Ai="audio-control "+(R[10]?"playing":""))&&g(rt,"class",Ai),H&2&&At(Ps,R[1]),H&4&&At(Ds,R[2]),H&8&&At(Os,R[3]),H&16&&At(Ms,R[4]),H&32&&Ne.value!==R[5]&&qs(Ne,R[5]),H&64&&ah(he,R[6]),H&128&&qs(Pe,R[7]),H&256){Xn=Object.entries(R[8]);let G;for(G=0;G<Xn.length;G+=1){const Ee=Rd(R,Xn,G);ee[G]?ee[G].p(Ee,H):(ee[G]=Ad(Ee),ee[G].c(),ee[G].m(lt,null))}for(;G<ee.length;G+=1)ee[G].d(1);ee.length=Xn.length}H&512&&oi(r,"display",R[9]?"block":"none")},i:lh,o:lh,d(R){R&&m(e),R&&m(s),R&&m(r),ct.d(),v_(ee,R),Ja=!1,y_(eu)}}}function is(n){var e;if(n.target!=null&&n.target instanceof HTMLElement){const t=n.target;t.classList.contains("buttons")&&((e=document.querySelector("#"+t.dataset.target))==null||e.scrollIntoView({behavior:"smooth"}))}}function Kb(n,e,t){let i=!1,s="0",r="0",o="0",a="0",l;function c(){t(0,i=!0);const F=document.querySelector("#musik");F==null||F.play()}let d="",h="",f="",y=[],E;async function A(){if(l==null){alert("error, user are not logged in");return}await Ey(l,{displayName:d}),console.log("usert profile updated"),await Db(kd(E,"pesan/"+l.uid),{nama:d,kedatangan:h,pesan:f,created:Date.now()}),console.log("insert db"),t(7,f=""),alert("Terimakasih atas doanya 😁")}let D=!1;const M=new Date("Jun 27, 2023 08:00:00").getTime();let j,K=!0;function ve(){const F=document.querySelector("#musik");F!=null&&F.paused?(F==null||F.play(),t(10,K=!0)):(F==null||F.pause(),t(10,K=!1))}I_(()=>{j=setInterval(()=>{const V=M-new Date().getTime();if(V<=0){clearInterval(j);return}t(1,s=String(Math.floor(V/(1e3*60*60*24)))),t(2,r=String(Math.floor(V%(1e3*60*60*24)/(1e3*60*60)))),t(3,o=String(Math.floor(V%(1e3*60*60)/(1e3*60)))),t(4,a=String(Math.floor(V%(1e3*60)/1e3)))},1e3);const Ht=qd({apiKey:"AIzaSyDsn_juR5CZ9Cp5I_VjrFnN74ZUMi8Udng",authDomain:"undangan-nikah-6b26a.firebaseapp.com",projectId:"undangan-nikah-6b26a",storageBucket:"undangan-nikah-6b26a.appspot.com",messagingSenderId:"445019700121",appId:"1:445019700121:web:0bdcc5a84c32b6bd82f108",measurementId:"G-K6SMGLK17N",databaseURL:"https://undangan-nikah-6b26a-default-rtdb.asia-southeast1.firebasedatabase.app/"});Av(Ht),E=Hb(Ht);const rt=kd(E,"pesan");Mb(rt,Y=>{t(8,y=Y.val())});const Re=xI(Ht);gy(Re).then(Y=>{console.log("you are signed in as: ",Y.user.uid,"with name",Y.user.displayName),l=Y.user,t(5,d=l.displayName||""),t(9,D=!0)}).catch(Y=>console.log(Y)),Ty(Re,Y=>{}),(()=>{const Y=document.querySelectorAll(".slides"),V=document.querySelector("#content");V.onscroll=()=>{var ot;const Ae=(V==null?void 0:V.scrollTop)||document.body.scrollTop;for(let le in Y)if(Y.hasOwnProperty(le)&&Y[le].offsetTop<=Ae){const $t=Y[le].id;(ot=document.querySelector(".aktif"))==null||ot.classList.remove("aktif");const jt=document.querySelector(`[data-target=${$t}]`);jt==null||jt.classList.add("aktif")}}})()});function ae(){d=this.value,t(5,d)}function ye(){h=E_(this),t(6,h)}function It(){f=this.value,t(7,f)}return[i,s,r,o,a,d,h,f,y,D,K,c,A,ve,ae,ye,It,F=>{is(F)},F=>{is(F)},F=>{is(F)},F=>{is(F)},F=>{is(F)}]}class Xb extends f_{constructor(e){super(),p_(this,e,Kb,zb,__,{})}}export{Xb as component,Jb as universal};
