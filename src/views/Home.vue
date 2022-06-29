<template>
    <h1>Home page</h1>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
</template>

<script>    
import { reactive } from 'vue'
import { useStore } from '@/store'
export default {
    setup() {
        const app = require('axios')
        const state = reactive({
            data : []
        })
        const store = useStore()
        const getData = async () => {
            try {
                const res = await app.get('http://94.74.86.174:8080/api', { headers: { Authorization: store.token } })
                state.data = res.data
            } catch(err) {
                if(err.response.status === 0) {
                    // window.location.href = '/login'
                }
            }
        } 
        
        getData()

        return { state, store }
    },
}
</script>