import alert from '../../globals/alert';
export default function (state, action) {
  switch (action.type) {
    case alert.SAVE_SUCCESS:
      return {
        message: 'Successfully saved repo!',
        type: 'success',
      };
    case alert.DELETE_SUCCESS:
      return {
        message: 'Successfully deleted repo details!',
        type: 'success',
      };
    case alert.SAVE_FAILURE:
      return {
        message: 'Could not save repo, Please try again!',
        type: 'failure',
      };
    case alert.DELETE_FAILURE:
      return {
        message: 'Could not delete, Please try again!',
        type: 'failure',
      };

    default:
      return '';
  }
}
