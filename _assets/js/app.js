var app = new Vue({
  el: '#app',
  data: {
    show: '',
    categories: [
      'favoriser-la-depense-privee',
      'augmenter-l-investissement-public',
      'efficacite-du-plan-d-investissement'
    ],
    categoryNames: {
      'favoriser-la-depense-privee': "Favoriser la dépense privée",
      'augmenter-l-investissement-public': "Augmenter l'invertissement public",
      'efficacite-du-plan-d-investissement': "Efficacité du plan d'investissement"
    }
  },
  methods: {
    showCategory: function(val, scroll) {
      this.show = val
      if (history.replaceState) {
        history.replaceState(null, null, '#' + val)
      } else {
        location.hash = '#' + val
      }
      if (scroll) {
        this.$nextTick(function() {
          this.$refs.categories.scrollIntoView({
            block: 'start', behavior: 'smooth'
          })
        })
      }
    },
  },
  created: function () {
    var hash = location.hash.slice(1, location.hash.length)
    if (hash.length > 0 && this.categories.indexOf(hash) !== -1) {
      this.show = hash
    }
  },
  mounted: function() {
    if (this.show) {
      this.$refs.categories.scrollIntoView()
    } else {
      this.show = 'favoriser-la-depense-privee'
    }
  }
})
