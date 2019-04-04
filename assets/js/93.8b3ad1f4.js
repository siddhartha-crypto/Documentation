(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{276:function(t,e,a){"use strict";a.r(e);var o=a(0),s=Object(o.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("If you normally start the daemon using the command:")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),a("p",[t._v("This post on Bitcointalk gives the context related to addition of the parameter to Komodo: "),a("a",{attrs:{href:"https://bitcointalk.org/index.php?topic=1605144.msg17732151#msg17732151",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://bitcointalk.org/index.php?topic=1605144.msg17732151#msg17732151"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("If you were already running the normal mode, to enable the parameter,")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),t._m(7)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"a-note-to-exchanges"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-note-to-exchanges","aria-hidden":"true"}},[this._v("#")]),this._v(" A Note to Exchanges")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There is a parameter called "),e("code",[this._v("-exchange")]),this._v(" that you can run the Komodo daemon ("),e("code",[this._v("komodod")]),this._v(") with, that ignores the rewards when a transaction is sent. One benefit is it allows exchanges to manage their account balances against their accounting software without any modification during account reconciliation.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("./src/komodod -addnode"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("78.47.196.146 -daemon\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("adding the - parameter "),e("code",[this._v("-exchange")]),this._v(" will make it:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("./src/komodod -addnode"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("78.47.196.146 -exchange -daemon\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("Backup all privkeys (launch "),a("code",[t._v("komodod")]),t._v(" with "),a("code",[t._v("-exportdir=<path>")]),t._v(" and run "),a("code",[t._v("./komodo-cli dumpwallet <filename>")]),t._v(")")]),t._v(" "),a("li",[t._v("Start a totally new sync including a new "),a("code",[t._v("wallet.dat")]),t._v(", launch with the same "),a("code",[t._v("exportdir")]),t._v(" and the parameter")]),t._v(" "),a("li",[t._v("Stop it before it gets too far and import all the privkeys backed up during step a) using "),a("code",[t._v("./komodo-cli importwallet <filename>")])]),t._v(" "),a("li",[t._v("Resume sync till it gets to chaintip")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("./komodod -exportdir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n./komodo-cli dumpwallet example\n./komodo-cli stop\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" ~/.komodo ~/.komodo.old "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/.komodo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" ~/.komodo.old/komodo.conf ~/.komodo.old/peers.dat ~/.komodo\n./komodod -exchange -exportdir"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/tmp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n./komodo-cli importwallet /tmp/example\n")])])])}],!1,null,null,null);e.default=s.exports}}]);