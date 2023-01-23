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
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-albania_1f1e6-1f1f1.png",
        AM:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-armenia_1f1e6-1f1f2.png",
        BR:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-brazil_1f1e7-1f1f7.png",
        CH:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-switzerland_1f1e8-1f1ed.png",
        CN:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-china_1f1e8-1f1f3.png",
        DE:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-germany_1f1e9-1f1ea.png",
        ES:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-spain_1f1ea-1f1f8.png",
        ID:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-indonesia_1f1ee-1f1e9.png",
        IN:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-india_1f1ee-1f1f3.png",
        KR:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-south-korea_1f1f0-1f1f7.png",
        KZ:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-kazakhstan_1f1f0-1f1ff.png",
        LK:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-sri-lanka_1f1f1-1f1f0.png",
        MU:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/348/flag-mauritius_1f1f2-1f1fa.png",
        PK:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/322/flag-pakistan_1f1f5-1f1f0.png",
        PT:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-portugal_1f1f5-1f1f9.png",
        RU:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-russia_1f1f7-1f1fa.png",
        TR:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-turkey_1f1f9-1f1f7.png",
        UA:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-ukraine_1f1fa-1f1e6.png",
        US:
          "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-united-states_1f1fa-1f1f8.png",
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
