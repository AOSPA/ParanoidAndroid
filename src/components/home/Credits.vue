<template>
  <div>
    <div class="credits">
      Project maintained by
      <a href="https://github.com/rajkale99">raj Kale</a>
    </div>
    <div class="credits">
      Website developed by
      <a href="https://github.com/andersonmendess">andersonmendess</a>
    </div>
  </div>
</template>
<script>

export default {
  name: "Credits",
  data() {
    return {
      credits: [
        {
          title: "Project maintained by",
          value: "Raj Kale",
          url: "https://github.com/rajkale99",
        },
        {
          title: "Website Originally developed by",
          value: "andersonmendess",
          url: "https://github.com/andersonmendess",
        },
      ],
    };
  },
};
</script>
