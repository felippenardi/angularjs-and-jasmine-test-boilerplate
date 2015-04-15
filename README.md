### Learn AngularJS TDD without the magic.
[![Book session on Codementor](https://cdn.codementor.io/badges/book_session_github.svg)](https://www.codementor.io/felippenardi)

I've seen a lot of people struggling to understand how to do TDD in AngularJS, so I create this repository: **a simple AngularJS app setup with Jasmine and an Html Test Runner**.

## What it is

* [spec/app-spec.js](spec/app-spec.js) holds your jasmine tests
* [js/app.js](js/app.js) holds your angularjs app
* [test-runner/index.html](test-runner/index.html) is your test runner

## How to use

* Write tests on [spec/app-spec.js](spec/app-spec.js)
* Create your Angular App on [js/app.js](js/app.js)
* Run your test by refreshing [test-runner/index.html](test-runner/index.html) as you go

## Conclusion

If I could get you to read the source of just one file, that would be  [test-runner/index.html](test-runner/index.html). This file removes all the magic around testing Javascript—test runners are just getting the test library, your code, and putting them together.

If you are getting started with tests, you can use the single-html and later switch to another test runner with more features—like [Karma](https://github.com/karma-runner/karma) or [Testem](https://github.com/airportyh/testem) (my favorite).

Have fun!
