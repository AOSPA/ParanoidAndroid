<template>
  <img :src="flag" width="30px" alt="logo">
</template>
<script>
export default {
  props: ['width', 'country'],
  name: 'Flag',
  computed: {
    flag: function() {

      const flags = {
        "BR": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-brazil_1f1e7-1f1f7.png",
        "EG": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-egypt_1f1ea-1f1ec.png",
        "ID": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-indonesia_1f1ee-1f1e9.png",
        "IND": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-india_1f1ee-1f1f3.png",
        "US": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/flag-united-states_1f1fa-1f1f8.png"
      }

      if(flags[this.country]) {
        return flags[this.country];
      } else {
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Noflag.PNG/120px-Noflag.PNG"
      }

    }
  }
};

</script>
<style>
img {
  padding-left: 5px;
  padding-top: 5px;
}

</style>
