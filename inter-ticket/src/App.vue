<template>
  <div id="app" class="hankc">
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: "Hankc";
  font-style: normal;
  font-weight: 400;
  src: url("//cdn.jsdelivr.net/korean-webfonts/1/corps/hani/Hankc/Hankc.woff2")
      format("woff2"),
    url("//cdn.jsdelivr.net/korean-webfonts/1/corps/hani/Hankc/Hankc.woff")
      format("woff");
}

.hankc * {
  font-family: "Hankc", serif;
}

body {
  margin: 0;
}
</style>
