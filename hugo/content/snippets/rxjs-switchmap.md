---
title: switchMap
lastmod: 2018-12-29T08:28:56-07:00
publishdate: 2018-12-29T08:28:56-07:00
author: Custom Cult
draft: false
description: RxJS switchMap operator practical examples
tags:
    - rxjs
versions:
    - "rxjs": 6.3
---

`switchMap` is one of the most useful RxJS operators because it can compose Observables from an initial value that is unknown or that change. Conceptually, it is similar to chaining `then` functions with Promises, but operates on streams (Promises resolve once).

{{< box icon="abacus" >}}
Example: You have an Observable of a userID, then use it to *switch* to an HTTP request of all posts owned by that user.
{{< /box >}}


{{< file "js" "foo.js" >}}
{{< highlight javascript >}}
import { of } from 'rxjs'; // creates an Observable with a raw value
import { switchMap } from 'rxjs/operators';


const user$ = of({ userID: 'jeffd23' });

const boats$ = user$.pipe(
    switchMap(user => {
        // return an Observable or Promise here
        return fetch(`http://.../boats/${user.userID}`)
    })
)

boats$.subscribe(console.log);
// Logs response from the API
{{< /highlight >}}

Notice how we only need to subscribe to the `boats$` Observable. It will automatically subscribe to the `$user`, then use the emitted userID to create the final observable of boats.


{{< box icon="abacus" >}}
Example 2: You have 2 Observables named `nums$` and `string$`. You want to get the value of the `string$` Observable when `nums$` emits even numbers. 
{{< /box >}}


{{< file "js" "bar.js" >}}
{{< highlight javascript >}}

import { of, from } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

const nums$ = from([1, 2, 3, 4, 5]);
const string$ = of('It\'s an even number');

// when values depend on each other we often ended up nesting subscriptions
nums$.subscribe(firstValue => {
  if(firstValue % 2 === 0) {
    strings$.subscribe(secondValue => console.log(secondValue))
  }
});


// let's refactor with switchMap
// switchMap will abandon the following values emitted from nums$, and only take values from string$

nums$.pipe(
  filter(value => value % 2 === 0),
  switchMap(value => string$)
).subscribe(value => console.log(value));
// It's an even number
// It's an even number
{{< /highlight >}}

Nested subscriptions are not ideal and can always be refactored with operators.

