import FormStep1 from "./pages/FormStep1"
import { FormProvider } from "./pages/contexts/FormContext"
import { Outlet } from 'react-router'

const App = () => {
  return (
    <FormProvider>
      <FormStep1 />
      <Outlet />
    </FormProvider>
  )
}

export default App