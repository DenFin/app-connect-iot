module.exports = {
  content: [
    './index.html',
    './node_modules/@kernpunkt/bega-component-library/dist/**/*.js',
    './src/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff9f0a',
        secondary: '#1E1E1E',
        current: 'currentColor',
      },
      lineHeight: {
        rem: '1rem', // 16px
        1: '1.3125rem', //  21px
        2: '1.5rem', //     24px
        3: '1.75rem', //    28px
        4: '1.90625rem', // 30,5px
        5: '2.125rem', //   34px
        6: '2.59375rem', // 41,5px
        7: '2.84375rem', // 45.5px
        8: '3rem', //       48px
        9: '3.3125rem', //  53px
        10: '3.625rem', //  58px
        11: '4.1875rem', // 67px
        12: '5.125rem', //  82px
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        initial: 'initial',
      },
      spacing: {
        0: '0',
        px: '1px',
        0.5: '3px',
        1: '6px',
        1.5: '9px',
        2: '12px',
        2.5: '15px',
        3: '18px',
        3.5: '21px',
        4: '24px',
        5: '30px',
        5.5: '33px',
        6: '36px',
        7: '42px',
        8: '48px',
        9: '54px',
        10: '60px',
        11: '66px',
        12: '72px',
        13: '78px',
        14: '84px',
        15: '90px',
        16: '96px',
        16.5: '99px',
        17: '102px',
        19: '114px',
        20: '120px',
        21: '126px',
        24: '144px',
        25: '150px',
        26: '156px',
        30: '180px',
        32: '192px',
        33: '198px',
        35: '210px',
        36: '216px',
        40: '240px',
        42: '252px',
        44: '264px',
        46: '276px',
        47: '282px',
        50: '300px',
        56: '336px',
        58: '348px',
        62: '372px',
        64: '384px',
        65: '390px',
        83: '498px',
        100: '600px',
        108: '648px',
        '1/2': '50%',
        '1/3': '33.3%',
        '1/5': '20%',
        '1.25rem': '1.25rem',
        '1.5vw': '1.5vw',
        '2vw': '2vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '6vw': '6vw',
      },
      minHeight: {
        12: '72px',
      },
    }
  }
}
