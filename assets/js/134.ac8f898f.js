(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{318:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Don't forget: Coins for trade pairs need to be activated in the MarketmakerV1, either "),s("router-link",{attrs:{to:"./enable-native-wallet-coins.html"}},[t._v("native")]),t._v(" or "),s("router-link",{attrs:{to:"./enable-electrum-wallet-coins.html"}},[t._v("electrum")]),t._v(" wallets can be used.")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),s("p",[t._v("add this command with the name of the coin you want to see:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),s("p",[t._v("This script contains a curl command that looks like this:")]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"trade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trade","aria-hidden":"true"}},[this._v("#")]),this._v(" Trade")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"looking-at-the-orderbook"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#looking-at-the-orderbook","aria-hidden":"true"}},[this._v("#")]),this._v(" LOOKING AT THE ORDERBOOK")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To see the order book you need to execute: "),e("code",[this._v("./orderbook")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the "),e("code",[this._v("./client")]),this._v(" is synced the orderbook will be listed. Remember that you have to add that coin to the orderbook file:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("nano")]),this._v(" ./orderbook\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userpass\\":\\"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),t._v('\\",\\"method\\":\\"orderbook\\",\\"base\\":\\"NAME_OF_COIN\\",\\"rel\\":\\"KMD\\"}"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"buying"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#buying","aria-hidden":"true"}},[this._v("#")]),this._v(" BUYING")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("./buy")]),this._v(" executes trades based on the values specified in the command. The command looks like this:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userpass\\":\\"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),t._v('\\",\\"method\\":\\"autotrade\\",\\"base\\":\\"NAME_OF_BASE_COIN"')]),t._v(",\\"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rel\\":\\"NAME_OF_REL_COIN\\",\\"relvolume\\":VOLUME_OF_REL_COIN,\\"price\\"PRICE_OF_BASE_COIN}"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You will need to edit this script based on the info the orderbook prints. The script will look for the orders most similar to the values of "),e("code",[this._v("./buy")]),this._v(" and do an atomic swap between the chains.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("After editing the "),e("code",[this._v("./buy")]),this._v(" file with your order parameters, execute it and you should have a trade going.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("IMPORTANT: For better results and security (dust attack vector)")]),this._v(" "),e("code",[this._v("./buy")]),this._v(" "),e("strong",[this._v("only execute trades that are at least 10% of the offered bob(ask) order. For example, if a bob order (an ask in the orderbook) of 10 REVS is offered at a price of 1.25 komodo per REV the autotrade command should be with a relvolume of at least: 1 REV")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token string"}},[this._v('"{\\"userpass\\":\\"'),e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$userpass")]),this._v('\\",\\"method\\":\\"autotrade\\",\\"base\\":\\"REVS\\",\\"rel\\":\\"KMD\\",\\"relvolume\\":1,\\"price\\":10}"')]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("since 1 is 10% of the total order of 10 REVS.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Alice, the one buying the REVS with KMD, will pay 1/777th of the KMD amount as fee, as a sort of safeguard against spam attacks.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you found an order in the orderbook with duration in the command, you should include that in the "),e("code",[this._v("./buy")]),this._v(" method as well:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"userpass"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$userpass"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"autotrade"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"duration"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"base"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"REVS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"rel"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"KMD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"relvolume"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"selling-bob-utxos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selling-bob-utxos","aria-hidden":"true"}},[this._v("#")]),this._v(" SELLING (bob utxos)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("./setprice")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To create a bob utxo (or an ask order) you need to first set the price. To set price you need to edit the "),e("code",[this._v("./setprice")]),this._v(" script in the dexscripts folder:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" ~/KomodoPlatform/iguana/dexscripts/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("nano")]),this._v(" setprice\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userpass\\":\\"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),t._v('\\",\\"method\\":\\"setprice\\",\\"base\\":\\"NAME_OF_COIN_TO_TRADE\\",\\"rel\\":\\"KMD\\",\\"price\\":PRICE_OF_ORDER}"')]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In this command you should edit the coin ("),e("code",[this._v("NAME_OF_COIN_TO_TRADE")]),this._v(") and then set the price ("),e("code",[this._v("PRICE_OF_ORDER")]),this._v(") per coin based in Komodo.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For example: if you want to sell REVS at 1.25 komodo per REV, then "),e("code",[this._v("NAME_OF_COIN_TO_TRADE")]),this._v(" should be REVS and "),e("code",[this._v("PRICE_OF_ORDER")]),this._v(" should be 1.25.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("After you edit the file, execute it (")]),this._v(" "),e("code",[this._v("./setprice")]),this._v(" "),e("strong",[this._v("), then it will appear in orderbooks with that coin in either the base or rel.")])])}],!1,null,null,null);e.default=r.exports}}]);