import { useDrawerStore } from '@shared/ui';
import { extractUniqueTags } from '@shared/lib/text';
/**
 * Hook to open the note tags menu with dynamically calculated tags.
 */
function useNoteTags() {
  const openDrawer = useDrawerStore(s => s.open);
  const getActions = params => {
    const {
      notes,
      onSetTag
    } = params;
    const tags = extractUniqueTags(notes, {
      order: 'asc'
    });
    return tags.map(tag => ({
      label: tag,
      onClick: () => onSetTag(tag)
    }));
  };
  return {
    openNoteTagsMenu: params => {
      const actions = getActions(params);
      const placeholder = {
        content: {
          title: 'No tags found',
          description: 'To create a tag, simply add a hashtag (#) before any word while writing a note.'
        }
      };
      openDrawer({
        title: params.title,
        actions,
        // Display empty state placeholder if no tags are available in the selected period
        placeholder: actions.length === 0 ? placeholder : undefined
      });
    }
  };
}
export { useNoteTags };
