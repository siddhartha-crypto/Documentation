(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{288:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"statistics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statistics","aria-hidden":"true"}},[t._v("#")]),t._v(" Statistics")]),t._v(" "),a("h2",{attrs:{id:"guistats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guistats","aria-hidden":"true"}},[t._v("#")]),t._v(" guistats")]),t._v(" "),a("p",[a("code",[t._v("guistats")]),t._v(" method is for GUI apps to display statistics, based on the "),a("code",[t._v("statsdisp")]),t._v(" API.")]),t._v(" "),a("p",[t._v("Sample File Content:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userpass\\":\\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),t._v('\\",\\"method\\":\\"statsdisp\\",\\"starttime\\":0,\\"endtime\\":0,\\"gui\\":\\"SimpleUI\\"}"')]),t._v("\n")])])]),a("h2",{attrs:{id:"pricearray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pricearray","aria-hidden":"true"}},[t._v("#")]),t._v(" pricearray")]),t._v(" "),a("p",[t._v("pricearray will display statistical price data based on timescale.")]),t._v(" "),a("p",[t._v("Sample File Content:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userpass\\":\\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),t._v('\\",\\"method\\":\\"pricearray\\",\\"base\\":\\"REVS\\",\\"rel\\":\\"KMD\\",\\"timescale\\":300}"')]),t._v("\n")])])]),a("p",[t._v("This will output the data in an order of "),a("code",[t._v("[timestamp, avebid, aveask, highbid, lowask]")])]),t._v(" "),a("p",[t._v("Sample output:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1510603500, 1.40944454, 1.40944453, 3.13224635, 1.07003092"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1510603800, 1.50064727, 1.50064726, 3.13224635, 1.07003092"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1510604100, 1.50064727, 1.50064726, 3.13224635, 1.07003092"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1510607100, 1.44868382, 1.44868381, 3.13224635, 1.07003092"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1510607400, 1.50064727, 1.50064726, 3.13224635, 1.07003092"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1510607700, 1.52877070, 1.52877069, 3.13224635, 1.07003092"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1510608000, 1.55019807, 1.55019806, 3.13224635, 1.09860370"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1510608300, 1.57205536, 1.57205536, 3.13224635, 1.09860370"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1510608600, 1.30344136, 1.30344135, 1.76975636, 1.17393764"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1510611600, 1.21488583, 1.21488582, 1.25583401, 1.17393764"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1510611900, 1.25661049, 1.25661048, 1.34097978, 1.17393764"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"statsdisp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statsdisp","aria-hidden":"true"}},[t._v("#")]),t._v(" statsdisp")]),t._v(" "),a("p",[a("code",[t._v("statsdisp")]),t._v(" processes the "),a("code",[t._v("stats.log")]),t._v(" file on your node. It will display the swaps as best as it can figure out the unique number of swaps, you can set specific "),a("code",[t._v("starttime")]),t._v(" and "),a("code",[t._v("endtime")]),t._v(". If not specified, will display all. If both are the same time from the future, it will display only the pending stats.")]),t._v(" "),a("p",[t._v("This is a very good feature as it can identify any node that is trying to do too many trades at once")]),t._v(" "),a("p",[t._v("Sample File Contents:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userpass\\":\\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),t._v('\\",\\"method\\":\\"statsdisp\\",\\"starttime\\":0,\\"endtime\\":0}"')]),t._v("\n")])])]),a("p",[t._v("Sample Output:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"result"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"success"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"newlines"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"request"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"reserved"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"connect"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"connected"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"duplicates"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parse_errors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"uniques"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tradestatus"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"unknown"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"ticker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ticker","aria-hidden":"true"}},[t._v("#")]),t._v(" ticker")]),t._v(" "),a("p",[a("code",[t._v("ticker")]),t._v(" API returns trades for the previous 24hours. You can set "),a("code",[t._v("base/rel")]),t._v(" optionally. Most useful for price and marketcap statistics.")]),t._v(" "),a("p",[t._v("Sample File Content:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userpass\\":\\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),t._v('\\",\\"method\\":\\"ticker\\",\\"base\\":\\"REVS\\",\\"rel\\":\\"KMD\\"}"')]),t._v("\n")])])]),a("p",[t._v("Sample Output:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1513174486")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"KMD"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4.02827942")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CHIPS"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80.0001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19.85962036")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1513168630")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"KMD"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.07448089")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"MNZ"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.25609997")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.43846549")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1513166465")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"CRYPTO"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("44.00844307")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"KMD"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500.0001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11.36145851")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1513158008")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"KMD"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("463.91820708")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"SUPERNET"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0001")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.02155574")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"tradesarray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tradesarray","aria-hidden":"true"}},[t._v("#")]),t._v(" tradesarray")]),t._v(" "),a("p",[a("code",[t._v("tradesarray")]),t._v(" will display statistical trade data based on timescale in seconds.")]),t._v(" "),a("p",[t._v("Sample File Content:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --url "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:7783"')]),t._v(" --data "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"userpass\\":\\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$userpass")]),t._v('\\",\\"method\\":\\"tradesarray\\",\\"base\\":\\"REVS\\",\\"rel\\":\\"KMD\\",\\"timescale\\":120}"')]),t._v("\n")])])]),a("p",[t._v("This will output the data in an order of "),a("code",[t._v("[timestamp, high, low, open, close, relvolume, basevolume, aveprice, numtrades]")])]),t._v(" "),a("p",[t._v("Sample output:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1511480400, 1.27614172, 1.27614172, 1.27614172, 1.27614172, 0.04990000, 0.03910224, 1.27614172, 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1511480520, 1.97936698, 1.36595231, 1.97936698, 1.36595231, 0.09980000, 0.06174137, 1.61642024, 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1511480640, 2.11837065, 2.11837065, 2.11837065, 2.11837065, 0.04990000, 0.02355584, 2.11837065, 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1511481840, 1.63195519, 1.55147942, 1.63195519, 1.55147942, 0.09980000, 0.06273967, 1.59070011, 2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1511481960, 1.82528276, 1.82528276, 1.82528276, 1.82528276, 0.04990000, 0.02733823, 1.82528276, 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(",\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("1511482680, 1.77777461, 1.77777461, 1.77777461, 1.77777461, 0.04990000, 0.02806880, 1.77777461, 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n`\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);