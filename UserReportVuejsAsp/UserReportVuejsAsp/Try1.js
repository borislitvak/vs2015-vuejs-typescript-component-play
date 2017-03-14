import Vue from 'vue/dist/vue.js'

// we need to import from /vue/dist/vue.js and not from vue because of https://forum-archive.vuejs.org/topic/4399/vue-2-0-vue-warn-failed-to-mount-component-template-or-render-function-not-defined-found-in-root-instance/3
// we in this example don't use vuefy which transforms the templates on the server side and thus need the template parser to be available in the browser.

window.onload = function() {
    new Vue({
        el: '#app',
        data: {
            greeting: 'Welcome to your Vue.js app!',
            docsURL: 'http://vuejs.org/guide/',
            gitterURL: 'https://gitter.im/vuejs/vue',
            forumURL: 'http://forum.vuejs.org/'
        },
        methods: {
            humanizeURL: function(url) {
                return url
                    .replace(/^https?:\/\//, '')
                    .replace(/\/$/, '')
            }
        }
    });
}