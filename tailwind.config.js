/** @type {import('tailwindcss').Config} */
module.exports ={
  content: [
    "./src/**/*.{html,js,tsx}"
  ],
  // 將font寫入 tailwind config 的theme
  theme: {
    extend: {
      // 設立好 ide 也會呈現自動提示, font-notosans 
      // 樣式則會等於 font-family: 'Noto Sans TC'
      fontFamily: {
          "notosans": ['Noto Sans TC','sans-seif'],
          "montserrat": ['montserrat','sans-seif']
      },
      // 色彩可以透過 @apply primary 來帶入色彩
      // ide 也會有自動完成的服務
      colors:{
        primary: '#8C3ADD',
        'gray-500': '#1A1A1A'
      }
    },
  },
  plugins: [],
}