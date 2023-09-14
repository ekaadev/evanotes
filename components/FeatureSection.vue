<template>
  <div
    id="feature"
    class="container-feature min-w-full min-h-screen border-b-slate-400 border pb-20"
  >
    <h1
      class="mt-20 text-center font-main font-bold text-3xl col-start-2 col-end-3"
    >
      Unlock Your Productivity Potential with Our Powerful Features !
    </h1>
    <div
      class="feature mx-auto w-4/6 col-start-2 col-end-3 mt-12 drop-shadow-xl"
    >
      <h2 class="font-main font-semibold text-2xl text-center mb-3">
        Create a To-Do List
      </h2>
      <img
        class="mx-auto mb-3"
        src="@/assets/todolist.svg"
        alt="todolist"
        width="50"
      />
      <p class="text-center font-main font-medium text-lg text-slate-800">
        Turn your ideas into an organized plan of action. With the 'Create To-Do
        List' feature, you can easily log tasks, set priorities and track
        progress. Embrace the power to turn thoughts into achievements, one task
        at a time.
      </p>
    </div>
    <div
      class="feature mx-auto w-4/6 col-start-2 col-end-3 mt-12 drop-shadow-xl"
    >
      <h2 class="font-main font-semibold text-2xl text-center mb-3">
        Creating Task Categories
      </h2>
      <img
        class="mx-auto mb-3"
        src="@/assets/kategori.svg"
        alt="kategori"
        width="50"
      />
      <p class="text-center font-main font-medium text-lg text-slate-800">
        Give structure to your tasks by creating custom categories. Our 'Create
        Task Categories' feature lets you classify tasks into meaningful
        sections, making it easier for you to focus on what matters most. Enter
        a world of organized productivity with personalized categories.
      </p>
    </div>
    <div
      class="feature mx-auto w-4/6 col-start-2 col-end-3 mt-12 drop-shadow-xl"
    >
      <h2 class="font-main font-semibold text-2xl text-center mb-3">
        Time Journey with Calendar
      </h2>
      <img
        class="mx-auto mb-3"
        src="@/assets/calendar.svg"
        alt="kalender"
        width="50"
      />
      <p class="text-center font-main font-medium text-lg text-slate-800">
        Easily organize time with the 'Time Travel with Calendar' feature.
        Visualize tasks, deadlines and milestones on the interactive calendar.
        Plan your days, weeks and months smoothly while keeping an eye on your
        progress. Embrace time management in a whole new dimension.
      </p>
    </div>
  </div>
</template>

<style>
.container-feature {
  display: grid;
  grid-template-columns: minmax(2rem, 1fr) minmax(min-content, 94rem) minmax(
      2rem,
      1fr
    );
}

/* .feature {
  border-radius: 20px;
  padding: 1rem;
  backdrop-filter: blur(10px);
 } */
</style>
