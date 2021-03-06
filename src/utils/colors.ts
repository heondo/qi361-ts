import {colors} from '@constants'

export const createHeaderColors = (
  colScheme: options,
): {
  bg: string
  color: string
} => {
  // dark by default
  const rets = {
    bg: colors.gray['900'],
    color: colors.white,
  }

  //   if (colScheme === 'light') {
  //     rets.bg = colors.gray['200']
  //     rets.color = colors.black
  //   }

  return rets
}

type options = 'light' | 'dark' | 'no-preference'
