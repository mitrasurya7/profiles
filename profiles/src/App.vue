<script>

</script>

<template>
  <div class=" bg-slate-50 p-5 pb-0 border-b">
    <nav class="container mx-auto grid grid-cols-2 text-center sticky top-0 z-50 bg-slate-50">
      <div class=" text-left px-10 m-1">
        <h1 class=" font-bold text-4xl text-slate-800">Hallo I'm MS7</h1>
      </div>
      <div class=" text-center text-gray-700 mx-auto p-1">
        <ul class=" flex gap-4">
          <li class="mt-1.5">
            <a href="" class=" hover:text-blue-700">Home</a>
          </li>
          <li class="mt-1.5">
            <a href="#experince" class=" hover:text-blue-700">
              Experience
            </a>
          </li>
          <li class="mt-1.5"><a href="" class=" hover:text-blue-700">Skill</a></li>
          <li
            class=" border-2 border-blue-700 rounded-full p-1 px-3 hover:border-2 hover:border-black hover:text-blue-700">
            <a href="">Hire me!</a>
          </li>
        </ul>
      </div>
    </nav>
    <section id="banner" class="container mx-auto h-fit">
      <div class=" grid grid-cols-2 " style="height: 480px">

        <div class=" m-14 p-14">
          <h1 class=" text-slate-600 text-2xl font-medium">Hallo I'm Mitra Surya</h1>
          <p class=" text-6xl font-extrabold my-2">Full Stack Javascript</p>
          <p class="text-xl">Development</p>
          <p class=" text-sm font-gray-700 font-extralight">Hallo i'm junior programmer Javascript. i'm stay in Jember,
            East
            Java
            Indonesia.
            I am passionate about programming development languages ​​and I have other skills too. Vue & React is my
            best Framework skills
          </p>
          <button class="bg-blue-700 text-white p-1 px-4 rounded-full mt-3 font-bold  hover:bg-blue-900">See more
            Skill</button>
        </div>

        <div>
          <img src="../src/assets/imgprofile.png" alt="imgProfile" class=" object-none h-3/5 w-full  opacity-90">
        </div>

      </div>

    </section>
  </div>
  <div class="bg-white h-full">
    <div class=" container mx-auto" id="experince">
      <h1 class="text-center m-5 text-4xl font-extrabold text-gray-800">Experience</h1>
      <div class="flex justify-center gap-2 w-3/5 mx-auto">

        <div
          class="p-2 bg-slate-100 mx-auto rounded-lg shadow border-2 flex hover:border-2 hover:border-blue-700 hover:shadow-lg w-44">

          <img src="./assets/hacktiv8.png" alt="logo" class=" object-fill h-16">

          <p class=" mt-5 font-bold text-gray-600">Graduation</p>

        </div>

        <div
          class="p-2 bg-slate-100 mx-auto rounded-lg shadow border-2 flex hover:border-2 hover:border-blue-700 hover:shadow-lg w-44">

          <img src="./assets/dicoding.png" alt="logo" class=" object-fill h-10 mt-3 ml-4 mr-2 opacity-90 rounded-full">

          <p class=" mt-5 font-bold text-gray-600">Javascript</p>

        </div>

        <div
          class="p-2 bg-slate-100 mx-auto rounded-lg shadow border-2 flex hover:border-2 hover:border-blue-700 hover:shadow-lg w-44">

          <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="logo"
            class=" object-fill h-10 mt-3 ml-2 opacity-90">

          <p class=" mt-5 font-bold text-gray-600">Vue Router</p>

        </div>

        <div
          class="p-2 bg-slate-100 mx-auto rounded-lg shadow border-2 flex hover:border-2 hover:border-blue-700 hover:shadow-lg w-44">

          <img src="./assets/project.png" alt="logo" class=" object-fill h-12 mt-1 ml-2 opacity-90">

          <p class=" mt-5 font-bold text-gray-600 text-lg ml-1">10+ Project</p>

        </div>


      </div>
    </div>
  </div>
  <section class="bg-slate-50">
    <div class=" container mx-auto mt-16 text-center pt-10">
      <h1 class="font-bold text-xl text-gray-800">Our Services</h1>
      <div class="flex justify-center gap-3 mt-5">
        <div class=" border shadow p-5 rounded-md hover:border hover:border-blue-700 w-72 hover:shadow-lg">
          <h1 class=" border-b flex justify-center"><span class="material-symbols-outlined">
              devices
            </span> Frond End</h1>
          <p class=" text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa quisquam assumenda
            incidunt
            veritatis
            voluptatum exercitationem ad cumque mollitia? Magnam, ratione aliquam. Nisi incidunt corporis libero culpa
            eligendi deleniti accusamus.</p>
        </div>
        <div class=" border shadow p-5 rounded-md hover:border hover:border-blue-700 w-72 hover:shadow-lg">
          <h1 class=" border-b flex justify-center"><span class="material-symbols-outlined">
              phone_iphone
            </span> Mobile App</h1>
          <p class=" text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa quisquam assumenda
            incidunt veritatis
            voluptatum exercitationem ad cumque mollitia? Magnam, ratione aliquam. Nisi incidunt corporis libero culpa
            eligendi deleniti accusamus.</p>
        </div>
        <div class=" border shadow p-5 rounded-md hover:border hover:border-blue-700 w-72 hover:shadow-lg">
          <h1 class=" border-b flex justify-center"> <span class="material-symbols-outlined">
              settings_alert
            </span> Back End</h1>
          <p class=" text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa quisquam assumenda
            incidunt veritatis
            voluptatum exercitationem ad cumque mollitia? Magnam, ratione aliquam. Nisi incidunt corporis libero culpa
            eligendi deleniti accusamus.</p>
        </div>
      </div>
    </div>

  </section>
</template>

