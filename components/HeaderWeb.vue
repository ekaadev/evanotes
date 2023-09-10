<template>
  <header
    class="flex flex-wrap justify-between top-0 left-0 bg-transparent min-w-full w-full pl-16 pr-16 py-3 z-10 shadow-md"
  >
    <div class="logo flex items-center">
      <a
        class="relative top-2 font-custom flex text-start font-black text-slate-600 z-11"
        href="#"
        ><img
          class="relative bottom-2"
          src="@/assets/pen.svg"
          alt="logo"
          width="40"
        />Evanote</a
      >
    </div>
    <nav class="flex items-center">
      <a
        class="nav-link mx-6 font-custom font-medium z-11 text-gray-600 hover:text-gray-950"
        href="#"
        >Home</a
      >
      <a
        class="nav-link mx-6 font-custom font-medium z-11 text-gray-600 hover:text-gray-950"
        href="#feature"
        >Features</a
      >
      <a
        class="nav-link ml-6 mr-12 font-custom font-medium z-11 text-gray-600 hover:text-gray-950"
        href="#about"
        >About</a
      >
      <a
        class="py-1 -mr-4 px-3 font-custom z-11 font-medium text-gray-600 border border-slate-950 rounded hover:text-gray-950 duration-300"
        href="#Log-in"
        >Log in</a
      >
      <a
        class="mx-6 z-11 py-1 px-3 font-custom font-medium text-l bg-slate-950 text-slate-50 rounded border border-slate-950 hover:text-slate-950 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200 duration-300"
        href="#Sign-in"
        >Sign in</a
      >
    </nav>
  </header>
</template>
<style>
header {
  backdrop-filter: blur(10px);
}

.nav-link {
  position: relative;
}

.nav-link::before {
  content: '';
  width: 100%;
  position: absolute;
  bottom: -4px;
  height: 2px;
  background: #030712;
  transform: scaleX(0);
  transition: transform 0.2s linear;
  border-radius: 50px;
}

.nav-link:hover::before {
  transform: scaleX(1);
}
</style>
