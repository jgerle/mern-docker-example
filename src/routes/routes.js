import {
    home,
} from '../controllers/controllers.js';

const routes = (app) => {
    app.route('/')
        .get(home)
}
export default routes;