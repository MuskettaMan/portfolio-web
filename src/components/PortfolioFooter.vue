<template>
  <footer class="portfolio-footer">
    <ShapeDivider type="curve" :color="transitionColor" />
    <div class="wrapper">
      <div class="about-me">
        <h2>About me</h2>
        <p>
          My name is Ferri de Lange and I’m from The Netherlands. I’ve worked at DTT for 2 and a half years, and
          accumulated tons of experience as a game developer, project lead and scrum master. In my free time, I try to
          improve my development skills and learn more about the discipline.
        </p>
        <br>
        <p>
          My dream is to one day become a game engine programmer and contribute to a project that I can be proud of.
          Although I still have a lot to learn, I’m enjoying the journey and taking it step-by-step.
        </p>
      </div>
      <div class="get-in-contact">
        <h2>Get in Contact</h2>
        <p>
          <fa-icon icon="envelope"></fa-icon>
          Email me at <a href="mailto:ferri@ferri.dev" target="_blank">ferri@ferri.dev</a></p>
        <p>
          <fa-icon :icon="['fa-brands', 'github']"></fa-icon>
          Find me on <a href="https://github.com/MuskettaMan" target="_blank">GitHub</a></p>
        <p>
          <fa-icon :icon="['fa-brands', 'linkedin']"></fa-icon>
          Connect with me on <a href="https://www.linkedin.com/in/ferri-de-lange" target="_blank">LinkedIn</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
import ShapeDivider from "@/components/ShapeDivider";
export default {
  name: "PortfolioFooter",
  components: {ShapeDivider},
  props: {
    transitionColor: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-footer {
  position: relative;
  padding: 11rem 10rem 3rem;
  background-color: floralwhite;

  .wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 10rem;

    .about-me {
      h2 {
        margin-bottom: 3rem;
      }
    }

    .get-in-contact {
      h2 {
        margin-bottom: 3rem;
      }
    }
  }
}
</style>