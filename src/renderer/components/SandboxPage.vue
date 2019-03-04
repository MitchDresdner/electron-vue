<template>
  <div id="wrapper">
    <main>

        <div class="container mb-3">
            <b-button variant="primary">Notifications <b-badge variant="light">{{notifications}}</b-badge></b-button>
        </div>
        <div class="container">
            <div class="bg-info mb-2 clearfix">
                <button type="button" class="btn btn-secondary float-left">Example Button floated left</button>
                <button type="button" class="btn btn-secondary float-right">Example Button floated right</button>
            </div>
            <div class="row">
                <div class="col">
                    <b-card
                        title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </div>
                <div class="col">
                    <b-card
                        title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </div>
                <div class="col">
                    <b-card
                        title="Card Title"
                        img-src="https://picsum.photos/600/300/?image=25"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </b-card-text>

                        <b-button href="#" variant="primary">Go somewhere</b-button>
                    </b-card>
                </div>
            </div>
        </div>
        
        <div class="fixed-bottom">Hey, where am i?</div>
    </main>
  </div>
</template>

<script>

import { ipcRenderer } from 'electron'
// import state from '../store/Counter'

export default {
  name: 'sandybox-page',
  data () {
    return {
      notifications: 42,
      myXDataVar: 0,
      posts: [],
      errors: []
    }
  },
  mounted () {
    // var foo = this.$store.state.var1;
    setInterval(() => {
      // this.$electron.ipcRenderer.send('ping')
      ipcRenderer.send('ping')
    }, 1000)

    this.$electron.ipcRenderer.on('pong', (event, data) => {
      this.myDataVar = data
      console.log(data)
    })
  }
}
</script>