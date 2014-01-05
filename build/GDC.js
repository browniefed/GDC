/*
	
	GDC - v0.1.0 - 2014-01-05
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
var GDC_styles__styles = function (styleManager, bold, italic, underline, strikethrough) {
        
        var styles = {
                bold: bold,
                italic: italic,
                underline: underline,
                strikethrough: strikethrough
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
    }(GDC__currentStyles, GDC_styles_bold, GDC_styles_italic, GDC_styles_underline, GDC_styles_strikethrough);
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
        return CodemirrorManager;
    }();
var GDC_initialise = function (CodemirrorManager, defineProperties, styleApplier) {
        
        return function (gdc, options) {
            defineProperties(gdc, { _subs: { value: {} } });
            gdc._codemirror = new CodemirrorManager(options.codemirror);
            gdc._codemirror.fromTextArea(options.el);
            gdc.on('bold', function () {
                styleApplier.applyStyle.call(gdc, 'bold', {});
            });
            gdc.on('italic', function () {
                styleApplier.applyStyle.call(gdc, 'italic', {});
            });
            gdc.on('strikethrough', function () {
                styleApplier.applyStyle.call(gdc, 'strikethrough', {});
            });
            gdc.on('underline', function () {
                styleApplier.applyStyle.call(gdc, 'underline', {});
            });
        };
    }(GDC__codemirror, GDC_utils_defineProperties, GDC_styles__styles);
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