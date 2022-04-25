import Vue from "vue";
import Vuex from "vuex";

import * as auth from "@/store/modules/Auth";
import * as user from "@/store/modules/User";
import * as message from "@/store/modules/Message";
import * as org from "@/store/modules/Org";
import * as dept from "@/store/modules/Dept";
import * as request from "@/store/modules/Request";
import * as project from "@/store/modules/Project";
import * as proofSet from "@/store/modules/ProofSet";
import * as proof from "@/store/modules/Proof";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,

    modules: {
        auth,
        user,
        message,
        org,
        dept,
        project,
        proofSet,
        proof,
        request
    },
});