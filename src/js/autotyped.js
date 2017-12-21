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

    var defaults =
    {
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
     |--------------------------------------------------------------------------
     | Merge two or more objects. Returns a new object.
     |--------------------------------------------------------------------------
     */
    var extend = function ()
    {
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;

        // Check if a deep merge
        if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]')
        {
            deep = arguments[0];
            i++;
        }

        // Merge the object into the extended object
        var merge = function (obj)
        {
            for (var prop in obj)
            {
                if (Object.prototype.hasOwnProperty.call(obj, prop))
                {
                    // If deep merge and property is an object, merge properties
                    if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]')
                    {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    }
                    else
                    {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };

        // Loop through each object and conduct a merge
        for (; i < length; i++)
        {
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

    var _collection = function (i, settings, el)
    {
        var txt = el[i].innerHTML;
        var arr = txt.split('');
        var rawHTML = '';

        if ( !el[i].classList.contains('autotyped-running') )
        {
            el[i].classList.add('autotyped-running');
            el[i].innerHTML = '';

            var interval = setInterval(function ()
            {
                if ( arr.length === 0 )
                {
                    clearInterval(interval);
                    el[i].innerHTML = rawHTML;
                    var class_array = el[i].classList;
                    if ( class_array.contains('autotyped-running') )
                    {
                        class_array.remove('autotyped-running');
                        class_array.add('autotyped-done')
                    }
                }
                else
                {
                    var char = arr[0];
                    el[i].innerHTML = rawHTML;
                    el[i].innerHTML += settings.animate ? '<span class="at-' + settings.animation + '">' + char + '</span>' : char;
                    settings.animate ? el[i].firstElementChild.style.animationDuration = settings.speed + 'ms' : '';
                    rawHTML += char;
                    arr.splice(0, 1);

                    if ( arr[0] === ' ' )
                    {
                        rawHTML += ' ';
                        arr.splice(0, 1);
                    }
                }
            }, settings.speed);
        }
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