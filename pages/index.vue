<template>
  <div
    class="container min-w-full min-h-screen flex justify-center items-center"
  >
    <div class="card-title mx-auto pb-7 px-10 text-center">
      <h1 class="tagline font-main font-bold text-6xl">
        Simplify, Organize, Thrive
      </h1>
      <div class="box-sub-tagline">
        <a class="sub-tagline font-main font-medium text-2xl" href="#"
          >Let's Try !</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style>
.box-sub-tagline {
  margin-top: 4rem;
}

.tagline::before {
  content: '" ';
}

.tagline::after {
  content: ' "';
}

.sub-tagline {
  position: relative;
}

.sub-tagline::before {
  content: '';
  width: 100%;
  position: absolute;
  bottom: -6px;
  height: 4px;
  background: #4ade80;
  border-radius: 50px;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.5s ease;
}

.sub-tagline:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
