<template>
  <div class="w-full max-w-sm px-4">
    <Popover v-slot="{ open }" class="relative">
      <PopoverButton
        :class="open ? 'text-gray-700' : 'text-gray-700'"
        class="group inline-flex items-center rounded-md px-3 py-2 text-base font-medium hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
      >
        <span>Programme</span>
        <ChevronDownIcon
          :class="open ? 'text-orange-300' : 'text-orange-300/70'"
          class="ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-orange-300/80"
          aria-hidden="true"
        />
      </PopoverButton>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
          class="absolute left-72 z-10 mt-6 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
        >
          <div class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
            <div class="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
              <router-link
                v-for="item in solutions"
                :key="item.name"
                :to="item.href"
                class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
              >
                <div
                  class="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12"
                >
                  <div v-html="item.icon"></div>
                </div>
                <div class="ml-4">
                  <p class="text-sm font-medium text-gray-900">
                    {{ item.name }}
                  </p>
                  <p class="text-sm text-gray-500">
                    {{ item.description }}
                  </p>
                </div>
              </router-link>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const solutions = [
  {
    name: "How It Works",
    description: "Measure actions your users take",
    href: "/how_works", // Change the path accordingly
    icon: `
      <!-- Your SVG code -->
    `,
  },
  {
    name: "Medication",
    description: "Create your own targeted content",
    href: "/medications", // Change the path accordingly
    icon: `
      <!-- Your SVG code -->
    `,
  },
  {
    name: "Coaching",
    description: "Keep track of your growth",
    href: "#", // Change the path accordingly
    icon: `
      <!-- Your SVG code -->
    `,
  },
];
</script>
