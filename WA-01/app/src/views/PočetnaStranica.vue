<template>
  <div class="Početna">
    {{ commits[0].sha }}
    {{ commits[1].sha }}
    {{ commits[2].sha }}
    {{ commits[3].sha }}
    {{ commits[4].sha }}
    <br />
    Sta je ovo i zasto ne radi
  </div>
</template>

<script>
export default {
  name: "PočetnaStranica",
  data: function () {
    return {
      ime: "Martina",
      prezime: "Rubil",
      commits: [],
    };
  },
  async mounted() {
    let rezultat = await fetch(
      "https://api.github.com/repos/vuejs/vue/commits"
    );
    let podaci = await rezultat.json();
    for (let item of podaci) {
      console.log(item.sha);
    }
    this.commits = podaci;
  },
};
</script>
<style></style>
