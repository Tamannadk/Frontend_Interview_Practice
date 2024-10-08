import { useState } from 'react'
import FileExplorer from './components/FileExplorer'
import data from './data.json'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FileExplorer folderData={data}/>
    </>
  )
}

export default App
