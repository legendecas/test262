// Copyright 2022 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Ol_Chiki`
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
    [0x001C50, 0x001C7F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Ol_Chiki}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Ol_Chiki}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Olck}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Olck}"
);
testPropertyEscapes(
  /^\p{scx=Ol_Chiki}+$/u,
  matchSymbols,
  "\\p{scx=Ol_Chiki}"
);
testPropertyEscapes(
  /^\p{scx=Olck}+$/u,
  matchSymbols,
  "\\p{scx=Olck}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x001C4F],
    [0x001C80, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Ol_Chiki}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Ol_Chiki}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Olck}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Olck}"
);
testPropertyEscapes(
  /^\P{scx=Ol_Chiki}+$/u,
  nonMatchSymbols,
  "\\P{scx=Ol_Chiki}"
);
testPropertyEscapes(
  /^\P{scx=Olck}+$/u,
  nonMatchSymbols,
  "\\P{scx=Olck}"
);
