<template>
  <div class="page" id="page">
    <header id="header">
      <button
        class="navbtn"
        @click="openNav"
        style="width: 15px; margin-right: 4px"
      >
        &#x2630;
      </button>
      <b>Title of site</b>
    </header>
    <nav id="navbar">
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </nav>
    <main id="content">
      <slot />
    </main>
    <footer id="footer">
      <h2>footer of site</h2>
    </footer>
  </div>
</template>

<style>
a.router-link-active.router-link-exact-active {
  font-weight: 800;
  text-decoration: underline black;
}
#page {
  height: 100vh;
  display: grid;
  grid-template:
    "header" 32px
    "content" auto
    "footer" 100px;
}
#header {
  position: fixed;
  width: 100vw;
  grid-area: header;
  background-color: orangered;
  display: flex;
  align-items: flex-end;
  padding: 4px 5px;
  z-index: 1;
}
#navbar {
  grid-area: navbar;
  background-color: blue;
  position: fixed;
  width: 280px;
  max-width: 90vw;
  top: 32px;
  transition: left 0.4s;
  left: -280px;
  height: 100vh;
}
#navbar.open {
  left: 0px;
}
#content {
  grid-area: content;
  background-color: violet;
}
#footer {
  grid-area: footer;
  background-color: goldenrod;
}

@media (min-width: 600px) {
  #page {
    grid-template:
      "header navbar" 40px
      "content content" auto
      "footer footer" 100px;
  }
  #header {
    position: relative;
  width: auto;
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
    padding: 4px 80px;
    height: 40px;
  }
}
</style>

<script setup>
const openNav = (event) => {
  event.target.textContent =
    event.target.textContent == "\u2715" ? "\u2630" : "\u2715";
  const nav = document.querySelector("#navbar").classList.toggle("open");
};
</script>
