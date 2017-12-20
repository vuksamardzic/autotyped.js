(function (root, factory) {
    if ( typeof define === 'function' && define.amd )
    {
        define([], factory(root));
    }
    else if ( typeof exports === 'object' )
    {
        module.exports = factory(root);
    }
    else
    {
        root.autotyped = factory(root);
    }
})(typeof global !== 'undefined' ? global : this.window || this.global, function (root) {

    'use strict';

    /**
     |--------------------------------------------------------------------------
     | Variables
     |--------------------------------------------------------------------------
     */

    var publicMethods = {};

    /**
     |--------------------------------------------------------------------------
     | Default settings
     |--------------------------------------------------------------------------
     */

    var defaults = {
        selector: '.autotyped',
        animate: true,
        animation: 'bounce',
        speed: 500
    };

    /**
     |--------------------------------------------------------------------------
     | Methods
     |--------------------------------------------------------------------------
     */

    /**
     * Merge two or more objects. Returns a new object.
     * @private
     * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
     * @param {Object}   objects  The objects to merge together
     * @returns {Object}          Merged values of defaults and options
     */
    var extend = function extend() {

        // variables
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;

        // Check if a deep merge
        if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
            deep = arguments[0];
            i++;
        }

        // Merge the object into the extended object
        var merge = function merge(obj) {
            for (var prop in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    // If deep merge and property is an object, merge properties
                    if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    } else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        // Loop through each object and conduct a merge
        for (; i < length; i++) {
            var obj = arguments[i];
            merge(obj);
        }

        return extended;
    };

    /**
     |--------------------------------------------------------------------------
     | Private methods
     |--------------------------------------------------------------------------
     */

    var _collection = function _collection(i, settings, el)
    {
        var txt = el[i].innerHTML;
        var arr = txt.split('');
        var rawHTML = '';
        var skip_arr = arr.map(function (i, index) {
            return i === ' ' ? index : false;
        }).filter(function (i) {
            return i !== false;
        });
        arr = arr.filter(function (i) {
            return i !== ' ';
        });

        el[i].classList.add('autotyped-running');
        el[i].innerHTML = '';

        arr.map(function (j, index)
        {
            setTimeout(function ()
            {
                skip_arr.map(function (k, k_index)
                {
                    if (k - k_index === index) {
                        rawHTML += ' ';
                    }
                });

                el[i].innerHTML = rawHTML;
                el[i].innerHTML += settings.animate ? '<span class="at-' + settings.animation + '">' + j + '</span>' : j;
                settings.animate ? el[i].firstElementChild.style.animationDuration = settings.speed + 'ms' : '';
                rawHTML += j;

                if (index + 1 === arr.length)
                {
                    setTimeout(function()
                    {
                        console.log('done');
                        el[i].innerHTML = rawHTML;
                        var class_array = el[i].classList;
                        if ( class_array.contains('autotyped-running') )
                        {
                            class_array.remove('autotyped-running');
                            class_array.add('autotyped-done')
                        }
                    }, settings.speed);
                }
            }, settings.speed * (index + 1));
        });
    };

    /**
     |--------------------------------------------------------------------------
     | Public methods
     |--------------------------------------------------------------------------
     */

    publicMethods.publicMethod = function () {};

    /**
     |--------------------------------------------------------------------------
     | Init method
     |--------------------------------------------------------------------------
     */
    publicMethods.init = function (options)
    {
        var settings = extend(defaults, options || {});
        var el = document.querySelectorAll(settings.selector);

        for (var i = 0; i < el.length; i++)
        {
            _collection(i, settings, el);
        }
    };

    /**
     |--------------------------------------------------------------------------
     | Public APIs
     |--------------------------------------------------------------------------
     */

    return publicMethods;
});