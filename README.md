Contenteditable is completely broken. Google Docs is pretty fantastic, and blows any richtext editor out of the water. Attempting to recreate a similar experience in CodeMirror. Hopefully with a decent enough API that people can develop on it.

The idea is evolving after discovering Ractive and reading up on React. The goal is to intelligently update the DOM by building a version of the document in JavaScript that then compiles to the expected look of the document but all in real time.
It needs to also be able to take an existing HTML structure, parse and convert it to the reactive structure so existing documents can be imported. It will need to understand and interpret CSS.

These ideas aren't new and exist in one open source form or another. I'm just attempting to bring them all together to make the best rich text editor out there.

Tables sort of work in that you can make them and type in them but not yet define how big they are or respond to the bolding or italics, or any other styles.

Styles workish for now, still working on better detecting styles in a given selection and removing them at will.

###Todo
* Better style adding/removing
* Fix list counts
* Nested lists?
* Enter continues list, if enter on blank list then delete
* Other Google Docs interactions, just look at them and remake it
