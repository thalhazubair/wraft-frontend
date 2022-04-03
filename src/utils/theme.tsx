import { Theme } from 'theme-ui';

const theme: Theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body:
      '\'Satoshi\', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    editor1: '\'Satoshi\', sans-serif',
    editor2:  '\'Satoshi\', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',//"'IBM Plex Mono', monospace",
    // font-family: 
    monospace: 'Menlo, monospace',
  },
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  fontSizes: [12, 16, 20, 22, 25, 31.25, 39.06, 48.83, 61.04],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: 'text',
    primary: '#087f5b',
    secondary: '#30c',
    muted: '#f6f6f6',
    gray: [
      '#f8f9fa',
      '#f1f3f5',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#868e96',
      '#495057',
      '#343a40',
      '#212529',
    ],
    red: [
      '#fff5f5',
      '#ffe3e3',
      '#ffc9c9',
      '#ffa8a8',
      '#ff8787',
      '#ff6b6b',
      '#fa5252',
      '#f03e3e',
      '#e03131',
      '#c92a2a',
    ],
    pink: [
      '#fff0f6',
      '#ffdeeb',
      '#fcc2d7',
      '#faa2c1',
      '#f783ac',
      '#f06595',
      '#e64980',
      '#d6336c',
      '#c2255c',
      '#a61e4d',
    ],
    grape: [
      '#f8f0fc',
      '#f3d9fa',
      '#eebefa',
      '#e599f7',
      '#da77f2',
      '#cc5de8',
      '#be4bdb',
      '#ae3ec9',
      '#9c36b5',
      '#862e9c',
    ],
    violet: [
      '#f3f0ff',
      '#e5dbff',
      '#d0bfff',
      '#b197fc',
      '#9775fa',
      '#845ef7',
      '#7950f2',
      '#7048e8',
      '#6741d9',
      '#5f3dc4',
    ],
    indigo: [
      '#edf2ff',
      '#dbe4ff',
      '#bac8ff',
      '#91a7ff',
      '#748ffc',
      '#5c7cfa',
      '#4c6ef5',
      '#4263eb',
      '#3b5bdb',
      '#364fc7',
    ],
    blue: [
      '#e7f5ff',
      '#d0ebff',
      '#a5d8ff',
      '#74c0fc',
      '#4dabf7',
      '#339af0',
      '#228be6',
      '#1c7ed6',
      '#1971c2',
      '#1864ab',
    ],
    cyan: [
      '#e3fafc',
      '#c5f6fa',
      '#99e9f2',
      '#66d9e8',
      '#3bc9db',
      '#22b8cf',
      '#15aabf',
      '#1098ad',
      '#0c8599',
      '#0b7285',
    ],
    teal: ['#087f5b', '#3a8f6e', '#599f81', '#76ae95', '#91bea9', '#accebe', '#c8dfd3', '#e3efe9', '#ffffff'],
    // teal: [
    //   '#e6fcf5',
    //   '#c3fae8',
    //   '#96f2d7',
    //   '#63e6be',
    //   '#38d9a9',
    //   '#20c997',
    //   '#12b886',
    //   '#0ca678',
    //   '#099268',
    //   '#087f5b',
    // ],
    
    
    green: [
      '#ebfbee',
      '#d3f9d8',
      '#b2f2bb',
      '#8ce99a',
      '#69db7c',
      '#51cf66',
      '#40c057',
      '#37b24d',
      '#2f9e44',
      '#2b8a3e',
    ],
    lime: [
      '#f4fce3',
      '#e9fac8',
      '#d8f5a2',
      '#c0eb75',
      '#a9e34b',
      '#94d82d',
      '#82c91e',
      '#74b816',
      '#66a80f',
      '#5c940d',
    ],
    yellow: [
      '#fff9db',
      '#fff3bf',
      '#ffec99',
      '#ffe066',
      '#ffd43b',
      '#fcc419',
      '#fab005',
      '#f59f00',
      '#f08c00',
      '#e67700',
    ],
    orange: [
      '#fff4e6',
      '#ffe8cc',
      '#ffd8a8',
      '#ffc078',
      '#ffa94d',
      '#ff922b',
      '#fd7e14',
      '#f76707',
      '#e8590c',
      '#d9480f',
    ],
    modes: {
      dark: {
        text: '#fff',
        base: '#000',
        background: 'gray.8',
        green: [
          '#ebfbee',
          '#d3f9d8',
          '#b2f2bb',
          '#8ce99a',
          '#69db7c',
          '#51cf66',
          '#40c057',
          '#37b24d',
          '#2f9e44',
          '#2b8a3e',
        ],
        gray: [
          '#212529',
          '#343a40',
          '#495057',
          '#868e96',
          '#adb5bd',
          '#ced4da',
          '#dee2e6',
          '#e9ecef',
          '#f1f3f5',
          '#f8f9fa',
        ],
      },
    },
  },
  forms: {
    label: {
      color: 'gray.6',
      fontSize: 2,
      pb: 0,
    },
    input: {
      color: 'gray.8',
      fontWeight: 500,
      border: 'solid 1px',
      borderColor: 'gray.3',
      fontFamily: 'body',
      bg: 'gray.0',
      mb: 2,
      borderRadius: 2,
    },
    
    small: {
      bg: 'gray.0',
      fontSize: 0,
      p: 0,
      px: 3,
      fontFamily: 'body',
      fontWeight: 500,
      borderColor: 'gray.2'
    },
    select: {
      color: 'gray.8',
      fontWeight: 500,
      border: 'solid 1px',
      borderColor: 'gray.4',
      bg: 'gray.0',
      mb: 2,
      borderRadius: 2,
    },
    textarea: {
      color: 'gray.8',
      fontWeight: 500,
      border: 'solid 1px',
      borderColor: 'gray.4',
      bg: 'gray.0',
      mb: 2,
      borderRadius: 2,
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'body',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'body',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
    editorBody: {
      '.remirror-theme h1': {

      },

      '.remirror-editor-wrapper': {},
      '.remirror-theme .ProseMirror': {
        outline: 'none',
        border: 'solid 1px #ddd',
        bg: 'red !important',
        // color: #721515 !important;
        pl: '4rem',
        pr: '4rem',
        pt: '4rem',
        pb: '4rem',
      },
      p: { color: "gray.9", fontFamily: 'body', pt: 2, pb: 1, fontSize: 0 },
      h1: { color: 'red.5', py: 3, fontFamily: 'body', textTransform: 'uppercase', lineHeight: 1.25, fontSize: 1 },
      h2: { color: "red.3", py: 3, fontFamily: 'body', lineHeight: 1.25, fontSize: 1 },
      h3: { color: "red.3", py: 3, fontFamily: 'body', textTransform: 'uppercase', lineHeight: 1.25, fontSize: 1 },
      h4: { color: 'red.3', py: 3, fontFamily: 'body', lineHeight: 1.25, fontSize: 1 },
    },
    editorBody2: {     
      '.remirror-theme .remirror-editor': {
        bg: 'red',
        p: 5, 
        
      },
      '.remirror-theme h1': {
        fontFamily: 'editor2',
      },
      '.remirror-theme .ProseMirror': {
        outline: 'none',
        border: 'solid 1px',
        fontFamily: 'editor2',
        borderColor: 'gray.4',
        lineHeight: 1.65,
        bg: 'gray.0',
        h1: { color: "gray.7", fontFamily: 'editor2', pt: 2, pb: 1 },
        h2: { color: "gray.7", fontFamily: 'editor2', pt: 2, pb: 1 },
        h3: { color: "gray.7", fontFamily: 'editor2', pt: 2, pb: 1 },
        '.holder': {
          bg: 'green.1',
          color: 'green.8',
        }
      },
      p: { color: "gray.7", fontFamily: 'editor2', pt: 2, pb: 1 },
      h1: { color: 'red.5', py: 3, fontFamily: 'editor2', textTransform: 'uppercase', lineHeight: 1.25, fontSize: 1 },
      h2: { color: "red.3", py: 3, fontFamily: 'editor2', lineHeight: 1.25, fontSize: 1 },
      h3: { color: "red.3", py: 3, fontFamily: 'editor2', textTransform: 'uppercase', lineHeight: 1.25, fontSize: 1 },
      h4: { color: 'red.3', py: 3, fontFamily: 'editor2', lineHeight: 1.25, fontSize: 1 },
    },
  },
  links: {
    btnNavLink: {
      p: 2,
      px: 3,
      display: 'block',
      letterSpacing: '-0.15px',
    },
    btnPrimary: {
      variant: 'buttons.btnPrimary',
    },
    btnSecondary: {
      variant: 'buttons.btnSecondary',
    },
    btnSmall: {
      variant: 'buttons.btnSmall',
      p: 2,
      px: 3,
    },
    btnPrimarySmall: {
      variant: 'buttons.btnPrimary',
      // fontSize: 0,
      p: 2,
      px: 2,
      color: 'gray.0',
      '&:hover': {
        bg: 'teal.8',
      },
    },
    btnPrimaryIcon: {
      bg: 'gray.0',
      border: 'solid 1px',
      borderColor: 'gray.4',
      color: 'gray.8',
      borderRadius: 4,
      display: 'inline-flex',
      alignItems: 'stretch',
      pt: 2,
      pr: 3,
      pl: 2,
      '&:hover': {
        bg: 'gray.1',
        borderColor: 'gray.5',
      },
      // mt: -1,
      // color: 'gray.0',
      // pb: 0,
    },
    base: {
      color: 'red',
    },
    rel: {
      position: 'relative',
      display: 'block',
      // bg: 'red'
    },
    download: {
      color: 'green.9',
      fontSize: 0,
      textTransform: 'uppercase',
      textDecoration: 'none',
      mt: 2,
      display: 'block',
    },
    bold: {
      fontWeight: 'bold',
    },
    button: {
      fontFamily: 'body',
      fontWeight: 500,
      color: 'primary',
      border: 'solid 1px',
      fontSize: 0,
      px: 3,
      py: 2,
      borderRadius: 4,
      bg: 'text',
      borderColor: 'gray.3',
      letterSpacing: -0.2,
      textDecoration: 'none',
      display: 'inline-flex',
      ':hover': {
        bg: 'primary',
        color: 'white',
      },
    },
  },
  layout: {

    boxHeading: {
      pl: 3, pt: 2, 
      width: '100%', borderTop: 'solid 1px', borderTopColor: 'gray.3', borderBottom: 'solid 1px', borderBottomColor: 'gray.3'
    },

    modalContent: {
      p: 0,
      top: '10%',
      // m: 2,
      position: 'relative',
      // left: 0,
      right: 0,
      // top: 0,
      // mt: ['50%', 0, 0],
      zIndex: 300,
      // ml: '-10%',
      // right: 'auto',
      // bottom: 'auto',
      borderRadius: '8px',
      // mr: '-50%',
      // transform: 'translate(-30% -30%)',
      // height: '10%', // <-- This sets the height
      width: ['80%', '70%', '60%'],
      bg: 'gray.0',
      mx: 'auto',
      // mt: '-30%',
      overflow: 'scroll', // <-- This tells the modal to scrol
    },
    modalContentB: {
      top: '10%',
      m: 2,
      position: 'relative',
      // left: 0,
      right: 0,
      // top: 0,
      mt: ['50%', 0, 0],
      zIndex: 300,
      // ml: '-10%',
      // right: 'auto',
      // bottom: 'auto',
      borderRadius: '8px',
      // mr: '-50%',
      // transform: 'translate(-30% -30%)',
      // height: '10%', // <-- This sets the height
      width: ['80%', '70%', '40%'],
      bg: 'gray.0',
      mx: 'auto',
      // mt: '-30%',
      // p: 4,
      border: 'solid 1px',
      borderColor: 'gray.2',
      overflow: 'scroll', // <-- This tells the modal to scrol
    },
    modalBackgroup: {
      bg: 'rgba(30,30,30,0.85)',
      position: 'fixed',
      zIndex: 200,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    },
    frameHeading: {
      bg: 'gray.0',
      pb: 3,
      px: 4,
      py: 2,
      borderBottom: 'solid 1px',
      borderColor: 'gray.3',
      mb: 0,
    },
    button: {
      border: 'solid 1px',
      borderColor: 'gray.2',
      p: 1,
      mt: 3,
      lineHeight: 0,
      svg: { fill: 'text' },
      bg: 'gray.1',
    },
    linkBlock: {
      bg: 'gray.0',
    },
    pageFrame: {
      p: 4,
    },
    menuWrapper: {
      px: 2,
      color: 'gray.7',
      py: 0,
      ':hover': {
        color: 'primary',
      },
    },
    menuLink: {
      bg: 'gray.0',
      mb: 0,
      p: 2,
      borderRadius: 3,
      fontWeight: 600,
      width: '100%',
      a: {
        fontWeight: 600
      },
      ':hover': {
        bg: 'gray.2',
      },
    },

    menuLinkActive: {
      bg: 'gray.1',
      mb: 0,
      p: 2,
      borderRadius: 3,
      width: '100%',
      color: '#0d1c17',
      fontWeight: 900,
    },
    baseForm: {
      width: '100%',
    },
    avatar: {
      width: '24px',
      height: '24px',
      borderRadius: 99,
      mr: 1,
    },
    w100: {
      width: '100%',
    },
    w90: {
      width: '90%',
    },
    w80: {
      width: '80%',
    },
    w70: {
      minWidth: '70%',
    },
    w60: {
      width: '60%',
    },
    w50: {
      width: '50%',
    },
    w20: {
      width: '25%',
    },
    w33: {
      width: '33%',
    },
    hidden: {
      display: 'none',
    },
    download: {
      bg: 'red',
      color: 'blue',
    },
    plateSidebar: {
      ml: 3,
      width: '30%',
    },
    plateLite: {
      p: 0,
      mb: 4,
      pb: 4,
      borderBottom: 'solid 1px',
      borderColor: 'gray.4',
    },
    plateBox: {
      border: 'solid 1px',
      borderColor: 'gray.3',
      bg: 'gray.0',
      px: 3,
      py: 3,
    },
    button2: {
      mt: 3,
      borderRadius: 3,
      bg: 'red.2',
      color: 'text',
      display: 'block',
    },
    header: {
      borderBottom: 'solid 1px',
      borderColor: 'gray.2',
      paddingBottom: 2,
      paddingTop: 2,
      paddingLeft: 2,
    },
    plateRightBar: {
      bg: 'text',
      border: 'solid 1px',
      borderColor: 'gray.2',
      p: 3,
      position: 'fixed',
      right: 0,
      width: '25%',
      minHeight: '100vh',
      top: '72px',
    },
    boxCard: {
      width: '123px',
      height: '123px',
      background: 'text',
      border: '1px solid #E0E0E0',
      borderRadius: '5px',
    },
    listWide: {
      // borderRadius: 2,
      // padding: 2,
      // marginTop: 2,
      p: 0,
      borderBottom: 'solid 1px',
      borderColor: 'gray.1',
      pl: 4,
      pt: 3,
      pb: 3,
      ':hover': {
        bg: 'gray.0',
      },
      // paddingBottom: '24px',
      // bg: 'blue',
      // position: 'relative',
    },
    cTyeMark: {
      width: '2px',
      position: 'absolute',
      top: 0,
      left: -4,
      height: '40px',
      display: 'inline-block',
      borderRadius: '0px',
    },
  },
  alerts: {
    primary: {
      color: 'green.8',
      bg: 'green.1',
    },
    alert: {
      color: 'red.8',
      bg: 'red.1',
    },
    muted: {
      color: 'text',
      bg: 'muted',
    },
  },
  text: {    
    labelSmall: {
      pl: 1,
      pr: 2,
      mr: 3,
      fontSize: 0,
      fontWeight: 400,
      color: 'gray.8',
      display: 'inline-block',
      textAlign: 'right',
      width: 'auto',
      textTransform: 'uppercase',
      letterSpacing: '-0.01rem',
    },
    labelcaps: {
      fontWeight: 300,
      color: 'gray.6',
      letterSpacing: '0.2px',
      textTransform: 'uppercase',
      fontSize: '10.24px',
    },
    sectionheading: {
      fontWeight: 300,
      fontSize: 1,
      lineHeight: '24px',
      pb: 2,
    },
    caps: {
      pt: 0,
      pb: 1,
      color: 'gray.7',
      fontSize: 0,
      textTransform: 'uppercase',
    },
    menulink: {
      fontSize: 3,
      fontWeight: 600,
    },
    pagetitle: {
      // color: 'red.6',
      fontSize: 4,
      mb: 3,
      fontWeight: 300,
    },
    pageinfo: {
      color: 'gray.7',
      fontWeight: 300,
    },
    pagedesc: {
      fontSize: 1,
      mb: 4,
      color: 'gray.6',
    },
    pageheading: {
      fontSize: 1,
      mb: 2,
      color: 'gray.7',
      fontWeight: 400,
      mt: 2,
    },
    personName: {
      fontSize: 1,
      fontWeight: 'heading',
      mb: 0,
    },
    personBio: {
      fontSize: 1,
      mb: 0,
      fontWeight: 'body',
      color: 'gray.6',
    },
    personBlock: {
      color: 'gray.6',
      fontSize: 0,
      fontWeight: 'heading',
    },
    personPlace: {
      fontSize: 0,
      mt: 0,
      color: 'gray.5',
    },
  },
  buttons: {
    primary: {
      bg: 'red.4'
    },
    btnPrimaryIcon: {
      bg: 'gray.0',
      border: 'solid 1px',
      borderColor: 'gray.4',
      color: 'gray.8',
      borderRadius: 4,
      display: 'inline-flex',
      alignItems: 'stretch',
      pt: 2,
      pr: 3,
      pl: 2,
      '&:hover': {
        bg: 'gray.1',
        borderColor: 'gray.5',
      },
      // mt: -1,
      // color: 'gray.0',
      // pb: 0,
    },
    btnBig: {
      p: 1,
      px: 2,
      m: 0,
      border: 'solid 1px',
      borderRadius: 4,
      fontWeight: 'bold',
      fontSize: 0,
      fontFamily: 'inherit',
    },
    btnPrimary: {
      variant: 'buttons.btnBig',
      bg: 'teal.9',
      color: 'primary.9',
      borderColor: 'teal.8',
    },
    btnSecondary: {
      variant: 'buttons.btnBig',
      bg: 'gray.1',
      color: 'gray.9',
      borderColor: 'gray.4',
      '&:hover': {
        bg: 'gray.0',
        color: 'gray.8',
      },
    },
    btnAction: {
      variant: 'buttons.btnBig',
      bg: 'gray.8',
      color: 'gray.1',
      borderColor: 'gray.8',
      '&:hover': {
        bg: 'gray.9',
        color: 'gray.0',
      },
    },
    btnMain: {
      variant: 'buttons.btnSecondary',
    },
    btnSmall: {
      variant: 'buttons.btnSecondary',
      fontSize: 0,
      p: 1,
      px: 2,
    },
    btnPrimaryLarge: {
      variant: 'buttons.btnBig',
      fontSize: 1,
      p: 2,
      px: 3,
      border: 0,
    },
    btnPrimarySmall: {
      variant: 'buttons.btnPrimary',
      fontSize: 0,
      p: 1,
      px: 2,
    },
    base: {
      bg: 'transparent',
      color: 'gray.4',
    },
    button: {
      border: 'solid 1px',
      borderColor: 'gray.2',
      p: 1,
      mt: 3,
      lineHeight: 0,
      svg: { fill: 'text' },
      bg: 'gray.1',
    },
    secondary: {
      color: 'blue.9',
      bg: 'blue.2',
      fontFamily: 'body',
    },
    primary: {
      variant: 'button.btnPrimary',
    },
    delete: {
      color: 'text',
      bg: 'red.6',
      ml: 2,
    },
    tertiary: {
      color: 'blue.9',
      bg: 'blue.2',
    },
    small: {
      bg: 'blue.5',
      px: 3,
      py: 1,
      fontSize: 0,
    },
  },
};

export default theme;
