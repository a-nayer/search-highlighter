<template>
  <div class="search">
    <h1>Search</h1>

    <div class="container">
      <div class="search-section">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search for articles, such as grid"
          class="search-bar"
        />
        <template v-if="searchQuery">
          <p v-if="filteredArticles.length === 1">1 article was found.</p>
          <p v-else>{{ filteredArticles.length }} articles were found.</p>

          <div
            v-for="article in filteredArticles"
            :key="article.id"
            class="article-item"
          >
            <h2 v-html="highlightQuery(article.title)"></h2>
            <p>{{ article.date }}</p>
            <p v-html="highlightQuery(getExcerpt(article.content, this.searchQuery))"></p>
          </div>
        </template>
      </div>

      <div class="sidebar">
        <p>
          <strong>bitsofcode.</strong>
          Articles on Frontend Development. All articles are written by
          <u>Ire Aderinokun</u>, Frontend Developer and User Interface Designer.
        </p>

        <div class="twitter-container">
          <a
            href="https://twitter.com/ireaderinokun"
            target="_blank"
            class="twitter-follow-button"
          >
            Follow @ireaderinokun
          </a>
          <p>19.1K followers</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import articles from './mock/articles.json'
import { getExcerpt } from './utils'

export default {
  data() {
    return {
      searchQuery: '',
      articles,
    }
  },
  computed: {
    filteredArticles() {
      const lowerCasedSearchQuery = this.searchQuery.toLowerCase()

      return this.articles.filter(
        article =>
          article.title.toLowerCase().includes(lowerCasedSearchQuery) ||
          article.content.toLowerCase().includes(lowerCasedSearchQuery),
      )
    },
  },
  methods: {
    highlightQuery(text) {
      if (!this.searchQuery) return text

      const regex = new RegExp(`(${this.searchQuery})`, 'gi')
      return text.replace(regex, '<mark>$1</mark>')
    },
    getExcerpt,
  },
}
</script>

<style scoped>
.search {
  margin: 20px;
}

.container {
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

.search-section {
  flex: 1;
  margin-top: 80px;
}

.search-bar {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.article-item {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}

.sidebar {
  width: 315px;
  height: max-content;
  border: 1px solid #ccc;
  padding: 20px;
}

.twitter-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
  font-size: 12px;
}

.twitter-follow-button {
  display: inline-block;
  background-color: #1da1f2;
  color: white;
  padding: 2px 4px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

mark {
  background-color: #ff0;
  color: black;
}
</style>
