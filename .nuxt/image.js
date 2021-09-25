import Vue from 'vue'
import { createImage} from '~image'
import NuxtImg from '~image/components/nuxt-img.vue'
import NuxtPicture from '~image/components/nuxt-picture.vue'

import * as staticRuntime$d67d from 'C:/Users/molov/OneDrive/Documents/GitHub/Lotto/node_modules/@nuxt/image/dist/runtime/providers/static.js'
import * as imagekitRuntime$ee63 from 'C:/Users/molov/OneDrive/Documents/GitHub/Lotto/node_modules/@nuxt/image/dist/runtime/providers/imagekit.js'

const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "static",
  "domains": [],
  "alias": {}
}

imageOptions.providers = {
  ['static']: { provider: staticRuntime$d67d, defaults: {} },
  ['imagekit']: { provider: imagekitRuntime$ee63, defaults: {"baseURL":"https://ik.imagekit.io/dcfgub9zs57"} }
}

Vue.component(NuxtImg.name, NuxtImg)
Vue.component(NuxtPicture.name, NuxtPicture)
Vue.component('NImg', NuxtImg)
Vue.component('NPicture', NuxtPicture)

export default function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext)

  if (process.static && process.server) {
    nuxtContext.beforeNuxtRender(({ nuxtState }) => {
      const ssrData = nuxtState.data[0] || {}
      ssrData._img = nuxtState._img || {}
    })
  }

  inject('img', $img)
}
