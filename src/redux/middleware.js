import { CREATE_POST } from "./types";
import { showAlert } from './actions';

const forbidden = ['pull', 'game', 'study', 'spam']

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action){
            if (action.type === CREATE_POST){
                const found = forbidden.filter(word => action.payload.title.includes(word))
                if (found.length) {
                    return dispatch(showAlert('Нельзя спамить'))
                }
            }
            return next(action)
        }
    }
}