<template>
  <img :src="flag" class="flag" width="30px" alt="logo">
</template>
<script>
export default {
  props: ["width", "country"],
  name: "Flag",
  computed: {
    flag() {
      const flags = {
        AL:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-albania_1f1e6-1f1f1.png",
        AM:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-armenia_1f1e6-1f1f2.png",
        BD:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-bangladesh_1f1e7-1f1e9.png",
        BR:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-brazil_1f1e7-1f1f7.png",
        CH:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-switzerland_1f1e8-1f1ed.png",
        CN:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-china_1f1e8-1f1f3.png",
        DE:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-germany_1f1e9-1f1ea.png",
        ES:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-spain_1f1ea-1f1f8.png",
        FR:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-france_1f1eb-1f1f7.png",
        ID:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-indonesia_1f1ee-1f1e9.png",
        IN:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-india_1f1ee-1f1f3.png",
        KR:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-south-korea_1f1f0-1f1f7.png",
        KZ:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-kazakhstan_1f1f0-1f1ff.png",
        LK:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-sri-lanka_1f1f1-1f1f0.png",
        MU:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-mauritius_1f1f2-1f1fa.png",
        PH:
          "https://em-content.zobj.net/thumbs/240/twitter/322/flag-philippines_1f1f5-1f1ed.png",
        PK:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-pakistan_1f1f5-1f1f0.png",
        PT:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-portugal_1f1f5-1f1f9.png",
        RU:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-russia_1f1f7-1f1fa.png",
        TR:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-turkey_1f1f9-1f1f7.png",
        UA:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-ukraine_1f1fa-1f1e6.png",
        US:
          "https://em-content.zobj.net/thumbs/120/twitter/322/flag-united-states_1f1fa-1f1f8.png",
      };

      if (flags[this.country]) {
        return flags[this.country];
      }
      return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Noflag.PNG/120px-Noflag.PNG";
    },
  },
};

</script>
<style>
.flag {
  padding-left: 5px;
  padding-top: 5px;
}

</style>
