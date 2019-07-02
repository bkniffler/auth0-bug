import Link from 'next/link'
import auth0 from 'auth0-js'

export default () => (
  <div>
    Hello World.{' '}
    <Link href='/about'>
      <a>About</a>
    </Link>
  </div>
)
