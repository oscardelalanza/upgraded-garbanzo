import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import './styles/header.css'

const App = () => {
  const [photos, setPhotos] = useState([])

  console.log(photos)

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
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field name='search' />
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {photos.map(photo =>
          <article key={photo.id} onClick={() => open(photo.links.html)}>
            <img src={photo.urls.regular} alt=""/>
            <p>{[photo.description, photo.alt_description].join(' - ')}</p>
          </article>)}
        </div>
      </div>
    </div>
  )
}

export default App
