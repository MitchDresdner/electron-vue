<template>
  <div id="wrapper">
    <main>
        <ul v-if="posts && posts.length">
            <li v-for="post of posts">
            <p><strong>{{post.title}}</strong></p>
            <p>{{post.body}}</p>
            </li>
        </ul>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors">
            {{error.message}}
            </li>
        </ul>
    </main>
  </div>
</template>

<script>
import SystemInformation from './LandingPage/SystemInformation'
import axios from 'axios'

export default {
  name: 'about-page',
  components: { SystemInformation },
  data () {
    return {
      posts: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  // https://alligator.io/vuejs/rest-api-axios/
  created () {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
      // JSON responses are automatically parsed.
        this.posts = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>