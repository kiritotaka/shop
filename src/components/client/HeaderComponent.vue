<template>
  <!-- Header -->
  <header
    class="sticky bg-white top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm py-3 md:py-0 border-b"
  >
    <nav class="max-w-[85rem] w-full mx-auto px-4 md:px-6 lg:px-8">
      <div class="relative md:flex md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <a class="flex-none focus:outline-none focus:opacity-80 font-bold text-3xl" href="#">
            Shop Logo</a
          >

          <div class="md:hidden">
            <button
              type="button"
              class="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              id="hs-navbar-page-demo-pricing-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-page-demo-pricing"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-page-demo-pricing"
            >
              <svg
                class="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                class="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="hs-navbar-page-demo-pricing"
          class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
          aria-labelledby="hs-navbar-page-demo-pricing-collapse"
        >
          <div
            class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
          >
            <div
              class="flex flex-col gap-x-0 mt-5 divide-y divide-dashed divide-gray-200 md:flex-row md:items-center md:justify-end md:gap-x-7 md:mt-0 md:ps-7 md:divide-y-0 md:divide-solid"
            >
              <a
                class="py-3 md:py-6 font-medium hover:text-gray-500 focus:outline-none focus:text-gray-500"
                href="#"
                aria-current="page"
              >
                Home
              </a>

              <a
                class="py-3 md:py-6 font-medium hover:text-gray-500 focus:outline-none focus:text-gray-500"
                href="#"
              >
                Flowers
              </a>
              <a
                class="py-3 md:py-6 font-medium hover:text-gray-500 focus:outline-none focus:text-gray-500"
                href="#"
              >
                Jewelry
              </a>

              <a
                class="py-3 md:py-6 font-medium hover:text-gray-500 focus:outline-none focus:text-gray-500"
                href="#"
              >
                Collections
              </a>
              <a
                class="py-3 md:py-6 font-medium hover:text-gray-500 focus:outline-none focus:text-gray-500"
                href="#"
              >
                Best Sellers
              </a>
              <button
                type="button"
                class="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                <span class="sr-only">Notifications</span>
              </button>

              <button
                type="button"
                class="size-[38px] relative inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
              >
                <svg
                  class="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                <span class="sr-only">Activity</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <!-- End Header -->
</template>

<script>
export default {}
</script>

<style>
</style>
