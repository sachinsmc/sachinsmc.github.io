<template>
  <div class="home">
    <vue-headful
      title="Sachin Chavan | Home"
      description="Sachin Chavan is a full stack engineer, specialized in building full commercial applications from scratch."
    />
    <transition name="fade">
      <ContentBlock v-if="showContent" :background="backgroundImage">
        <div class="content" id="body">
          <h1 class="has-text-white" id="pageTitle">Sachin Chavan</h1>
          <i class="has-text-white" id="subTitle">[ Software Engineer ]</i>
          <p class="has-text-white" id="wordDefinition">
            I'm an optimistic person driven by my passion to give my best in everything I do. I live by my ethics and principles and would like to climb up the ladder with my strong determination and smart work. I am very honest in all my doings and believe in putting up sincere efforts to succeed in life. My basic ideology of life is to give back to the society through love, innovation and Knowledge as it gave me the platform to Live my life to the fullest. "Let there be light" is my mantra which I will enchant all my life as it has given me the strength to overcome all the downs in my life and no matter what I would stand up strong in the face of every challenge coming my way and would conquer it.
          </p>
          <a href="https://github.com/sachinsmc" target="_blank"><img hspace="20" src="../assets/Github-512.png" blank></a>
          <a href="https://twitter.com/smcsachin" target="_blank"><img hspace="20" src="../assets/twitter@2x.png"></a>
          <a href="https://www.linkedin.com/in/smcsachin/" target="_blank"><img hspace="20" src="../assets/linkedin@2x.png"></a>
        </div>
      </ContentBlock>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import ContentBlock from "@/components/ContentBlock.vue";
import backgroundImage from "../assets/sachin_at_work.jpg";

export default {
  name: "home",
  components: {
    ContentBlock
  },
  data: function data() {
    return {
      showContent: false,
      backgroundImage
    };
  },
  created() {
    setTimeout(() => {
      this.showContent = true;
    }, 100);
  }
};
</script>

<style lang="scss" scoped>
#pageTitle {
  margin-bottom: 0;
  font-family: "Voces";
  font-weight: 400;
}

#subTitle {
  font-weight: 300;
  font-family: "Roboto";
}

#wordDefinition {
  margin-top: 0.5em;
  font-weight: 400;
  font-family: "Roboto";
}

#body {
  max-width: 350px;
}
</style>
