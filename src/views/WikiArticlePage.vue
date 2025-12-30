<template>
  <div class="wiki-article py-20 px-4 max-w-4xl mx-auto">
    <div v-if="loading" class="text-center text-slate-300">
      Завантаження...
    </div>
    <div v-else-if="error" class="text-center text-red-500">
      Статтю не знайдено або сталася помилка: {{ error.message }}
    </div>
    <div v-else>
      <h1 class="text-4xl font-bold text-white mb-6">{{ title }}</h1>
      <div class="prose prose-invert max-w-none" v-html="renderedMarkdown"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';

const route = useRoute();
const md = new MarkdownIt();

const loading = ref(true);
const error = ref<Error | null>(null);
const renderedMarkdown = ref('');
const title = ref('');

// Define the base URL for your documentation repository's raw content
const DOCS_REPO_RAW_BASE_URL = 'https://raw.githubusercontent.com/xauth-ecosystem/xauth-docs/main';

const fetchAndRenderMarkdown = async (slug: string) => {
  loading.value = true;
  error.value = null;
  renderedMarkdown.value = '';
  title.value = '';

  try {
    const response = await fetch(`${DOCS_REPO_RAW_BASE_URL}/${slug}.md`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Стаття не знайдена');
      }
      throw new Error(`Помилка завантаження: ${response.statusText}`);
    }

    const markdownText = await response.text();
    
    // Extract title from the first line if it starts with #
    const firstLine = markdownText.split('\n')[0];
    if (firstLine && firstLine.startsWith('#')) {
      title.value = firstLine.replace(/^#\s*/, '').trim();
    } else {
      title.value = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); // Basic title from slug
    }

    renderedMarkdown.value = md.render(markdownText);
  } catch (err) {
    error.value = err as Error;
    console.error('Failed to fetch or render markdown:', err);
  } finally {
    loading.value = false;
  }
};

// Fetch content when component is mounted or route slug changes
onMounted(() => {
  if (route.params.slug) {
    fetchAndRenderMarkdown(route.params.slug as string);
  } else {
    // Handle case where /wiki is accessed without a slug (e.g., show an index)
    // This is handled by WikiPage.vue
    loading.value = false; 
  }
});

watch(
  () => route.params.slug,
  (newSlug) => {
    if (newSlug) {
      fetchAndRenderMarkdown(newSlug as string);
    }
  }
);
</script>

<style scoped>
/* Scoped styles can go here if needed */
/* Ensure prose styling from @tailwindcss/typography is applied globally or via component */
</style>
