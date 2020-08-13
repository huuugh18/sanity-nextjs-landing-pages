import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'

const builder = imageUrlBuilder(client)

const Testimonial = ({ name, photo, quote }) => {
  return (
    <div>
      <div>
        <figure>
          <img
            src={builder.image(photo).auto('format').width(200).height(200).url()}
            alt={photo.alt}
          />
        </figure>
        <blockquote>
          {quote}
          {name && (
            <footer>
              <cite id='baseref'>{name}</cite>
            </footer>
          )}
        </blockquote>
      </div>
    </div>
  )
}

export default Testimonial
