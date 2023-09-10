<template>
  <div
    class="container min-w-full min-h-screen flex justify-center items-center bg-slate-300"
  >
    <div class="container-blur w-3/4 h-96 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center bg-slate-50">
      <div class="card-title mx-auto pb-7 px-10 text-center backdrop-blur-sm">
        <h1 class="tagline font-main font-bold text-6xl">
          Simplify, Organize, Thrive
        </h1>
        <div class="box-sub-tagline">
          <nuxt-link class="sub-tagline font-main font-medium text-2xl" to="/create"
            >Let's Try !</nuxt-link
          >
        </div>
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
