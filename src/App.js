import { Formik, Form, Field } from 'formik'
import './styles/header.css'

const App = () => {
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`,
              { headers: {
                'Authorization': 'Client-ID xhVtSm4YruJ-1iZT6DQRj-ANZbnspacbLQgrkewdg9g'
                }})
            const data = await response.json()
            console.log(data)
          }}
        >
          <Form>
            <Field name='search' />
          </Form>
        </Formik>
      </header>
    </div>
  )
}

export default App
