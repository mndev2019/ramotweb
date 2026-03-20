// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
// })



import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// export default defineConfig({
//   plugins: [
//     react({
//       jsxImportSource: 'react',
//       plugins: [],         // ✅ disables refresh plugins
//     }),
//   ],
//   server: {
//     hmr: false,           // 🔥 FULLY DISABLE HMR (MAIN FIX)
//   },
// })


