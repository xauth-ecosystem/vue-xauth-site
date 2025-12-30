<template>
    <section class="pt-48 pb-32 text-center border-b border-slate-900">
        <div class="max-w-4xl mx-auto px-6">
            <h1 class="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8">
                Downloads
            </h1>
            <p class="text-2xl text-slate-400 font-normal">
                Official stable and preview builds of the XAuth Ecosystem.
            </p>
        </div>
    </section>

    <main class="py-32">
        <div class="max-w-7xl mx-auto px-6 space-y-8">
            <!-- XAuth Core -->
            <div class="p-10 bg-slate-900/40 border border-slate-800 rounded flex flex-col md:flex-row items-center justify-between gap-8">
                <div class="flex items-center gap-8">
                    <div class="w-20 h-20 bg-blue-600 flex items-center justify-center text-white text-4xl rounded shadow-lg shadow-blue-900/40">
                        <i class="fa-solid fa-key"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-3 mb-2">
                            <h3 class="text-3xl font-black text-white uppercase">XAuth Core</h3>
                            <span class="bg-blue-600/20 text-blue-500 text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">
                                Stable
                            </span>
                        </div>
                        <p class="text-slate-500 font-bold uppercase text-xs tracking-widest">
                            Latest: v2.4.1 · API 5.0.0
                        </p>
                    </div>
                </div>

                <div class="flex flex-wrap gap-4 w-full md:w-auto">
                    <a href="#" class="flex-1 md:flex-none text-center px-8 py-4 bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-slate-200 transition">
                        Poggit
                    </a>
                    <a href="#" class="flex-1 md:flex-none text-center px-8 py-4 bg-slate-800 text-white font-black uppercase tracking-widest text-sm hover:bg-slate-700 transition">
                        GitHub
                    </a>
                </div>
            </div>

            <!-- XAuthConnect -->
            <div class="p-10 bg-slate-900/40 border border-slate-800 rounded flex flex-col md:flex-row items-center justify-between gap-8 opacity-90">
                <div class="flex items-center gap-8">
                    <div class="w-20 h-20 bg-slate-800 flex items-center justify-center text-3xl rounded">
                        <i class="fa-solid fa-circle-nodes"></i>
                    </div>
                    <div>
                        <div class="flex items-center gap-3 mb-2">
                            <h3 class="text-3xl font-black text-white uppercase">XAuthConnect</h3>
                            <span class="bg-slate-800 text-slate-400 text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">
                                Beta
                            </span>
                        </div>
                        <p class="text-slate-500 font-bold uppercase text-xs tracking-widest">
                            OAuth2 & OpenID Connect Server
                        </p>
                    </div>
                </div>

                <a href="#" class="w-full md:w-auto text-center px-8 py-4 border border-slate-700 text-white font-black uppercase tracking-widest text-sm hover:bg-slate-800 transition">
                    View Pre-releases
                </a>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'; // Make sure RouterLink is imported if used directly

onMounted(() => {
    document.title = 'Downloads | XAuth Ecosystem';
});
</script>

<style scoped>
/* No specific scoped styles needed if all styling is handled by Tailwind CSS */
</style>
