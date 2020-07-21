// 引入vue
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '../listpages/home'
import Ipcc from '../listpages/ipcc'
import Intelligent from '../listpages/intelligent'
import Abouts from '../listpages/aboutUs'
import Video from '../listpages/video'
// IPCC下边的tab切换
import IPCC from '../ipccTab/ipccidea'
import ResolveIdea from '../ipccTab/resolve'
import Safe from '../ipccTab/safe'





const router = new VueRouter({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      // 首页
      path: '/homePage',
      name: 'home',
      component: Home,
      meta: {

        title: '中通网络',
        level:2,

      }
    },

    {
      path: '/solution/videoconFerencing',
      name: 'video',
      component: Video,
      meta: {
        title: '视频会议',
        level:1,
      }
    },
    {
      path: '/aboutUs',
      name: 'abouts',
      component: Abouts
    },
    {
      path: '/solution',
      name: 'ipcc',
      component: Ipcc,
      children: [
        {
          path: 'IPCC',
          component: ResolveIdea,
          meta: {
            title: 'IPCC'
          }
        },
        {
          path: 'ipccidea',
          component: IPCC,

        },
        {
          path: 'safe',
          component: Safe,

        },
        {
          path: '/',
          redirect: to => {
            return '/solution/IPCC'
          }
        }

      ]

    },
    {
      path: '/solution/intelligentPassage',
      name: 'intelligent',
      component: Intelligent,
      meta: {
        title: '智能通行'
      }
    },
    {
      path: '/ipPhone',
      component: () => import('../productionCenterPages/ipPhone.vue'),
      meta: {
        title: 'ip话机',
        level:1,
      }
    },
    {
      path: '/earPhone',
      component: () => import('../productionCenterPages/earPhone.vue'),
      meta: {
        title: '话务耳机',
        level:1,
      }
    },
    {
      path: '/voice',
      component: () => import('../productionCenterPages/voice.vue'),
      meta: {
        title: '语音网关',
        level:1,

      }
    },
    {
      path: '/video1',
      component: () => import('../productionCenterPages/video1.vue'),
      meta: {
        title: '24方视讯终端'
      }
    },
    {
      path: '/cloudVideo',
      component: () => import('../productionCenterPages/cloudVideo.vue'),
      meta: {
        title: '智能云视讯终端',
        level:2,
      }
    },
    {
      path: '/meeting',
      component: () => import('../productionCenterPages/meeting.vue'),
      meta: {
        title: '会议无线回流传屏器',
        level:2,
      }
    },
    {
      path: '/passage',
      component: () => import('../productionCenterPages/passage.vue'),
      meta: {
        title: '智慧社区-通行类',
        level:2,
      }
    },
    {
      path: '/identify',
      component: () => import('../productionCenterPages/identify.vue'),
      meta: {
        title: '智慧社区-识别类',
        level:2,
      }
    },
    {
      path: '/:id',
      component: () => import('../productionCenterPages/passageDetail.vue'),
      meta: {
        title:'',
        level:1,
      }
    },


    {
      path: '/',
      redirect: '/homePage'
    }

  ],




})


// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   console.log(to,'hdshdjhsdh')
//   // if (to.meta.title) {
//   //   document.title = to.meta.title
//   // }
//   // next()
// })


router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = "https://www.sinocall.com/dist/index.html";
    return
  }
  next()
})
export default router
