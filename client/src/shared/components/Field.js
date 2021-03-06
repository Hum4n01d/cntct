import styled from 'styled-components'
import { lighten } from 'polished'

import Glyph from './Glyph'

import { color, dimension, generateHighlightBoxShadow, highlight } from '../theme'
import { controlTransitions } from '../mixins'

const Field = styled.div`
  /* Include transitions for control focus states */
  ${controlTransitions}

  background-image: linear-gradient(${color.field.background}, ${lighten(0.03, color.field.background)});
  box-shadow: ${generateHighlightBoxShadow(highlight.field)};
  border-radius: ${dimension.border.radius};
  display: flex;
  outline: none;

  align-items: center;
  
  height: ${({ large }) => large ? dimension.large.control.size : dimension.control.size};
  width: 100%;

  > ${Glyph} {    
    margin-right: ${dimension.spacing.related};
  }
  
  /* Only supported in modern browsers, but cursor should be enough */
  &:focus-within {
    box-shadow: ${generateHighlightBoxShadow(highlight.field)}, 0px 0px 0px 3px ${color.focusBorder};
  }
`

export default Field
