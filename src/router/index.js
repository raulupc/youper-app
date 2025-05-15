import {createRouter, createWebHistory} from "vue-router";
import loginComponent from "@/public/pages/login.component.vue";
import registerComponent from "@/public/pages/register.component.vue";
import objetivoComponent from "@/public/pages/objetivo.component.vue";
import testComponent from "@/public/pages/test.component.vue";
import phraseComponent from "@/public/pages/phrase.component.vue";
/**
 * Vue Router instance
 * @property {Object} history
 * @property {Array} routes
 */

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',           // Ruta raíz
            redirect: '/login'   // Redirección automática al login
        },
        {
            path: '/login',
            name: 'login',
            component: loginComponent
        },
        {
            path: '/register',
            name: 'register',
            component: registerComponent
        },
        {
            path: '/objetivo',
            name: 'objetivo',
            component: objetivoComponent
        },
        {
            path: '/test',
            name: 'test',
            component: testComponent
        },
        {
            path: '/phrase',
            name: 'phrase',
            component: phraseComponent
        }
    ]
});
export default router;



/**
 const router= createRouter({
 history: createWebHistory(),
 routes: [
 {path: '/login', name:"login", component:loginComponent},
 ]

 });
 */
