<template>
  <div>
    <b-btn varinat="secondary" @click="removeCookie">Remove Browser Cookie</b-btn>
  
  <vue-cookie-accept-decline
    :ref="'myPanel1'"
    :elementId="'myPanel1'"
    :debug="false"
    :position="'bottom-left'"
    :type="'floating'"
    :disableDecline="false"
    :transitionName="'slideFromBottom'"
    @status="cookieStatus"
    @clickedAccept="cookieClickedAccept"
    @clickedDecline="cookieClickedDecline"
    @removedCookie="cookieRemovedCookie">

    <!-- Optional -->
    <div slot="message" class="message" >
     <p> In questo sito vengono usati solo cookie di funzionalità in quanto è un test-site.</p>
     <p> Clicca sul plusante "Accetto" per contiunare la navigazione,potrai comunque in qualsiasi momento  cambiare la tua scelta cliccando sul bottone "Remove Browser Cookie"</p>
    <a href="https://cookiesandyou.com/" target="_blank">Learn More...</a>
    </div>

    <!-- Optional -->
    <div slot="declineContent">
    Rifiuto
    </div>

    <!-- Optional -->
    <div slot="acceptContent">
    Accetto
    </div>
  </vue-cookie-accept-decline>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data () {
    return {
        status: null
    }
  },
  methods: {
    cookieStatus (status) {
      console.log('status: ' + status)
      this.status = status
    },
    cookieClickedAccept () {
      console.log('here in accept')
      this.status = 'accept'
    },
    cookieClickedDecline () {
      console.log('here in decline')
      this.status = 'decline'
    },
    cookieRemovedCookie () {
      console.log('here in cookieRemoved')
      this.status = null
      this.$refs.myPanel1.init()
    },

    removeCookie () {
      console.log('Cookie removed')
      this.$refs.myPanel1.removeCookie()
      alert('ricarica la pagina')
    }
  },
  computed: {
      statusText () {
        return this.status || 'No cookie set'
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#myPanel1{
    max-width:100vw;
    margin-left:30px;
    margin-right:30px;
};
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.message{
    line-height: 1;
   text-align: center !important;
}
a {
  color: #42b983;
}

</style>
