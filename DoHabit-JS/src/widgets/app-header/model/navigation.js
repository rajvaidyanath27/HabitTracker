import { FaBars, FaPlus } from 'react-icons/fa';
import { MdLibraryBooks } from 'react-icons/md';
import { getNavigationTarget } from '@shared/lib/router';
export const NAV_ITEMS = [{
  ...getNavigationTarget('HABIT_EDITOR', {
    modalTitle: 'Create new habit'
  }),
  icon: FaPlus
}, {
  ...getNavigationTarget('DIARY', {
    modalTitle: 'Main diary'
  }),
  icon: MdLibraryBooks
}, {
  ...getNavigationTarget('MENU', {
    modalTitle: 'Menu'
  }),
  icon: FaBars
}];
