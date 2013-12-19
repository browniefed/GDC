Contenteditable is compltely broken. Google Docs is pretty fantasticish. Attempting to recreate a similar experience in CodeMirror. Hopefully with a decent enough API that people can develop on it.

Few ideas around how to actually create the docs after reading through Ractive.
The idea being that the doc actually lives in JS and is rendered initially and then intelligently updated. Pastes of HTML are caught, run through a parser and inserted into the JS object which then renders it all correctly.

This is all theoretical and just an idea. Granted large documents may perform poorly but we'll see how it goes.