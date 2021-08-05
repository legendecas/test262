// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.day
description: Temporal.Calendar.prototype.day will take ISO8601 string and return
  the value of the day.
info: |
  4. If Type(temporalDateLike) is not Object or temporalDateLike does not have
    an [[InitializedTemporalDate]] or [[InitializedTemporalYearMonth]] internal
    slot, then
    a. Set temporalDateLike to ? ToTemporalDate(temporalDateLike).
  5. Return ! ISODay(temporalDateLike).
features: [Temporal]
---*/
let cal = new Temporal.Calendar("iso8601");

assert.sameValue(15, cal.day("2019-03-15"));
