<template>
  <div
    class="page"
    id="page"
    :class="leftDrawer ? 'scroll-overflow-overlay' : ''"
  >
    <header id="header">
      <button
        class="navbtn"
        @click="openNav"
        style="width: 15px; margin-right: 4px"
      >
        {{ leftDrawer ? "\u2715" : "\u2630" }}
      </button>
      <b>Title of site</b>
      <nav :class="leftDrawer ? 'open' : ''" id="navbar">
        <ul>
          <li><NuxtLink to="/" @click="openNav">Home</NuxtLink></li>
          <li><NuxtLink to="/about" @click="openNav">About</NuxtLink></li>
          GAMES:
          <li v-for="g in 5" :key="'game_'+ g"><NuxtLink :to="`/games/${g}`" @click="openNav">{{ g }}</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div
      @click="openNav"
      :class="leftDrawer ? 'overlay' : ''"
      id="overlay"
    ></div>
    <main id="main">
      <slot />
    </main>
    <footer id="footer">
      <h2>footer of site</h2>
    </footer>
  </div>
</template>

<script setup>
const leftDrawer = ref(false);

const openNav = (event) => {
  if (event.target.id == "overlay" && !leftDrawer.value) return;
  leftDrawer.value = !leftDrawer.value;
};

</script>

<style>
a.router-link-active.router-link-exact-active {
  font-weight: 800;
  text-decoration: underline black;
}
#page {
  display: grid;
  justify-items: center;
  height: 100vh;
  width: 100%;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template:
    "header" 32px
    "main" auto
    "footer" 100px / 100%;
}
#header {
  user-select: none;
  position: fixed;
  width: 100%;
  grid-area: header;
  background-color: #000064;
  display: flex;
  align-items: flex-end;
  padding: 4px 25px 4px 10px;
  z-index: 1;
}
#navbar {
  grid-area: navbar;
  background-color: #5522a3;
  position: fixed;
  width: 280px;
  max-width: 90vw;
  top: 32px;
  transition: left 0.4s;
  left: -280px;
  height: 100vh;
}
#navbar > ul {
  text-align: center;
  margin-top: 14px;
  font-size: larger;
  font-weight: 600;
}
#overlay {
  pointer-events: none;
  display: block;
  position: fixed;
  width: 100vw;
  height: 100vh;
  content: "";
  transition: opacity 0.4s;
  background-color: rgba(0, 0, 0, 0.774);
  opacity: 0;
}
#overlay.overlay {
  pointer-events: all;
  opacity: 1;
}
#navbar.open {
  left: 0px;
}
#main {
  grid-area: main;
  background-color: #4542a5;
  width: 100%;
  max-width: 900px;
}
#footer {
  grid-area: footer;
  background-color: #c3a8ec;
  width: 100%;
}
.scroll-overflow-overlay {
  overflow-y: overlay;
}

@media (min-width: 600px) {
  #header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .navbtn {
    display: none;
  }
  #navbar {
    width: auto;
    position: relative;
    height: auto;
    top: auto;
    left: auto;
  }
  #navbar > ul {
    display: flex;
    gap: 8px;
    align-items: flex-end;
    justify-content: flex-end;
    font-size: inherit;
    margin-top: 0px;
  }
  #overlay.overlay {
    opacity: 0;
  }
  .scroll-overflow-overlay {
    overflow-y: visible;
  }
}
</style>
