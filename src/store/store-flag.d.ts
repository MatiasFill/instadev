import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import { ModuleExampleState } from '@/store/modules/module-example/state';
import { getters } from '@/store/modules/module-example/getters';
import { mutations } from '@/store/modules/module-example/mutations';
import { actions } from '@/store/modules/module-example/actions';

export type ModuleExampleGetters = {
  [K in keyof typeof getters]: ReturnType<typeof getters[K]>;
};

export type ModuleExampleMutations = typeof mutations;
export type ModuleExampleActions = typeof actions;

export interface RootState {
  moduleExample: ModuleExampleState;
}

// Sobrescrevendo Store para tipagem
export type Store = Omit<
  VuexStore<RootState>,
  'getters' | 'commit' | 'dispatch'
> & {
  getters: ModuleExampleGetters;
} & {
  commit<K extends keyof ModuleExampleMutations>(
    key: K,
    payload: Parameters<ModuleExampleMutations[K]>[1],
    options?: CommitOptions
  ): ReturnType<ModuleExampleMutations[K]>;
} & {
  dispatch<K extends keyof ModuleExampleActions>(
    key: K,
    payload?: Parameters<ModuleExampleActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<ModuleExampleActions[K]>;
};
