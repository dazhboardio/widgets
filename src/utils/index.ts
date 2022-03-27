import * as R from 'ramda'
import RGL from 'react-grid-layout'
import { uid } from 'uid'
import { Routes } from 'src/routes'
import { Dashboard } from 'src/interfaces'

const isNilOrEmpty = R.either(R.isNil, R.isEmpty)

const isValidDashboard = R.both(R.propIs(Object, 'widgets'), R.propIs(Array, 'layout'))

const isValidDashboards = R.both(R.is(Array), R.complement(R.find(R.complement(isValidDashboard))))

const generateId = (): string => uid(8)

const formatRoute = (route: Routes, params: Record<string, string>): string => {
  if (!route.includes(':')) {
    return route
  }
  const keys = Object.keys(params)
  let output: string = route
  keys.forEach((item) => {
    const replace = `:${item}`
    const re = new RegExp(replace, 'g')
    output = output.replace(re, params[item])
  })
  return output
}

const complementDashboards = (dashboards: Dashboard[]) =>
  dashboards.map((board) => ({
    ...board,
    ...(!board.id && { id: generateId() }),
  }))

const layoutTransformForFirebase = R.map(({ y, ...layout }: RGL.Layout) =>
  R.reject((value) => value === undefined)({
    ...layout,
    y: y === Infinity ? 'Infinity' : y,
  })
)

const layoutTransformForLocal = R.map(({ y, ...layout }: RGL.Layout) => ({
  ...layout,
  y: R.equals('Infinity')(y.toString()) ? Infinity : y,
}))

export {
  isValidDashboards,
  isNilOrEmpty,
  generateId,
  formatRoute,
  complementDashboards,
  layoutTransformForLocal,
  layoutTransformForFirebase,
}
