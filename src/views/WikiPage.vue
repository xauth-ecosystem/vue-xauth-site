<template>
    <div class="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col md:flex-row gap-16">
        <aside class="w-full md:w-80 shrink-0">
            <nav class="md:sticky md:top-32 space-y-12">
                <div>
                    <h5 class="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Wiki Articles</h5>
                    <ul class="space-y-6 border-l border-slate-800 ml-1">
                        <li class="pl-6 border-l-2 border-blue-600 -ml-px text-white font-bold">
                            <RouterLink to="/wiki/introduction">Introduction</RouterLink>
                        </li>
                        <li class="pl-6 text-slate-500 hover:text-white transition cursor-pointer font-bold uppercase text-xs tracking-widest">
                            <RouterLink to="/wiki/getting-started">Getting Started</RouterLink>
                        </li>
                        <li class="pl-6 text-slate-500 hover:text-white transition cursor-pointer font-bold uppercase text-xs tracking-widest">
                            <RouterLink to="/wiki/faq">FAQ</RouterLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>

        <main class="flex-1">
            <h1 class="text-4xl font-bold text-white mb-6">Welcome to the Wiki!</h1>
            <p class="text-slate-400 leading-relaxed mb-8">
                Будь ласка, виберіть статтю з меню зліва, щоб переглянути вміст.
            </p>
            <div class="prose prose-invert max-w-none">
                <p>Ця сторінка буде служити індексом або списком доступних статей.</p>
                <p>Приклад статей, які ви можете створити у вашому репозиторії \`xauth-ecosystem/xauth-docs\`:</p>
                <ul>
                    <li>\`introduction.md\`</li>
                    <li>\`getting-started.md\`</li>
                    <li>\`faq.md\`</li>
                </ul>
                <p>Щоб переглянути статтю, перейдіть за посиланням у бічній панелі або введіть \`/wiki/назва-статті\` у адресний рядок.</p>
            </div>
        </main>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

onMounted(() => {
    document.title = 'Wiki | XAuth Ecosystem';
});
</script>

<style scoped>
/* No specific scoped styles needed if all styling is handled by Tailwind CSS */
</style>
