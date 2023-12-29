import NewsBoard from "./components/NewsBoard"
import Navbar from "./components/navbar"

const App=() =>{
  return(
    <div>
      <Navbar setcategory={setcategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App