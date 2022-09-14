// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Buginese`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v15.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001A00, 0x001A1B],
    [0x001A1E, 0x001A1F]
  ]
});
testPropertyEscapes(
  /^\p{Script=Buginese}+$/u,
  matchSymbols,
  "\\p{Script=Buginese}"
);
testPropertyEscapes(
  /^\p{Script=Bugi}+$/u,
  matchSymbols,
  "\\p{Script=Bugi}"
);
testPropertyEscapes(
  /^\p{sc=Buginese}+$/u,
  matchSymbols,
  "\\p{sc=Buginese}"
);
testPropertyEscapes(
  /^\p{sc=Bugi}+$/u,
  matchSymbols,
  "\\p{sc=Bugi}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0019FF],
    [0x001A1C, 0x001A1D],
    [0x001A20, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Buginese}+$/u,
  nonMatchSymbols,
  "\\P{Script=Buginese}"
);
testPropertyEscapes(
  /^\P{Script=Bugi}+$/u,
  nonMatchSymbols,
  "\\P{Script=Bugi}"
);
testPropertyEscapes(
  /^\P{sc=Buginese}+$/u,
  nonMatchSymbols,
  "\\P{sc=Buginese}"
);
testPropertyEscapes(
  /^\P{sc=Bugi}+$/u,
  nonMatchSymbols,
  "\\P{sc=Bugi}"
);
