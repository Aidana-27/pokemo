import React, { useState } from 'react'
import Header from './component/Header'
import Home from './component/Home'

function App() {
   const[num,setNum]=useState(0)
  return (
   <>
   <Header num={num}/>
   <Home setNum={setNum}/>
   </>
  )
}

export default App

















// const App = () => {
//    const [isDark, setIsDark] = useState(false)
//    return (
//       <>
//          <Header setIsDark={setIsDark} isDark={isDark} />
//          <Home isDark={isDark} />
//       </>
//    )
// }

// export default App





{/* 
 {open && <div  className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
  <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
    <div className="w-full">
      <div className="m-8 my-20 max-w-[400px] mx-auto">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-extrabold">
            {signIn?"sign up":"sign in"}
          </h1>
          <p className="text-gray-600">Get the most out of Twitter by staying up to date with what's happening.</p>
        </div>
        <div className="space-y-4">
          <button className="p-3 bg-black rounded-full text-white w-full font-semibold">Allow notifications</button>
          <button onClick={()=>setOpen(false)}  className="p-3 bg-white border rounded-full w-full font-semibold">Skip for now</button>
        </div>
      </div>
    </div>
  </div>
</div> }
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</> */}