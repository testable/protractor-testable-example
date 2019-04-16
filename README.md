# Protractor Testable Example

An example [Protractor configuration](https://github.com/angular/protractor/blob/master/lib/config.ts) and test spec that is compatible with [Testable](https://testable.io).

See the [Testable Protractor guide](https://testable.io/documentation/selenium/overview.html) for more details.

### Screenshots and Output Files

Any file written to the directory indicated by the `OUTPUT_DIR` environment variable will be captured as part of your [Testable](https://testable.io) test results.

For example (if run locally it will write to the current directory):

```javascript
browser.takeScreenshot().then(function(base64Data) {
	fs.writeFileSync((process.env.OUTPUT_DIR || '') + '/HomePage.png', base64Data, 'base64');
});
```

### Testable Parameters

If your [Testable scenario is parameterized](https://testable.io/documentation/selenium/overview.html) they are accessible as environment variables.

For example, the `TestVar` parameter is accessible as `process.env.PARAM_TESTVAR`.

### Capturing Assertions

Testable will capture all assertions during your test and report them in a histogram metric called `assertions` (with buckets `passed` and `failed`). This metric is included in the standard Selenium result view on Testable.

### Metrics, Timings, Logging, CSVs, and more

See the [testable-utils](https://github.com/testable/node-script-utils) package for more details on the following features:

* [Custom Metrics](https://github.com/testable/node-script-utils#custom-metrics)
* [Stopwatch](https://github.com/testable/node-script-utils#stopwatch)
* [Logging](https://github.com/testable/node-script-utils#logging)
* [CSV](https://github.com/testable/node-script-utils#csv)
* [Execution Info](https://github.com/testable/node-script-utils#execution-info)
