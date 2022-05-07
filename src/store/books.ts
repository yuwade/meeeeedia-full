import store from "@/store"
import { defineStore } from "pinia"

export const bookStore = defineStore('book', {
  state: () => ({

    title: '',
    description: '',
    keywords: '',

    counter: 0,
    grade: '',
    subject: '',
    books: [

    ],
    detail: [

    ],
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
    async getBooks(grade?: string, subject?: string) {

      // console.log(this.books);
    },

    async getBooksDetail(
      grade: string | string[],
      subject: string | string[],
      version: string | string[]
    ) {

    },
  },
});
