<template>
  <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
    class="fill-blue-600">
    <rect class="spinner_1" x="1" y="1" width="7.33" height="7.33" />
    <rect class="spinner_2" x="8.33" y="1" width="7.33" height="7.33" />
    <rect class="spinner_3" x="1" y="8.33" width="7.33" height="7.33" />
    <rect class="spinner_4" x="15.66" y="1" width="7.33" height="7.33" />
    <rect class="spinner_5" x="8.33" y="8.33" width="7.33" height="7.33" />
    <rect class="spinner_6" x="1" y="15.66" width="7.33" height="7.33" />
    <rect class="spinner_7" x="15.66" y="8.33" width="7.33" height="7.33" />
    <rect class="spinner_8" x="8.33" y="15.66" width="7.33" height="7.33" />
    <rect class="spinner_9" x="15.66" y="15.66" width="7.33" height="7.33" />
  </svg>
</template>

<style scoped>
.spinner_1 {
  animation: spinner_animation_main 1.2s linear infinite, spinner_animation_1 1.2s linear infinite
}

.spinner_2 {
  animation: spinner_animation_main 1.2s linear infinite, spinner_animation_2 1.2s linear infinite;
  animation-delay: .1s
}

.spinner_3 {
  animation: spinner_animation_main 1.2s linear infinite, spinner_animation_3 1.2s linear infinite;
  animation-delay: .1s
}

.spinner_4 {
  animation: spinner_animation_main 1.2s linear infinite, spinner_animation_4 1.2s linear infinite;
  animation-delay: .2s
}

.spinner_5 {
  animation: spinner_animation_main 1.2s linear infinite, spinner_animation_5 1.2s linear infinite;
  animation-delay: .2s
}

.spinner_6 {
  animation: spinner_animation_main 1.2s linear infinite, spinner_animation_6 1.2s linear infinite;
  animation-delay: .2s
}

.spinner_7 {
  animation: spinner_animation_main 1.2s linear infinite, spinner_animation_7 1.2s linear infinite;
  animation-delay: .3s
}

.spinner_8 {
  animation: spinner_animation_main 1.2s linear infinite, spinner_animation_8 1.2s linear infinite;
  animation-delay: .3s
}

.spinner_9 {
  animation: spinner_animation_main 1.2s linear infinite, spinner_animation_9 1.2s linear infinite;
  animation-delay: .4s
}

@keyframes spinner_animation_main {

  0%,
  50% {
    width: 7.33px;
    height: 7.33px
  }

  25% {
    width: 1.33px;
    height: 1.33px
  }
}

@keyframes spinner_animation_1 {

  0%,
  50% {
    x: 1px;
    y: 1px
  }

  25% {
    x: 4px;
    y: 4px
  }
}

@keyframes spinner_animation_2 {

  0%,
  50% {
    x: 8.33px;
    y: 1px
  }

  25% {
    x: 11.33px;
    y: 4px
  }
}

@keyframes spinner_animation_3 {

  0%,
  50% {
    x: 1px;
    y: 8.33px
  }

  25% {
    x: 4px;
    y: 11.33px
  }
}

@keyframes spinner_animation_4 {

  0%,
  50% {
    x: 15.66px;
    y: 1px
  }

  25% {
    x: 18.66px;
    y: 4px
  }
}

@keyframes spinner_animation_5 {

  0%,
  50% {
    x: 8.33px;
    y: 8.33px
  }

  25% {
    x: 11.33px;
    y: 11.33px
  }
}

@keyframes spinner_animation_6 {

  0%,
  50% {
    x: 1px;
    y: 15.66px
  }

  25% {
    x: 4px;
    y: 18.66px
  }
}

@keyframes spinner_animation_7 {

  0%,
  50% {
    x: 15.66px;
    y: 8.33px
  }

  25% {
    x: 18.66px;
    y: 11.33px
  }
}

@keyframes spinner_animation_8 {

  0%,
  50% {
    x: 8.33px;
    y: 15.66px
  }

  25% {
    x: 11.33px;
    y: 18.66px
  }
}

@keyframes spinner_animation_9 {

  0%,
  50% {
    x: 15.66px;
    y: 15.66px
  }

  25% {
    x: 18.66px;
    y: 18.66px
  }
}
</style>
