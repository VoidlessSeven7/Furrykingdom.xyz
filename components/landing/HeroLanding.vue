<template>
  <div class="overflow-hidden" style="height: 60vh;">
    <!-- Information -->
    <div class="hero-image flex h-full">
      <div class="text-default-text text-center m-auto flex flex-col">
        <!-- Title -->
        <h1 class="text-3xl md:text-6xl tracking-wide">
          Rushy's Kingdom
        </h1>
        <!-- Subtitle -->
        <h2 class="text-lg md:text-xl leading-relaxed">
          Sync your character data with our Discord Server by logging in with
          Discord
        </h2>
        <!-- Call to action -->
        <a
          href="https://discord.gg/BmZFfB6"
          class="mt-5 mx-auto opacity-100 select-none"
        >
          <button
            class="text-default-text text-lg flex border-0 rounded-full bg-discord py-2 md:py-3 px-4 md:px-6 shadow hover:shadow-lg transition-shadow"
          >
            <svg
              class="icon w-8 h-8 pr-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 245 240"
            >
              <path
                d="M104 104c-5 0-10 5-10 11s5 11 10 11c6 0 11-5 11-11s-5-11-11-11zm37 0c-6 0-10 5-10 11s4 11 10 11 10-5 10-11-4-11-10-11z"
              />
              <path
                d="M190 20H56c-12 0-21 9-21 21v135c0 11 9 20 21 20h113l-5-18 12 12 13 11 21 19V41c0-12-9-21-20-21zm-39 131l-7-9c13-3 18-11 18-11l-11 5c-5 3-10 4-15 5a70 70 0 01-40-5c-3 0-5-2-8-3l-1-1-3-2c0 1 5 9 18 12l-7 9c-22-1-30-16-30-16 0-32 14-58 14-58 14-11 28-10 28-10l1 1c-18 5-26 13-26 13l6-3c10-5 19-6 22-6h2a85 85 0 0151 9s-8-8-25-13l1-1s14-1 28 10c0 0 14 26 14 58 1 0-8 15-30 16z"
              />
            </svg>
            <h3 class="m-auto"><b>Login with discord</b></h3>
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroLanding',

  components: {}

  // props: {
  //   text: { type: String, required: true, default: 'Replace me!' }
  // }
}
</script>
