const App = {
    data() {
        return {
            title: 'List',
            placeholder: 'New list',
            inputValue: '',
            notes: ['buy oil', 'check price', 'sell usd']
        }
    },
    methods: {
        addList() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue.trim())
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase(item)
        },
        deleteList(note) {
          this.notes = this.notes.filter((notes, i) => i !== note)
        }
    },
    computed: {
        double() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if(value.length > 10) {
                this.inputValue = ''
            }
        }
    }



}


Vue.createApp(App).mount('#app')
