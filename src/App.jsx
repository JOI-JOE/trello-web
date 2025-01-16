import { useColorScheme } from '@mui/material/styles'
import { Button } from '@mui/material'

function ModeToggle() {
  const { mode, setMode } = useColorScheme()
  return (
    <Button
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light')
        // localStorage.setItem('trello-dark-ligh-mode')
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  )
}

function App() {
  return (
    <>
      <ModeToggle />
      <div>ngodanghau</div>
    </>
  )
}

export default App
