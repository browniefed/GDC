/*
	
	GDC - v0.1.0 - 2014-01-14
	==============================================================
	
	Licensed WTFPL

*/

(function ( global ) {



var GDC_utils_create = function () {
        
        var create;
        try {
            Object.create(null);
            create = Object.create;
        } catch (err) {
            create = function () {
                var F = function () {
                };
                return function (proto, props) {
                    var obj;
                    if (proto === null) {
                        return {};
                    }
                    F.prototype = proto;
                    obj = new F();
                    if (props) {
                        Object.defineProperties(obj, props);
                    }
                    return obj;
                };
            }();
        }
        return create;
    }();
var GDC_utils_defineProperty = function () {
        
        try {
            Object.defineProperty({}, 'test', { value: 0 });
            return Object.defineProperty;
        } catch (err) {
            return function (obj, prop, desc) {
                obj[prop] = desc.value;
            };
        }
    }();
var GDC_utils_defineProperties = function (defineProperty) {
        
        try {
            try {
                Object.defineProperties({}, { test: { value: 0 } });
            } catch (err) {
                throw err;
            }
            return Object.defineProperties;
        } catch (err) {
            return function (obj, props) {
                var prop;
                for (prop in props) {
                    if (props.hasOwnProperty(prop)) {
                        defineProperty(obj, prop, props[prop]);
                    }
                }
            };
        }
    }(GDC_utils_defineProperty);
var GDC_prototype_hasFocus = function () {
    }();
var GDC_prototype_events_on = function () {
        
        return function (eventName, callback) {
            var self = this, listeners, n;
            if (typeof eventName === 'object') {
                listeners = [];
                for (n in eventName) {
                    if (eventName.hasOwnProperty(n)) {
                        listeners[listeners.length] = this.on(n, eventName[n]);
                    }
                }
                return {
                    cancel: function () {
                        while (listeners.length) {
                            listeners.pop().cancel();
                        }
                    }
                };
            }
            if (!this._subs[eventName]) {
                this._subs[eventName] = [callback];
            } else {
                this._subs[eventName].push(callback);
            }
            return {
                cancel: function () {
                    self.off(eventName, callback);
                }
            };
        };
    }();
var GDC_prototype_events_off = function () {
        
        return function (eventName, callback) {
            var subscribers, index;
            if (!callback) {
                if (!eventName) {
                    this._subs = {};
                } else {
                    this._subs[eventName] = [];
                }
            }
            subscribers = this._subs[eventName];
            if (subscribers) {
                index = subscribers.indexOf(callback);
                if (index !== -1) {
                    subscribers.splice(index, 1);
                }
            }
        };
    }();
var GDC_prototype_events_fire = function () {
        
        return function (eventName) {
            var args, i, len, subscribers = this._subs[eventName];
            if (!subscribers) {
                return;
            }
            args = Array.prototype.slice.call(arguments, 1);
            for (i = 0, len = subscribers.length; i < len; i += 1) {
                subscribers[i].apply(this, args);
            }
        };
    }();
var GDC_prototype__prototype = function (hasFocus, on, off, fire) {
        
        return {
            hasFocus: hasFocus,
            on: on,
            off: off,
            fire: fire
        };
    }(GDC_prototype_hasFocus, GDC_prototype_events_on, GDC_prototype_events_off, GDC_prototype_events_fire);
var GDC_utils_rangeBuilder = function () {
        
        return {
            fromRange: function (from, to) {
                return {
                    from: _.clone(from),
                    to: _.clone(to)
                };
            },
            toRange: function (to, from) {
                return {
                    from: _.clone(from),
                    to: _.clone(to)
                };
            }
        };
    }();
var GDC__currentStyles = function (rangeBuilder) {
        
        var currentStyles = {}, removeStyle = false, marks = [], startRange = {}, endRange = {};
        return {
            addStyle: function (name, style) {
                currentStyles[name] = style;
            },
            removeStyle: function (name) {
                currentStyles[name] = null;
            },
            removeStyleFromSelection: function (codeMirrorInstance, selection, styleClass) {
                marks = codeMirrorInstance.doc.findMarksAt(selection.from) || [];
                removeStyle = false;
                marks.concat(codeMirrorInstance.doc.findMarksAt(selection.to) || []);
                if (marks.length) {
                    _(marks).forEach(function (value) {
                        if (value.className == styleClass) {
                            startRange = rangeBuilder.fromRange(value.find().from, selection.from);
                            endRange = rangeBuilder.toRange(value.find().to, selection.to);
                            value.clear();
                            codeMirrorInstance.doc.markText(startRange.from, startRange.to, { className: 'gdc-style-' + styleClass });
                            codeMirrorInstance.doc.markText(endRange.from, endRange.to, { className: 'gdc-style-' + styleClass });
                            removeStyle = true;
                        }
                    });
                }
                return removeStyle;
            }
        };
    }(GDC_utils_rangeBuilder);
var GDC_styles_bold = function (styleManager) {
        
        var style = {}, removeStyle = false, codeMirrorInstance;
        style.name = 'bold';
        style.executeStyle = function (selection) {
            codeMirrorInstance = this._codemirror.getCodemirror();
            if (selection) {
                removeStyle = styleManager.removeStyleFromSelection(codeMirrorInstance, selection, 'gdc-style-' + style.name);
                if (!removeStyle) {
                    this._codemirror.getCodemirror().doc.markText(selection.from, selection.to, { className: 'gdc-style-' + style.name });
                }
            } else {
            }
        };
        return style;
    }(GDC__currentStyles);
var GDC_styles_italic = function (styleManager) {
        
        var style = {}, removeStyle = false, codeMirrorInstance;
        style.name = 'italic';
        style.executeStyle = function (selection) {
            codeMirrorInstance = this._codemirror.getCodemirror();
            if (selection) {
                removeStyle = styleManager.removeStyleFromSelection(codeMirrorInstance, selection, 'gdc-style-' + style.name);
                if (!removeStyle) {
                    this._codemirror.getCodemirror().doc.markText(selection.from, selection.to, { className: 'gdc-style-' + style.name });
                }
            } else {
            }
        };
        return style;
    }(GDC__currentStyles);
var GDC_styles_underline = function (styleManager) {
        
        var style = {}, removeStyle = false, codeMirrorInstance;
        style.name = 'underline';
        style.executeStyle = function (selection) {
            codeMirrorInstance = this._codemirror.getCodemirror();
            if (selection) {
                removeStyle = styleManager.removeStyleFromSelection(codeMirrorInstance, selection, 'gdc-style-' + style.name);
                if (!removeStyle) {
                    this._codemirror.getCodemirror().doc.markText(selection.from, selection.to, { className: 'gdc-style-' + style.name });
                }
            } else {
            }
        };
        return style;
    }(GDC__currentStyles);
var GDC_styles_strikethrough = function (styleManager) {
        
        var style = {}, removeStyle = false, codeMirrorInstance;
        style.name = 'strikethrough';
        style.executeStyle = function (selection) {
            codeMirrorInstance = this._codemirror.getCodemirror();
            if (selection) {
                removeStyle = styleManager.removeStyleFromSelection(codeMirrorInstance, selection, 'gdc-style-' + style.name);
                if (!removeStyle) {
                    this._codemirror.getCodemirror().doc.markText(selection.from, selection.to, { className: 'gdc-style-' + style.name });
                }
            } else {
            }
        };
        return style;
    }(GDC__currentStyles);
var GDC_styles_listul = function (styleManager) {
        
        var style = {}, removeStyle = false, codeMirrorInstance;
        style.name = 'ul';
        style.executeStyle = function (selection) {
            codeMirrorInstance = this._codemirror.getCodemirror();
            if (selection) {
                removeStyle = styleManager.removeStyleFromSelection(codeMirrorInstance, selection, 'gdc-style-' + style.name);
                if (!removeStyle) {
                    this._codemirror.getCodemirror().doc.markText(selection.from, selection.to, { className: 'gdc-style-' + style.name });
                }
            } else {
            }
        };
        return style;
    }(GDC__currentStyles);
var GDC_styles_listol = function (styleManager) {
        
        var style = {}, removeStyle = false, codeMirrorInstance;
        style.name = 'ol';
        style.executeStyle = function (selection) {
            codeMirrorInstance = this._codemirror.getCodemirror();
            if (selection) {
                removeStyle = styleManager.removeStyleFromSelection(codeMirrorInstance, selection, 'gdc-style-' + style.name);
                if (!removeStyle) {
                    this._codemirror.getCodemirror().doc.markText(selection.from, selection.to, { className: 'gdc-style-' + style.name });
                }
            } else {
            }
        };
        return style;
    }(GDC__currentStyles);
var GDC_styles__styles = function (styleManager, bold, italic, underline, strikethrough, listol, listul) {
        
        var styles = {
                bold: bold,
                italic: italic,
                underline: underline,
                strikethrough: strikethrough,
                ol: listol,
                ul: listul
            };
        var styleApplier = {}, isSelected = false, selection = {};
        styleApplier.applyStyle = function (style) {
            isSelected = this._codemirror.getCodemirror().somethingSelected();
            if (!isSelected) {
                styleManager.addStyle(style, styles[style]);
                return;
            } else {
                selection.from = this._codemirror.getCodemirror().doc.getCursor(true);
                selection.to = this._codemirror.getCodemirror().doc.getCursor(false);
                styles[style].executeStyle.call(this, selection);
            }
        };
        return styleApplier;
    }(GDC__currentStyles, GDC_styles_bold, GDC_styles_italic, GDC_styles_underline, GDC_styles_strikethrough, GDC_styles_listul, GDC_styles_listol);
var circular = function () {
        
        return [];
    }();
var GDC__codemirror = function () {
        
        var CodemirrorManager = function (codemirror) {
            this.codemirror = codemirror;
        };
        CodemirrorManager.prototype.getCodemirror = function () {
            return this._codemirror;
        };
        CodemirrorManager.prototype.getSelection = function () {
        };
        CodemirrorManager.prototype.fromTextArea = function (el) {
            this._codemirror = this.codemirror.fromTextArea(el);
        };
        CodemirrorManager.prototype.on = function (target, func) {
            this._codemirror.on(target, func);
        };
        CodemirrorManager.prototype.off = function (target, func) {
            this._codemirror.off(target, func);
        };
        return CodemirrorManager;
    }();
var GDC_insertions_comment = function () {
        
        var insert = {};
        insert.name = 'comment';
        insert.insertWidget = function (selection) {
            if (selection) {
            } else {
            }
        };
        return insert;
    }();
var GDC_insertions_widgets_image = function () {
        
        var ImageWidget = function (src) {
            this.image = new Image();
            this.image.style.display = 'inline';
            if (src) {
                this.image.src = src;
            }
        };
        ImageWidget.prototype.getDOM = function () {
            return this.image;
        };
        return ImageWidget;
    }();
var GDC_insertions_images = function (ImageWidget) {
        
        var insert = {}, codeMirrorInstance, codeMirrorConstructor, IMAGE_SENTRY = '\xcf';
        insert.name = 'image';
        insert.insertWidget = function (selection) {
            codeMirrorInstance = this._codemirror.getCodemirror();
            codeMirrorConstructor = this._codemirror.codemirror;
            var currentLine = codeMirrorInstance.doc.getCursor(true), endLine = codeMirrorInstance.doc.getCursor(false), imgInsert = new ImageWidget('morgan.png');
            if (currentLine.line == endLine.line && currentLine.ch == endLine.ch) {
                endLine = {
                    line: endLine.line,
                    ch: endLine.ch + 1
                };
            }
            codeMirrorInstance.replaceRange(IMAGE_SENTRY, currentLine, endLine);
            codeMirrorInstance.markText(currentLine, endLine, {
                handleMouseEvents: true,
                replacedWith: imgInsert.getDOM()
            });
        };
        return insert;
    }(GDC_insertions_widgets_image);
var GDC_insertions_link = function () {
        
        var insert = {};
        insert.name = 'link';
        insert.insertWidget = function (selection) {
            if (selection) {
            } else {
            }
        };
        return insert;
    }();
var GDC_utils_tableFuncs = function () {
        
        return {
            tableCreate: function (cellsX, cellsY) {
                var tbl = document.createElement('table');
                tbl.style.width = '100%';
                tbl.style.height = '100px';
                tbl.style.border = '1px solid #000';
                cellsX = cellsX || 2;
                cellsY = cellsY || 3;
                for (var i = 0; i < cellsY; i++) {
                    var tr = tbl.insertRow();
                    for (var j = 0; j < cellsX; j++) {
                        var td = tr.insertCell();
                        td.style.border = '1px solid #000';
                        td.appendChild(document.createTextNode(' '));
                    }
                }
                return tbl;
            }
        };
    }();
var GDC_insertions_widgets_table = function (tableUtils) {
        
        function Table(cellsX, cellsY) {
            this.DOMEle = tableUtils.tableCreate(cellsX, cellsY);
            this.tableCells = [];
        }
        Table.prototype.getDOM = function () {
            return this.DOMEle;
        };
        Table.prototype.setWidget = function (widget) {
            this.widget = widget;
        };
        Table.prototype.initTableCells = function (codeMirrorConstructor) {
            var tds = this.widget.node.querySelectorAll('td'), tdCMs = [];
            _(tds).forEach(function (td, index) {
                tdCMs.push(new codeMirrorConstructor(td));
            });
            this.tableCells = tdCMs;
        };
        Table.prototype.destroy = function () {
            this.widget.clear();
        };
        Table.prototype.addStyle = function (style) {
            _(this.tableCells).each(function (cell) {
                cell.fire(style);
            });
        };
        return Table;
    }(GDC_utils_tableFuncs);
var GDC_insertions_table = function (Table) {
        
        var insert = {}, codeMirrorInstance, codeMirrorConstructor;
        insert.name = 'table';
        insert.insertWidget = function (x, y) {
            codeMirrorInstance = this._codemirror.getCodemirror();
            codeMirrorConstructor = this._codemirror.codemirror;
            var x = x || 2;
            var y = y || 5;
            var currentLine = codeMirrorInstance.doc.getCursor(true), tableInstance = new Table(x, y);
            codeMirrorInstance.replaceRange('\n', {
                line: currentLine.line + 1,
                ch: 0
            });
            codeMirrorInstance.replaceRange('\n', {
                line: currentLine.line + 2,
                ch: 0
            });
            tableInstance.setWidget(codeMirrorInstance.addLineWidget(currentLine.line, tableInstance.getDOM()));
            tableInstance.initTableCells(codeMirrorConstructor);
            return tableInstance;
        };
        return insert;
    }(GDC_insertions_widgets_table);
var GDC_insertions_widgets_listol = function () {
        
        var ListOL = function () {
            this.dom = document.createElement('span');
            this.replace = '  %d.  ';
        };
        ListOL.prototype.getDOM = function (currentLine, startOfList) {
            this.dom.innerHTML = this.replace.replace('%d', currentLine - startOfList + 1);
            return this.dom;
        };
        return ListOL;
    }();
var GDC_insertions_widgets_listul = function () {
        
        var ListUL = function () {
            this.dom = document.createElement('span');
            this.dom.innerHTML = '  \u2022  ';
        };
        ListUL.prototype.getDOM = function () {
            return this.dom;
        };
        return ListUL;
    }();
var GDC_insertions_list = function (ListOlWidget, ListUlWidget) {
        
        var insert = {}, codeMirrorInstance, codeMirrorConstructor, listTypes = {
                listol: ListOlWidget,
                listul: ListUlWidget
            };
        var LIST_SENTRY = '\u2642';
        insert.name = 'list';
        insert.insertWidget = function (selection, listType) {
            codeMirrorInstance = this._codemirror.getCodemirror();
            codeMirrorConstructor = this._codemirror.codemirror;
            var currentLine = codeMirrorInstance.doc.getCursor(true), listInsert = new listTypes[listType]();
            var isLine = codeMirrorInstance.getLine(currentLine.line).indexOf(LIST_SENTRY) !== -1;
            if (!isLine) {
                codeMirrorInstance.replaceRange(LIST_SENTRY, {
                    line: currentLine.line,
                    ch: 0
                });
                codeMirrorInstance.markText({
                    line: currentLine.line,
                    ch: 0
                }, {
                    line: currentLine.line,
                    ch: 1
                }, { replacedWith: listInsert.getDOM(currentLine.line, getFirstListLine(currentLine.line)) });
            } else {
                codeMirrorInstance.replaceRange('', {
                    line: currentLine.line,
                    ch: 0
                }, {
                    line: currentLine.line,
                    ch: 1
                });
            }
        };
        function getFirstListLine(lineStart) {
            var checkLine = !(lineStart - 1) ? lineStart - 1 : 0, isList = codeMirrorInstance.getLine(checkLine).indexOf(LIST_SENTRY) !== -1;
            if (!isList) {
                return lineStart;
            }
            while (isList) {
                if (checkLine <= 0) {
                    break;
                }
                isList = codeMirrorInstance.getLine(checkLine).indexOf(LIST_SENTRY) !== -1;
                if (isList) {
                    checkLine--;
                }
            }
            return checkLine;
        }
        return insert;
    }(GDC_insertions_widgets_listol, GDC_insertions_widgets_listul);
var GDC_insertions__widgetInserter = function (comment, image, link, table, list) {
        
        var widgets = {
                comment: comment,
                image: image,
                link: link,
                table: table,
                list: list
            }, createdWidgets = [];
        return {
            insert: function (widget, selection, suboption) {
                createdWidgets.push(widgets[widget].insertWidget.call(this, selection, suboption));
            },
            getCreatedWidgets: function () {
                return createdWidgets;
            }
        };
    }(GDC_insertions_comment, GDC_insertions_images, GDC_insertions_link, GDC_insertions_table, GDC_insertions_list);
var GDC_initialise = function (CodemirrorManager, defineProperties, styleApplier, widgetInserter) {
        
        return function (gdc, options) {
            defineProperties(gdc, { _subs: { value: {} } });
            gdc._codemirror = new CodemirrorManager(options.codemirror, { lineWrapping: true });
            gdc._codemirror.fromTextArea(options.el);
            gdc.on('apply-bold', function () {
                styleApplier.applyStyle.call(gdc, 'bold', {});
            });
            gdc.on('apply-italic', function () {
                styleApplier.applyStyle.call(gdc, 'italic', {});
            });
            gdc.on('apply-strikethrough', function () {
                styleApplier.applyStyle.call(gdc, 'strikethrough', {});
            });
            gdc.on('apply-underline', function () {
                styleApplier.applyStyle.call(gdc, 'underline', {});
            });
            gdc.on('insert-table', function () {
                widgetInserter.insert.call(gdc, 'table');
            });
            gdc.on('insert-image', function () {
                widgetInserter.insert.call(gdc, 'image');
            });
            gdc.on('insert-ol', function () {
                widgetInserter.insert.call(gdc, 'list', {}, 'listol');
            });
            gdc.on('insert-ul', function () {
                widgetInserter.insert.call(gdc, 'list', {}, 'listul');
            });
            gdc._codemirror.on('beforeSelectionChange', function () {
                console.log(arguments);
            });
        };
    }(GDC__codemirror, GDC_utils_defineProperties, GDC_styles__styles, GDC_insertions__widgetInserter);
var GDC__GDC = function (create, defineProperties, prototype, styleApplier, circular, initialise) {
        
        var GDC = function (codemirror, el) {
            initialise(this, {
                codemirror: codemirror,
                el: el
            });
        };
        defineProperties(GDC, {
            prototype: { value: prototype },
            _subs: { value: {} }
        });
        GDC.prototype.constructor = GDC;
        circular.GDC = GDC;
        return GDC;
    }(GDC_utils_create, GDC_utils_defineProperties, GDC_prototype__prototype, GDC_styles__styles, circular, GDC_initialise);
var GDC = function (GDC, circular) {
        
        while (circular.length) {
            circular.pop()();
        }
        return GDC;
    }(GDC__GDC, circular);
// export as Common JS module...
if ( typeof module !== "undefined" && module.exports ) {
	module.exports = GDC;
}

// ... or as AMD module
else if ( typeof define === "function" && define.amd ) {
	define( function () {
		return GDC;
	});
}

// ... or as browser global
else {
	console.log('global');
	global.GDC = GDC;
}

}( typeof window !== 'undefined' ? window : this ));