<template>
  <div class="mb-4">
    <div
      class="
        flex flex-col
        md:flex-row md:justify-between md:items-center
        items-start
      "
    >
      <h4>{{ what }}</h4>
      <p class="md:w-1/3 text-right md:block hidden">{{ toFrom }}</p>
    </div>
    <p class="italic">{{ where }}</p>
    <p class="md:hidden my-2 font-bold">{{ toFrom }}</p>
    <p class="md:w-2/3">{{ info }}</p>
  </div>
</template>

<script>
export default {
  props: {
    toFrom: {
      type: String,
      default: '',
    },
    what: {
      type: String,
      default: '',
    },
    where: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
    },
  },
}
</script>
