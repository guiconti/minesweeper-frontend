import { NAVIGATE } from '../constants/navigateTypes';

export function navigate(payload) {
  return {
    type: NAVIGATE,
    payload,
  };
}