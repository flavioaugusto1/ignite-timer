import { ActionNewCycles } from './actions'
import { produce } from 'immer'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CycleState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cycleReducer(state: CycleState, action: any) {
  switch (action.type) {
    case ActionNewCycles.ADD_NEW_CYCLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionNewCycles.INTERRUPT_CURRENT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }

    case ActionNewCycles.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentFinishedCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentFinishedCycleIndex) {
        return state
      }

      return produce(state, (draft) => {
        draft.activeCycleId = null
        draft.cycles[currentFinishedCycleIndex].finishedDate = new Date()
      })
    }

    default:
      return state
  }
}
