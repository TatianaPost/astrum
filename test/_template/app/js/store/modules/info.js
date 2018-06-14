import 'module-alias/register';
import { expect } from 'chai';
import { mutations, state } from '@appTemplate/js/store/modules/info.js';

describe('App/Store/Info', () => {

    /**
     * Test to see wether the `setInitialState` mutation 
     * modifies state correctly
     */
    it('Payload should override inital state', () => {

        let intialState = {
            shallowProp: 'Default value',
            deep: {
                prop: 'Default value 2'
            }
        };

        let payload = {
            shallowProp: 'New value',
            deep: {
                prop: 'New value 2'
            },
            deleteMe: 'plz'
        };

        const desiredResult = {
            shallowProp: 'New value',
            deep: {
                prop: 'New value 2'
            }
        }

        mutations.setInitialState(intialState, payload);

        expect(intialState).to.deep.equal(desiredResult);
    });

    /**
     * Test that our default state, with no overrides is what
     * we expect it to be
     */
    it('Default state should be predictable', () => {
        const defaultState = {
            project_logo: null,
            project_favicon: null,
            project_name: null,
            project_url: null,
            copyright_start_year: null,
            client_name: null,
            client_url: null,
            creators: [],
            version: '' 
        };
        
        expect(defaultState).to.deep.equal(state);
    });
});