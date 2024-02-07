import { Cycle } from './reducer'

export enum ActionNewCycles {
  ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionNewCycles.ADD_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinished() {
  return {
    type: ActionNewCycles.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCurrentCycleAction() {
  return {
    type: ActionNewCycles.INTERRUPT_CURRENT_CYCLE,
  }
}
