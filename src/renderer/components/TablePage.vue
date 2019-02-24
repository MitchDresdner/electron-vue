<template>
  <div id="wrapper">
    <main>

        <div class="container-fluid">
            <h1>Vue Bootstrap Table Demo</h1>
            <div id="app">
                <div class="row">
                    <div class="col-sm-12">
                        <button @click="addItem" class="btn btn-primary"><i class="glyphicon glyphicon-plus-sign"></i> Add an item</button>
                        <button @click="toggleFilter" class="btn btn-default">Toggle Filter</button>
                        <button @click="togglePicker" class="btn btn-default">Toggle Column Picker</button>
                        <button @click="togglePagination" class="btn btn-default">Toggle Pagination</button>
                    </div>
                    <br/><br/>
                    <vue-bootstrap-table
                            :columns="columns"
                            :values="values"
                            :show-filter="showFilter"
                            :show-column-picker="showPicker"
                            :paginated="paginated"
                            :multi-column-sortable="multiColumnSortable"
                            :ajax="ajax"
                    >
                    </vue-bootstrap-table>
                </div>
                <h2>Events Received</h2>
                <div>
                    {{ logging }}
                </div>
            </div>
        </div>

    </main>
  </div>
</template>
<script>
import VueBootstrapTable from 'vue2-bootstrap-table2/dist/vue-bootstrap-table'

export default {
  name: 'table-page',
  components: {
    VueBootstrapTable: VueBootstrapTable
  },
  data: {
    logging: [],
    showFilter: true,
    showPicker: true,
    paginated: true,
    multiColumnSortable: true,
    ajax: {
      enabled: false,
      url: 'http://localhost:9430/data/test',
      method: 'POST',
      delegate: true
    },
    columns: [
      {
        title: 'id',
        visible: true,
        editable: false
      },
      {
        title: 'Name',
        name: 'name',
        visible: true,
        editable: true
      },
      {
        title: 'Age',
        name: 'age',
        visible: true,
        editable: true
      },
      {
        title: 'Country',
        name: 'country',
        visible: true,
        editable: true
      }
    ],
    values: [
      {
        'id': 1,
        'name': 'John',
        'country': 'UK',
        'age': 25
      },
      {
        'id': 2,
        'name': 'Mary',
        'country': 'France',
        'age': 30
      },
      {
        'id': 3,
        'name': 'Ana',
        'country': 'Portugal',
        'age': 20
      }
    ]
  },
  created: function () {
    var self = this
    this.$on('cellDataModifiedEvent',
      function (originalValue, newValue, columnTitle, entry) {
        self.logging.push('cellDataModifiedEvent - Original Value : ' + originalValue +
                          ' | New Value : ' + newValue +
                          ' | Column : ' + columnTitle +
                          ' | Complete Entry : ' + entry)
      })
    this.$on('ajaxLoadedEvent',
      function (data) {
        this.logging.push('ajaxLoadedEvent - data : ' + data)
      }
    )
    this.$on('ajaxLoadingError',
      function (error) {
        this.logging.push('ajaxLoadingError - error : ' + error)
      }
    )
  },
  methods: {
    addItem: function () {
      // var self = this
      var item = {
        'id': this.values.length + 1,
        'name': 'name ' + (this.values.length + 1),
        'country': 'Portugal',
        'age': 26
      }
      this.values.push(item)
    },
    toggleFilter: function () {
      this.showFilter = !this.showFilter
    },
    togglePicker: function () {
      this.showPicker = !this.showPicker
    },
    togglePagination: function () {
      this.paginated = !this.paginated
    }
  }
}
</script>
