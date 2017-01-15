<template>
<div>
  <h1> I'm {{person.name}} </h1>
  <small v-if="person.children"> my children are</small>
  <app-person v-for="child in person.children" :person="child" />
</div>
</template>

<script>
export default {
  props: ["person"],
  name: "app-person"
}
</script>
