
import { app } from './server'

const port = 3012 // default port to listen

// start the express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` )
} );