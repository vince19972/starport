import axios from 'axios'
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      timer: null,
    }
  },
  computed: {
    ...mapGetters('cosmos', [ 'appEnv', 'backendEnv' ]),
  },
  methods: {
    ...mapMutations('cosmos', [ 'setBackendRunningStates', 'setBackendEnv' ]),
    async setStatusState() {
      try {
        // const { data } = await axios.get(`${this.appEnv.STARPORT_APP}/status`)
        const { data } = await axios.get(`/status`)
        const { status, env } = data

        this.setBackendRunningStates({
          frontend: status.is_my_app_frontend_alive,
          rpc: status.is_consensus_engine_alive,
          api: status.is_my_app_backend_alive,
        })

        this.setBackendEnv({
          node_js: env.node_js,
          vue_app_custom_url: env.vue_app_custom_url
        })
      } catch {
        this.setBackendRunningStates({
          frontend: false,
          rpc: false,
          api: false,
        })        
      }
    }
  },
  async created() {
    /*
     *
     // Fetch backend status regularly
     *
     */
    this.timer = setInterval(this.setStatusState.bind(this), 5000)
    try {
      await this.setStatusState()
    } catch {
      console.log(`Can't fetch /env`)
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}