(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{152:function(t,e,n){var content=n(155);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("46f7e3b7",content,!0,{sourceMap:!1})},153:function(t,e,n){var o,r,c,u,l;r=o||(o={}),c={"あ":"A","い":"I","う":"U","え":"E","お":"O","か":"KA","き":"KI","く":"KU","け":"KE","こ":"KO","さ":"SA","し":"SHI","す":"SU","せ":"SE","そ":"SO","た":"TA","ち":"CHI","つ":"TSU","て":"TE","と":"TO","な":"NA","に":"NI","ぬ":"NU","ね":"NE","の":"NO","は":"HA","ひ":"HI","ふ":"FU","へ":"HE","ほ":"HO","ま":"MA","み":"MI","む":"MU","め":"ME","も":"MO","や":"YA","ゆ":"YU","よ":"YO","ら":"RA","り":"RI","る":"RU","れ":"RE","ろ":"RO","わ":"WA","ゐ":"I","ゑ":"E","を":"O","ぁ":"A","ぃ":"I","ぅ":"U","ぇ":"E","ぉ":"O","が":"GA","ぎ":"GI","ぐ":"GU","げ":"GE","ご":"GO","ざ":"ZA","じ":"JI","ず":"ZU","ぜ":"ZE","ぞ":"ZO","だ":"DA","ぢ":"JI","づ":"ZU","で":"DE","ど":"DO","ば":"BA","び":"BI","ぶ":"BU","べ":"BE","ぼ":"BO","ぱ":"PA","ぴ":"PI","ぷ":"PU","ぺ":"PE","ぽ":"PO","きゃ":"KYA","きゅ":"KYU","きょ":"KYO","しゃ":"SHA","しゅ":"SHU","しょ":"SHO","ちゃ":"CHA","ちゅ":"CHU","ちょ":"CHO","ちぇ":"CHE","にゃ":"NYA","にゅ":"NYU","にょ":"NYO","ひゃ":"HYA","ひゅ":"HYU","ひょ":"HYO","みゃ":"MYA","みゅ":"MYU","みょ":"MYO","りゃ":"RYA","りゅ":"RYU","りょ":"RYO","ぎゃ":"GYA","ぎゅ":"GYU","ぎょ":"GYO","じゃ":"JA","じゅ":"JU","じょ":"JO","びゃ":"BYA","びゅ":"BYU","びょ":"BYO","ぴゃ":"PYA","ぴゅ":"PYU","ぴょ":"PYO"},u={AA:!0,EE:!0,II:!1,OO:!0,OU:!0,UU:!0},l=function(t,e){var n=null,o=null;return e+1<t.length&&(o=t.substring(e,e+2),n=c[o]),!n&&e<t.length&&(o=t.substring(e,e+1),n=c[o]),{c:o,h:n||null}},r.toHebon=function(t){for(var e="",n="",o=0;o<t.length;){var r=l(t,o);if("っ"==r.c)null!=(a=l(t,o+1)).h&&(0==a.h.indexOf("CH")?r.h="T":r.h=a.h.substring(0,1));else if("ん"==r.c){var a;null!=(a=l(t,o+1)).h&&-1!="BMP".indexOf(a.h.charAt(0))?r.h="M":r.h="N"}else"ー"==r.c&&(r.h="");if(null!=r.h){if(null!=n){var c=n+r.h;2<c.length&&(c=c.substring(c.length-2)),u[c]&&(r.h="")}e+=r.h}else e+=r.c;n=r.h,r.c,o+=r.c.length}return e},function(t){var e="ぁ".charCodeAt(0),a="ゖ".charCodeAt(0),n="ァ".charCodeAt(0),u="ヶ".charCodeAt(0);t.toKatakana=function(t){for(var o="",r=0;r<t.length;r+=1){var c=t.charCodeAt(r);o+=e<=c&&c<=a?String.fromCharCode(c-e+n):t.charAt(r)}return o},t.toHiragana=function(t){for(var o="",r=0;r<t.length;r+=1){var c=t.charCodeAt(r);o+=n<=c&&c<=u?String.fromCharCode(c-n+e):t.charAt(r)}return o}}(o||(o={})),function(e){t.exports=e}(o||(o={})),function(t){var e=function(t){var e={},u={};if(t.length%2!=0)throw"bad data length:"+t.length;for(var n,o,r=t.length/2,c=0;c<r;c+=1)n=t[2*c],o=t[2*c+1],e[n]||(e[n]=o),u[o]||(u[o]=n);return{convert:function(t,n){for(var o=n?u:e,r="",c=0;c<t.length;c+=1){var a;c+1<t.length&&(a=o[t.substring(c,c+2)])?(r+=a,c+=1):(a=o[t.substring(c,c+1)])?r+=a:r+=t.substring(c,c+1)}return r}}},n=e([" ","　","!","！",'"',"”",'"',"“","#","＃","$","＄","%","％","&","＆","'","’","(","（",")","）","*","＊","+","＋",",","，","-","－",".","．","/","／","0","０","1","１","2","２","3","３","4","４","5","５","6","６","7","７","8","８","9","９",":","：",";","；","<","＜","=","＝",">","＞","?","？","@","＠","A","Ａ","B","Ｂ","C","Ｃ","D","Ｄ","E","Ｅ","F","Ｆ","G","Ｇ","H","Ｈ","I","Ｉ","J","Ｊ","K","Ｋ","L","Ｌ","M","Ｍ","N","Ｎ","O","Ｏ","P","Ｐ","Q","Ｑ","R","Ｒ","S","Ｓ","T","Ｔ","U","Ｕ","V","Ｖ","W","Ｗ","X","Ｘ","Y","Ｙ","Z","Ｚ","[","［","\\","￥","]","］","^","＾","_","＿","`","‘","a","ａ","b","ｂ","c","ｃ","d","ｄ","e","ｅ","f","ｆ","g","ｇ","h","ｈ","i","ｉ","j","ｊ","k","ｋ","l","ｌ","m","ｍ","n","ｎ","o","ｏ","p","ｐ","q","ｑ","r","ｒ","s","ｓ","t","ｔ","u","ｕ","v","ｖ","w","ｗ","x","ｘ","y","ｙ","z","ｚ","{","｛","|","｜","}","｝","~","～"]),o=e(["。","｡","「","｢","」","｣","、","､","・","･","ヲ","ｦ","ァ","ｧ","ィ","ｨ","ゥ","ｩ","ェ","ｪ","ォ","ｫ","ャ","ｬ","ュ","ｭ","ョ","ｮ","ッ","ｯ","ー","ｰ","ア","ｱ","イ","ｲ","ウ","ｳ","エ","ｴ","オ","ｵ","カ","ｶ","キ","ｷ","ク","ｸ","ケ","ｹ","コ","ｺ","ガ","ｶﾞ","ギ","ｷﾞ","グ","ｸﾞ","ゲ","ｹﾞ","ゴ","ｺﾞ","サ","ｻ","シ","ｼ","ス","ｽ","セ","ｾ","ソ","ｿ","ザ","ｻﾞ","ジ","ｼﾞ","ズ","ｽﾞ","ゼ","ｾﾞ","ゾ","ｿﾞ","タ","ﾀ","チ","ﾁ","ツ","ﾂ","テ","ﾃ","ト","ﾄ","ダ","ﾀﾞ","ヂ","ﾁﾞ","ヅ","ﾂﾞ","デ","ﾃﾞ","ド","ﾄﾞ","ナ","ﾅ","ニ","ﾆ","ヌ","ﾇ","ネ","ﾈ","ノ","ﾉ","ハ","ﾊ","ヒ","ﾋ","フ","ﾌ","ヘ","ﾍ","ホ","ﾎ","バ","ﾊﾞ","ビ","ﾋﾞ","ブ","ﾌﾞ","ベ","ﾍﾞ","ボ","ﾎﾞ","パ","ﾊﾟ","ピ","ﾋﾟ","プ","ﾌﾟ","ペ","ﾍﾟ","ポ","ﾎﾟ","マ","ﾏ","ミ","ﾐ","ム","ﾑ","メ","ﾒ","モ","ﾓ","ヤ","ﾔ","ユ","ﾕ","ヨ","ﾖ","ラ","ﾗ","リ","ﾘ","ル","ﾙ","レ","ﾚ","ロ","ﾛ","ワ","ﾜ","ン","ﾝ","ヴ","ｳﾞ","゛","ﾞ","゜","ﾟ","ヰ","ｲ","ヱ","ｴ","ヮ","ﾜ","ヵ","ｶ","ヶ","ｹ"]);function r(t){return n.convert(t,!0)}function a(t){return n.convert(t,!1)}function c(t){return o.convert(t,!1)}function u(t){return o.convert(t,!0)}t.toHanAscii=r,t.toZenAscii=a,t.toHanKana=c,t.toZenKana=u,t.toHan=function(t){return r(c(t))},t.toZen=function(t){return a(u(t))},t.normalize=function(t){return r(u(t))}}(o||(o={}))},154:function(t,e,n){"use strict";var o=n(152);n.n(o).a},155:function(t,e,n){(e=n(25)(!1)).push([t.i,'.input[data-v-a82d39fc]{width:100%;font-weight:700;text-align:center;padding:10px;background-color:#fff}.input-wrap[data-v-a82d39fc]{position:relative;margin:16px 0}.input-line[data-v-a82d39fc]{position:absolute;left:0;right:0;bottom:-1px;width:0;height:2px;margin:auto;background-color:#009dbf;transition:all .2s}.input:focus~.input-line[data-v-a82d39fc]{width:100%}.notes[data-v-a82d39fc]{font-size:1.4rem;margin-top:16px}.notes-item[data-v-a82d39fc]{padding-left:1em;text-indent:-1em}.down[data-v-a82d39fc]{font-size:3rem;font-weight:700;padding:25px 0;color:#eb0d54}.down[data-v-a82d39fc],.result[data-v-a82d39fc]{text-align:center}.result[data-v-a82d39fc]{font-size:3.6rem;line-height:1.2;word-break:break-all;margin:16px 0;padding:10px 0;border-top:1px solid rgba(63,57,5,.3);border-bottom:1px solid rgba(63,57,5,.3)}.copy[data-v-a82d39fc],.result[data-v-a82d39fc]{position:relative}.copy-deco[data-v-a82d39fc]{position:absolute;top:0;right:0;left:0;margin:auto;width:1em;font-size:3rem;font-weight:400;line-height:1;color:#009dbf;pointer-events:none;transform:translateY(-30px)}.copied-enter[data-v-a82d39fc]{transform:translateY(0);opacity:1}.copied-enter-active[data-v-a82d39fc]{transition:all .1s linear}.copied-leave-to[data-v-a82d39fc]{opacity:0}.copied-leave-active[data-v-a82d39fc]{transition:all 1.5s ease-in}.detail[data-v-a82d39fc]:before{content:"▶";color:#009dbf;display:inline-block;vertical-align:top;margin-right:3px;transition:transform .1s;transform-origin:center}.detail.is-open[data-v-a82d39fc]:before{transform:rotate(90deg) translateX(-2px)}.detail-list[data-v-a82d39fc]{display:flex}.detail-term[data-v-a82d39fc]:after{content:"："}',""]),t.exports=e},160:function(t,e,n){"use strict";n(97);var o=n(153),r=n.n(o),c={data:function(){return{inputText:"こんにちは",hebonText:"",isCopied:!1,isOpenDetail:!1}},computed:{convertedText:function(){var t=this,text=this.inputText,e=(text=this.organizeText(text)).split(""),n=[];return e.forEach((function(e){t.$hieroglyphs[e]?n.push(t.$hieroglyphs[e]):n.push(e)})),text=n.join("")}},mounted:function(){this.$refs.inputText.focus()},methods:{organizeText:function(text){return text=r.a.normalize(text),text=r.a.toHiragana(text),text=(text=r.a.toHebon(text)).toUpperCase(),this.hebonText=text,text},copy:function(){var t=this,text=this.convertedText;navigator.clipboard.writeText(text).then((function(){t.isCopied=!0}))},copiedAfter:function(){this.isCopied=!1}}},l=(n(154),n(18)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"parts-pageTtl"},[t._v("ヒエログリファー")]),n("div",{staticClass:"parts-txBtn2col"},[n("p",{staticClass:"tx-2col"},[t._v("変換したい文字を入力してみてください")]),n("button",{staticClass:"parts-txBtn2col-btn",attrs:{type:"button"},on:{click:function(e){t.inputText=""}}},[t._v("クリア")])]),n("p",{staticClass:"input-wrap"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],ref:"inputText",staticClass:"input",attrs:{type:"text",placeholder:""},domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),n("span",{staticClass:"input-line"})]),t._m(0),n("div",{staticClass:"down"},[t._v("↓")]),n("div",{staticClass:"parts-txBtn2col"},[n("p",[t._v("変換結果")]),n("button",{staticClass:"parts-txBtn2col-btn copy",attrs:{type:"button"},on:{click:t.copy}},[t._v("コピー"),n("transition",{attrs:{name:"copied"},on:{"after-enter":t.copiedAfter}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.isCopied,expression:"isCopied"}],staticClass:"copy-deco"},[t._v("𓀬")])])],1)]),n("p",{staticClass:"result",attrs:{id:"js_result"}},[t._v(t._s(t.convertedText))]),n("button",{staticClass:"detail",class:{"is-open":t.isOpenDetail},attrs:{type:"button"},on:{click:function(e){t.isOpenDetail=!t.isOpenDetail}}},[t._v("変換の詳細を見る")]),n("transition",{attrs:{name:"detail"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpenDetail,expression:"isOpenDetail"}]},[n("dl",{staticClass:"detail-list"},[n("dt",{staticClass:"detail-term"},[t._v("元の文字")]),n("dd",[t._v(t._s(t.inputText))])]),n("dl",{staticClass:"detail-list"},[n("dt",{staticClass:"detail-term"},[t._v("変換対象のアルファベット")]),n("dd",[t._v(t._s(t.hebonText))])])])]),t._m(1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"notes"},[e("li",{staticClass:"notes-item"},[this._v("※ひらがな・カタカナ・アルファベットに対応しています")]),e("li",{staticClass:"notes-item"},[this._v("※対応していない文字（漢字や空白など）は、そのまま出力されます")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",{staticClass:"notes"},[e("li",{staticClass:"notes-item"},[this._v("※ヒエログリフ以外の文字はでっっっかく表示されてしまうと思います")]),e("li",{staticClass:"notes-item"},[this._v("※もしヒエログリフが表示されない場合は、お使いの端末にフォントが無いことが原因かもしれません。お手数ですが、他のスマホやパソコンで試してみてください")]),e("li",{staticClass:"notes-item"},[this._v("※ひらがな・カタカナを入力した場合、ヘボン式ローマ字変換によって思ったとおりに変換されない可能性があります。アルファベットで入力いただくと確実です")])])}],!1,null,"a82d39fc",null);e.a=component.exports},172:function(t,e,n){"use strict";n.r(e);var o={components:{Conversion:n(160).a}},r=n(18),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Conversion")],1)}),[],!1,null,null,null);e.default=component.exports}}]);