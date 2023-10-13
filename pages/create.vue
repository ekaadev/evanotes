<!-- pages/create.vue -->
<template>
  <div class="create-page flex w-screen min-h-screen">
    <!-- Konten halaman Create To-Do List -->
    <div
      class="dashboard fixed bg-gray-900 w-72 min-h-screen p-4 text-slate-50 duration-300 z-50"
      :style="{ width: dashBoardWidth }"
    >
      <div class="inline-flex items-center">
        <i
          class="uil uil-bars mr-2 cursor-pointer duration-500 bg-slate-50 rounded-md text-gray-900 text-2xl block float-left w-8 text-center items-center"
          :style="{
            transform: isDashboardOpen ? 'rotate(360deg)' : 'rotate(0deg)',
          }"
          @click="toggleDashboard"
        ></i>
        <h1
          class="font-medium p-1 px-2 origin-left duration-300"
          :style="{ transform: isDashboardOpen ? 'scale(1)' : 'scale(0)' }"
        >
          Dashboard
        </h1>
      </div>
      <div class="flex">
        <hr
          class="my-2 w-full origin-left duration-300"
          :style="{ width: isDashboardOpen ? '100%' : '2rem' }"
        />
      </div>
      <div class="inline-flex items-start">
        <i
          class="uil uil-plus bg-slate-50 rounded-3xl mr-2 cursor-pointer text-gray-900 hover:text-emerald-50 hover:bg-emerald-500 hover:rounded-md transition-all duration-300 ease-linear text-2xl w-8 block float-left text-center items-center"
          :style="{
            'border-radius': isDashboardOpen ? '6px' : '',
            'background-color': isDashboardOpen ? '#10b981' : '',
            color: isDashboardOpen ? '#fff' : '',
          }"
          @click="toggleAddProject"
        ></i>
        <h1
          class="font-medium p-1 px-2 rounded cursor-pointer origin-left duration-300 my-auto whitespace-nowrap hover:bg-gray-600"
          :style="{ transform: isDashboardOpen ? 'scale(1)' : 'scale(0)' }"
          @click="toggleAddProject"
        >
          Add Note
        </h1>
      </div>
    </div>
    <div class="p-4 ml-24 w-screen flex flex-col">
      <div
        class="header-notes flex flex-wrap w-ful min-w-full px-4 py-1 justify-center items-center"
      >
        <div class="search-bar bg-gray-50 p-1 w-2/5 flex rounded shadow-md">
          <i class="uil uil-search mx-3 text-gray-400"></i
          ><input
            v-model="searchQuery"
            class="w-full bg-transparent rounded text-slate-800 text-sm focus:outline-none"
            type="text"
            placeholder="Search"
          />
        </div>
        <div class="mx-5">
          <select
            id=""
            v-model="selectedFilter"
            name=""
            class="bg-gray-50 p-1 rounded text-sm text-gray-400 shadow-md"
          >
            <option value="all">All</option>
            <option value="finish">Finish</option>
            <option value="unfinish">Unfinish</option>
          </select>
        </div>
      </div>

      <div class="container-content w-full flex justify-center">
        <div class="w-11/12 mt-6 flex flex-row gap-4 flex-wrap justify-start">
          <div
            v-for="(item, index) in tasks"
            :key="index.id"
            class="rounded-md w-[297px] h-72 mx-1 px-3 py-1 bg-neutral-100 border border-gray-400 flex flex-col hover:shadow-xl duration-300"
          >
            <div
              class="title w-full font-medium mb-3"
              :style="{
                'text-decoration': item.done ? 'line-through' : 'none',
              }"
            >
              {{ item.title }}
            </div>
            <div
              class="deskripsi w-full mb-3 text-sm font-normal overflow-y-auto h-52"
              :style="{
                'text-decoration': item.done ? 'line-through' : 'none',
              }"
            >
              {{ item.deskripsi }}
            </div>
            <div class="option w-full flex justify-end items-center">
              <i
                class="uil uil-thumbs-up text-base rounded-full hover:bg-gray-400 w-8 text-center text-neutral-950 mb-2 cursor-pointer duration-300"
                @click="toggleDone(item)"
              ></i>
              <i
                class="uil uil-trash-alt text-base rounded-full hover:bg-gray-400 w-8 text-center text-neutral-950 mb-2 cursor-pointer duration-300"
                @click="deleteTodo(index)"
              ></i>
            </div>
          </div>
        </div>
      </div>

      <div v-show="addProject">
        <div
          class="popup-box fixed top-0 left-0 z-20 h-full w-full bg-[rgba(0,0,0,0.4)] transition-all duration-1000"
          :style="{ transform: addProject ? 'scale(1)' : 'scale(0.95)' }"
        >
          <div
            class="popup flex items-center absolute max-w-md top-2/4 left-2/4 z-30 w-full justify-center -translate-x-2/4 -translate-y-2/4 scale-95"
          >
            <div class="content bg-slate-50 rounded-md w-11/12 shadow-xl">
              <div
                class="header-content flex items-center justify-between border-b-2 px-4 py-5"
              >
                <p class="text-2xl font-medium">Add a new note</p>
                <i
                  class="uil uil-times cursor-pointer text-2xl text-gray-400"
                  @click="toggleAddProject"
                ></i>
              </div>
              <form id="tambah-tasks" class="mt-4 mb-6 mx-9" @submit.prevent="onFormSumbit">
                <div class="row-title mb-5">
                  <label for="title" class="block mb-2 text-xl font-normal"
                    >Title</label
                  >
                  <input
                    id="title"
                    type="text"
                    name="title"
                    class="w-full border-solid border-2 border-emerald-500/50 focus:outline-none text-lg p-2 rounded"
                    spellcheck="false"
                    placeholder="Untilted"
                  />
                </div>
                <div class="row-description mb-5">
                  <label for="deskripsi" class="block mb-2 text-lg font-normal"
                    >Description</label
                  >
                  <textarea
                    id="deskripsi"
                    class="w-full h-48 resize-none border-solid border-2 border-emerald-500/50 focus:outline-none text-base p-2 rounded"
                    name="deskripsi"
                    spellcheck="false"
                    placeholder="Note"
                  ></textarea>
                </div>
                <button
                  type="button"
                  class="w-full text-center text-xl text-slate-50 p-2 rounded bg-emerald-400 hover:bg-emerald-600 duration-300 focus:bg-emerald-600"
                  @click="toggleAddNotes"
                >
                  Add note
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'minimal',
  data() {
    return {
      tasks: [],
      isDashboardOpen: false,
      dashBoardWidth: '4rem',
      addProject: false,
      selectedFilter: 'all',
      searchQuery: '',
      titleNotes: '',
      deskripsiNotes: '',
    }
  },

  async fetch() {
    try {
      const res = await this.$axios.get('/rest/v1/tasks', {
        headers: {
          apikey:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhemRpYm56eXB0Z2lhYXZycHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzODc0OTIsImV4cCI6MjAxMDk2MzQ5Mn0.hHccK1njvPRp1R1u6xf4B20Jd4FfVQ6tTgOflThlZRU',
        },
      })
      this.tasks = res.data
    } catch (error) {
      console.log(error)
    }
  },

  computed: {
    // fitur search
    resultQuery() {
      if (this.searchQuery) {
        return this.tasks.filter((item) =>
          item.title.includes(this.searchQuery)
        )
      } else {
        return this.notesProject
      }
    },
  },

  mounted() {
    console.log('Task: ', this.tasks)
  },

  methods: {
    // tambah tasks
    async onFormSumbit() {
      const dataForm = {
        title: document.getElementById('title').value,
        deskripsi: document.getElementById('deskripsi').value,
      }
      const response = await fetch('https://wazdibnzyptgiaavrpur.supabase.co/rest/v1/tasks', {
        method: "POST",
        headers: {
          apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhemRpYm56eXB0Z2lhYXZycHVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzODc0OTIsImV4cCI6MjAxMDk2MzQ5Mn0.hHccK1njvPRp1R1u6xf4B20Jd4FfVQ6tTgOflThlZRU", 
          "Content-Type": "application/json", 
          Prefer: "return=representation"
        },
        body: JSON.stringify(dataForm)
      })

      const data = await response?.json()
      this.$router.push(`/create/${data[0]}?.id`)
    },

    // dashboard side
    toggleDashboard() {
      this.isDashboardOpen = !this.isDashboardOpen
      this.dashBoardWidth = this.isDashboardOpen ? '18rem' : '4rem'
    },

    // tombol pop up add notes
    toggleAddProject() {
      this.addProject = !this.addProject
    },

    // tombol done(true) or done(false)
    toggleDone(item) {
      item.done = !item.done
    },

    // fitur filter berdasarkan kategori (error)
    filterNotes() {
      if (this.selectedFilter === 'all') {
        return this.notesProject
      } else if (this.selectedFilter === 'finish') {
        return this.notesProject.filter((item) => item.isDone === true)
      } else if (this.selectedFilter === 'unfinish') {
        return this.notesProject.filter((item) => item.isDone === false)
      }
    },

    // fitur add notes
    toggleAddNotes() {
      const newItem = {
        title: this.titleNotes,
        deskripsi: this.deskripsiNotes,
        isDone: false,
      }
      this.notesProject.push(newItem)
      this.addProject = false
    },

    // fitur delete notes
    deleteTodo(index) {
      this.tasks.splice(index, 1)
    },
  },
}
</script>

<style>
.create-page {
  background: #e5e7eb;
}
</style>
