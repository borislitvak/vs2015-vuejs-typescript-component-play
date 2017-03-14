"use strict";
var vue_js_1 = require("vue/dist/vue.js");
window.onload = function () {
    new vue_js_1.default({
        el: '#app',
        data: {
            greeting: 'Welcome to your Vue.js app!',
            docsURL: 'http://vuejs.org/guide/',
            gitterURL: 'https://gitter.im/vuejs/vue',
            forumURL: 'http://forum.vuejs.org/'
        },
        methods: {
            humanizeURL: function (url) {
                console.log(url);
                alert("Kuku");
                return url
                    .replace(/^https?:\/\//, '')
                    .replace(/\/$/, '');
            }
        }
    });
};
