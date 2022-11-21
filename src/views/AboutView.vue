<template>
  <div class="about">
    <TreeBrowser v-for="(trees, i) in datas" :key="`root-${i}`" :trees="trees"/>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import TreeBrowser from "../components/TreeBrowser.vue";

export default{
  name: 'about',
  components: {
    TreeBrowser
  },
  data() {
    return {
      datas: [
        {
          "text": "First Level",
          "nodes": [{
            "text": "Second Level",
            "nodes": [{
              "text": "Third Level",
              "nodes": [{
                "text": "Fourth Level",
                "nodes": [{
                  "text": "Final Level",
                  "value": "The Value"
                }]
              }]
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level",
              "nodes": [{
                "text": "Final Level",
                "value": "The Value"
              }, {
                "text": "Final Level",
                "value": "The Value"
              }]
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level",
              "nodes": [{
                "text": "Final Level",
                "value": "The Value"
              }]
            }]
          }, {
            "text": "Second Level",
            "nodes": [{
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }]
          }]
        },
        {
          "text": "First Level",
          "nodes": [{
            "text": "Second Level",
            "nodes": [{
              "text": "Third Level",
              "nodes": [{
                "text": "Final Level",
                "value": "The Value"
              }]
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level",
              "nodes": [{
                "text": "Final Level",
                "value": "The Value"
              }, {
                "text": "Final Level",
                "value": "The Value"
              }]
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level",
              "nodes": [{
                "text": "Final Level",
                "value": "The Value"
              }]
            }]
          }, {
            "text": "Second Level",
            "nodes": [{
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }, {
              "text": "Third Level"
            }]
          }]
        }
      ]
    }
  },
}
</script>

<style>

</style>
