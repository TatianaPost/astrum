import 'module-alias/register';
import getProjectData from '@appTemplate/js/core/utilities/get-project-data.js';
import limitedAssign from '@appTemplate/js/core/utilities/limited-assign.js';

export default {
    namespaced: true,
    state: {
        project_logo: null,
        project_favicon: null,
        project_name: null,
        project_url: null,
        copyright_start_year: null,
        client_name: null,
        client_url: null,
        creators: [],
        version: ''
    },
    mutations: {
        setInitialState(state, payload) {
            
            // Auto-override state values based on what was passed in
            Object.assign(state, limitedAssign(state, payload));
        }
    },
    actions: {
        setInitialState({ commit }) {

            // Load the project data
            getProjectData()
                .then(data => {

                    // If it's all good, commit to state
                    commit('info/setInitialState', data);
                })
                .catch(error => console.error(error));
        }
    }
};